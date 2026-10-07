// POST /api/contact
// Sends the contact form by email through Resend (https://resend.com).
// Required environment variables (Worker > Settings > Variables and Secrets):
//   RESEND_API_KEY  secret, the Resend API key (re_...)
//   CONTACT_TO      address that receives the requests (comma-separated for several)
//   CONTACT_FROM    sender on the verified domain, e.g. "Acropolis Real Estate <contact@acropolis-real-estate.com>"

const LIMITS = { fullName: 120, phone: 40, email: 200, preferredLocation: 80, message: 5000 };

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function handleContact(request, env) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return json({ ok: false, error: "not_configured" }, 500);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // Honeypot filled in: pretend success, send nothing.
  if (data.website_honeypot) return json({ ok: true });

  const f = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    f[key] = typeof data[key] === "string" ? data[key].trim().slice(0, max) : "";
  }
  const lang = data.lang === "fr" ? "fr" : "en";

  if (f.fullName.length < 2 || f.phone.length < 6 || f.message.length < 10 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  const rows = [
    ["Nom", f.fullName],
    ["E-mail", f.email],
    ["Téléphone", f.phone],
    ["Destination souhaitée", f.preferredLocation],
    ["Langue du site", lang.toUpperCase()],
  ];
  const html =
    `<h2>Nouvelle demande depuis acropolis-real-estate.com</h2>` +
    `<table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>` +
    `<p><b>Message :</b></p><p style="white-space:pre-wrap">${escapeHtml(f.message)}</p>`;
  const text =
    rows.map(([k, v]) => `${k} : ${v}`).join("\n") + `\n\nMessage :\n${f.message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: f.email,
      subject: `Demande de contact — ${f.fullName} (${f.preferredLocation || "—"})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ ok: false, error: "send_failed" }, 502);
  }
  return json({ ok: true });
}
