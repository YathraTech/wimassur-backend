# Debug des variables Railway

## Problème possible : Format des variables

Railway pourrait avoir des problèmes avec le format des variables. Voici ce qu'il faut vérifier :

### 1. Dans Railway, utilisez le "RAW Editor" et collez EXACTEMENT ceci :

```
ADMIN_JWT_SECRET=tobemodified
API_TOKEN_SALT=tobemodified  
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### 2. IMPORTANT : Remplacez "tobemodified" par de vraies valeurs

Pour chaque secret, générez une valeur avec :
```bash
openssl rand -base64 32
```

### 3. Format critique pour APP_KEYS :
- Pas de guillemets
- Pas d'espaces
- 4 clés séparées par des virgules

### 4. Vérifiez dans les logs Railway

Après redéploiement, vous devriez voir dans les logs :
```
=== DEBUGGING ENVIRONMENT VARIABLES ===
NODE_ENV: production
ADMIN_JWT_SECRET exists: true
ADMIN_JWT_SECRET length: 44
...
```

Si vous voyez `false` ou `0`, c'est que la variable n'est pas configurée correctement.