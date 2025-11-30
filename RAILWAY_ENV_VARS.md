# Variables d'environnement Railway pour Strapi

## Variables obligatoires à configurer sur Railway

Vous devez configurer ces variables d'environnement dans votre projet Railway :

### 1. Secrets de sécurité (OBLIGATOIRES)
```
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
ENCRYPTION_KEY=tobemodified
```

**Important** : Remplacez TOUTES les valeurs "tobemodified" par des chaînes aléatoires sécurisées. Vous pouvez générer des valeurs avec :
- https://randomkeygen.com/
- `openssl rand -base64 32`

### 2. Configuration de la base de données

Pour PostgreSQL (recommandé pour la production) :
```
DATABASE_CLIENT=postgres
DATABASE_URL=${{RAILWAY_DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

Railway fournira automatiquement `RAILWAY_DATABASE_URL` quand vous ajoutez PostgreSQL.

### 3. Configuration du serveur
```
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
```

### 4. URL publique (importante pour l'admin)
```
URL=https://votre-app.railway.app
PUBLIC_URL=https://votre-app.railway.app
```

Remplacez `votre-app` par l'URL générée par Railway.

## Comment ajouter les variables sur Railway

1. Allez dans votre projet Railway
2. Cliquez sur votre service Strapi
3. Onglet "Variables"
4. Cliquez sur "RAW Editor"
5. Copiez-collez toutes les variables ci-dessus
6. Mettez à jour les valeurs (secrets, URL)
7. Sauvegardez

## Ajout de PostgreSQL

1. Dans Railway, cliquez sur "New" → "Database" → "Add PostgreSQL"
2. Railway ajoutera automatiquement `DATABASE_URL`
3. Redéployez votre service Strapi

## Vérification

Après le déploiement, accédez à :
- Admin : `https://votre-app.railway.app/admin`
- API : `https://votre-app.railway.app/api`

## Premier accès admin

1. Allez sur `https://votre-app.railway.app/admin`
2. Créez votre premier compte administrateur
3. Ce compte aura tous les privilèges

## Dépannage

Si le healthcheck échoue :
1. Vérifiez les logs dans Railway
2. Assurez-vous que toutes les variables sont configurées
3. Vérifiez que PostgreSQL est bien connecté
4. Les secrets doivent être différents et sécurisés