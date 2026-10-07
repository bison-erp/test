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

## À savoir

- Le formulaire **Contact / Newsletter n'envoie rien** : il affiche un message de succès
  sans transmettre la demande. À brancher sur un vrai service avant de compter dessus.
- Les URL canoniques et le sitemap pointent vers `https://acropolis-real-estate.com`
  (sans `www`). `www` doit rediriger vers cette version.
