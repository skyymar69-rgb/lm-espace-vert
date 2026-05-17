# @lm/cms — Strapi 5 CMS

Backend headless CMS pour LM Espace Vert, propulsé par Strapi 5.

## Démarrage local

### Prérequis

- Node.js 18 ou 20 (pas Node 22+, contrainte Strapi 5)
- pnpm

### Installation

```bash
# Depuis la racine du monorepo
pnpm install

# Copier le fichier d'environnement
cp apps/cms/.env.example apps/cms/.env
```

### Configurer les variables d'environnement

Éditez `apps/cms/.env` et renseignez des valeurs sécurisées :

```bash
# Générer des clés aléatoires (PowerShell)
[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

Variables obligatoires :
- `APP_KEYS` — liste de clés séparées par virgules (ex: `key1,key2,key3,key4`)
- `API_TOKEN_SALT` — sel pour les tokens API
- `ADMIN_JWT_SECRET` — secret JWT admin
- `TRANSFER_TOKEN_SALT` — sel pour les tokens de transfert
- `JWT_SECRET` — secret JWT utilisateurs

### Lancer en développement

```bash
# Depuis la racine
pnpm --filter @lm/cms develop

# Ou depuis apps/cms/
pnpm develop
```

L'admin Strapi est accessible sur : http://localhost:1337/admin

### Build production

```bash
pnpm --filter @lm/cms build
pnpm --filter @lm/cms start
```

## Content Types

| Nom | Type | Description |
|-----|------|-------------|
| Article | Collection | Articles du blog jardinage |
| Galerie Photo | Collection | Photos de la galerie réalisations |
| Réalisation | Collection | Projets avant/après |
| Témoignage | Collection | Avis clients |
| Paramètres Site | Single Type | Réglages globaux (tel, email, horaires…) |

## Déploiement sur Railway

### Base de données PostgreSQL

1. Créer un projet Railway
2. Ajouter un service PostgreSQL
3. Copier la `DATABASE_URL` fournie par Railway

### Variables d'environnement Railway

```
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://...
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
```

### Déploiement

Railway détecte automatiquement le monorepo. Configurer dans Railway :
- **Root Directory** : `apps/cms`
- **Build Command** : `pnpm build`
- **Start Command** : `pnpm start`

## Connexion avec apps/web

Dans `apps/web/.env.local` :

```
STRAPI_URL=https://votre-cms.railway.app
STRAPI_API_TOKEN=votre_token_api_strapi
```

Le token API se génère dans l'admin Strapi : Settings > API Tokens > Create new API Token (type Read-only).
