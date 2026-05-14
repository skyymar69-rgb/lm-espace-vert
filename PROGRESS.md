# PROGRESS — LM Espace Vert

> Suivi de sprint en temps réel. Mis à jour à chaque livraison.

---

## Sprint 1 — Fondations (semaine 1)

- [x] git init + monorepo Turborepo + pnpm workspaces
- [x] Next.js 15 (App Router, Turbopack) + TypeScript strict
- [x] Tailwind CSS v4 + design system complet (tokens light/dark)
- [x] Polices Newsreader + Inter via next/font (zero CLS)
- [x] Toggle thème dark/light + persistence localStorage + no-flash script
- [x] Root layout (lang="fr", skip-link, header, footer, cookie banner)
- [x] Header sticky (nav desktop + mobile drawer accessible)
- [x] Footer complet (légaux + "Kayzen Web" + gérer cookies)
- [x] Bandeau cookies CNIL-conforme (Accepter / Refuser / Personnaliser — même poids visuel)
- [x] Carte de contact numérique (Dialog Radix, QR codes, vCard)
- [x] Route vCard /contact/vcard
- [x] Script génération QR codes (public/qr/)
- [x] CI GitHub Actions (lint, typecheck, build, axe, Lighthouse)
- [x] Sécurité headers (HSTS, CSP, X-Frame-Options, COOP/COEP)
- [x] Sitemap dynamique + robots.txt
- [x] Formulaire de contact (Zod, honeypot, rate-limit, server action, aria complet)
- [x] Pages légales rédigées (Mentions, RGPD, Cookies, CGU, CGV, Accessibilité)
- [x] Pages publiques : Home, Services, Réalisations, Blog, À propos, Contact, Devis
- [x] Pages 404 et 500 custom
- [x] .env.example + README

---

## Sprint 2 — CMS Strapi v5 (à venir)

- [ ] Strapi v5 initialisé + Postgres
- [ ] Content types (Service, Article, Realisation, Temoignage, SiteSettings...)
- [ ] Rôles + permissions (Super Admin / Éditeur client / Public API)
- [ ] Hébergement (Render ou Railway)
- [ ] Webhook revalidate → Vercel
- [ ] Seed initial
- [ ] GUIDE-CLIENT.md

---

## Sprint 3+ — À planifier

- [ ] Pages dynamiques services (template)
- [ ] Pages dynamiques réalisations (étude de cas)
- [ ] Blog + Conseils (listing, article, TOC scroll-spy)
- [ ] Schema.org sur toutes les pages
- [ ] OG images dynamiques
- [ ] Audit axe + Pa11y → 0 violation
- [ ] Lighthouse ≥ 95/95/95/100
- [ ] Déploiement Vercel + domaine
- [ ] Formation client

---

## Scores Lighthouse (à mettre à jour après chaque sprint)

| Date | Page | Perf | A11y | Best Practices | SEO |
|------|------|------|------|----------------|-----|
| — | — | — | — | — | — |
