---
title: 维护指南
description: Lxy-Vue-Admin 项目日常维护、版本更新、问题排查、备份恢复
---

# 维护指南

## 日常维护

### 依赖更新

```bash
# 检查过期依赖
pnpm outdated

# 交互式更新依赖
pnpm update --interactive

# 更新所有依赖
pnpm update

# 更新指定依赖
pnpm update vue
```

### 安全审计

```bash
# 检查安全漏洞
pnpm audit

# 修复安全漏洞
pnpm audit --fix

# 查看详细报告
pnpm audit --json
```

### 清理缓存

```bash
# 清理 pnpm 缓存
pnpm store prune

# 清理构建缓存
rm -rf node_modules/.cache
rm -rf node_modules/.vite

# 清理 Turborepo 缓存
rm -rf .turbo
```

## 版本管理

### 版本号规范

遵循语义化版本规范 (SemVer)：

```
MAJOR.MINOR.PATCH

- MAJOR: 不兼容的 API 变更
- MINOR: 向后兼容的功能新增
- PATCH: 向后兼容的问题修复
```

### 版本更新流程

```bash
# 1. 更新版本号
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# 2. 更新 CHANGELOG
# 编辑 CHANGELOG.md

# 3. 创建标签
git tag v1.0.1

# 4. 推送代码和标签
git push origin main --tags
```

### CHANGELOG 规范

```markdown
## [1.0.1] - 2024-01-15

### Added
- 新增用户头像上传功能

### Changed
- 优化表格加载性能

### Fixed
- 修复登录页面样式问题

### Deprecated
- 旧版 API 即将废弃

### Removed
- 移除废弃的工具函数

### Security
- 修复 XSS 安全漏洞
```

## 问题排查

### 常见问题

#### 1. 依赖安装失败

**症状**: `pnpm install` 报错

**排查步骤**:
```bash
# 1. 检查 Node.js 版本
node -v

# 2. 检查 pnpm 版本
pnpm -v

# 3. 清理缓存后重试
pnpm store prune
rm -rf node_modules
pnpm install
```

#### 2. 构建失败

**症状**: `pnpm build` 报错

**排查步骤**:
```bash
# 1. 检查类型错误
pnpm typecheck

# 2. 检查 ESLint 错误
pnpm lint

# 3. 清理缓存后重试
rm -rf node_modules/.cache
pnpm build
```

#### 3. 开发服务器启动失败

**症状**: `pnpm dev` 报错

**排查步骤**:
```bash
# 1. 检查端口占用
netstat -ano | findstr :5555

# 2. 检查环境变量
cat .env.development

# 3. 重启开发服务器
pnpm dev --force
```

#### 4. 页面白屏

**症状**: 页面加载后显示空白

**排查步骤**:
1. 打开浏览器控制台查看错误信息
2. 检查网络请求是否正常
3. 检查路由配置是否正确
4. 检查组件是否有渲染错误

### 日志分析

#### 前端日志

```javascript
// 在代码中添加日志
console.log('[Debug]', data)

// 使用 Vue DevTools 查看组件状态
```

#### 构建日志

```bash
# 查看详细构建日志
pnpm build --debug

# 分析构建产物
pnpm build --analyze
```

## 备份与恢复

### 代码备份

```bash
# 备份当前代码
git add .
git commit -m "backup: 日常备份"
git push origin backup-branch

# 创建归档
tar -czvf backup-$(date +%Y%m%d).tar.gz .
```

### 数据备份

```bash
# 备份环境配置
cp .env.production .env.production.backup

# 备份构建产物
cp -r dist dist.backup.$(date +%Y%m%d)
```

### 恢复操作

```bash
# 恢复代码
git checkout backup-branch

# 恢复环境配置
cp .env.production.backup .env.production

# 恢复构建产物
cp -r dist.backup.20240115 dist
```

## 性能监控

### 前端性能指标

| 指标 | 说明 | 目标值 |
|------|------|--------|
| FCP | 首次内容绘制 | < 1.8s |
| LCP | 最大内容绘制 | < 2.5s |
| FID | 首次输入延迟 | < 100ms |
| CLS | 累积布局偏移 | < 0.1 |
| TTFB | 首字节时间 | < 600ms |

### 性能检测工具

```bash
# Lighthouse CLI
npx lighthouse https://example.com --output html

# WebPageTest CLI
npx webpagetest test https://example.com
```

### 性能优化建议

1. **代码分割**: 使用动态导入减少首屏加载
2. **资源压缩**: 压缩图片、CSS、JS 文件
3. **缓存策略**: 合理配置浏览器缓存
4. **CDN 加速**: 使用 CDN 分发静态资源
5. **懒加载**: 图片和组件按需加载

## 安全维护

### 安全检查清单

- [ ] 更新依赖到最新安全版本
- [ ] 检查并修复 XSS 漏洞
- [ ] 检查并修复 CSRF 漏洞
- [ ] 检查敏感信息是否暴露
- [ ] 检查 API 接口权限控制
- [ ] 检查 HTTPS 配置

### 安全更新

```bash
# 检查安全漏洞
pnpm audit

# 自动修复
pnpm audit --fix

# 手动更新有漏洞的依赖
pnpm update vulnerable-package
```

## 监控告警

### 推荐监控工具

| 工具 | 类型 | 说明 |
|------|------|------|
| Sentry | 错误监控 | 前端错误追踪 |
| Prometheus | 指标监控 | 性能指标收集 |
| Grafana | 可视化 | 监控数据展示 |
| Uptime Kuma | 可用性监控 | 服务可用性检测 |

### 告警配置

```yaml
# 告警规则示例
groups:
  - name: frontend
    rules:
      - alert: HighErrorRate
        expr: rate(frontend_errors_total[5m]) > 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "前端错误率过高"
          description: "5分钟内错误率超过 10%"
```

## 应急响应

### 应急流程

1. **发现问题**: 监控告警或用户反馈
2. **确认问题**: 复现并确认问题范围
3. **快速修复**: 紧急修复或回滚
4. **验证修复**: 确认问题已解决
5. **复盘总结**: 分析原因并改进

### 回滚操作

```bash
# 回滚到上一个版本
git revert HEAD

# 回滚到指定版本
git checkout v1.0.0

# 重新构建部署
pnpm build
```
