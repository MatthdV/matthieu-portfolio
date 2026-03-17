# PRD v2 — Portfolio Matthieu de Villele — Marker Edition

## Vision
Site portfolio avec une identité visuelle forte "Heavy Chisel Marker" — noir/blanc dominant, accents de couleur, texture grain, layout asymétrique. Le site doit ressembler à un zine punk-tech, pas à un template générique.

## Identité visuelle

### Palette
- Fond : `#0a0a0a` (noir profond)
- Texte : `#f5f5f0` (blanc cassé / papier)
- Accent principal : `#1A65FF` (bleu marker)
- Accent secondaire : `#FFCD2E` (jaune marker)
- Accent tertiaire : `#FE342C` (rouge marker)
- Gris : `#888888` (texte secondaire)

### Typographie
- Headings : **Space Grotesk** (700, bold, letter-spacing: -2px)
- Body : **Space Grotesk** (400)
- Code/labels/stats : **JetBrains Mono** (monospace)
- Pas d'Inter, pas de Geist, pas de system fonts

### Textures et effets
- Grain/noise SVG overlay sur tout le body (opacity 0.04)
- Marker underlines : bandes de couleur skewées sous les mots-clés importants
- Marker circles : cercles dessinés à la main autour des chiffres importants
- Hover sur les boutons : translate(-2px, -2px) + box-shadow 4px 4px couleur
- Pas d'ombres douces, pas de gradients lisses — tout doit être brut et graphique

### Illustrations
Le dossier `public/images/` contient des illustrations marker custom (PNG) :
- `hero-illustration.png` — Illustration principale (homme + robot + laptop)
- `icon-agents.png` — Icône robot (service agents IA)
- `icon-automation.png` — Icône éclair + engrenage (service automation)
- `icon-audit.png` — Icône loupe + graphique (service audit)
- `icon-retainer.png` — Icône poignée de main (service retainer)
- `icon-newsletter.png` — Icône enveloppe + cerveau (newsletter)

**IMPORTANT : Utiliser ces images PNG via next/image. ZÉRO emoji dans tout le site.**

## Stack technique
- **Framework** : Next.js 14+ (App Router)
- **Styling** : Tailwind CSS
- **Fonts** : Google Fonts (Space Grotesk + JetBrains Mono)
- **Animations** : framer-motion (LazyMotion + domAnimation pour tree-shaking)
- **i18n** : next-intl (FR, EN, ES)
- **Images** : next/image avec illustrations marker PNG
- **Déploiement** : Vercel

## Structure des pages

### 1. Page d'accueil (`/[locale]`)

**Hero section** — Layout asymétrique (grille 2 colonnes) :
- Colonne gauche :
  - Tag mono : "// disponible pour missions" avec trait bleu devant
  - H1 massif (clamp 3rem-5.5rem) : "J'automatise vos process." + ligne 2 avec highlight marker jaune : "L'IA fait le reste."
  - Description grise (max-width 500px)
  - 3 stats en mono bold : "40+" / "150+" / "3" avec labels
  - 2 CTAs : bouton bleu primary (hover: shadow jaune) + bouton ghost
- Colonne droite :
  - Illustration marker PNG (hero-illustration.png)
  - Blobs décoratifs (blur bleu opacity 0.06)
  - Traits marker décoratifs (bandes bleue/jaune positionnées en absolute)

**Section "Ce que je fais"** — Bento grid (3 colonnes) :
- Label mono : "01 — Services"
- Titre avec marker underline rouge : "Ce que je fais pour votre business"
- 4 cartes bento :
  - Carte "featured" (span 2 colonnes) : Agents IA — icon-agents.png, description, prix "À partir de 5k€"
  - Carte : Automation — icon-automation.png, prix "2k€ / workflow"
  - Carte : Audit IA gratuit — icon-audit.png, prix "Gratuit" en bleu
  - Carte : Retainer mensuel — icon-retainer.png, prix "1.5k€ / mois"
- Chaque carte : border subtle, hover → border bleu + translateY(-4px)
- Prix en jaune, JetBrains Mono

**Section "Projets"** — Liste horizontale style terminal :
- Label mono : "02 — Projets"
- Titre avec marker circle jaune : "Pas des POC. Du prod."
- 7 lignes de projet : numéro mono | nom bold | tags mono petits | flèche →
- Hover : fond bleu subtle + flèche bleue qui translate
- Projets :
  1. HYPR AI Performance Review — OpenAI, n8n, LiteLLM
  2. n8n Enterprise Workflows — n8n, Jira, Slack
  3. Kindly Reminder — Apps Script, Gmail
  4. CapLabour Capacity Planning — BigQuery, Sheets
  5. BigPicture Initiative Tracker — Jira, Confluence
  6. Jira Automation Rules — Jira Cloud, 18 rules
  7. Automation Catalogue — Registry, Apps Script
- Lien "Voir tout sur GitHub →"

**PAS de section témoignages** — on ne veut pas de faux avis.

**Section Newsletter** :
- Label mono : "03 — Newsletter"
- Titre centré : "Veille IA hebdo. Zéro bullshit."
- Sous-titre gris
- Formulaire : input mono + bouton bleu collé (pas de gap)
- Illustration icon-newsletter.png optionnelle

### 2. Page Projets (`/[locale]/projets`)
- Titre + description
- Pour chaque projet : nom, description détaillée, problème résolu, stack, résultats chiffrés, lien GitHub
- Layout : cartes larges, une par projet, avec tags tech

### 3. Page Services (`/[locale]/services`)
- 4 cartes de service avec pricing
- Illustrations marker pour chaque service
- CTA vers contact/Calendly

### 4. Page Blog (`/[locale]/blog`)
- Liste d'articles avec titre, date, résumé, tags
- Layout épuré, mono pour les dates

### 5. Page Contact (`/[locale]/contact`)
- Grille 2 colonnes :
  - Gauche : formulaire (nom, email, budget select, message textarea)
  - Droite : liens de contact (email, LinkedIn, Calendly, GitHub) avec icônes et hover translate
- Style des inputs : fond sombre, border subtle, focus border bleu

## Composants

- [ ] Navbar : logo "matthieu." (point bleu), nav links uppercase mono, sélecteur langue FR/EN/ES, dark/light toggle
- [ ] Footer : copyright + liens sociaux, minimal
- [ ] Bouton primary : fond bleu, hover translate + box-shadow jaune
- [ ] Bouton ghost : border subtle, hover border blanc
- [ ] Bento card : border subtle, hover border bleu + lift
- [ ] Project row : grille 4 colonnes (numéro, nom, tags, flèche)
- [ ] Section label : mono uppercase + trait bleu
- [ ] Marker underline : span avec ::after skewed color bar
- [ ] Marker circle : span avec ::after circle border
- [ ] Grain overlay : SVG noise filter sur body::after, fixed, pointer-events none
- [ ] FadeIn wrapper : LazyMotion + domAnimation (framer-motion tree-shaked)

## SEO
- Méta titles et descriptions uniques par page, par langue
- Schema.org : Person, Service
- Sitemap.xml multilingue
- OpenGraph et Twitter cards
- Sitemap couvre /fr, /en, /es

## i18n
- next-intl configuré avec /fr, /en, /es
- Fichiers messages/fr.json, messages/en.json, messages/es.json
- NextIntlClientProvider dans le layout locale
- Navigation localisée via @/i18n/navigation
- Composants client reçoivent les traductions en PROPS (pas useTranslations dans les client components)

## Tâches (ordre de priorité)

### Phase 1 : Reset et fondations
- [x] Supprimer l'ancien design (garder la structure i18n et les fichiers de traduction)
- [x] Configurer les fonts Space Grotesk + JetBrains Mono
- [x] Mettre à jour les couleurs Tailwind (palette marker)
- [x] Ajouter le grain overlay CSS sur le body
- [x] Créer le composant Navbar v2 (logo, nav mono, sélecteur langue)
- [x] Créer le composant Footer v2 (minimal)

### Phase 2 : Page d'accueil
- [x] Hero section asymétrique avec stats et CTAs
- [x] Intégrer hero-illustration.png (ou placeholder si absent)
- [x] Créer les composants marker-underline et marker-circle
- [x] Section services en bento grid avec illustrations marker
- [x] Section projets en liste horizontale style terminal
- [ ] Section newsletter avec formulaire inline

### Phase 3 : Pages secondaires
- [ ] Page /projets avec détails de chaque projet
- [ ] Page /services avec cartes et pricing
- [ ] Page /blog avec liste articles
- [ ] Page /contact avec formulaire + liens

### Phase 4 : Polish
- [ ] Animations FadeIn sur toutes les sections
- [ ] Responsive mobile (hero single column, bento stack, projets simplifié)
- [ ] Mettre à jour les fichiers de traduction FR/EN/ES
- [ ] SEO metadata par page et par langue
- [ ] Sitemap multilingue + robots.txt
- [ ] OpenGraph images
- [ ] Performance : fonts display swap, LazyMotion, image optimization
- [ ] Préparer le déploiement Vercel
