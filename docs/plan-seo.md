# Plan SEO — acropolis-real-estate.com

Mesure : suivi Zerkado (google.fr). Point de départ : aucun mot-clé dans le top 30.
L'analyse concurrentielle est une approximation (l'outil de recherche est basé aux États-Unis,
donc pas de vraie page de résultats google.fr).

## Difficulté par groupe de mots-clés

| Groupe | Difficulté | Qui se positionne | Ce qu'il faut pour passer devant |
|---|---|---|---|
| immobilier de prestige / luxury real estate | Très difficile | Belles Demeures, Figaro Propriétés, Barnes, Sotheby's, Féau | Terme secondaire de la home ; viser 12–24 mois |
| immobilier de prestige paris / agence immobilière luxe paris | Difficile | Barnes, Junot, Kretz, monchasseurimmo (≈1 800 mots, H3 par quartier) | Guide ≈2 000 mots : prix au m² par arrondissement, tableau, FAQ 8 questions |
| chasseur immobilier luxe paris / recherche propriété de luxe paris | Moyen | homeselect.paris (≈1 400 mots, FAQ 9 questions, honoraires publiés, avis) | 1 500–2 000 mots, honoraires, processus, cas clients, FAQ 10 questions, angle international |
| achat / expert immobilier off market paris | Moyen | homeselect.paris (4 URL), Boursorama | Page dédiée ≈1 500 mots : canaux, cadre juridique (loi Hoguet), cas client, FAQ |
| villa prestige côte d'azur off market / chasseur côte d'azur | Facile à moyen | Surtout des sites anglophones, contenu pauvre | ≈1 800 mots en français, un bloc par micro-marché (Cap Ferrat, Antibes, Cannes, Saint-Tropez) |
| golden visa grèce | Moyen | zunapro (guide de 8–9 000 mots, 5 tableaux, FAQ 15 questions) | ≥2 500 mots, tableau des seuils, FAQ 12 questions, « 2026 » dans le title. Seuils à faire valider par un avocat |
| investissement hôtelier grèce | Facile | Uniquement la presse | Page service de 1 500–2 000 mots ; top 5 réaliste en 3–6 mois |
| acheter villa mykonos | Facile à moyen | Annonces Von Poll | Guide ≈2 000 mots |
| chasseur / immobilier de luxe luxembourg | Facile (longue traîne) | Property Hunter, Barnes Lux | Page Luxembourg orientée non-résidents |
| investissement prestige immobilier europe | Faible volume | Résultats datés (2018–2019) | Comparatif 2026 |

## Un mot-clé principal par page (FR et EN strictement séparés)

| Page | FR (/fr/…) | EN (/) |
|---|---|---|
| home | immobilier de prestige | luxury real estate buyer's agent Europe |
| residential-offices | investissement immobilier de prestige en Europe | luxury property investment Europe |
| real-estate-paris | chasseur immobilier luxe paris (+ recherche propriété de luxe paris) | Paris luxury property finder |
| NOUVELLE achat off-market Paris | achat immobilier off market paris | off-market property Paris |
| blog : guide pilier Paris | immobilier de prestige paris | luxury real estate Paris guide |
| real-estate-french-riviera | chasseur immobilier côte d'azur / villa prestige off market | French Riviera buyer's agent |
| real-estate-luxembourg | chasseur immobilier luxembourg | Luxembourg property finder |
| golden-visa-greece | golden visa grèce | Greece golden visa real estate |
| residency-visas | visa de résidence par l'investissement | residency by investment Europe |
| hotel-investment-greece | investissement hôtelier grèce | hotel investment Greece |
| hotels-resorts | acheter un hôtel en Grèce | boutique hotels for sale Greece |

« agence immobilière luxe paris » n'a pas de page dédiée : ce sera un H2 de comparaison
chasseur / agence sur la page Paris.

## Blog (10 articles FR + EN, liés par hreflang)

1. Off-market à Paris : accéder aux biens jamais publiés → page off-market
2. Chasseur immobilier ou agence de luxe à Paris ? → real-estate-paris
3. Honoraires d'un chasseur immobilier de luxe → real-estate-paris
4. Immobilier de prestige à Paris : quartiers et prix 2026 (article pilier) → real-estate-paris
5. Villas off-market sur la Côte d'Azur → real-estate-french-riviera
6. Golden Visa Grèce 2026 : seuils et zones → golden-visa-greece
7. Acheter une villa à Mykonos → golden-visa-greece, residential-offices
8. Investir dans un hôtel en Grèce → hotel-investment-greece
9. Acheter au Luxembourg en non-résident → real-estate-luxembourg
10. Où investir dans l'immobilier de prestige en Europe en 2026 → home, residential-offices

## Problèmes techniques relevés (audit du build actuel)

- Le title du HTML pré-rendu est différent de celui affiché par le JS.
- H1 sans mot-clé ; metas de 75 à 115 caractères ; 350 à 500 mots par page.
- Un seul lien sur environ 28 porte un attribut `title` ; les pages légales n'ont aucun lien interne.
- Points corrects : hreflang FR/EN réciproques et canonicals.
