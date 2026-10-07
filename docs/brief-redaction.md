# Brief de rédaction : acropolis-real-estate.com

À lire en entier avant d'écrire. Voir aussi `docs/plan-seo.md` (mots-clés et concurrents)
et `docs/profil-nicolas-milonas.md` (faits vérifiés sur le fondateur).

## Le client

Acropolis Real Estate est un **chasseur immobilier indépendant (agent de l'acheteur)** pour une
clientèle internationale fortunée. Il ne vend pas de biens en mandat vendeur : il cherche,
négocie et sécurise l'achat **pour le compte de l'acquéreur**.
- Zones : Paris (et Île-de-France), Côte d'Azur, Luxembourg, Grèce (Athènes, Mykonos, Santorin, Crète).
- Types de biens : résidences de prestige, bureaux prime, hôtels et resorts.
- Bureaux : 231 rue Saint-Honoré, 75001 Paris ; 54 rue Charles Darwin, L-1433 Luxembourg (sur rendez-vous).
- Téléphone : +33 7 68 39 96 13. **N'écris jamais d'adresse e-mail dans le texte** (elle est affichée en image sur le site).
- Fondateur : Nicolas Milonas. Utilise uniquement les faits de `docs/profil-nicolas-milonas.md`.

## Décisions validées (à respecter partout)

- **Honoraires** : « à partir de 2 % TTC du prix d'acquisition », avec un forfait minimum sur devis.
  En anglais : « from 2% of the purchase price (VAT included) ». Ne donne pas d'autre chiffre d'honoraires.
- **Golden Visa Grèce** : seuils de 800 000 € (Attique, Thessalonique, Mykonos, Santorin et îles de plus
  de 3 100 habitants), **400 000 €** dans le reste du pays, et 250 000 € pour la conversion de locaux
  commerciaux en logements ou la restauration de bâtiments classés. Un seul bien d'au moins 120 m²
  dans le cas général. Ajoute une phrase invitant à faire confirmer sa situation par un avocat grec.
- Les **prix immobiliers** s'écrivent en fourchettes ou en « à partir de », avec leur source quand
  elle existe (Notaires du Grand Paris, Statec / Observatoire de l'Habitat au Luxembourg, Banque de
  Grèce, etc.). Utilise WebSearch pour vérifier les ordres de grandeur. Si tu n'es pas sûr, reste
  prudent (« environ », « généralement », « selon les quartiers »).

## Interdits (risque juridique et risque E-E-A-T)

- Aucun témoignage, avis, note, nombre de transactions, montant total traité, récompense ou client cité.
- Aucune « étude de cas » présentée comme réelle. Tu peux décrire **un déroulé type de mission**,
  présenté comme tel.
- Aucune promesse de rendement garanti ni de délai garanti.
- Pas de superlatifs creux (« le meilleur », « n°1 »). Ton : sobre, expert, haut de gamme, concret.
- FR : le français et les guillemets « » ; pas d'anglicismes inutiles (« off-market » est accepté).
  EN : British English (neighbourhood, specialise).

## Format des fichiers

Markdown avec en-tête (frontmatter). Une ligne `clé: valeur`, sans guillemets ni retour à la ligne
dans une valeur.

### Page (client/src/content/pages/<clé>.<fr|en>.md)

```
---
title: (50-60 caractères, mot-clé principal au début, marque à la fin si la place le permet)
description: (140-160 caractères, mot-clé + bénéfice + incitation)
h1: (contient le mot-clé principal, formulation naturelle)
eyebrow: (2-4 mots au-dessus du H1)
intro: (1-2 phrases sous le H1)
breadcrumb: (libellé court pour le fil d'Ariane et les liens)
linkTitle: (texte de l'attribut title des liens qui pointent vers cette page)
image: (une image existante, voir la liste plus bas)
imageAlt: (description de l'image avec le mot-clé si c'est naturel)
related: (2-4 chemins anglais séparés par des virgules, ex. /off-market-paris, /blog)
ctaTitle: (titre du bloc d'appel à l'action final)
ctaText: (1 phrase)
---
Corps en Markdown…
```

### Article (client/src/content/blog/<id>.<fr|en>.md)

```
---
slug: (slug imposé, voir le tableau)
title: (50-60 caractères)
description: (140-160 caractères)
h1: (titre de l'article)
excerpt: (chapô de 1-2 phrases)
category: (Paris | Côte d'Azur | Luxembourg | Grèce | Europe ; EN : Paris | French Riviera | Luxembourg | Greece | Europe)
date: (imposée, voir le tableau)
pillar: (clé de la page principale à renforcer, voir le tableau)
cover: /blog-images/<id>.jpg
coverAlt: (laisser « à compléter », l'agent images s'en charge)
breadcrumb: (titre court)
---
Corps…
```

### Syntaxe autorisée dans le corps

- `## Titre H2` et `### Titre H3` (jamais de `#` simple : le H1 vient de l'en-tête).
- Paragraphes, listes `- …` ou `1. …`, tableaux `| a | b |` avec une ligne `|---|---|`, citations `> …`.
- `**gras**`, `*italique*`.
- Liens : `[ancre optimisée](/chemin "Texte du title")`. **Chaque lien a un title explicite.**
  Les chemins internes s'écrivent **en version anglaise** (ex. `/real-estate-paris`) : le site ajoute
  `/fr` automatiquement sur les pages françaises. **Exception : les articles de blog**, dont les slugs
  diffèrent selon la langue. Depuis un fichier FR, écris `/fr/blog/<slug-fr>` ; depuis un fichier EN,
  `/blog/<slug-en>`.
- FAQ : un bloc
  ```
  :::faq
  ### Question 1 ?
  Réponse en 1 à 3 paragraphes.
  ### Question 2 ?
  Réponse…
  :::
  ```
  Le site ajoute le titre « Questions fréquentes » et les données structurées FAQPage. Place la FAQ à la fin.

## Règles SEO

- **Un mot-clé principal par page**, présent dans le title, le H1, l'intro, au moins un H2 et la
  première phrase du corps, puis des variantes naturelles (pas de bourrage).
- **FR et EN sont strictement séparés** : jamais de mot-clé français dans un fichier EN, ni l'inverse.
  Le texte EN n'est pas une traduction littérale. Il vise les requêtes anglaises équivalentes, avec
  la même structure et les mêmes informations.
- Pages principales : **1 500 à 2 000 mots**, 6 à 9 H2, un tableau quand c'est utile, une FAQ de 8 à 10 questions.
- Articles : **1 400 à 1 900 mots**, une FAQ de 4 à 6 questions.
- **Maillage interne** : pages principales, 6 à 10 liens internes ; articles, 4 à 8. Toujours au
  moins un lien vers la page principale du cluster (« pillar ») avec l'ancre du mot-clé de cette
  page, et 1 lien vers `/contact-newsletter`. Les ancres sont descriptives et variées (jamais
  « cliquez ici »).
- Pas de cannibalisation : n'utilise pas le mot-clé principal d'une autre page comme H1 ou title.
  Cite-le seulement dans un lien vers cette page.

## Carte des pages (mot-clé principal)

| Clé | Chemin EN | Mot-clé FR | Mot-clé EN |
|---|---|---|---|
| home | / | immobilier de prestige | luxury real estate buyer's agent Europe |
| paris | /real-estate-paris | chasseur immobilier luxe paris (+ recherche propriété de luxe paris ; un H2 « chasseur ou agence immobilière de luxe à Paris ») | Paris luxury property finder / buyer's agent Paris |
| offMarketParis | /off-market-paris | achat immobilier off market paris (+ expert off market paris) | off-market property Paris |
| riviera | /real-estate-french-riviera | chasseur immobilier côte d'azur (+ villa prestige côte d'azur off market) | French Riviera buyer's agent / off-market villas |
| luxembourg | /real-estate-luxembourg | chasseur immobilier luxembourg (+ immobilier de luxe luxembourg) | Luxembourg property finder |
| goldenVisa | /golden-visa-greece | golden visa grèce | Greece golden visa real estate |
| hotelInvestment | /hotel-investment-greece | investissement hôtelier grèce | hotel investment Greece |
| residentialOffices | /residential-offices | investissement immobilier de prestige en Europe | luxury property investment Europe |
| hotelsResorts | /hotels-resorts | acheter un hôtel en Grèce | boutique hotels for sale Greece |
| residencyVisas | /residency-visas | visa de résidence par l'investissement | residency by investment Europe |
| about | /about | (marque, Nicolas Milonas) | (brand) |
| contact | /contact-newsletter | (contact) | (contact) |
| blog | /blog | blog immobilier de prestige | luxury real estate blog |

## Articles du blog (slugs et dates imposés)

| id | pillar | date | slug FR | slug EN | Mot-clé FR | Mot-clé EN |
|---|---|---|---|---|---|---|
| off-market-paris | offMarketParis | 2026-10-06 | off-market-paris-acceder-biens-jamais-publies | off-market-property-paris-guide | off market immobilier paris | off-market property Paris |
| chasseur-vs-agence | paris | 2026-10-02 | chasseur-immobilier-ou-agence-de-luxe-paris | buyers-agent-vs-luxury-estate-agency-paris | chasseur immobilier ou agence immobilière de luxe | buyer's agent vs estate agent Paris |
| honoraires-chasseur | paris | 2026-09-29 | honoraires-chasseur-immobilier-luxe | luxury-property-finder-fees-france | honoraires chasseur immobilier luxe | property finder fees France |
| prestige-paris-quartiers | paris | 2026-09-25 | immobilier-de-prestige-paris-quartiers-prix | paris-prime-real-estate-neighbourhoods-prices | immobilier de prestige paris (article pilier : quartiers et prix 2026) | luxury real estate Paris neighbourhoods |
| villas-cote-azur | riviera | 2026-09-22 | villas-off-market-cote-d-azur | off-market-villas-french-riviera | villa off market côte d'azur | off-market villas French Riviera |
| golden-visa-2026 | goldenVisa | 2026-09-18 | golden-visa-grece-2026-seuils | greece-golden-visa-2026-thresholds | golden visa grèce 2026 seuil | Greece golden visa 2026 thresholds |
| villa-mykonos | goldenVisa | 2026-09-15 | acheter-villa-mykonos | buying-villa-mykonos | acheter villa mykonos | buy villa Mykonos |
| hotel-grece | hotelInvestment | 2026-09-11 | investir-hotel-grece | investing-hotel-greece | investir dans un hôtel en Grèce | invest in a hotel in Greece |
| luxembourg-non-resident | luxembourg | 2026-09-08 | acheter-immobilier-luxembourg-non-resident | buying-property-luxembourg-non-resident | acheter immobilier luxembourg non résident | buying property Luxembourg non-resident |
| europe-2026 | residentialOffices | 2026-09-04 | ou-investir-immobilier-prestige-europe-2026 | where-to-invest-luxury-real-estate-europe-2026 | investissement prestige immobilier europe | where to invest luxury real estate Europe |

Les liens vers ces articles sont autorisés même si le fichier n'existe pas encore : ils seront
validés quand tout sera rédigé.

## Images existantes (pour `image:` des pages)

/manus-storage/hero-paris-skyline_a38001bc.jpg, /manus-storage/paris-haussmann-interior_3267b577.jpg,
/manus-storage/paris-apartment-elegant_b300e5f3.jpg, /manus-storage/paris-luxury-office_7606a8c0.jpg,
/manus-storage/rue-saint-honore_1d8fcfce.jpg, /manus-storage/faubourg-saint-honore_ab5c5ede.jpg,
/manus-storage/riviera-villa-sea_e8e8445f.jpg, /manus-storage/riviera-coastline_b9b15ce7.jpg,
/manus-storage/riviera-villa-pool_e924dd0b.jpg, /manus-storage/luxembourg-skyline_0aa0e17b.jpg,
/manus-storage/luxembourg-city_c899f4d3.jpg, /manus-storage/santorini-hotel_ad07fe11.jpg,
/manus-storage/santorini-resort_f7f16956.jpg, /manus-storage/athens-acropolis_2fd91f17.webp,
/manus-storage/mykonos-villa_610cfc68.jpg, /manus-storage/mykonos-villa-sunset_14223465.jpg,
/manus-storage/athens-boutique-hotel_d0de669f.webp, /manus-storage/greece-luxury-villa_4f03bbf7.jpg,
/manus-storage/luxury-office-modern_d05e4198.jpg, /manus-storage/team-meeting_9593eda9.jpg

## Vérification

Lance `pnpm check:content` (depuis /home/user/test) après avoir écrit tes fichiers et corrige
toutes les erreurs qui concernent **tes** fichiers. Ignore les liens vers des articles du tableau
qui n'existent pas encore. Ne lance pas `pnpm build` et ne modifie aucun fichier que tu n'as pas créé.
