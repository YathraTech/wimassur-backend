# Railway Deployment Guide for WimAssur Strapi Backend

## Prerequisites
1. A Railway account (https://railway.app)
2. Railway CLI installed (optional)
3. GitHub repository connected to Railway

## Environment Variables

Set these in Railway dashboard:

### Required Variables
```bash
# Server Configuration
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# Security Keys (generate unique values)
APP_KEYS=<generate-4-unique-keys-separated-by-commas>
ADMIN_JWT_SECRET=<generate-unique-32-char-string>
API_TOKEN_SALT=<generate-unique-32-char-string>
TRANSFER_TOKEN_SALT=<generate-unique-32-char-string>
JWT_SECRET=<generate-unique-32-char-string>

# Public URL (Railway provides this)
PUBLIC_URL=${{RAILWAY_PUBLIC_DOMAIN}}
```

### Database Configuration
Railway provides PostgreSQL. Add these:
```bash
DATABASE_CLIENT=postgres
DATABASE_HOST=${{PGHOST}}
DATABASE_PORT=${{PGPORT}}
DATABASE_NAME=${{PGDATABASE}}
DATABASE_USERNAME=${{PGUSER}}
DATABASE_PASSWORD=${{PGPASSWORD}}
DATABASE_SSL=true
```

## Deployment Steps

1. **Create New Project on Railway**
   - Go to Railway dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

2. **Add PostgreSQL Database**
   - In your Railway project, click "New"
   - Select "Database" > "Add PostgreSQL"
   - Railway will automatically inject database variables

3. **Configure Environment Variables**
   - Go to your service settings
   - Add all variables listed above
   - Generate secure keys using: `openssl rand -base64 32`

4. **Deploy**
   - Railway will automatically deploy on push to main
   - Monitor logs in Railway dashboard

## Post-Deployment

1. **Create Admin User**
   - Visit: https://your-app.railway.app/admin
   - Create your first admin account

2. **Create API Token**
   - Go to Settings > API Tokens
   - Create a new API token with appropriate permissions
   - Save this token for the Next.js frontend

3. **Configure Frontend**
   - Update your Next.js `.env.local`:
   ```bash
   STRAPI_URL=https://your-app.railway.app
   STRAPI_API_TOKEN=your-generated-token
   ```

## Troubleshooting

### Build Failures
- Check Node.js version compatibility (we've set to >=18)
- Verify all dependencies are in package.json
- Check Railway logs for specific errors

### Database Connection
- Ensure PostgreSQL addon is attached
- Verify DATABASE_* variables are set
- Check if DATABASE_SSL is required

### Performance
- Enable caching in Strapi configuration
- Consider using Cloudinary for media storage
- Monitor resource usage in Railway dashboard

## Useful Commands

```bash
# View logs
railway logs

# Run commands in production
railway run npm run strapi content-types:list

# Open Railway dashboard
railway open
```