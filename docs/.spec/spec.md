# VitePress 文档站点构建规范

## 1. 项目概述

### 1.1 目标

在 `docs` 目录内使用 VitePress 技术构建基于 Vite 和 Vue 的静态文档站点，对项目代码进行全面系统性分析，并对现有 `.md` 格式开发文档进行结构化整理与优化。

### 1.2 范围

- **工作范围**：仅限 `docs` 目录内的所有操作
- **例外**：仅允许修改根目录 `package.json` 添加 VitePress 启动和部署命令
- **禁止**：修改 `docs` 目录以外的任何其他文件

### 1.3 技术选型

- **VitePress**：基于 Vite 和 Vue 的静态站点生成器
- **参考文档**：https://vitepress.dev/zh/reference/site-config

---

## 2. 现有文档结构分析

### 2.1 当前目录结构

```
docs/
├── analysis/                    # 分析文档
│   ├── package.json 对比分析.md
│   ├── 开发文档.md
│   └── 登录页面架构分析.md
├── api/                         # API 文档
│   └── 05-API接口文档.md
├── changelog/                   # 变更日志
│   └── CHANGELOG.md
├── components/                  # 组件文档
│   └── en/
│       ├── common-ui/           # 通用 UI 组件
│       │   ├── vben-alert.md
│       │   ├── vben-api-component.md
│       │   ├── vben-count-to-animator.md
│       │   ├── vben-drawer.md
│       │   ├── vben-ellipsis-text.md
│       │   ├── vben-form.md
│       │   ├── vben-modal.md
│       │   └── vben-vxe-table.md
│       ├── layout-ui/           # 布局组件
│       │   └── page.md
│       └── introduction.md
├── guide/                       # 开发指南
│   ├── 01-项目概述.md
│   ├── 02-环境配置指南.md
│   ├── 03-架构设计说明.md
│   ├── 04-核心模块功能详解.md
│   ├── 06-开发规范.md
│   └── 07-常见问题解决方案.md
├── reference/                   # 参考资料
│   └── 文档目录.md
└── README.md                    # 文档首页
```

### 2.2 文档数量统计

| 分类 | 数量 | 说明 |
|------|------|------|
| 开发指南 (guide/) | 6 | 项目核心文档 |
| API 文档 (api/) | 1 | 接口文档 |
| 分析文档 (analysis/) | 3 | 架构分析文档 |
| 组件文档 (components/) | 10 | 组件使用文档 |
| 变更日志 (changelog/) | 1 | 版本变更记录 |
| 参考资料 (reference/) | 1 | 文档索引 |
| 首页 | 1 | README.md |
| **总计** | **23** | |

---

## 3. VitePress 站点架构设计

### 3.1 目标目录结构

```
docs/
├── .vitepress/                  # VitePress 配置目录
│   ├── config.mts               # 主配置文件
│   ├── theme/                   # 主题定制
│   │   ├── index.ts             # 主题入口
│   │   └── style.css            # 自定义样式
│   └── cache/                   # 构建缓存
├── public/                      # 静态资源
│   └── images/                  # 图片资源
├── guide/                       # 开发指南 (保留原结构)
├── api/                         # API 文档 (保留原结构)
├── analysis/                    # 分析文档 (保留原结构)
├── components/                  # 组件文档 (保留原结构)
├── changelog/                   # 变更日志 (保留原结构)
├── reference/                   # 参考资料 (保留原结构)
├── index.md                     # 站点首页 (由 README.md 重命名)
└── package.json                 # 文档站点独立配置
```

### 3.2 导航结构设计

#### 顶部导航栏

```typescript
nav: [
  { text: '首页', link: '/' },
  { 
    text: '开发指南', 
    items: [
      { text: '项目概述', link: '/guide/01-项目概述' },
      { text: '环境配置', link: '/guide/02-环境配置指南' },
      { text: '架构设计', link: '/guide/03-架构设计说明' },
      { text: '核心模块', link: '/guide/04-核心模块功能详解' },
      { text: '开发规范', link: '/guide/06-开发规范' },
      { text: '常见问题', link: '/guide/07-常见问题解决方案' },
    ]
  },
  { 
    text: 'API 文档', 
    link: '/api/05-API接口文档' 
  },
  { 
    text: '组件文档',
    items: [
      { text: '组件介绍', link: '/components/en/introduction' },
      { text: '通用组件', link: '/components/en/common-ui/vben-form' },
      { text: '布局组件', link: '/components/en/layout-ui/page' },
    ]
  },
  { text: '分析文档', link: '/analysis/开发文档' },
  { text: '变更日志', link: '/changelog/CHANGELOG' },
]
```

#### 侧边栏配置

```typescript
sidebar: {
  '/guide/': [
    {
      text: '开发指南',
      items: [
        { text: '项目概述', link: '/guide/01-项目概述' },
        { text: '环境配置指南', link: '/guide/02-环境配置指南' },
        { text: '架构设计说明', link: '/guide/03-架构设计说明' },
        { text: '核心模块功能详解', link: '/guide/04-核心模块功能详解' },
        { text: '开发规范', link: '/guide/06-开发规范' },
        { text: '常见问题解决方案', link: '/guide/07-常见问题解决方案' },
      ]
    }
  ],
  '/api/': [
    {
      text: 'API 文档',
      items: [
        { text: 'API 接口文档', link: '/api/05-API接口文档' },
      ]
    }
  ],
  '/components/': [
    {
      text: '组件文档',
      items: [
        { text: '介绍', link: '/components/en/introduction' },
      ]
    },
    {
      text: '通用组件',
      collapsed: false,
      items: [
        { text: 'Alert 警告', link: '/components/en/common-ui/vben-alert' },
        { text: 'API 组件', link: '/components/en/common-ui/vben-api-component' },
        { text: '数字动画', link: '/components/en/common-ui/vben-count-to-animator' },
        { text: 'Drawer 抽屉', link: '/components/en/common-ui/vben-drawer' },
        { text: '省略文本', link: '/components/en/common-ui/vben-ellipsis-text' },
        { text: 'Form 表单', link: '/components/en/common-ui/vben-form' },
        { text: 'Modal 模态框', link: '/components/en/common-ui/vben-modal' },
        { text: 'VxeTable 表格', link: '/components/en/common-ui/vben-vxe-table' },
      ]
    },
    {
      text: '布局组件',
      items: [
        { text: 'Page 页面', link: '/components/en/layout-ui/page' },
      ]
    }
  ],
  '/analysis/': [
    {
      text: '分析文档',
      items: [
        { text: '开发文档', link: '/analysis/开发文档' },
        { text: '登录页面架构分析', link: '/analysis/登录页面架构分析' },
        { text: 'package.json 对比分析', link: '/analysis/package.json 对比分析' },
      ]
    }
  ],
  '/changelog/': [
    {
      text: '变更日志',
      items: [
        { text: 'CHANGELOG', link: '/changelog/CHANGELOG' },
      ]
    }
  ],
}
```

### 3.3 站点配置

```typescript
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点元数据
  lang: 'zh-CN',
  title: 'Lxy-Vue-Admin',
  description: '基于 Vben Admin 5 和 Ant Design Vue Next 的企业级中后台管理系统文档',
  
  // 主题配置
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Lxy-Vue-Admin',
    
    // 导航栏
    nav: [...],
    
    // 侧边栏
    sidebar: {...},
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/my_spaces/lxy-vue-admin' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 Lxy-Vue-Admin Team'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },
    
    // 文本标签
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    math: true,
  },
  
  // 构建配置
  cleanUrls: true,
  lastUpdated: true,
})
```

---

## 4. 文档内容优化规范

### 4.1 文档格式统一

- 所有文档统一使用 UTF-8 编码
- 标题层级规范：H1 为文档标题，H2 为主要章节，H3 为子章节
- 代码块必须指定语言类型
- 链接使用相对路径

### 4.2 Frontmatter 配置

每个文档应包含以下 frontmatter：

```yaml
---
title: 文档标题
description: 文档描述
lastUpdated: true
---
```

### 4.3 首页设计

```yaml
---
layout: home

hero:
  name: "Lxy-Vue-Admin"
  text: "企业级中后台管理系统"
  tagline: 基于 Vben Admin 5 和 Ant Design Vue Next 开发
  image:
    src: /images/logo.svg
    alt: Lxy-Vue-Admin
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/01-项目概述
    - theme: alt
      text: GitHub
      link: https://gitee.com/my_spaces/lxy-vue-admin

features:
  - icon: 🚀
    title: Monorepo 架构
    details: 使用 pnpm workspace 和 Turbo 进行多包管理，代码复用性高
  - icon: 📦
    title: TypeScript 支持
    details: 完整的类型定义和类型检查，代码更加健壮
  - icon: 🎨
    title: 组件化开发
    details: 基于 Ant Design Vue Next 的高度封装组件系统
  - icon: 🔐
    title: 权限管理
    details: 支持后端动态路由配置和权限控制
  - icon: 🌐
    title: 国际化
    details: 完整的多语言支持（中文/英文）
  - icon: 📱
    title: 响应式设计
    details: 适配多种屏幕尺寸和设备
---
```

---

## 5. 构建与部署配置

### 5.1 docs/package.json 配置

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

### 5.2 根目录 package.json 命令添加

在根目录 `package.json` 的 `scripts` 中添加以下命令：

```json
{
  "scripts": {
    "docs:dev": "pnpm -F @lxy/docs run dev",
    "docs:build": "pnpm -F @lxy/docs run build",
    "docs:preview": "pnpm -F @lxy/docs run preview"
  }
}
```

### 5.3 部署配置

VitePress 构建产物输出到 `docs/.vitepress/dist` 目录，支持：

- 静态文件服务器部署
- GitHub Pages 部署
- Netlify/Vercel 部署

---

## 6. 约束条件

### 6.1 必须遵守

1. 所有开发工作必须在 `docs` 目录内进行
2. 仅允许修改根目录 `package.json` 添加脚本命令
3. 保留现有文档内容和目录结构
4. 使用 VitePress 官方推荐配置

### 6.2 禁止操作

1. 禁止修改 `docs` 目录以外的任何文件（除 `package.json` 脚本）
2. 禁止删除现有文档内容
3. 禁止修改项目源代码

---

## 7. 验收标准

### 7.1 功能验收

- [ ] VitePress 站点能够正常启动 (`pnpm docs:dev`)
- [ ] 所有文档页面能够正常访问
- [ ] 导航和侧边栏配置正确
- [ ] 搜索功能正常工作
- [ ] 文档链接无死链

### 7.2 构建验收

- [ ] 能够正常构建 (`pnpm docs:build`)
- [ ] 构建产物输出正确
- [ ] 预览功能正常 (`pnpm docs:preview`)

### 7.3 内容验收

- [ ] 文档内容完整保留
- [ ] 文档格式规范统一
- [ ] 首页展示正确

---

## 8. 参考资源

- [VitePress 官方文档](https://vitepress.dev/zh/)
- [VitePress 站点配置](https://vitepress.dev/zh/reference/site-config)
- [VitePress 主题配置](https://vitepress.dev/zh/reference/default-theme-config)
- [VitePress Markdown 扩展](https://vitepress.dev/zh/guide/markdown)
