# Lxy-Vue-Admin 项目记忆文件

> 本文件为 AI 编码助手提供项目上下文，确保代码修改符合项目规范和架构设计。

---

## 1. 项目概述

### 1.1 项目简介

**Lxy-Vue-Admin** 是一个基于 **Vben Admin 5.7.0** + **Ant Design Vue Next** 构建的企业级中后台管理系统前端项目，与 **Lxy-Spring** 后端框架深度集成。

### 1.2 核心特性

- 现代化架构：Vue 3.5 + Vite 8 + TypeScript 5
- UI 组件库：Ant Design Vue Next (antdv-next) 4.2+
- Monorepo 架构：pnpm workspace + Turbo
- 完善的权限管理：角色 + 权限码双重验证
- 国际化支持：中文/英文多语言
- 数据加密：RSA + AES 双重加密
- 消息推送：SSE / WebSocket 支持
- 多租户支持

### 1.3 技术栈总览

| 类别 | 技术 | 版本 |
|------|------|------|
| 核心框架 | Vue | ^3.5.30 |
| 构建工具 | Vite | ^8.0.1 |
| 语言 | TypeScript | ^5.9.3 |
| UI 组件库 | antdv-next | ^1.1.7 |
| 路由 | vue-router | ^5.0.4 |
| 状态管理 | Pinia | ^3.0.4 |
| HTTP 请求 | Alova + Axios | alova ^3.4.1 |
| 表单验证 | vee-validate + zod | ^4.15.1 |
| 日期处理 | dayjs | ^1.11.20 |
| 图表 | echarts | ^6.0.0 |
| 工具库 | lodash-es | ^4.17.21 |
| 动画 | motion-v | ^1.10.2 |
| 包管理器 | pnpm | >=10.0.0 |
| Node.js | - | ^20.19.0 \|\| ^22.18.0 \|\| ^24.0.0 |

---

## 2. 项目架构

### 2.1 Monorepo 目录结构

```
lxy-vue-admin/
├── apps/
│   └── web-antd/              # 主应用 (Ant Design Vue)
│       ├── src/
│       │   ├── adapter/       # 组件适配器 (form/component)
│       │   ├── api/           # API 接口定义
│       │   ├── components/    # 业务组件 (dict/tree/upload/tinymce等)
│       │   ├── layouts/       # 布局组件 (basic/auth)
│       │   ├── locales/       # 国际化语言包
│       │   ├── router/        # 路由配置与守卫
│       │   ├── store/         # Pinia 状态管理
│       │   ├── utils/         # 工具函数
│       │   ├── views/         # 页面视图
│       │   ├── app.vue        # 根组件
│       │   ├── bootstrap.ts   # 应用启动入口
│       │   ├── main.ts        # 应用初始化
│       │   └── preferences.ts # 项目偏好配置覆盖
│       ├── .env.development   # 开发环境变量
│       ├── .env.production    # 生产环境变量
│       ├── vite.config.ts     # Vite 配置 (含代理)
│       └── package.json
├── packages/
│   ├── @core/                 # 核心包
│   │   ├── base/             # 基础包 (design/icons/shared/typings)
│   │   ├── composables/      # 组合式函数
│   │   ├── preferences/      # 偏好设置
│   │   └── ui-kit/           # UI 组件库 (form/layout/menu/popup/tabs/shadcn)
│   ├── constants/             # 常量定义
│   └── effects/               # 功能包 (access等)
├── internal/                  # 内部工具
│   ├── lint-configs/          # ESLint/Stylelint/Oxlint 配置
│   ├── node-utils/            # Node 工具函数
│   ├── vite-config/           # Vite 共享配置
│   ├── tsconfig/              # TypeScript 配置
│   └── tailwind-config/       # Tailwind CSS 配置
├── docs/                      # 项目文档
├── turbo.json                 # Turbo 构建配置
├── pnpm-workspace.yaml        # pnpm 工作区配置
└── package.json               # 根 package.json
```

### 2.2 分层架构

```
应用层 (apps/web-antd)
    ↓
功能包层 (packages/effects + packages/@core/ui-kit)
    ↓
核心包层 (packages/@core/base + composables + preferences)
    ↓
工具层 (constants/stores/types/utils/icons)
```

---

## 3. 核心模块详解

### 3.1 应用启动流程

`main.ts` → `initPreferences()` → `bootstrap()` → 挂载 Vue App

关键启动步骤 ([bootstrap.ts](apps/web-antd/src/bootstrap.ts)):
1. 初始化组件适配器 (`initComponentAdapter`)
2. 初始化表单组件 (`initSetupVbenForm`)
3. 设置弹窗默认属性
4. 创建 Vue App 并注册全局组件
5. 注册 v-loading 指令
6. 初始化国际化 i18n
7. 初始化 Pinia stores
8. 注册权限指令 v-access
9. 初始化 Tippy
10. 初始化全局弹窗方法
11. 安装路由及路由守卫
12. 安装 Motion 插件
13. 动态更新页面标题
14. 挂载 App

### 3.2 路由系统

**路由模式**: History 模式 (可切换 Hash)

**核心路由** ([core.ts](apps/web-antd/src/router/routes/core.ts)):
- `/` → BasicLayout (根布局，重定向到默认首页)
- `/auth` → AuthPageLayout (认证布局)
  - `/auth/login` → 登录页
  - `/auth/code-login` → 验证码登录
  - `/auth/qrcode-login` → 二维码登录
  - `/auth/forget-password` → 忘记密码
  - `/auth/register` → 注册
- `/social-callback` → OAuth 回调
- `/:path(.*)*` → 404 页面

**路由守卫** ([guard.ts](apps/web-antd/src/router/guard.ts)):
- `setupCommonGuard`: 页面加载进度条、记录已加载路径
- `setupAccessGuard`: Token 校验、动态路由生成、权限验证

**访问模式**: `mixed` (混合模式 - 支持后端路由 + 前端路由合并)

**后端菜单转 Vben 路由** ([access.ts](apps/web-antd/src/router/access.ts)):
- 组件映射: Layout→BasicLayout, ParentView→空(三级以上菜单), IFrameView→内嵌, Link→外链
- 使用 `import.meta.glob('../views/**/*.vue')` 自动映射页面组件

### 3.3 状态管理 (Pinia Stores)

**应用层 Store** ([store/](apps/web-antd/src/store)):

| Store | 文件 | 职责 |
|-------|------|------|
| `useAuthStore` | [auth.ts](apps/web-antd/src/store/auth.ts) | 登录/登出/获取用户信息 |
| `useDictStore` | [dict.ts](apps/web-antd/src/store/dict.ts) | 字典数据管理 (Options格式转换) |
| `useNotifyStore` | [notify.ts](apps/web-antd/src/store/notify.ts) | SSE消息通知管理 |
| `useTenantStore` | [tenant.ts](apps/web-antd/src/store/tenant.ts) | 租户切换管理 |

**框架层 Store** (@vben/stores):
- `useAccessStore`: accessToken/refreshToken/menus/routes/accessCodes/loginExpired
- `useUserStore`: userInfo
- `useTabbarStore`: 标签栏状态
- `useTimezoneStore`: 时区设置

### 3.4 HTTP 请求层

**请求库**: Alova (基于 Axios 适配器)

**实例配置** ([http/index.ts](apps/web-antd/src/utils/http/index.ts)):
- baseURL: 从环境变量读取 `VITE_GLOB_API_URL`
- 超时: 10秒
- 缓存: 关闭 (`cacheFor: null`)
- Token: Bearer 方式通过 Authorization header 传递
- ClientID: 通过 header 传递
- 语言: Accept-Language / Content-Language header

**加密机制**:
- RSA 非对称加密: 加密 AES 密钥 (公钥加密，私钥解密)
- AES 对称加密: 加密请求数据 / 解密响应数据
- 开关: `VITE_GLOB_ENABLE_ENCRYPT`
- 仅对 POST/PUT 请求生效

**响应处理**:
- 业务成功码: 200 (`BUSINESS_SUCCESS_CODE`)
- 未授权码: 401 (`UNAUTHORIZED_CODE`) → 触发登出
- 分页数据: `{code, msg, rows, total}` 格式 (无 data 字段)
- 错误提示: Ant Design Message/Modal

**扩展方法**:
- `getWithMsg` / `postWithMsg` / `putWithMsg` / `deleteWithMsg`: 请求成功后弹出提示

### 3.5 API 接口组织

**目录结构** ([api/](apps/web-antd/src/api)):
```
api/
├── core/           # 核心接口
│   ├── auth.ts     # 认证 (登录/登出/租户/OAuth)
│   ├── captcha.ts  # 验证码
│   ├── menu.ts     # 菜单
│   ├── upload.ts   # 上传
│   └── user.ts     # 用户信息
├── system/         # 系统管理模块
│   ├── client/     # 客户端管理
│   ├── config/     # 参数配置
│   ├── dept/       # 部门管理
│   ├── dict/       # 字典管理 (dict-type/dict-data)
│   ├── menu/       # 菜单管理
│   ├── notice/     # 通知公告
│   ├── oss/        # 对象存储
│   ├── post/       # 岗位管理
│   ├── profile/    # 个人中心
│   ├── role/       # 角色管理
│   ├── social/     # 社交账号
│   ├── tenant/     # 租户管理
│   └── user/       # 用户管理
├── monitor/        # 监控模块
│   ├── admin/      # 在线用户
│   ├── cache/      # 缓存监控
│   ├── logininfo/  # 登录日志
│   ├── online/     # 在线会话
│   └── operlog/    # 操作日志
├── tool/           # 代码生成
│   └── gen/
└── workflow/       # 工作流
    ├── category/   # 流程分类
    ├── definition/ # 流程定义
    ├── instance/   # 流程实例
    ├── spel/       # SpEL表达式
    └── task/       # 任务管理
```

每个 API 模块包含:
- `index.ts`: API 函数定义
- `model.d.ts`: TypeScript 类型定义 (可选)

### 3.6 组件系统

**业务组件** ([components/](apps/web-antd/src/components)):
- [dict](apps/web-antd/src/components/dict): 字典选择组件 (DictSelect/DictRadio)
- [tree](apps/web-antd/src/components/tree): 树形选择组件
- [upload](apps/web-antd/src/components/upload): 文件上传 (FileUpload/ImageUpload)
- [tinymce](apps/web-antd/src/components/tinymce): 富文本编辑器
- [cropper](apps/web-antd/src/components/cropper): 图片裁剪
- [table](apps/web-antd/src/components/table): 表格封装

**全局组件注册** ([global/](apps/web-antd/src/components/global)):
- Button 全局配置
- Slot 封装

**组件适配器** ([adapter/component/index.ts](apps/web-antd/src/adapter/component/index.ts)):
将 antdv-next 组件适配为 Vben Form 可用的表单组件，支持:
- Input/Textarea/InputPassword/InputNumber
- Select/Cascader/TreeSelect/ApiSelect/ApiCascader/ApiTreeSelect
- DatePicker/RangePicker/TimePicker/TimeRangePicker
- Radio/RadioGroup/Checkbox/CheckboxGroup
- Switch/Rate/Upload/Mentions/Divider/Space
- ImageUpload/FileUpload/RichTextarea/IconPicker
- DefaultButton/PrimaryButton

所有输入组件自动添加国际化 placeholder。

### 3.7 国际化

**支持语言**: zh-CN (默认), en-US

**语言包位置**: [locales/langs/](apps/web-antd/src/locales/langs/)
- common.json: 通用翻译
- demos.json: 示例翻译
- http.json: HTTP 相关翻译
- menu.json: 菜单翻译
- page.json: 页面翻译
- pages.json: 多页面翻译

**第三方组件库国际化**:
- Ant Design Vue: 通过 `antdLocale` ref 动态切换
- Day.js: 通过 `dayjs.locale()` 切换

### 3.8 偏好配置

**项目偏好覆盖** ([preferences.ts](apps/web-antd/src/preferences.ts)):

```typescript
{
  app: {
    accessMode: 'mixed',          // 混合访问模式 (前端+后端路由)
    enableRefreshToken: false,    // 不使用 refresh token (后端处理)
    name: VITE_APP_TITLE,         // 应用标题
  },
  footer: { enable: false },      // 隐藏 Footer
  tabbar: { persist: false },     // Tab 标签不持久化
  theme: {
    mode: 'light',                // 默认亮色主题
    buttonWaveMode: 'Default',    // 按钮水波纹
    semiDarkSidebar: false,
    radius: '0.375',              // 圆角 6px (与 antd 一致)
    colorPrimary: 'hsl(215, 100%, 54%)',    // 主题色
    colorSuccess: 'hsl(100, 77%, 44%)',
    colorWarning: 'hsl(40, 96%, 53%)',
    colorDestructive: 'hsl(359, 100%, 65%)',
  },
}
```

> ⚠️ 更改配置后需清空浏览器 localStorage 缓存

---

## 4. 环境配置

### 4.1 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `VITE_PORT` | 开发服务器端口 | 5666 |
| `VITE_BASE` | 应用基础路径 | /vben |
| `VITE_APP_TITLE` | 应用标题 | - |
| `VITE_APP_NAMESPACE` | 应用命名空间(用于localStorage隔离) | - |
| `VITE_APP_VERSION` | 应用版本 | - |
| `VITE_DEVTOOLS` | 是否开启 Vue DevTools | false |
| `VITE_INJECT_APP_LOADING` | 是否注入全局 Loading | true |
| `VITE_GLOB_API_URL` | 后端接口地址 | http://192.168.2.18/prod-api |
| `VITE_GLOB_ENABLE_ENCRYPT` | 全局加密开关 | false |
| `VITE_GLOB_RSA_PUBLIC_KEY` | RSA 公钥 (请求加密) | - |
| `VITE_GLOB_RSA_PRIVATE_KEY` | RSA 私钥 (响应解密) | - |
| `VITE_GLOB_APP_CLIENT_ID` | 客户端 ID | e5cd7e4891bf95d1d19206ce24a7b32e |
| `VITE_GLOB_SSE_ENABLE` | SSE 消息推送开关 | true |
| `VITE_GLOB_WEBSOCKET_ENABLE` | WebSocket 开关 | false |
| `VITE_ROUTER_HISTORY` | 路由模式 (history/hash) | history |
| `VITE_COMPRESS` | 压缩方式 (none/gzip/brotli) | gzip |
| `VITE_PWA` | PWA 开关 | false |
| `VITE_ARCHIVER` | 是否生成 dist.zip | true |

### 4.2 开发代理配置

[vite.config.ts](apps/web-antd/vite.config.ts):
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      ws: true,
    },
  },
},
```

---

## 5. 开发规范

### 5.1 代码规范工具

| 工具 | 用途 | 配置位置 |
|------|------|----------|
| ESLint | JavaScript/TypeScript 检查 | internal/lint-configs/eslint-config |
| Oxlint | 基于 Rust 的快速 lint | oxlint.config.ts |
| Stylelint | CSS/SCSS 检查 | internal/lint-configs/stylelint-config |
| Prettier (oxfmt) | 代码格式化 | oxfmt.config.ts |
| Commitlint | Git 提交规范 | internal/lint-configs/commitlint-config |
| cspell | 拼写检查 | cspell.json |
| lefthook | Git hooks | lefthook.yml |

### 5.2 Git 提交规范

格式: `<type>(<scope>): <subject>`

Type 类型:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整 (不影响功能)
- `refactor`: 重构 (非新功能、非修复)
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具链/依赖变更
- `ci`: CI 配置
- `build`: 打包构建

### 5.3 分支策略

- `master`: 主分支 (生产)
- `develop`: 开发分支
- `feature/*`: 功能分支
- `bugfix/*`: Bug 修复分支
- `release/*`: 发布分支
- `hotfix/*`: 紧急修复分支

### 5.4 代码编写约定

1. **路径别名**: 使用 `#/` 作为 src 目录的别名 (在 web-antd/package.json 的 imports 中配置)
2. **API 调用**: 统一使用 `alovaInstance`，通过 `#/api` 导入 API 函数
3. **类型定义**: 每个 API 模块应包含对应的 `.d.ts` 类型文件
4. **字典使用**: 通过 `useDictStore().getDictOptions(dictName)` 获取 Options 格式数据
5. **组件使用**: 表单场景优先使用 Vben Form + 适配器组件
6. **国际化**: 所有用户可见文本必须使用 `$t('key')` 进行国际化
7. **响应式数据**: 优先使用 Composition API (`<script setup>`)
8. **样式**: 优先使用 Tailwind CSS + Ant Design token

---

## 6. 常用命令

### 6.1 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (web-antd)
pnpm dev:antd

# 启动开发服务器 (通用)
pnpm dev

# 启动文档服务
pnpm docs:dev
```

### 6.2 构建

```bash
# 构建所有应用
pnpm build

# 仅构建 web-antd (生产环境)
pnpm build:antd

# 构建 web-antd (测试环境)
pnpm build:antd:test

# 构建分析
pnpm build:analyze
```

### 6.3 代码质量

```bash
# 代码检查 (ESLint + Oxlint)
pnpm lint

# 代码格式化
pnpm format

# TypeScript 类型检查
pnpm check:type

# 循环依赖检查
pnpm check:circular

# 依赖检查
pnpm check:dep

# 拼写检查
pnpm check:cspell

# 完整检查 (全部执行)
pnpm check
```

### 6.4 测试

```bash
# 单元测试
pnpm test:unit

# E2E 测试
pnpm test:e2e
```

### 6.5 其他

```bash
# 交互式提交
pnpm commit

# 清理并重新安装依赖
pnpm reinstall

# 更新依赖
pnpm update:deps

# Changeset 版本管理
pnpm changeset
pnpm version
```

---

## 7. 已知问题与解决方案

### 7.1 SM2 加密注意事项

- 前端 sm-crypto 库只支持 **04 开头的公钥**
- 使用 `import { logSm2KeyPair } from '@vben/utils'` 生成密钥对
- 或使用 https://tool.hiofd.com/sm2-key-gen/ 在线生成
- axios 会给字符串加引号，RSA 能正常解密但 SM2 不行，需通过 `transformRequest` 处理

### 7.2 微服务版本 401 问题

微服务环境下网关返回 401 时 content-type 为 text/plain，JSON 解析逻辑无效。
建议修改后端网关配置而非前端兼容。

### 7.3 字典重复请求问题

同一页面可能多次请求同一字典（如表单+Modal+Drawer 共三次），通过 `dictRequestCache` Map 加锁保证只有第一次请求有效。

### 7.4 KeepAlive + 国际化 + Tab 切换

Placeholder 在 keepAlive 场景下语言切换或 Tab 切换时显示不变的问题，已通过 computed placeholder 解决。

### 7.5 数组参数格式化

微服务场景下区间时间选择等 Map 类型参数需要格式化 key，数组参数需要 `arrayFormat: repeat` 格式。

### 7.6 LoginExpired Modal 模式限制

不支持 modal 模式的登录过期处理，原因：
1. 重新登录后不会触发接口请求，过期页面数据为空
2. 切换租户登录后不会重新加载菜单

### 7.7 ClientID Header 绑定问题

header 中的 clientId 可能被错误绑定到实体类，这是已知问题。

---

## 8. 页面开发指南

### 8.1 新增页面步骤

1. 在 `apps/web-antd/src/views/` 下创建 `.vue` 页面文件
2. 如需 API，在对应 `api/` 子目录创建 `index.ts` 和 `model.d.ts`
3. 后端路由模式: 在后台菜单管理中配置菜单，component 字段填写相对路径如 `system/user/index`
4. 前端路由模式: 在 `router/routes/modules/` 新增文件并默认导出路由数组

### 8.2 典型页面结构

```vue
<script lang="ts" setup>
// 1. 导入 API
import { getXxxListApi, addXxxApi, updateXxxApi, deleteXxxApi } from '#/api/system/xxx';

// 2. 导入类型
import type { Xxx } from '#/api/system/xxx/model';

// 3. 字典 (如需要)
import { useDictStore } from '#/store';

// 4. 响应式数据
const dictStore = useDictStore();
const loading = ref(false);
const dataSource = ref<Xxx[]>([]);

// 5. 方法
async function fetchData() { ... }
async function handleAdd() { ... }
async function handleEdit(record: Xxx) { ... }
async function handleDelete(record: Xxx) { ... }

// 6. 生命周期
onMounted(() => {
  fetchData();
});
</script>

<template>
  <!-- 页面内容 -->
</template>
```

### 8.3 API 定义模板

```typescript
// apps/web-antd/src/api/system/xxx/index.ts
import { alovaInstance } from '#/utils/http';

export interface XxxQueryParams {
  pageNum?: number;
  pageSize?: number;
  [key: string]: any;
}

export interface Xxx {
  id: number;
  name: string;
  // ...
}

/** 获取列表 */
export function getXxxListApi(params?: XxxQueryParams) {
  return alovaInstance.Get<{ rows: Xxx[]; total: number }>('/system/xxx/list', {
    params,
  });
}

/** 新增 */
export function addXxxApi(data: Partial<Xxx>) {
  return alovaInstance.Post<void>('/system/xxx', data, { encrypt: true });
}

/** 修改 */
export function updateXxxApi(data: Partial<Xxx>) {
  return alovaInstance.Put<void>('/system/xxx', data, { encrypt: true });
}

/** 删除 */
export function deleteXxxApi(id: number) {
  return alovaInstance.Delete<void>(`/system/xxx/${id}`);
}
```

---

## 9. 关键文件索引

| 文件 | 用途 |
|------|------|
| [main.ts](apps/web-antd/src/main.ts) | 应用入口，初始化偏好设置 |
| [bootstrap.ts](apps/web-antd/src/bootstrap.ts) | 应用启动，注册插件/组件/路由 |
| [preferences.ts](apps/web-antd/src/preferences.ts) | 项目偏好配置覆盖 |
| [vite.config.ts](apps/web-antd/vite.config.ts) | Vite 配置 + 代理 |
| [router/index.ts](apps/web-antd/src/router/index.ts) | 路由实例创建 |
| [router/guard.ts](apps/web-antd/src/router/guard.ts) | 路由守卫 (权限/进度条) |
| [router/access.ts](apps/web-antd/src/router/access.ts) | 后端菜单→Vben路由转换 |
| [router/routes/core.ts](apps/web-antd/src/router/routes/core.ts) | 核心路由定义 |
| [store/auth.ts](apps/web-antd/src/store/auth.ts) | 认证 Store (登录/登出) |
| [store/dict.ts](apps/web-antd/src/store/dict.ts) | 字典 Store |
| [store/notify.ts](apps/web-antd/src/store/notify.ts) | 消息通知 Store |
| [utils/http/index.ts](apps/web-antd/src/utils/http/index.ts) | Alova HTTP 实例配置 |
| [api/core/auth.ts](apps/web-antd/src/api/core/auth.ts) | 认证 API |
| [adapter/component/index.ts](apps/web-antd/src/adapter/component/index.ts) | 表单组件适配器 |
| [layouts/basic.vue](apps/web-antd/src/layouts/basic.vue) | 基础布局 |
| [locales/index.ts](apps/web-antd/src/locales/index.ts) | 国际化配置 |

---

## 10. 指令集

### 10.1 开发阶段指令

#### 环境准备
- [ ] 确认 Node.js 版本 >= 20.19.0
- [ ] 确认 pnpm 版本 >= 10.0.0
- [ ] 执行 `pnpm install` 安装依赖
- [ ] 配置 `.env.development` 中的后端地址和端口
- [ ] 确认后端服务已启动

#### 开发流程
- [ ] `pnpm dev:antd` 启动开发服务器
- [ ] 浏览器访问 http://localhost:5666
- [ ] 使用 admin/123456 登录测试
- [ ] 修改代码后热更新自动生效

#### 代码修改检查清单
- [ ] 代码符合 ESLint 规范 (`pnpm lint`)
- [ ] TypeScript 类型正确 (`pnpm check:type`)
- [ ] 新增文本已添加国际化翻译
- [ ] API 调用使用了正确的加密配置
- [ ] 组件使用了适配器组件 (表单场景)

### 10.2 测试阶段指令

#### 单元测试
- [ ] 在 `__tests__/` 或 `*.test.ts` 中编写测试
- [ ] 执行 `pnpm test:unit` 运行
- [ ] 确保覆盖率达标

#### E2E 测试
- [ ] 在 `e2e/` 目录编写 Playwright 测试
- [ ] 执行 `pnpm test:e2e` 运行
- [ ] 检查测试报告

### 10.3 构建部署指令

#### 生产构建
- [ ] 更新版本号 (`pnpm changeset`)
- [ ] 执行 `pnpm build:antd` 构建
- [ ] 检查 `dist/` 输出目录
- [ ] 如启用压缩，确认生成了 dist.zip
- [ ] 部署到 Nginx，配置 history 模式 fallback

#### Nginx 配置参考
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /usr/share/nginx/html/vben;
    index index.html;

    location /vben {
        alias /usr/share/nginx/html/vben;
        try_files $uri $uri/ /vben/index.html;
    }

    location /prod-api {
        proxy_pass http://backend-server;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 10.4 维护阶段指令

#### 依赖更新
- [ ] 执行 `pnpm update:deps` 检查可更新的依赖
- [ ] 检查 breaking changes
- [ ] 在测试环境验证
- [ ] 更新 `pnpm-lock.yaml`

#### 日志排查
- [ ] 浏览器控制台查看错误信息
- [ ] Network 面板检查 API 请求/响应
- [ ] 检查 401 错误是否为 Token 过期
- [ ] 检查加密相关错误是否为密钥配置问题

#### 性能优化
- [ ] 使用 `pnpm build:analyze` 分析打包体积
- [ ] 检查是否有未使用的依赖
- [ ] 大型组件考虑使用异步加载
- [ ] 图片资源使用 WebP 格式或懒加载

---

## 11. 后端对接说明

### 11.1 认证接口

- **登录**: POST `/auth/login` → `{ access_token, client_id, expire_in }`
- **登出**: POST `/auth/logout`
- **获取用户信息**: GET `/system/user/getInfo` → `{ permissions[], roles[], user: {...} }`
- **获取菜单路由**: GET `/system/menu/getRouters` → `Menu[]`
- **获取租户列表**: GET `/auth/tenant/list` → `{ tenantEnabled, voList[] }`

### 11.2 响应格式

**成功响应**:
```json
{ "code": 200, "msg": "操作成功", "data": {...} }
```

**分页响应**:
```json
{ "code": 200, "msg": "查询成功", "rows": [...], "total": 100 }
```

**错误响应**:
```json
{ "code": 401, "msg": "token已过期" }
```

### 11.3 请求头

| Header | 说明 |
|--------|------|
| `Authorization` | Bearer {accessToken} |
| `ClientID` | 客户端标识 |
| `Accept-Language` | zh_CN 或 en_US |
| `Content-Language` | zh_CN 或 en_US |
| `encrypt-key` | RSA 加密的 AES 密钥 (加密请求时) |

---

*最后更新: 2026-04-07*
