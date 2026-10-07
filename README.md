# Acropolis Real Estate — Cloudflare Worker (assets statiques)

Site exporté depuis Manus, déployé comme Worker Cloudflare avec assets statiques
(`wrangler.jsonc`). Il n'y a **aucune étape de build** : le dossier `public/` est le site final (28 pages EN/FR, images, polices, CSS/JS,
`404.html`, `robots.txt`, `sitemap.xml`, `_headers`).

## Réglages du Worker (Workers Builds, Git)

| Réglage                | Valeur                |
|------------------------|-----------------------|
| Commande de build      | *(vide)*              |
| Commande de déploiement| `npx wrangler deploy` |
| Répertoire racine      | `/`                   |

Chaque `git push` sur la branche suivie redéploie le site automatiquement.
`src/worker.js` traite `/api/contact` et laisse tout le reste aux fichiers de `public/`.

## Contrôles après déploiement

`/`, `/fr`, `/about`, `/fr/about`, `/real-estate-paris`, `/fr/real-estate-paris`,
`/manus-storage/acropolis-logo-gold_47dc0308.webp`, `/robots.txt`, `/sitemap.xml`,
et une URL inexistante (doit afficher la page 404 du site).

## Formulaire de contact (Resend)

Le formulaire envoie les demandes à `POST /api/contact` (`src/contact.js`),
qui les transmet par e-mail via [Resend](https://resend.com). Variables à définir dans
**Worker → Paramètres → Variables et secrets** (Production) :

| Nom              | Type   | Exemple                                                        |
|------------------|--------|----------------------------------------------------------------|
| `RESEND_API_KEY` | Secret | `re_xxxxxxxx`                                                  |
| `CONTACT_TO`     | Texte  | `contact@acropolis-real-estate.com` (plusieurs : séparés par `,`) |
| `CONTACT_FROM`   | Texte  | `Acropolis Real Estate <contact@acropolis-real-estate.com>`    |

`CONTACT_FROM` doit utiliser un domaine vérifié dans Resend. Le bouton « Répondre » de
l'e-mail reçu répond directement au visiteur. `keep_vars` est activé : les variables saisies
dans le tableau de bord sont conservées à chaque déploiement.

## À savoir

- Les URL canoniques et le sitemap pointent vers `https://acropolis-real-estate.com`
  (sans `www`). `www` doit rediriger vers cette version.
