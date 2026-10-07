# Acropolis Real Estate — acropolis-real-estate.com

Site React/Vite (FR/EN) pré-rendu en HTML statique, servi par un Worker Cloudflare
avec assets statiques. Source d'origine : export Manus, désormais maintenu ici.

## Structure

| Dossier | Contenu |
|---|---|
| `client/` | Application React (pages, composants, traductions FR dans `client/src/translations/`) |
| `shared/` | Constantes (coordonnées, navigation, images) |
| `scripts/prerender.ts` | Pré-rendu HTML de chaque route (title, meta, canonical, hreflang) |
| `scripts/prepare-cloudflare.ts` | Copie des médias, `sitemap.xml`, `robots.txt`, `_headers` |
| `media/` | Images (`manus-storage/`) et polices locales |
| `worker/` | Worker Cloudflare : `/api/contact` (envoi via Resend) ; tout le reste = fichiers statiques |
| `docs/` | Plan SEO, profil de Nicolas Milonas, documents originaux du client |

## Commandes

```bash
pnpm install
pnpm dev            # développement local (http://localhost:3000)
pnpm check          # vérification TypeScript
pnpm build          # génère dist/public (site complet pré-rendu)
pnpm preview        # build + Worker local (wrangler dev)
```

## Déploiement

Workers Builds (Cloudflare) exécute `npx wrangler deploy` à chaque push sur la branche
suivie. `wrangler.jsonc` lance d'abord le build (`pnpm install && pnpm run build`), puis
publie `dist/public`.

## Formulaire de contact (Resend)

Variables du Worker (**Paramètres → Variables et secrets**) :

| Nom | Type | Valeur |
|---|---|---|
| `RESEND_API_KEY` | Secret | clé `re_...` |
| `CONTACT_TO` | Texte | adresse(s) de réception, séparées par `,` |

`CONTACT_FROM` est défini dans `wrangler.jsonc` (domaine vérifié dans Resend).
`keep_vars` conserve les variables du tableau de bord à chaque déploiement.
Pour tester en local : créer `.dev.vars` avec ces variables (fichier ignoré par git).
