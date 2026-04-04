# Effects 目录

## 概述

`effects` 目录是 Vben Admin 框架中的业务效果层,专门用于存放与轻微耦合相关的代码和逻辑。该目录位于核心层(`@core`)和应用层(`apps`)之间,承载着框架的业务功能实现,包括权限控制、布局系统、通用UI组件、业务Hooks、插件集成和HTTP请求等核心业务能力。

与核心层不同,effects 目录下的包具有以下特点:

- **状态管理集成**: 使用状态管理框架 `pinia`,包含处理副作用(如异步操作、API调用)的部分
- **用户偏好持久化**: 使用 `@vben-core/preferences` 处理用户偏好设置,涉及本地存储或浏览器缓存逻辑
- **路由导航管理**: 处理导航、页面跳转等场景,需要管理路由变化的逻辑
- **组件库依赖**: 包含与特定组件库紧密耦合或依赖大型仓库的部分
- **业务逻辑封装**: 封装了具体的业务场景解决方案

## 主要功能

- **权限控制系统**: 提供完整的权限管理、访问控制、指令式权限验证
- **布局系统**: 提供认证布局、基础布局、IFrame布局等多种布局方案
- **通用UI组件**: 提供验证码、代码编辑器、图标选择器、Markdown编辑器等业务组件
- **业务Hooks**: 提供标签页管理、水印、分页、刷新等业务级组合式函数
- **插件集成**: 集成 ECharts、VxeTable、Motion 等第三方库
- **HTTP请求封装**: 基于 Axios 的请求封装,支持拦截器、错误处理等

## 核心模块说明

### 1. access - 权限控制包 (`@vben/access`)

提供完整的权限控制解决方案,包括权限验证、访问控制、指令式权限等功能。

**核心功能**:
- `AccessControl`: 权限控制组件,基于权限配置控制元素显示
- `useAccess`: 权限管理 Hook,提供权限检查和验证能力
- `accessible`: 权限可访问性工具函数
- `directive`: 权限指令,支持 `v-access` 等指令式权限控制

**使用场景**:
- 按钮级权限控制
- 菜单权限验证
- 功能模块访问控制
- API权限拦截

### 2. common-ui - 通用UI组件包 (`@vben/common-ui`)

提供丰富的业务级通用UI组件,涵盖表单、展示、交互等多个场景。

**核心组件**:

**业务组件**:
- `captcha`: 验证码组件(滑块验证、点选验证、旋转验证等)
- `code-mirror`: 代码编辑器组件
- `icon-picker`: 图标选择器
- `markdown`: Markdown编辑器和预览组件
- `json-preview/json-viewer`: JSON数据展示组件
- `cropper`: 图片裁剪组件
- `ellipsis-text`: 文本省略组件
- `count-to`: 数字滚动组件
- `tree`: 树形组件
- `loading`: 加载组件
- `tippy`: 提示工具

**UI组件**:
- `about`: 关于页面
- `authentication`: 认证相关UI(登录、注册、找回密码等)
- `dashboard`: 仪表盘组件(分析页、工作台)
- `fallback`: 错误页面(403、404、500等)
- `profile`: 个人中心(基本设置、安全设置、通知设置等)

### 3. hooks - 业务Hooks包 (`@vben/hooks`)

提供业务级的组合式函数(Hooks),继承并扩展 `@vben-core/composables` 的能力。

**核心Hooks**:
- `useTabs`: 标签页管理(关闭、固定、刷新标签页)
- `useContentMaximize`: 内容区域最大化控制
- `useWatermark`: 页面水印功能
- `usePagination`: 响应式数据分页
- `useRefresh`: 页面刷新控制
- `useAppConfig`: 应用配置管理
- `useDesignTokens`: 设计令牌适配
- `useHoverToggle`: 悬停状态控制

**特点**:
- 响应式设计
- TypeScript类型支持
- 与框架深度集成
- 可复用性强

### 4. layouts - 布局系统包 (`@vben/layouts`)

提供完整的布局解决方案,支持多种布局模式和丰富的布局组件。

**布局类型**:
- `authentication`: 认证布局(登录、注册页面布局)
- `basic`: 基础布局(主应用布局,包含头部、侧边栏、内容区、标签栏等)
- `iframe`: IFrame布局(内嵌页面布局)
- `route-cached`: 路由缓存布局

**核心组件**:
- `header`: 头部组件
- `menu`: 菜单组件(支持混合菜单、额外菜单)
- `tabbar`: 标签栏组件
- `footer`: 底部组件
- `content`: 内容区域组件
- `copyright`: 版权信息组件

**布局小部件**:
- `check-updates`: 检查更新
- `global-search`: 全局搜索
- `lock-screen`: 锁屏功能
- `notification`: 通知中心
- `preferences`: 偏好设置面板
- `breadcrumb`: 面包屑导航
- `color-toggle`: 主题色切换
- `language-toggle`: 语言切换
- `layout-toggle`: 布局切换

### 5. plugins - 插件集成包 (`@vben/plugins`)

集成和封装第三方库,提供统一的插件使用接口。

**核心插件**:
- `echarts`: ECharts图表库集成
- `vxe-table`: VxeTable表格库集成
- `motion`: 动画库集成

**特点**:
- 统一的插件配置接口
- 按需加载支持
- TypeScript类型支持
- 与框架深度集成

### 6. request - HTTP请求包 (`@vben/request`)

基于 Axios 封装的 HTTP 请求库,提供统一的请求处理机制。

**核心功能**:
- Axios实例封装
- 请求/响应拦截器
- 错误统一处理
- 请求取消
- Mock数据支持
- 国际化错误提示

**特点**:
- 支持多实例
- 统一的错误处理
- 请求重试机制
- 支持请求缓存

## 目录结构

```
packages/effects/
├── access/                    # 权限控制包
│   ├── src/
│   │   ├── access-control.vue      # 权限控制组件
│   │   ├── accessible.ts           # 权限可访问性工具
│   │   ├── directive.ts            # 权限指令
│   │   ├── use-access.ts           # 权限Hook
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   └── tsconfig.json
├── common-ui/                 # 通用UI组件包
│   ├── src/
│   │   ├── components/             # 业务组件
│   │   │   ├── api-component/      # API组件
│   │   │   ├── captcha/            # 验证码组件
│   │   │   ├── code-mirror/        # 代码编辑器
│   │   │   ├── icon-picker/        # 图标选择器
│   │   │   ├── markdown/           # Markdown编辑器
│   │   │   ├── json-preview/       # JSON预览
│   │   │   ├── json-viewer/        # JSON查看器
│   │   │   ├── cropper/            # 图片裁剪
│   │   │   ├── loading/            # 加载组件
│   │   │   ├── tippy/              # 提示工具
│   │   │   └── ...                 # 更多组件
│   │   ├── ui/                     # UI组件
│   │   │   ├── about/              # 关于页面
│   │   │   ├── authentication/     # 认证UI
│   │   │   ├── dashboard/          # 仪表盘
│   │   │   ├── fallback/           # 错误页面
│   │   │   └── profile/            # 个人中心
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   └── tsconfig.json
├── hooks/                     # 业务Hooks包
│   ├── src/
│   │   ├── use-app-config.ts       # 应用配置Hook
│   │   ├── use-content-maximize.ts # 内容最大化Hook
│   │   ├── use-design-tokens.ts    # 设计令牌Hook
│   │   ├── use-hover-toggle.ts     # 悬停控制Hook
│   │   ├── use-pagination.ts       # 分页Hook
│   │   ├── use-refresh.ts          # 刷新Hook
│   │   ├── use-tabs.ts             # 标签页Hook
│   │   ├── use-watermark.ts        # 水印Hook
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── layouts/                   # 布局系统包
│   ├── src/
│   │   ├── authentication/         # 认证布局
│   │   ├── basic/                  # 基础布局
│   │   │   ├── content/            # 内容区
│   │   │   ├── copyright/          # 版权信息
│   │   │   ├── footer/             # 底部
│   │   │   ├── header/             # 头部
│   │   │   ├── menu/               # 菜单
│   │   │   └── tabbar/             # 标签栏
│   │   ├── iframe/                 # IFrame布局
│   │   ├── route-cached/           # 路由缓存布局
│   │   ├── widgets/                # 布局小部件
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   └── tsconfig.json
├── plugins/                   # 插件集成包
│   ├── src/
│   │   ├── echarts/                # ECharts集成
│   │   ├── vxe-table/              # VxeTable集成
│   │   ├── motion/                 # Motion动画集成
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   └── tsconfig.json
├── request/                   # HTTP请求包
│   ├── src/
│   │   ├── client.ts               # Axios客户端
│   │   ├── interceptor.ts          # 拦截器
│   │   └── index.ts                # 导出入口
│   ├── package.json
│   └── tsconfig.json
└── README.md                  # 说明文档
```

## 使用方法

### 安装依赖

在目标应用目录下添加对应的包依赖:

```bash
# 进入目标应用目录
cd apps/web-antd

# 安装权限控制包
pnpm add @vben/access

# 安装通用UI组件包
pnpm add @vben/common-ui

# 安装业务Hooks包
pnpm add @vben/hooks

# 安装布局系统包
pnpm add @vben/layouts

# 安装插件集成包
pnpm add @vben/plugins

# 安装HTTP请求包
pnpm add @vben/request
```

### 基础使用示例

#### 1. 权限控制

```typescript
import { useAccess, AccessControl } from '@vben/access';

// 使用Hook进行权限检查
const { hasAccessByCodes } = useAccess();

if (hasAccessByCodes(['user:edit'])) {
  // 有权限执行的操作
}

// 使用组件控制权限
<AccessControl :codes="['user:delete']">
  <button>删除用户</button>
</AccessControl>

// 使用指令控制权限
<button v-access="'user:create'">创建用户</button>
```

#### 2. 通用UI组件

```typescript
import { 
  IconPicker, 
  CodeMirror, 
  MarkdownEditor,
  SliderCaptcha 
} from '@vben/common-ui';

// 图标选择器
<IconPicker v-model="selectedIcon" />

// 代码编辑器
<CodeMirror v-model="code" language="javascript" />

// Markdown编辑器
<MarkdownEditor v-model="content" />

// 滑块验证码
<SliderCaptcha @success="handleCaptchaSuccess" />
```

#### 3. 业务Hooks

```typescript
import { useTabs, useWatermark, usePagination } from '@vben/hooks';

// 标签页管理
const { closeCurrentTab, refreshTab } = useTabs();
closeCurrentTab();

// 水印功能
const { setWatermark, clearWatermark } = useWatermark();
setWatermark({ content: 'Vben Admin' });

// 分页处理
const { pagination, dataList } = usePagination(fetchData, {
  pageSize: 10,
  immediate: true
});
```

#### 4. 布局系统

```typescript
import { BasicLayout, AuthenticationLayout } from '@vben/layouts';

// 基础布局
<BasicLayout>
  <router-view />
</BasicLayout>

// 认证布局
<AuthenticationLayout>
  <LoginForm />
</AuthenticationLayout>
```

#### 5. 插件使用

```typescript
// ECharts
import { useECharts } from '@vben/plugins/echarts';

const { setOptions } = useECharts(chartRef);
setOptions({
  title: { text: 'ECharts示例' },
  series: [...]
});

// VxeTable
import { VxeTable } from '@vben/plugins/vxe-table';
```

#### 6. HTTP请求

```typescript
import { requestClient } from '@vben/request';

// GET请求
const data = await requestClient.get('/api/users');

// POST请求
const result = await requestClient.post('/api/user', userData);

// 带配置的请求
const response = await requestClient.request({
  url: '/api/data',
  method: 'GET',
  params: { id: 1 }
});
```

## 与其他目录的关联关系

### 依赖关系

Effects 目录下的包依赖于核心层提供的底层能力:

- **@vben-core/shared**: 共享工具和常量
- **@vben-core/typings**: 类型定义
- **@vben-core/composables**: 核心组合式函数
- **@vben-core/preferences**: 偏好设置
- **@vben-core/ui-kit/**: UI组件库(form-ui, layout-ui, menu-ui, popup-ui, shadcn-ui)

### 被依赖关系

Effects 目录下的包被应用层广泛使用:

- **apps/web-antd**: 主应用,使用所有 effects 包
- **apps/web-ele**: Element Plus版本应用
- **apps/web-naive**: Naive UI版本应用

### 在项目架构中的定位

```
项目架构层次:
├── apps/                      # 应用层
│   ├── web-antd/             # Ant Design Vue应用
│   ├── web-ele/              # Element Plus应用
│   └── web-naive/            # Naive UI应用
├── packages/                 # 包层
│   ├── @core/               # 核心层(无副作用,纯逻辑)
│   │   ├── base/            # 基础设计
│   │   ├── composables/     # 核心组合式函数
│   │   ├── preferences/     # 偏好设置
│   │   ├── shared/          # 共享工具
│   │   ├── typings/         # 类型定义
│   │   └── ui-kit/          # UI组件库
│   ├── effects/             # 效果层(有副作用,业务逻辑)
│   │   ├── access/          # 权限控制
│   │   ├── common-ui/       # 通用UI组件
│   │   ├── hooks/           # 业务Hooks
│   │   ├── layouts/         # 布局系统
│   │   ├── plugins/         # 插件集成
│   │   └── request/         # HTTP请求
│   ├── constants/           # 业务常量
│   ├── locales/             # 国际化
│   ├── stores/              # 状态管理
│   ├── types/               # 业务类型
│   └── utils/               # 业务工具
└── scripts/                  # 脚本工具
```

**关键定位**:
- Effects 层位于核心层和应用层之间,起到承上启下的作用
- 向下依赖核心层的纯逻辑能力,向上为应用层提供业务功能
- Effects 层的包具有副作用,涉及状态管理、路由、本地存储等
- 核心层的包无副作用,专注于纯逻辑和UI组件

## 开发指南

### 何时将包放在 effects 目录

符合以下特点之一的包应该放在 effects 目录:

1. **使用 Pinia 状态管理**: 需要全局状态管理的功能
2. **涉及本地存储**: 使用 localStorage、sessionStorage 等
3. **路由导航**: 需要操作路由的功能
4. **组件库依赖**: 依赖特定组件库或大型第三方库
5. **业务场景封装**: 封装具体业务场景的解决方案
6. **副作用处理**: 包含异步操作、API调用等副作用

### 添加新的 effects 包

1. 在 `packages/effects/` 下创建新的包目录
2. 创建 `package.json`,设置包名为 `@vben/xxx`
3. 创建 `src/index.ts` 作为导出入口
4. 创建 `tsconfig.json` 配置 TypeScript
5. 在应用层添加依赖并使用

### 最佳实践

- **单一职责**: 每个 effects 包应该专注于一个特定的业务领域
- **依赖核心**: 优先使用核心层提供的能力,避免重复实现
- **类型安全**: 提供完整的 TypeScript 类型定义
- **文档完善**: 为复杂的 Hook 和组件提供详细的使用文档
- **可测试性**: 编写单元测试确保功能稳定性
- **按需加载**: 支持按需导入,减少打包体积

## 版本信息

- **当前版本**: 5.7.0
- **许可证**: MIT
- **仓库地址**: [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
