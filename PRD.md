# PRD — Site Web Portfolio Matthieu de Villele

## Vision
Site web personnel moderne, rapide et SEO-optimisé pour positionner Matthieu de Villele comme expert freelance en Automation & AI Engineering. Le site sert de vitrine pour attirer des leads et convertir des visiteurs en clients.

## Stack technique
- **Framework** : Next.js 14+ (App Router)
- **Styling** : Tailwind CSS
- **Déploiement** : Vercel (gratuit)
- **Langue** : Français (avec option EN plus tard)
- **Analytics** : Vercel Analytics

## Pages

### 1. Page d'accueil (`/`)
- Hero section avec titre accrocheur et CTA
  - Titre : "Automatisez vos process. Accélérez avec l'IA."
  - Sous-titre : "Senior Automation & AI Engineer — 40+ workflows en production"
  - CTA principal : "Réserver un audit IA gratuit" → lien Calendly
  - CTA secondaire : "Voir mes projets" → scroll vers projets
- Section "Ce que je fais" (3 cartes) :
  - 🤖 Agents IA sur-mesure
  - ⚡ Automation de process (n8n, Apps Script)
  - 📊 Audit & conseil IA
- Section "Projets" : grille de 4-6 projets avec image, titre, description, tags tech, lien GitHub
- Section "Témoignages" : placeholder pour 2-3 citations clients
- Section "Newsletter IA" : formulaire d'inscription email + aperçu du dernier post
- Footer : liens LinkedIn, GitHub, email, Calendly

### 2. Page Projets (`/projets`)
- Liste complète des 7 projets GitHub avec descriptions détaillées
- Pour chaque projet : problème résolu, stack, résultats chiffrés, lien repo
- Projets :
  1. HYPR AI Performance Review — Revues de performance IA pour 150+ employés
  2. BigPicture Initiative Tracker — Suivi d'initiatives cross-platform
  3. CapLabour Capacity Planning — Planification de capacité v1+v2
  4. Kindly Reminder — Bot de conformité avec monitoring
  5. n8n Enterprise Workflows — 18 workflows d'automatisation
  6. Jira Automation Rules — 18 règles Jira Cloud
  7. Automation Catalogue — Registre centralisé d'automations

### 3. Page Services (`/services`)
- 4 offres de service avec pricing indicatif :
  - **Audit IA gratuit** (30 min) — Identifier les quick wins automation
  - **Implémentation Automation** (à partir de 2k€) — Workflow n8n/Apps Script
  - **Agent IA Custom** (à partir de 5k€) — Bot/agent sur-mesure
  - **Retainer mensuel** (à partir de 1.5k€/mois) — Support continu + optimisation
- CTA : "Discutons de votre projet" → Calendly

### 4. Page Blog/Newsletter (`/blog`)
- Liste des articles/posts (alimentée manuellement ou via API Notion plus tard)
- Chaque post : titre, date, résumé, tags, lien "Lire plus"
- Section inscription newsletter

### 5. Page Contact (`/contact`)
- Formulaire de contact (nom, email, message, budget)
- Infos de contact : email, LinkedIn, Calendly
- Map optionnelle (Paris area)

## Composants partagés
- [ ] Navbar responsive (logo, Home, Projets, Services, Blog, Contact)
- [ ] Footer (links, copyright, social icons)
- [ ] Bouton CTA réutilisable
- [ ] Card projet réutilisable
- [ ] Card service réutilisable
- [ ] SEO metadata par page (title, description, OG tags)
- [ ] Favicon et manifest

## Design
- Style : minimal, professionnel, dark mode par défaut avec toggle light
- Couleurs : fond sombre (#0a0a0a), accent bleu (#3b82f6), texte blanc/gris
- Typographie : Inter ou Geist
- Animations : subtiles, fade-in au scroll (framer-motion)
- Responsive : mobile-first

## SEO
- Méta titles et descriptions uniques par page
- Schema.org : Person, Organization, Service
- Sitemap.xml et robots.txt
- OpenGraph et Twitter cards
- URL canoniques

## Tâches (ordre de priorité)

- [ ] Initialiser le projet Next.js avec Tailwind CSS
- [ ] Configurer la structure de base (layout, navbar, footer)
- [ ] Créer la page d'accueil avec hero section et CTA
- [ ] Ajouter la section "Ce que je fais" (3 cartes de services)
- [ ] Créer le composant Card projet et la section Projets en grille
- [ ] Ajouter les données des 7 projets GitHub
- [ ] Créer la page /projets avec liste détaillée
- [ ] Créer la page /services avec 4 offres et pricing
- [ ] Créer la page /blog avec layout article list
- [ ] Créer la page /contact avec formulaire
- [ ] Ajouter le dark mode toggle
- [ ] Implémenter les animations scroll (framer-motion)
- [ ] Configurer SEO metadata pour chaque page
- [ ] Ajouter sitemap.xml et robots.txt
- [ ] Configurer OpenGraph et Twitter cards
- [ ] Ajouter la section témoignages (placeholder)
- [ ] Ajouter la section newsletter avec formulaire email
- [ ] Responsive : tester et ajuster mobile/tablet
- [ ] Performance : optimiser images, lazy loading, Core Web Vitals
- [ ] Préparer le déploiement Vercel
