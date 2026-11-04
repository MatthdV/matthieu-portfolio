# Portfolio Website — Context

> ARTEFACT GÉNÉRÉ — ne pas éditer manuellement.
> Source : Matthieu_local/projets/portfolio-website/historique.md | Mis à jour 2026-05-17

## Infos critiques
- Repo : ~/Documents/Claude/Projects/matthieu-portfolio/
- Stack : Next.js 14 App Router, TypeScript, Tailwind, Framer Motion, next-intl
- Fonts : Space Grotesk (headings) + JetBrains Mono (code/accents)
- URL prod : https://www.matthieudevillele.com
- Deploy : Vercel

## État actuel (2026-05-17)
- Site live et déployé sur Vercel
- 3 locales : FR / EN / ES
- Sections : Hero, Services (bento), Projects (liste), Testimonials (Michal + Aniket), Newsletter
- 10 projets dans `src/data/projects.ts` (7 Groupon + IMOC RAG + Kallpa + Jobhunter-AI)
- `TestimonialsSection.tsx` ajouté — 2 recommandations LinkedIn réelles

## Prochaines priorités
- Ajouter projet Anam quand terminé
- Page `/projets/[slug]` avec détail par projet (pas encore implémentée)
- Stats hero à mettre à jour (actuellement ex-Groupon uniquement)

## Décisions clés
- Framer Motion pour animations — CSS pur rejeté (moins expressif)
- next-intl pour i18n FR/EN/ES — routes manuelles rejetées
- Space Grotesk + JetBrains Mono — Inter rejeté (trop générique)
- Testimonials namespace dans JSON i18n — hardcoding rejeté

## Watch out
- Context7 OBLIGATOIRE avant tout code Next.js/Framer Motion
- Respecter l'esthétique "Heavy Chisel Marker" — pas de design épuré/minimal
- Vérifier `MarkerUnderline` vs `MarkerCircle` vs `MarkerButton` selon contexte visuel
