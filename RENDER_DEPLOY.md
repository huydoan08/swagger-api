# 🚀 Render Deployment Guide

## 📋 Prerequisites
- GitHub repository with your code
- Render account (free tier available)

## 🔧 Deployment Steps

### 1. Connect Repository
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Select your repository

### 2. Configure Build Settings
```yaml
# render.yaml is already configured with:
Build Command: npm ci && npm run build
Start Command: npm run start:prod
Environment: Node
Region: Oregon
Plan: Free
```

### 3. Environment Variables (Optional)
Set these in Render dashboard if needed:
- `NODE_ENV`: production
- `PORT`: (automatically provided by Render)

### 4. Deploy
- Click "Create Web Service"
- Render will automatically build and deploy
- Build time: ~2-3 minutes

## 🌐 Access Your API

After successful deployment:
- **API Base URL**: `https://your-service-name.onrender.com`
- **Swagger UI**: `https://your-service-name.onrender.com/api`
- **Health Check**: `https://your-service-name.onrender.com/`

## 📊 Monitoring

### Build Logs
Check build progress in Render dashboard:
- Build command output
- Start command output
- Runtime logs

### Health Check
Render automatically monitors your service at `/` endpoint

## 🐛 Common Issues & Solutions

### Build Fails
```bash
# Check these in build logs:
1. Node version compatibility (using 18.19.0)
2. npm ci vs npm install
3. Dependencies installation
```

### Service Won't Start
```bash
# Common causes:
1. Port not bound to 0.0.0.0
2. Missing start:prod script
3. Environment variables
```

### Swagger Not Loading
```bash
# Verify:
1. @nestjs/swagger in dependencies
2. swagger-ui-express installed
3. /api endpoint accessible
```

## 💰 Free Tier Limits
- 512MB RAM
- 0.1 CPU
- Spins down after 15 minutes of inactivity
- 750 hours/month

## 🔄 Auto-Deploy
- Enabled by default
- Deploys on every push to main branch
- Can be disabled in dashboard

## 📝 Custom Domain (Paid)
1. Go to Settings → Custom Domains
2. Add your domain
3. Configure DNS records
4. SSL automatically provided

## 🚀 Production Optimizations

### For Better Performance:
1. Upgrade to paid plan for persistent service
2. Use CDN for static assets
3. Implement caching strategies
4. Database connection pooling

### Security:
1. Configure CORS properly
2. Add rate limiting
3. Input validation
4. Environment-specific configs 