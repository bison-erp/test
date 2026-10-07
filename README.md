# Acropolis Real Estate — site statique (Cloudflare Pages)

Site exporté depuis Manus, prêt pour Cloudflare Pages. Il n'y a **aucune étape de build** :
le dossier `public/` est le site final (28 pages EN/FR, images, polices, CSS/JS,
`404.html`, `robots.txt`, `sitemap.xml`, `_headers`).

## Réglages Cloudflare Pages (Connect to Git)

| Réglage                  | Valeur                       |
|--------------------------|------------------------------|
| Framework preset         | `None`                       |
| Build command            | *(laisser vide)*             |
| Build output directory   | `public`                     |
| Root directory           | *(laisser vide)*             |

Chaque `git push` sur la branche de production redéploie le site automatiquement.

## Contrôles après déploiement

`/`, `/fr`, `/about`, `/fr/about`, `/real-estate-paris`, `/fr/real-estate-paris`,
`/manus-storage/acropolis-logo-gold_47dc0308.webp`, `/robots.txt`, `/sitemap.xml`,
et une URL inexistante (doit afficher la page 404 du site).

## Formulaire de contact (Resend)

Le formulaire envoie les demandes à `POST /api/contact` (`functions/api/contact.js`),
qui les transmet par e-mail via [Resend](https://resend.com). Variables à définir dans
**Pages → Settings → Variables and Secrets** (Production) :

| Nom              | Type   | Exemple                                                        |
|------------------|--------|----------------------------------------------------------------|
| `RESEND_API_KEY` | Secret | `re_xxxxxxxx`                                                  |
| `CONTACT_TO`     | Texte  | `contact@acropolis-real-estate.com` (plusieurs : séparés par `,`) |
| `CONTACT_FROM`   | Texte  | `Acropolis Real Estate <contact@acropolis-real-estate.com>`    |

`CONTACT_FROM` doit utiliser un domaine vérifié dans Resend. Le bouton « Répondre » de
l'e-mail reçu répond directement au visiteur. Après avoir modifié une variable, il faut
redéployer (Deployments → Retry deployment).

## À savoir

- Les URL canoniques et le sitemap pointent vers `https://acropolis-real-estate.com`
  (sans `www`). `www` doit rediriger vers cette version.
