# Guide de Déploiement Strapi v5 sur Railway

## Problèmes Résolus

1. **Healthcheck qui échoue** : Ajout d'un endpoint `/api/health` personnalisé
2. **Configuration conflictuelle** : Suppression de `railway.json` et optimisation de `railway.toml`
3. **Variables d'environnement** : Configuration complète pour la production
4. **Support PostgreSQL** : Ajout du package `pg` et configuration pour Railway

## Étapes de Déploiement

### 1. Préparer le Code

```bash
# Commit des changements
git add .
git commit -m "fix: Configuration complète pour déploiement Railway"
git push origin main
```

### 2. Configurer Railway

1. **Créer un nouveau projet** sur Railway
2. **Ajouter PostgreSQL** :
   - New > Database > Add PostgreSQL
   - Railway injectera automatiquement les variables DATABASE_*

### 3. Variables d'Environnement

Copier ces variables dans Railway (Variables > RAW Editor) :

```env
# Server Configuration
NODE_ENV=production
HOST=0.0.0.0
PORT=${{PORT}}
PUBLIC_URL=https://${{RAILWAY_PUBLIC_DOMAIN}}
URL=https://${{RAILWAY_PUBLIC_DOMAIN}}

# Security Keys (IMPORTANT: Générer des valeurs uniques!)
APP_KEYS=<clé1>,<clé2>,<clé3>,<clé4>
ADMIN_JWT_SECRET=<générer-avec-openssl>
API_TOKEN_SALT=<générer-avec-openssl>
TRANSFER_TOKEN_SALT=<générer-avec-openssl>
JWT_SECRET=<générer-avec-openssl>
ENCRYPTION_KEY=<générer-avec-openssl>

# Database (Railway les injecte automatiquement)
DATABASE_CLIENT=postgres
DATABASE_URL=${{DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

**Pour générer des clés sécurisées** :
```bash
openssl rand -base64 32
```

### 4. Déployer

Railway déploiera automatiquement après avoir configuré les variables.

### 5. Vérifier le Déploiement

1. **Logs** : Vérifier dans Railway Dashboard > Logs
2. **Health Check** : Accéder à `https://votre-app.railway.app/api/health`
3. **Admin Panel** : `https://votre-app.railway.app/admin`

## Points de Vérification

### ✅ Configuration Optimisée

- [x] `railway.toml` avec healthcheck sur `/api/health`
- [x] Timeout de 300 secondes pour le démarrage
- [x] Configuration de production dans `/config/env/production/`
- [x] Support PostgreSQL avec le package `pg`

### ✅ Sécurité

- [x] Toutes les clés de sécurité sont uniques
- [x] SSL activé pour PostgreSQL
- [x] CORS configuré pour la production

### ✅ Performance

- [x] Pool de connexions configuré
- [x] Timeout de connexion optimisé
- [x] Limite JSON augmentée à 10MB

## Dépannage

### Le healthcheck échoue encore

1. Vérifier les logs dans Railway
2. S'assurer que toutes les variables sont configurées
3. Vérifier que PostgreSQL est bien attaché

### Erreur de connexion à la base de données

1. Vérifier que `DATABASE_URL` est injectée
2. Confirmer que `DATABASE_SSL=true`
3. Vérifier les logs pour des erreurs spécifiques

### L'admin panel ne s'affiche pas

1. Vérifier que `PUBLIC_URL` est correctement configurée
2. S'assurer que les clés de sécurité sont valides
3. Vérifier les logs pour des erreurs JavaScript

## Commandes Utiles

```bash
# Voir les logs en temps réel
railway logs

# Redéployer manuellement
railway up

# Variables d'environnement
railway variables
```

## Support

- [Railway Help](https://help.railway.com)
- [Strapi v5 Docs](https://docs.strapi.io)
- [Community Forum](https://forum.strapi.io)