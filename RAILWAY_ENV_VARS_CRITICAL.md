# ⚠️ VARIABLES D'ENVIRONNEMENT CRITIQUES POUR RAILWAY

## PROBLÈME IDENTIFIÉ
Strapi ne démarre pas car la variable `ADMIN_JWT_SECRET` n'est pas configurée ou mal configurée.

## VARIABLES OBLIGATOIRES À CONFIGURER

### 1. Générer des valeurs sécurisées
Utilisez cette commande pour générer chaque secret :
```bash
openssl rand -base64 32
```

### 2. Variables à configurer dans Railway

```env
# CRITIQUE - Sans ces variables, Strapi ne démarrera pas
ADMIN_JWT_SECRET=REMPLACER_PAR_VALEUR_GENEREE
API_TOKEN_SALT=REMPLACER_PAR_VALEUR_GENEREE
TRANSFER_TOKEN_SALT=REMPLACER_PAR_VALEUR_GENEREE
JWT_SECRET=REMPLACER_PAR_VALEUR_GENEREE

# APP_KEYS - Format important : 4 clés séparées par des virgules SANS espaces
APP_KEYS=clé1,clé2,clé3,clé4

# Base de données (Railway fournit DATABASE_URL automatiquement avec PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Configuration serveur
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# URL publique (remplacez par votre URL Railway)
PUBLIC_URL=https://votre-app.railway.app
URL=https://votre-app.railway.app
```

## COMMENT CONFIGURER DANS RAILWAY

1. Allez dans votre projet Railway
2. Cliquez sur votre service Strapi
3. Onglet "Variables"
4. Cliquez sur "RAW Editor"
5. Copiez-collez TOUTES les variables ci-dessus
6. Remplacez TOUTES les valeurs par des valeurs générées
7. Sauvegardez

## EXEMPLE DE VALEURS GÉNÉRÉES

```env
ADMIN_JWT_SECRET=XkNRiRJKI7uY5Z+mJYLwqQv5E2zFh8GxB3P9dVnHa4M=
API_TOKEN_SALT=9TqH5LKzR8vU3Y+nKXMwpSu4D1xEg7FyA2N6cVbJe0I=
TRANSFER_TOKEN_SALT=mP3KnR7yT5xV2Z+jLYQwsNr6F8zDh9GvB1X4eUaHc8M=
JWT_SECRET=7YnK5RjT3xU9Z+mLXPwqVs4E1zGh8FyB2M6dWcJa0I=
APP_KEYS=aB3dE5gH7jK9mN2pQ4rS6tU8vW0xY1zA3bC5dE7fG9h,jK2mN4pQ6rS8tU0vW2xY4zA6bC8dE0fG2hJ4kL6mN8p,qR4sT6uV8wX0yZ2aB4cD6eF8gH0jK2mN4pQ6rS8tU0v,wX0yZ2aB4cD6eF8gH0jK2mN4pQ6rS8tU0vW2xY4zA6b
```

## VÉRIFICATION

Après configuration et redéploiement :
1. Le service devrait démarrer sans erreur
2. Accédez à `https://votre-app.railway.app/api/health`
3. Vous devriez voir : `{"status":"ok",...}`