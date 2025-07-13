# Deploy Guide

## 🚀 Deployment Options

### 1. Netlify
- File config: `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`

### 2. Vercel
- File config: `vercel.json`
- Build command: `npm run build`
- Output directory: `dist`

### 3. Render
- File config: `render.yaml`
- Build command: `npm install && npm run build`
- Start command: `npm run start:prod`

### 4. Railway/Heroku
- Build command: `npm run build`
- Start command: `npm run start:prod`
- Port: `process.env.PORT || 3000`

### 5. Docker
- File: `Dockerfile`
- Build: `docker build -t project-name .`
- Run: `docker run -p 3000:3000 project-name`

## 📁 Build Output
- **dist/**: NestJS build output
- **build/**: Copy of dist/ for platform compatibility

## 🔧 Environment Variables
- `NODE_VERSION`: 18
- `PORT`: 3000 (default)

## 📖 API Documentation
After deployment, Swagger UI will be available at:
- `https://your-domain.com/api`

## 🐛 Common Issues

### "Build directory not found"
- Ensure build script creates both `dist` and `build` directories
- Check platform-specific config files

### Swagger not loading
- Verify `@nestjs/swagger` is in dependencies (not devDependencies)
- Check if `swagger-ui-express` is installed

### Port issues
- Use `process.env.PORT || 3000` in main.ts
- Ensure platform provides PORT environment variable 