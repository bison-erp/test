import { handleContact } from "./contact.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
