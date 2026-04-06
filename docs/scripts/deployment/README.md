---
title: 部署指南
description: Lxy-Vue-Admin 项目部署流程、环境配置、Docker 部署、CI/CD 配置
---

# 部署指南

## 构建生产版本

### 构建命令

```bash
# 构建应用
pnpm build

# 构建文档站点
pnpm docs:build

# 预览构建结果
pnpm preview
```

### 构建产物

构建完成后，产物位于以下目录：

| 产物 | 目录 | 说明 |
|------|------|------|
| Web 应用 | apps/web-antd/dist | 前端应用构建产物 |
| 文档站点 | docs/.vitepress/dist | VitePress 文档站点 |

### 环境变量

```bash
# .env.production
VITE_GLOB_API_URL=https://api.example.com
VITE_GLOB_APP_TITLE=Lxy-Vue-Admin
```

## 部署方式

### 1. 静态文件服务器

#### Nginx 配置

```nginx
server {
    listen 80;
    server_name example.com;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://backend:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

#### Apache 配置

```apache
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

### 2. Docker 部署

#### Dockerfile

```dockerfile
# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web-antd/package.json ./apps/web-antd/
COPY packages ./packages

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# 生产阶段
FROM nginx:alpine

COPY --from=builder /app/apps/web-antd/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### 构建和运行

```bash
# 构建镜像
docker build -t lxy-vue-admin:latest .

# 运行容器
docker run -d -p 80:80 --name lxy-vue-admin lxy-vue-admin:latest
```

#### Docker Compose

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - app-network

  backend:
    image: your-backend-image:latest
    ports:
      - "8080:8080"
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

### 3. CI/CD 部署

#### GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Deploy to Server
        uses: easingthemes/ssh-deploy@main
        with:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          SOURCE: apps/web-antd/dist/
          TARGET: /var/www/html
```

### 4. 云平台部署

#### Vercel

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "apps/web-antd/dist",
  "framework": "vue"
}
```

#### Netlify

```toml
[build]
  command = "pnpm build"
  publish = "apps/web-antd/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 文档站点部署

### GitHub Pages

```yaml
# .github/workflows/docs.yml
name: Deploy Docs

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'

jobs:
  deploy-docs:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build docs
        run: pnpm docs:build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 性能优化

### 构建优化

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          antd: ['ant-design-vue'],
        },
      },
    },
  },
})
```

### CDN 配置

```html
<!-- 使用 CDN 加载第三方库 -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>
```

### 缓存策略

```nginx
# 静态资源缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML 不缓存
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## 监控与日志

### 错误监控

推荐使用：
- Sentry
- Bugsnag
- FrontJS

### 性能监控

推荐使用：
- Lighthouse
- WebPageTest
- Google Analytics

### 日志收集

推荐使用：
- ELK Stack
- Grafana Loki
- 阿里云 SLS
