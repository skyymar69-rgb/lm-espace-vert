# LM Espace Vert — Site web 2026

Site haut de gamme pour LM Espace Vert, paysagiste créateur à Lyon.

**Réalisé par [Kayzen Web](https://internet.kayzen-lyon.fr)**

---

## Stack

| Couche | Technologie |
|--------|------------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript strict |
| Style | Tailwind CSS v4 |
| Composants | shadcn/ui + Radix UI |
| CMS | Strapi v5 |
| Base de données | PostgreSQL (Neon) |
| Email | Resend |
| Monorepo | Turborepo + pnpm |
| Hébergement | Vercel |
| Analytics | Plausible (RGPD-exempt) |

## Démarrage rapide

```bash
# Cloner et installer
git clone https://github.com/[org]/lm-espace-vert.git
cd lm-espace-vert
pnpm install

# Variables d'environnement
cp .env.example apps/web/.env.local
# → renseigner les clés API

# Développement
pnpm dev

# Build
pnpm build

# Génération des QR codes
pnpm --filter @lm/web tsx scripts/gen-qr.ts
```

## Structure

```
lm-espace-vert/
├── apps/
│   ├── web/          # Next.js 15 — site public
│   └── cms/          # Strapi v5 — CMS headless
├── packages/
│   ├── schemas/      # Zod schemas partagés
│   └── config-typescript/
├── .github/workflows/ # CI/CD GitHub Actions
├── PROGRESS.md       # Suivi sprint
├── GUIDE-CLIENT.md   # Manuel CMS client
└── PR-LM-Espace-Vert-2026.md # Cahier des charges
```

## Conformité

- ✅ WCAG 2.2 niveau AA
- ✅ RGAA 4.1.2
- ✅ EAA (Directive 2019/882)
- ✅ RGPD — formulaires, cookies CNIL
- ✅ Pages légales : Mentions, RGPD, Cookies, CGU, CGV, Accessibilité

## CI/CD

Chaque push déclenche :
1. Lint + TypeCheck
2. Build
3. Tests accessibilité (axe-core + Pa11y) — cibles : 0 violation
4. Lighthouse CI — cibles : ≥ 95/100/95/100

## Licence

Propriété de LM Espace Vert. Développé par Kayzen Lyon (SIRU 999 418 346).
