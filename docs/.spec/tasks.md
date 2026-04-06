# VitePress 文档站点构建任务分解

## 任务概览

| 阶段 | 任务 | 优先级 | 预估时间 |
|------|------|--------|----------|
| 1 | 环境初始化 | 高 | - |
| 2 | VitePress 配置 | 高 | - |
| 3 | 文档优化 | 中 | - |
| 4 | 构建验证 | 高 | - |

---

## 阶段 1: 环境初始化

### 任务 1.1: 创建 docs/package.json

**描述**: 在 docs 目录下创建独立的 package.json 文件

**文件**: `docs/package.json`

**内容**:
```json
{
  "name": "@lxy/docs",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.0"
  }
}
```

**验收标准**:
- [ ] 文件创建成功
- [ ] JSON 格式正确

---

### 任务 1.2: 修改根目录 package.json

**描述**: 在根目录 package.json 中添加 VitePress 启动命令

**文件**: `package.json` (根目录)

**修改内容**: 在 `scripts` 对象中添加:
```json
"docs:dev": "pnpm -F @lxy/docs run dev",
"docs:build": "pnpm -F @lxy/docs run build",
"docs:preview": "pnpm -F @lxy/docs run preview"
```

**验收标准**:
- [ ] 命令添加成功
- [ ] JSON 格式正确

---

### 任务 1.3: 创建 VitePress 配置目录

**描述**: 创建 .vitepress 配置目录结构

**目录结构**:
```
docs/.vitepress/
├── config.mts
├── theme/
│   ├── index.ts
│   └── style.css
```

**验收标准**:
- [ ] 目录创建成功
- [ ] 配置文件创建成功

---

### 任务 1.4: 创建 public 目录

**描述**: 创建静态资源目录

**目录结构**:
```
docs/public/
└── images/
```

**验收标准**:
- [ ] 目录创建成功

---

## 阶段 2: VitePress 配置

### 任务 2.1: 创建主配置文件

**描述**: 创建 VitePress 主配置文件

**文件**: `docs/.vitepress/config.mts`

**配置内容**:
- 站点元数据 (title, description, lang)
- 主题配置 (nav, sidebar, footer)
- 搜索配置 (local search)
- Markdown 配置 (lineNumbers, math)
- 构建配置 (cleanUrls, lastUpdated)

**验收标准**:
- [ ] 配置文件创建成功
- [ ] TypeScript 语法正确
- [ ] 导航配置完整
- [ ] 侧边栏配置完整

---

### 任务 2.2: 创建主题入口文件

**描述**: 创建自定义主题入口

**文件**: `docs/.vitepress/theme/index.ts`

**内容**:
```typescript
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
```

**验收标准**:
- [ ] 文件创建成功
- [ ] TypeScript 语法正确

---

### 任务 2.3: 创建自定义样式文件

**描述**: 创建自定义 CSS 样式

**文件**: `docs/.vitepress/theme/style.css`

**内容**: 基础样式覆盖和自定义样式

**验收标准**:
- [ ] 文件创建成功
- [ ] CSS 语法正确

---

### 任务 2.4: 创建首页

**描述**: 将 README.md 转换为 VitePress 首页格式

**文件**: `docs/index.md`

**内容**: 包含 hero 区域和 features 列表的 frontmatter

**验收标准**:
- [ ] 文件创建成功
- [ ] frontmatter 格式正确
- [ ] 首页展示正常

---

## 阶段 3: 文档优化

### 任务 3.1: 优化开发指南文档

**描述**: 为 guide 目录下的文档添加 frontmatter

**文件列表**:
- `docs/guide/01-项目概述.md`
- `docs/guide/02-环境配置指南.md`
- `docs/guide/03-架构设计说明.md`
- `docs/guide/04-核心模块功能详解.md`
- `docs/guide/06-开发规范.md`
- `docs/guide/07-常见问题解决方案.md`

**修改内容**: 在每个文件顶部添加:
```yaml
---
title: 文档标题
description: 文档描述
lastUpdated: true
---
```

**验收标准**:
- [ ] 所有文档添加 frontmatter
- [ ] frontmatter 格式正确

---

### 任务 3.2: 优化 API 文档

**描述**: 为 API 文档添加 frontmatter

**文件**: `docs/api/05-API接口文档.md`

**验收标准**:
- [ ] frontmatter 添加成功

---

### 任务 3.3: 优化组件文档

**描述**: 为组件文档添加 frontmatter

**文件列表**:
- `docs/components/en/introduction.md`
- `docs/components/en/common-ui/*.md`
- `docs/components/en/layout-ui/*.md`

**验收标准**:
- [ ] 所有组件文档添加 frontmatter

---

### 任务 3.4: 优化分析文档

**描述**: 为分析文档添加 frontmatter

**文件列表**:
- `docs/analysis/开发文档.md`
- `docs/analysis/登录页面架构分析.md`
- `docs/analysis/package.json 对比分析.md`

**验收标准**:
- [ ] 所有分析文档添加 frontmatter

---

### 任务 3.5: 优化变更日志

**描述**: 为变更日志添加 frontmatter

**文件**: `docs/changelog/CHANGELOG.md`

**验收标准**:
- [ ] frontmatter 添加成功

---

## 阶段 4: 构建验证

### 任务 4.1: 安装依赖

**描述**: 安装 VitePress 依赖

**命令**: 
```bash
cd docs
pnpm install
```

**验收标准**:
- [ ] 依赖安装成功
- [ ] 无错误信息

---

### 任务 4.2: 启动开发服务器

**描述**: 启动 VitePress 开发服务器验证配置

**命令**: 
```bash
pnpm docs:dev
```

**验收标准**:
- [ ] 服务器启动成功
- [ ] 首页正常显示
- [ ] 导航正常工作
- [ ] 侧边栏正常显示
- [ ] 所有页面可访问

---

### 任务 4.3: 构建测试

**描述**: 执行构建命令验证

**命令**: 
```bash
pnpm docs:build
```

**验收标准**:
- [ ] 构建成功
- [ ] 无错误信息
- [ ] dist 目录生成正确

---

### 任务 4.4: 预览测试

**描述**: 预览构建结果

**命令**: 
```bash
pnpm docs:preview
```

**验收标准**:
- [ ] 预览服务器启动成功
- [ ] 所有页面正常访问

---

## 任务依赖关系

```
任务 1.1 ──┐
任务 1.2 ──┼──> 任务 4.1 ──> 任务 4.2 ──> 任务 4.3 ──> 任务 4.4
任务 1.3 ──┤
任务 1.4 ──┘

任务 2.1 ────────────────────────────────────────────────────────┐
任务 2.2 ────────────────────────────────────────────────────────┤
任务 2.3 ────────────────────────────────────────────────────────┤
任务 2.4 ────────────────────────────────────────────────────────┘

任务 3.1 ──┐
任务 3.2 ──┤
任务 3.3 ──┼──> (可并行执行)
任务 3.4 ──┤
任务 3.5 ──┘
```

---

## 风险与注意事项

### 风险项

1. **文件名中文问题**: 部分文档文件名包含中文，需确保 VitePress 正确处理
2. **相对路径链接**: 需检查文档中的相对路径链接是否正确
3. **代码块语言**: 需确保所有代码块指定了正确的语言类型

### 注意事项

1. 所有操作仅限 `docs` 目录内
2. 仅允许修改根目录 `package.json` 的 `scripts` 部分
3. 保留现有文档内容，仅添加 frontmatter
4. 不删除任何现有文件
