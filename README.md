<div align="center">

# Lxy-Vue-Admin

**基于 Vben Admin 5 + Ant Design Vue Next 的企业级中后台管理系统**

[Vue 3.5+](https://vuejs.org/) · [Vite 5+](https://vitejs.dev/) · [TypeScript 5+](https://www.typescriptlang.org/) · [Pinia](https://pinia.vuejs.org/) · [Ant Design Vue Next](https://github.com/antdv-next/antdv-next)

[![License](https://img.shields.io/github/license/vbenjs/vue-vben-admin)](https://github.com/vbenjs/vue-vben-admin/blob/main/LICENSE)
[![Vue Version](https://img.shields.io/badge/Vue-3.5.13-brightgreen.svg)](https://vuejs.org/)
[![Vben Admin](https://img.shields.io/badge/Vben-5.7.0-blue.svg)](https://github.com/vbenjs/vue-vben-admin)
[![Node Version](https://img.shields.io/badge/Node-%5E20.19.0%20%7C%20%5E22.18.0%20%7C%20%5E24.0.0-green.svg)](https://nodejs.org/)

[📖 开发文档](./docs/开发文档.md) | [📦 Packages 文档](./packages/README.md) | [🔧 Internal 文档](./internal/README.md)

</div>

---

## 📖 项目简介

Lxy-Vue-Admin 是一个现代化的企业级中后台管理系统前端项目，基于 **Vben Admin 5** 和 **Ant Design Vue Next** 构建，与 **Lxy-Spring** 后端框架深度集成。

### ✨ 项目特性

- 🚀 **现代化架构**：采用 Vue 3.5 + Vite 5 + TypeScript 5，性能卓越
- 🎨 **精美 UI 设计**：基于 Ant Design Vue Next 4.2，提供优雅的视觉体验
- 🔐 **完善的权限管理**：支持基于角色和权限码的双重验证机制
- 🌍 **国际化支持**：内置多语言支持，轻松实现全球化部署
- 📱 **响应式布局**：完美适配 PC、平板、手机等多种设备
- 🎯 **组件化开发**：提供 50+ 高质量可复用组件
- 🔒 **数据加密**：支持 RSA + AES 双重加密，保障数据安全
- 📊 **Monorepo 架构**：使用 pnpm + Turbo，高效管理多包项目

### 🎯 适用场景

- 企业中后台管理系统
- SaaS 平台前端
- 数据可视化大屏
- 多租户管理系统
- 工作流管理系统

---

## 🛠️ 技术栈选型

### 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| [Vue](https://vuejs.org/) | 3.5.13 | 渐进式 JavaScript 框架 |
| [Vben Admin](https://github.com/vbenjs/vue-vben-admin) | 5.7.0 | 企业级中后台前端解决方案 |
| [Ant Design Vue Next](https://github.com/antdv-next/antdv-next) | 4.2.6 | 基于 Vue 3 的企业级 UI 组件库 |
| [Vue Router](https://router.vuejs.org/) | 4.x | Vue.js 官方路由管理器 |
| [Pinia](https://pinia.vuejs.org/) | 2.x | Vue 3 推荐的状态管理库 |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | JavaScript 的超集 |
| [Vite](https://vitejs.dev/) | 5.x | 下一代前端构建工具 |

### 工具库

| 技术 | 说明 |
|------|------|
| [VueUse](https://vueuse.org/) | 实用的 Vue 3 组合式 API 工具集 |
| [Alova](https://alova.js.org/) | 轻量级请求库 |
| [Axios](https://axios-http.com/) | HTTP 客户端 |
| [Day.js](https://day.js.org/) | 日期处理库 |
| [ECharts](https://echarts.apache.org/) | 数据可视化图表库 |
| [Lodash-es](https://lodash.com/) | JavaScript 工具库 |
| [Crypto-js](https://github.com/brix/crypto-js) | 加密库 |
| [JsEncrypt](https://github.com/travist/jsencrypt) | RSA 加密库 |

### 开发工具

| 工具 | 说明 |
|------|------|
| [ESLint](https://eslint.org/) | 代码检查 |
| [Oxlint](https://github.com/oxc-project/oxc) | 基于 Rust 的快速代码检查 |
| [Stylelint](https://stylelint.io/) | CSS/SCSS 代码检查 |
| [Commitlint](https://commitlint.js.org/) | Git 提交规范检查 |
| [Prettier](https://prettier.io/) | 代码格式化 |
| [Vitest](https://vitest.dev/) | 单元测试框架 |
| [Playwright](https://playwright.dev/) | E2E 测试框架 |

---

## 📦 安装与配置

### 环境要求

- **Node.js**: ^20.19.0 或 ^22.18.0 或 ^24.0.0
- **pnpm**: >= 10.0.0
- **Git**: 最新版本

> ⚠️ **重要提示**：请使用推荐的 Node.js 版本，版本不兼容可能导致依赖安装失败。

### 安装步骤

#### 1. 克隆项目

```bash
git clone https://gitee.com/my_spaces/lxy-vue-admin.git
cd lxy-vue-admin
```

#### 2. 安装依赖

```bash
# 使用 pnpm 安装依赖（推荐）
pnpm install

# 或使用以下命令
npm install -g pnpm
pnpm bootstrap
```

#### 3. 启动开发服务器

```bash
# 启动 web-antd 应用
pnpm dev:antd

# 或使用通用开发命令
pnpm dev
```

启动成功后，访问：`http://localhost:5666`

#### 4. 打包构建

```bash
# 构建所有应用
pnpm build

# 仅构建 web-antd 应用
pnpm build:antd

# 构建分析
pnpm build:analyze
```

---

## 🚀 基本使用方法

### 开发环境配置

项目使用环境变量进行配置，主要配置文件：

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置
- `.env.test` - 测试环境配置

#### 关键配置项

```bash
# 端口号
VITE_PORT=5666

# API 请求地址
VITE_GLOB_API_URL=/api

# 是否启用加密
VITE_GLOB_ENABLE_ENCRYPT=true

# RSA 公钥（请求加密）
VITE_GLOB_RSA_PUBLIC_KEY=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdHnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==

# RSA 私钥（响应解密）
VITE_GLOB_RSA_PRIVATE_KEY=MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmc3CuPiGL/LcIIm7zryCEIbl1SPzBkr75E2VMtxegyZ1lYRD+7TZGAPkvIsBcaMs6Nsy0L78n2qh+lIZMpLH8wIDAQAB

# 客户端 ID
VITE_GLOB_APP_CLIENT_ID=e5cd7e4891bf95d1d19206ce24a7b32e

# SSE 消息推送
VITE_GLOB_SSE_ENABLE=true

# WebSocket 消息推送
VITE_GLOB_WEBSOCKET_ENABLE=false
```

### 代理配置

开发环境下需要配置代理以解决跨域问题。代理配置在 `apps/web-antd/vite.config.mts` 中：

```typescript
export default defineApplicationConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

### 默认登录信息

- **用户名**: `admin`
- **密码**: `123456`

---

## 📁 目录结构说明

### 整体目录结构

```
lxy-vue-admin/
├── apps/                      # 应用目录
│   └── web-antd/             # Ant Design Vue 应用
│       ├── src/              # 源代码目录
│       ├── public/           # 公共资源
│       ├── index.html        # HTML 模板
│       └── package.json      # 依赖配置
├── packages/                  # 共享包目录
│   ├── @core/               # 核心包
│   │   ├── base/           # 基础包（设计系统、图标、共享工具等）
│   │   ├── composables/    # 组合式函数
│   │   ├── preferences/    # 偏好设置
│   │   └── ui-kit/         # UI 组件库
│   ├── constants/          # 常量定义
│   ├── effects/            # 功能包
│   │   ├── access/        # 权限管理
│   │   ├── common-ui/     # 通用 UI 组件
│   │   ├── hooks/         # 钩子函数
│   │   └── layouts/       # 布局组件
│   ├── hooks/              # 钩子函数
│   ├── icons/              # 图标组件
│   ├── locales/            # 国际化
│   ├── preferences/        # 偏好设置
│   ├── stores/             # 状态管理
│   ├── styles/             # 样式文件
│   ├── types/              # 类型定义
│   └── utils/              # 工具函数
├── internal/                 # 内部工具配置
│   ├── lint-configs/        # Lint 配置
│   ├── node-utils/          # Node 工具
│   ├── vite-config/         # Vite 配置
│   ├── tsconfig/            # TypeScript 配置
│   └── tailwind-config/     # Tailwind CSS 配置
├── docs/                     # 文档目录
│   ├── 开发文档.md          # 开发文档
│   ├── packages 目录说明文档.md  # Packages 文档
│   └── internal 目录说明文档.md  # Internal 文档
├── scripts/                  # 脚本目录
├── package.json              # 项目配置
├── pnpm-workspace.yaml       # pnpm 工作区配置
├── turbo.json                # Turbo 配置
└── README.md                 # 项目说明
```

### 核心目录详解

#### `apps/web-antd/src/` 目录结构

```
src/
├── api/                      # API 接口目录
│   ├── core/                # 核心接口（认证、用户、菜单等）
│   └── modules/             # 业务模块接口
├── components/               # 组件目录
│   ├── common/              # 通用组件
│   └── business/            # 业务组件
├── config/                   # 配置文件
├── layouts/                  # 布局组件
├── locales/                  # 国际化文件
│   ├── zh-CN/               # 中文
│   └── en/                  # 英文
├── router/                   # 路由配置
├── store/                    # 状态管理
├── styles/                   # 样式文件
├── types/                    # 类型定义
├── utils/                    # 工具函数
├── views/                    # 页面目录
│   ├── _core/               # 核心页面（登录、404 等）
│   ├── dashboard/           # 仪表盘
│   ├── system/              # 系统管理
│   └── workflow/            # 工作流
├── app.vue                   # 根组件
└── main.ts                   # 入口文件
```

---

## 🏗️ 架构设计

### 技术架构

```
┌─────────────────────────────────────────────────┐
│                   应用层 (Apps)                  │
│              web-antd (Ant Design)              │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│                  功能包层 (Effects)               │
│  access | common-ui | hooks | layouts | locales │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│                  核心包层 (Core)                  │
│   base | composables | preferences | ui-kit    │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│                  工具层 (Utils)                   │
│   constants | stores | types | utils | icons   │
└─────────────────────────────────────────────────┘
```

### Monorepo 架构

项目采用 **Monorepo** 架构，使用 **pnpm workspace** + **Turbo** 进行包管理和构建优化。

**优势：**
- 📦 代码复用：共享包可在多个应用间复用
- 🔧 统一规范：统一的代码规范、构建配置
- 🚀 构建优化：Turbo 缓存加速构建
- 📊 依赖管理：集中管理依赖版本

---

## 🔌 核心功能模块

### 1. 认证授权模块

- 支持账号密码登录、验证码登录、二维码登录
- Token 自动刷新机制
- 基于角色和权限码的双重验证
- 登录过期自动处理

### 2. 路由权限模块

- 动态路由加载（支持后端方式）
- 路由守卫和权限验证
- 菜单自动生成
- 路由缓存和预加载

### 3. 状态管理模块

- **useAccessStore**: 权限管理（Token、菜单、路由）
- **useUserStore**: 用户信息管理
- **useTabbarStore**: 标签栏管理
- **useTimezoneStore**: 时区管理

### 4. 组件系统

提供 50+ 高质量组件：

- **基础组件**: Button、Input、Table、Form 等
- **业务组件**: 上传、富文本、代码编辑器、Markdown 等
- **验证码组件**: 点选、滑动、旋转、平移验证码
- **布局组件**: Page、ColPage、Tree 等

### 5. 国际化模块

- 支持中文、英文等多语言
- 动态语言切换
- 语言包懒加载

### 6. 数据加密模块

- RSA 非对称加密（请求加密）
- AES 对称加密（数据加密）
- 国密 SM2/SM4 支持

### 7. 消息推送模块

- SSE (Server-Sent Events) 消息推送
- WebSocket 实时通信
- 系统通知中心

---

## 📝 开发规范

### 代码规范

项目使用 **ESLint** + **Oxlint** + **Stylelint** + **Prettier** 保证代码质量。

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm check:type
```

### 提交规范

使用 **Commitlint** 规范 Git 提交信息。

```bash
# 交互式提交
pnpm commit

# 格式：<type>(<scope>): <subject>
# 示例：feat(system): add user management page
```

**Type 类型：**
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具链相关
- `ci`: CI 配置
- `build`: 打包构建

### 分支管理

- `master`: 主分支
- `develop`: 开发分支
- `feature/*`: 功能分支
- `bugfix/*`: Bug 修复分支
- `release/*`: 发布分支
- `hotfix/*`: 紧急修复分支

---

## 🧪 测试

```bash
# 单元测试
pnpm test:unit

# E2E 测试
pnpm test:e2e
```

---

## 📚 文档

- [📖 开发文档](./docs/开发文档.md) - 完整的开发指南
- [📦 Packages 文档](./docs/packages目录说明文档.md) - 共享包详细说明
- [🔧 Internal 文档](./docs/internal目录说明文档.md) - 内部工具配置说明

---

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 如何贡献

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发流程

```bash
# 1. 克隆项目
git clone https://github.com/your-username/lxy-vue-admin.git
cd lxy-vue-admin

# 2. 安装依赖
pnpm install

# 3. 创建分支
git checkout -b feature/your-feature

# 4. 开发并测试
pnpm dev:antd

# 5. 提交代码
pnpm commit

# 6. 推送并创建 PR
git push origin feature/your-feature
```

### 代码规范检查

```bash
# 完整检查
pnpm check

# 单独检查
pnpm lint          # ESLint
pnpm check:type    # TypeScript
pnpm check:cspell  # 拼写检查
```

---

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

---

---

## 🔗 相关链接

- [Vue 3 文档](https://vuejs.org/)
- [Vben Admin 文档](https://doc.vben.pro/)
- [Ant Design Vue Next](https://github.com/antdv-next/antdv-next)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Vite 文档](https://vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/)

---


---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐️ Star 支持一下！**

Made with ❤️ by Lxy-Vue-Admin Team

</div>
