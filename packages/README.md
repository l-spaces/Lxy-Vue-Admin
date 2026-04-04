# Packages 目录说明文档

## 目录

- [Packages 目录说明文档](#packages-目录说明文档)
  - [目录](#目录)
  - [1. 概述](#1-概述)
    - [1.1 目录定位](#11-目录定位)
    - [1.2 主要功能](#12-主要功能)
    - [1.3 包列表](#13-包列表)
  - [2. Constants（常量包）](#2-constants常量包)
    - [2.1 功能说明](#21-功能说明)
    - [2.2 核心模块](#22-核心模块)
      - [dict-enum.ts - 字典枚举](#dict-enumts---字典枚举)
    - [2.3 使用示例](#23-使用示例)
  - [3. Access（权限管理包）](#3-access权限管理包)
    - [3.1 架构设计](#31-架构设计)
    - [3.2 核心组件](#32-核心组件)
      - [AccessControl 组件](#accesscontrol-组件)
    - [3.3 核心函数](#33-核心函数)
      - [useAccess](#useaccess)
    - [3.4 使用示例](#34-使用示例)
  - [4. Common UI（通用 UI 组件包）](#4-common-ui通用-ui-组件包)
    - [4.1 组件列表](#41-组件列表)
    - [4.2 核心组件详解](#42-核心组件详解)
      - [Page 组件](#page-组件)
      - [Captcha 验证码组件族](#captcha-验证码组件族)
    - [4.3 UI 模块](#43-ui-模块)
      - [About - 关于页面](#about---关于页面)
      - [Authentication - 认证模块](#authentication---认证模块)
      - [Dashboard - 仪表盘](#dashboard---仪表盘)
      - [Profile - 个人中心](#profile---个人中心)
  - [5. Hooks（钩子函数包）](#5-hooks钩子函数包)
    - [5.1 核心 Hooks](#51-核心-hooks)
    - [5.2 useTabs 详解](#52-usetabs-详解)
    - [5.3 使用示例](#53-使用示例)
  - [6. Layouts（布局组件包）](#6-layouts布局组件包)
    - [6.1 布局结构](#61-布局结构)
    - [6.2 核心模块](#62-核心模块)
      - [Basic Layout](#basic-layout)
      - [Menu 模块](#menu-模块)
    - [6.3 Widget 组件](#63-widget-组件)
  - [7. Stores（状态管理包）](#7-stores状态管理包)
    - [7.1 Store 模块](#71-store-模块)
    - [7.2 useAccessStore](#72-useaccessstore)
    - [7.3 useUserStore](#73-useuserstore)
    - [7.4 使用示例](#74-使用示例)
  - [8. Preferences（偏好设置包）](#8-preferences偏好设置包)
    - [8.1 功能说明](#81-功能说明)
    - [8.2 核心 API](#82-核心-api)
  - [9. Types（类型定义包）](#9-types类型定义包)
    - [9.1 类型导出](#91-类型导出)
  - [10. Utils（工具库包）](#10-utils工具库包)
    - [10.1 加密模块](#101-加密模块)
      - [加密类层次结构](#加密类层次结构)
      - [核心接口](#核心接口)
      - [加密实现](#加密实现)
    - [10.2 辅助函数](#102-辅助函数)
    - [10.3 核心工具详解](#103-核心工具详解)
      - [generateMenus](#generatemenus)
      - [generateRoutesByBackend](#generateroutesbybackend)
  - [11. Locales（国际化包）](#11-locales国际化包)
    - [11.1 核心 API](#111-核心-api)
    - [11.2 使用示例](#112-使用示例)
  - [12. Icons（图标包）](#12-icons图标包)
    - [12.1 功能说明](#121-功能说明)
  - [13. Styles（样式包）](#13-styles样式包)
    - [13.1 样式导出](#131-样式导出)
  - [14. 依赖关系](#14-依赖关系)
    - [14.1 包依赖图](#141-包依赖图)
    - [14.2 外部依赖](#142-外部依赖)
  - [15. 开发指南](#15-开发指南)
    - [15.1 添加新的工具包](#151-添加新的工具包)
    - [15.2 扩展现有包](#152-扩展现有包)
      - [添加新的 Hook](#添加新的-hook)
      - [添加新的加密算法](#添加新的加密算法)
  - [16. 常见问题](#16-常见问题)
    - [Q1: 如何添加新的字典枚举？](#q1-如何添加新的字典枚举)
    - [Q2: 如何实现自定义权限判断逻辑？](#q2-如何实现自定义权限判断逻辑)
    - [Q3: 如何添加新的 UI 组件？](#q3-如何添加新的-ui-组件)
    - [Q4: 如何扩展加密算法？](#q4-如何扩展加密算法)
    - [Q5: 如何添加新的 Store 模块？](#q5-如何添加新的-store-模块)

---

## 1. 概述

### 1.1 目录定位

`packages` 目录是 Vben Admin Monorepo 项目的**核心功能包集合**，包含了项目的所有可复用功能模块。这些包被设计为独立的、可复用的模块，供 `apps` 目录下的具体应用使用。

### 1.2 主要功能

- **组件库**: 提供通用的 UI 组件、布局组件、业务组件
- **工具库**: 提供加密、路由、菜单生成等工具函数
- **状态管理**: 提供 Pinia Store 定义和管理
- **类型定义**: 提供统一的 TypeScript 类型定义
- **国际化**: 提供多语言支持
- **权限管理**: 提供基于角色和权限码的访问控制

### 1.3 包列表

| 包名 | 版本 | 核心功能 | 依赖核心包 |
|------|------|----------|------------|
| `@vben/constants` | 5.7.0 | 项目常量定义 | @vben-core/shared |
| `@vben/access` | 5.7.0 | 权限管理 | @vben/preferences, @vben/stores, @vben/types, @vben/utils |
| `@vben/common-ui` | 5.7.0 | 通用 UI 组件 | 多个@vben-core/* 包 |
| `@vben/hooks` | 5.7.0 | 组合式函数 | @vben-core/composables, @vben/preferences |
| `@vben/layouts` | 5.7.0 | 布局组件 | 多个@vben-core/* 包 |
| `@vben/locales` | 5.7.0 | 国际化 | @intlify/core-base, vue-i18n |
| `@vben/icons` | 5.7.0 | 图标组件 | @vben-core/icons, @vben-core/shadcn-ui |
| `@vben/preferences` | 5.7.0 | 偏好设置 | @vben-core/preferences |
| `@vben/stores` | 5.7.0 | 状态管理 | pinia, @vben-core/shared |
| `@vben/types` | 5.7.0 | 类型定义 | @vben-core/typings |
| `@vben/utils` | 5.7.0 | 工具函数 | @vben-core/shared, crypto-js |
| `@vben/styles` | 5.7.0 | 样式文件 | @vben-core/design |

---

## 2. Constants（常量包）

### 2.1 功能说明

`@vben/constants` 包提供了项目中使用的各种常量定义，包括字典枚举、系统常量等。

### 2.2 核心模块

**文件路径：** `packages/constants/src/`

#### dict-enum.ts - 字典枚举

```typescript
export const DictEnum = {
  SYS_COMMON_STATUS: 'sys_common_status',      // 系统通用状态
  SYS_DEVICE_TYPE: 'sys_device_type',          // 设备类型
  SYS_GRANT_TYPE: 'sys_grant_type',            // 授权类型
  SYS_NORMAL_DISABLE: 'sys_normal_disable',    // 正常禁用
  SYS_NOTICE_STATUS: 'sys_notice_status',      // 通知状态
  SYS_NOTICE_TYPE: 'sys_notice_type',          // 通知类型
  SYS_OPER_TYPE: 'sys_oper_type',              // 操作类型
  SYS_OSS_ACCESS_POLICY: 'oss_access_policy',  // OSS 权限桶类型
  SYS_SHOW_HIDE: 'sys_show_hide',              // 显示状态
  SYS_USER_SEX: 'sys_user_sex',                // 性别
  SYS_YES_NO: 'sys_yes_no',                    // 是否
  WF_BUSINESS_STATUS: 'wf_business_status',    // 业务状态
  WF_FORM_TYPE: 'wf_form_type',                // 表单类型
  WF_TASK_STATUS: 'wf_task_status',            // 任务状态
} as const;

export type DictEnumKey = keyof typeof DictEnum;
```

### 2.3 使用示例

```typescript
import { DictEnum } from '@vben/constants';

// 使用字典枚举
const statusDict = DictEnum.SYS_COMMON_STATUS;
const userType = DictEnum.SYS_USER_SEX;
```

---

## 3. Access（权限管理包）

### 3.1 架构设计

`@vben/access` 包提供了完整的权限管理解决方案，支持基于角色和权限码的访问控制。

**依赖关系：**
- `@vben/preferences`: 偏好设置
- `@vben/stores`: 状态管理
- `@vben/types`: 类型定义
- `@vben/utils`: 工具函数
- `vue`: 视图层

### 3.2 核心组件

#### AccessControl 组件

**文件：** `access-control.vue`

**功能：** 权限控制组件，根据用户角色或权限码控制组件的显示/隐藏

**Props：**
```typescript
interface Props {
  /**
   * 权限码或角色列表
   * @default []
   */
  codes?: string[];
  
  /**
   * 控制方式：'role' | 'code'
   * @default 'role'
   */
  type?: 'code' | 'role';
}
```

**使用方式：**
```vue
<!-- 基于角色控制 -->
<AccessControl :codes="['admin']" type="role">
  <button>仅管理员可见</button>
</AccessControl>

<!-- 基于权限码控制 -->
<AccessControl :codes="['system:user:add']" type="code">
  <button>有添加用户权限可见</button>
</AccessControl>
```

### 3.3 核心函数

#### useAccess

**文件：** `use-access.ts`

**功能：** 提供权限判断的组合式函数

**返回值：**
```typescript
{
  accessMode: ComputedRef<'frontend' | 'backend'>,  // 权限模式
  hasAccessByRoles: (roles: string[]) => boolean,   // 基于角色判断
  hasAccessByCodes: (codes: string[]) => boolean,   // 基于权限码判断
  toggleAccessMode: () => Promise<void>             // 切换权限模式
}
```

**核心逻辑：**
1. **角色判断**：检查用户角色是否包含指定角色，超级管理员 (`superadmin`) 拥有所有权限
2. **权限码判断**：检查用户权限码是否包含指定权限码，`*:*:*` 表示管理员权限

### 3.4 使用示例

```typescript
import { useAccess } from '@vben/access';

const { hasAccessByCodes, hasAccessByRoles } = useAccess();

// 检查角色
if (hasAccessByRoles(['admin', 'manager'])) {
  console.log('用户是管理员或经理');
}

// 检查权限码
if (hasAccessByCodes(['system:user:add'])) {
  console.log('用户有添加用户的权限');
}
```

---

## 4. Common UI（通用 UI 组件包）

### 4.1 组件列表

**文件路径：** `packages/effects/common-ui/src/components/`

| 组件名 | 功能说明 |
|--------|----------|
| `ApiComponent` | API 驱动的动态组件 |
| `Captcha` | 验证码组件（点选、滑动、旋转、平移） |
| `CodeMirror` | 代码编辑器 |
| `ColPage` | 页面分列布局 |
| `CountTo` | 数字动画组件 |
| `Cropper` | 图片裁剪组件 |
| `EllipsisText` | 文本省略组件 |
| `IconPicker` | 图标选择器 |
| `JsonPreview` | JSON 预览组件 |
| `JsonViewer` | JSON 查看器 |
| `Loading` | 加载组件 |
| `Markdown` | Markdown 编辑器/预览器 |
| `Page` | 页面容器组件 |
| `Resize` | 尺寸变化监听组件 |
| `Tippy` | 提示框组件 |
| `Tree` | 树形组件 |

### 4.2 核心组件详解

#### Page 组件

**文件：** `page/page.vue`

**功能：** 页面容器组件，提供标准的页面布局

**Props：**
```typescript
interface PageProps {
  /**
   * 是否显示面包屑
   * @default false
   */
  showBreadCrumb?: boolean;
  
  /**
   * 是否显示标签页
   * @default false
   */
  showTabBar?: boolean;
  
  /**
   * 页面标题
   */
  title?: string;
  
  /**
   * 是否显示内容
   * @default true
   */
  showContent?: boolean;
}
```

#### Captcha 验证码组件族

**支持类型：**
1. **PointSelectionCaptcha**: 点选验证码
2. **SliderCaptcha**: 滑动验证码
3. **SliderRotateCaptcha**: 旋转验证码
4. **SliderTranslateCaptcha**: 平移验证码

### 4.3 UI 模块

**文件路径：** `packages/effects/common-ui/src/ui/`

#### About - 关于页面
```typescript
export { default as AboutModal } from './about/about.vue';
```

#### Authentication - 认证模块
- `AuthTitle`: 认证页面标题
- `CodeLogin`: 验证码登录
- `DingdingLogin`: 钉钉登录
- `ForgetPassword`: 忘记密码
- `Login`: 登录表单
- `LoginExpiredModal`: 登录过期弹窗
- `QrcodeLogin`: 二维码登录
- `Register`: 注册表单
- `ThirdPartyLogin`: 第三方登录

#### Dashboard - 仪表盘
- `Analysis`: 分析页面
  - `AnalysisChartCard`: 分析图表卡片
  - `AnalysisChartsTabs`: 分析图表标签页
  - `AnalysisOverview`: 分析概览
- `Workbench`: 工作台
  - `WorkbenchHeader`: 工作台头部
  - `WorkbenchProject`: 工作台项目
  - `WorkbenchQuickNav`: 工作台快捷导航
  - `WorkbenchTodo`: 工作台待办
  - `WorkbenchTrends`: 工作台动态

#### Profile - 个人中心
- `Profile`: 个人中心主组件
- `BaseSetting`: 基础设置
- `PasswordSetting`: 密码设置
- `SecuritySetting`: 安全设置
- `NotificationSetting`: 通知设置

---

## 5. Hooks（钩子函数包）

### 5.1 核心 Hooks

**文件路径：** `packages/effects/hooks/src/`

| Hook | 功能说明 |
|------|----------|
| `useAppConfig` | 应用配置管理 |
| `useContentMaximize` | 内容区域最大化切换 |
| `useDesignTokens` | 设计令牌管理 |
| `useHoverToggle` | 悬停切换 |
| `usePagination` | 分页管理 |
| `useRefresh` | 页面刷新 |
| `useTabs` | 标签页管理 |
| `useWatermark` | 水印管理 |

### 5.2 useTabs 详解

**文件：** `use-tabs.ts`

**功能：** 提供完整的标签页操作能力

**返回值方法：**

```typescript
{
  // 关闭操作
  closeAllTabs: () => Promise<void>,           // 关闭所有标签页
  closeCurrentTab: (tab?: RouteLocationNormalized) => Promise<void>,  // 关闭当前标签页
  closeLeftTabs: (tab?: RouteLocationNormalized) => Promise<void>,    // 关闭左侧标签页
  closeRightTabs: (tab?: RouteLocationNormalized) => Promise<void>,   // 关闭右侧标签页
  closeOtherTabs: (tab?: RouteLocationNormalized) => Promise<void>,   // 关闭其他标签页
  closeTabByKey: (key: string) => Promise<void>,                      // 通过 key 关闭标签页
  
  // 标签页状态操作
  pinTab: (tab?: RouteLocationNormalized) => Promise<void>,           // 固定标签页
  unpinTab: (tab?: RouteLocationNormalized) => Promise<void>,         // 取消固定标签页
  toggleTabPin: (tab?: RouteLocationNormalized) => Promise<void>,     // 切换固定状态
  
  // 其他操作
  refreshTab: (name?: string) => Promise<void>,                       // 刷新标签页
  openTabInNewWindow: (tab?: RouteLocationNormalized) => Promise<void>, // 新窗口打开
  setTabTitle: (title: ComputedRef<string> | string) => Promise<void>, // 设置标签页标题
  resetTabTitle: () => Promise<void>,                                 // 重置标签页标题
  
  // 状态查询
  getTabDisableState: (tab?: RouteLocationNormalized) => {
    disabledCloseAll: boolean,
    disabledCloseCurrent: boolean,
    disabledCloseLeft: boolean,
    disabledCloseRight: boolean,
    disabledCloseOther: boolean,
    disabledRefresh: boolean
  }
}
```

### 5.3 使用示例

```typescript
import { useTabs } from '@vben/hooks';

const {
  closeCurrentTab,
  refreshTab,
  setTabTitle,
  closeAllTabs,
} = useTabs();

// 关闭当前标签页
await closeCurrentTab();

// 刷新标签页
await refreshTab();

// 设置标签页标题（静态）
await setTabTitle('新的标题');

// 设置标签页标题（动态）
await setTabTitle(computed(() => t('page.title')));

// 关闭所有标签页
await closeAllTabs();
```

---

## 6. Layouts（布局组件包）

### 6.1 布局结构

**文件路径：** `packages/effects/layouts/src/`

```
layouts/
├── authentication/     # 认证布局
├── basic/             # 基础布局
│   ├── content/       # 内容区域
│   ├── copyright/     # 版权信息
│   ├── footer/        # 页脚
│   ├── header/        # 头部
│   ├── menu/          # 菜单
│   └── tabbar/        # 标签栏
├── iframe/            # iframe 布局
├── route-cached/      # 路由缓存
└── widgets/           # 小组件
```

### 6.2 核心模块

#### Basic Layout

**文件：** `basic/layout.vue`

**功能：** 基础布局组件，组合各个布局模块

**包含模块：**
- `LayoutHeader`: 顶部导航栏
- `LayoutSidebar`: 侧边栏
- `LayoutContent`: 主内容区
- `LayoutTabbar`: 标签栏
- `LayoutFooter`: 页脚

#### Menu 模块

**文件：** `basic/menu/`

**组件：**
- `Menu.vue`: 主菜单组件
- `ExtraMenu.vue`: 额外菜单组件
- `MixedMenu.vue`: 混合菜单组件

**Hooks：**
- `useExtraMenu`: 额外菜单逻辑
- `useMixedMenu`: 混合菜单逻辑
- `useNavigation`: 导航逻辑

### 6.3 Widget 组件

**文件路径：** `layouts/src/widgets/`

| Widget | 功能说明 |
|--------|----------|
| `CheckUpdates` | 检查更新 |
| `GlobalSearch` | 全局搜索 |
| `LockScreen` | 锁屏功能 |
| `Notification` | 通知中心 |
| `Preferences` | 偏好设置面板 |
| `Breadcrumb` | 面包屑导航 |
| `ColorToggle` | 主题色切换 |
| `LanguageToggle` | 语言切换 |
| `LayoutToggle` | 布局切换 |

---

## 7. Stores（状态管理包）

### 7.1 Store 模块

**文件路径：** `packages/stores/src/modules/`

| Store | 功能说明 | Pinia ID |
|-------|----------|----------|
| `useAccessStore` | 访问权限管理 | core-access |
| `useUserStore` | 用户信息管理 | core-user |
| `useTabbarStore` | 标签栏管理 | core-tabbar |
| `useTimezoneStore` | 时区管理 | core-timezone |

### 7.2 useAccessStore

**文件：** `modules/access.ts`

**State：**
```typescript
interface AccessState {
  accessCodes: string[];           // 权限码列表
  accessMenus: MenuRecordRaw[];    // 可访问的菜单列表
  accessRoutes: RouteRecordRaw[];  // 可访问的路由列表
  accessToken: string | null;      // 登录 accessToken
  isAccessChecked: boolean;        // 是否已检查权限
  isLockScreen: boolean;           // 是否锁屏
  lockScreenPassword?: string;     // 锁屏密码
  loginExpired: boolean;           // 登录是否过期
  refreshToken: string | null;     // 刷新 token
}
```

**Actions：**
```typescript
{
  // 菜单相关
  getMenuByPath: (path: string) => MenuRecordRaw | undefined,
  setAccessMenus: (menus: MenuRecordRaw[]) => void,
  
  // 路由相关
  setAccessRoutes: (routes: RouteRecordRaw[]) => void,
  
  // 权限码相关
  setAccessCodes: (codes: string[]) => void,
  
  // Token 相关
  setAccessToken: (token: string | null) => void,
  setRefreshToken: (token: string | null) => void,
  
  // 锁屏相关
  lockScreen: (password: string) => void,
  unlockScreen: () => void,
  
  // 状态相关
  setIsAccessChecked: (checked: boolean) => void,
  setLoginExpired: (expired: boolean) => void,
}
```

### 7.3 useUserStore

**文件：** `modules/user.ts`

**State：**
```typescript
interface AccessState {
  userInfo: BasicUserInfo | null;  // 用户信息
  userRoles: string[];             // 用户角色
}

interface BasicUserInfo {
  userId: number | string;   // 用户 ID
  username: string;          // 用户名
  realName: string;          // 昵称
  avatar: string;            // 头像
  email: string;             // 邮箱
  roles: string[];           // 角色列表
  permissions: string[];     // 权限列表
}
```

**Actions：**
```typescript
{
  setUserInfo: (userInfo: BasicUserInfo | null) => void,
  setUserRoles: (roles: string[]) => void,
}
```

### 7.4 使用示例

```typescript
import { useAccessStore, useUserStore } from '@vben/stores';

const accessStore = useAccessStore();
const userStore = useUserStore();

// 设置用户信息
userStore.setUserInfo({
  userId: 1,
  username: 'admin',
  realName: '管理员',
  avatar: '/avatar.png',
  email: 'admin@example.com',
  roles: ['admin'],
  permissions: ['*:*:*'],
});

// 设置权限码
accessStore.setAccessCodes(['system:user:add', 'system:user:edit']);

// 锁屏
accessStore.lockScreen('123456');

// 解锁
accessStore.unlockScreen();
```

---

## 8. Preferences（偏好设置包）

### 8.1 功能说明

`@vben/preferences` 包提供了应用偏好设置的管理功能，包括主题、布局、语言等配置。

**依赖：**
- `@vben-core/preferences`: 核心偏好设置
- `@vben-core/typings`: 类型定义

### 8.2 核心 API

**文件：** `src/index.ts`

```typescript
// 导出所有核心偏好设置 API
export * from '@vben-core/preferences';

// 定义偏好设置覆盖
function defineOverridesPreferences(
  preferences: DeepPartial<Preferences>
): DeepPartial<Preferences>;
```

**偏好设置类型：**
```typescript
interface Preferences {
  app: {
    accessMode: 'frontend' | 'backend';  // 权限模式
    colorWeak: boolean;                   // 色弱模式
    contentMaximize: boolean;             // 内容最大化
    locale: string;                       // 语言
    theme: string;                        // 主题
  };
  theme: {
    color: string;                        // 主题色
    mode: 'light' | 'dark';               // 明暗模式
  };
  layout: {
    mode: string;                         // 布局模式
    sidebar: {
      collapsed: boolean;                 // 侧边栏折叠
      width: number;                      // 侧边栏宽度
    };
  };
}
```

---

## 9. Types（类型定义包）

### 9.1 类型导出

**文件：** `packages/types/src/index.ts`

```typescript
export * from '@vben-core/typings';
```

**核心类型：**
- `App`: 应用相关类型
- `MenuRecordRaw`: 菜单记录类型
- `RouteMeta`: 路由元信息类型
- `RouteRecordRaw`: 路由记录类型
- `Tabbar`: 标签栏相关类型
- `User`: 用户相关类型

**全局类型扩展：**
```typescript
// global.d.ts
declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    icon?: string;
    hideInMenu?: boolean;
    affixTab?: boolean;
    order?: number;
    // ... 更多元信息
  }
}
```

---

## 10. Utils（工具库包）

### 10.1 加密模块

**文件路径：** `packages/utils/src/encryption/`

#### 加密类层次结构

```
BaseAsymmetricEncryption (非对称加密抽象类)
├── RSAEncryption (RSA 加密实现)
└── SM2Encryption (国密 SM2 加密实现)

BaseSymmetricEncryption (对称加密抽象类)
├── AESEncryption (AES 加密实现)
└── SM4Encryption (国密 SM4 加密实现)
```

#### 核心接口

```typescript
interface EncryptionOptions {
  privateKey: string;  // 私钥
  publicKey: string;   // 公钥
}

abstract class BaseAsymmetricEncryption {
  protected privateKey: string;
  protected publicKey: string;
  
  constructor(options: EncryptionOptions);
  abstract decrypt(encryptedData: string): string;
  abstract encrypt(data: string): string;
}

abstract class BaseSymmetricEncryption {
  abstract decrypt(data: string, key: string): string;
  abstract encrypt(data: string, key: string): string;
}
```

#### 加密实现

**AES 加密：**
```typescript
import { AESEncryption } from '@vben/utils';

const aes = new AESEncryption();
const encrypted = aes.encrypt('敏感数据', '密钥');
const decrypted = aes.decrypt(encrypted, '密钥');
```

**RSA 加密：**
```typescript
import { RSAEncryption } from '@vben/utils';

const rsa = new RSAEncryption({
  publicKey: '公钥',
  privateKey: '私钥',
});

const encrypted = rsa.encrypt('敏感数据');
const decrypted = rsa.decrypt(encrypted);
```

**国密 SM2/SM4：**
```typescript
import { SM2Encryption, SM4Encryption } from '@vben/utils';

// SM2 非对称加密
const sm2 = new SM2Encryption({ publicKey, privateKey });

// SM4 对称加密
const sm4 = new SM4Encryption();
```

### 10.2 辅助函数

**文件路径：** `packages/utils/src/helpers/`

| 函数 | 功能说明 |
|------|----------|
| `enumOptions` | 枚举选项转换 |
| `findMenuByPath` | 根据路径查找菜单 |
| `generateMenus` | 生成菜单列表 |
| `generateRoutesByBackend` | 后端方式生成路由 |
| `generateRoutesByFrontend` | 前端方式生成路由 |
| `getPopupContainer` | 获取弹出层容器 |
| `mergeRouteModules` | 合并路由模块 |
| `mitt` | 事件总线 |
| `request` | 请求封装 |
| `resetRoutes` | 重置路由 |
| `safe` | 安全访问嵌套对象 |
| `tree` | 树形数据处理 |
| `unmountGlobalLoading` | 卸载全局 loading |
| `uuid` | 生成 UUID |

### 10.3 核心工具详解

#### generateMenus

**文件：** `generate-menus.ts`

**功能：** 根据路由配置生成菜单列表

**参数：**
```typescript
function generateMenus(
  routes: RouteRecordRaw[],  // 路由配置列表
  router: Router             // Vue Router 实例
): MenuRecordRaw[]
```

**处理逻辑：**
1. 将路由列表转换为以 name 为键的对象映射
2. 使用 `mapTree` 转换路由为菜单结构
3. 处理子菜单的父子关系
4. 使用 `sortTree` 按 order 排序
5. 使用 `filterTree` 过滤隐藏的菜单项

**使用示例：**
```typescript
import { generateMenus } from '@vben/utils';
import { router } from '@/router';

const menus = generateMenus(routes, router);
```

#### generateRoutesByBackend

**文件：** `generate-routes-backend.ts`

**功能：** 后端方式动态生成路由

**参数：**
```typescript
interface GenerateMenuAndRoutesOptions {
  fetchMenuListAsync?: () => Promise<RouteRecordStringComponent[]>;
  layoutMap?: ComponentRecordType;
  pageMap?: ComponentRecordType;
  forbiddenComponent?: Component;
}
```

**处理流程：**
1. 异步获取后端菜单列表
2. 将字符串组件路径转换为实际组件
3. 处理布局组件映射
4. 处理页面组件映射
5. 对 `menuVisibleWithForbidden` 的路由替换为 403 组件

**使用示例：**
```typescript
import { generateRoutesByBackend } from '@vben/utils';

const routes = await generateRoutesByBackend({
  fetchMenuListAsync: () => api.getMenuList(),
  layoutMap: {
    BasicLayout: () => import('@/layouts/basic/index.vue'),
  },
  pageMap: {
    '/dashboard/analysis': () => import('@/views/dashboard/analysis.vue'),
  },
  forbiddenComponent: () => import('@/views/_core/fallback/forbidden.vue'),
});
```

---

## 11. Locales（国际化包）

### 11.1 核心 API

**文件：** `packages/locales/src/index.ts`

```typescript
// 核心函数
export const $t: (key: string) => string;           // 翻译函数
export const $te: (key: string) => boolean;         // 检查翻译是否存在
export const i18n: I18n;                            // i18n 实例
export const loadLocaleMessages: (locale: string) => Promise<void>;
export const loadLocalesMap: () => Promise<Record<string, any>>;
export const loadLocalesMapFromDir: (dir: string) => Promise<Record<string, any>>;
export const setupI18n: (options?: LocaleSetupOptions) => Promise<void>;

// 类型导出
export type {
  ImportLocaleFn,
  LocaleSetupOptions,
  SupportedLanguagesType,
} from './typing';

// Vue I18n 导出
export { I18nT, useI18n } from 'vue-i18n';
export type { Locale } from 'vue-i18n';
```

### 11.2 使用示例

```typescript
import { $t, $te, setupI18n, useI18n } from '@vben/locales';

// 初始化 i18n
await setupI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en',
});

// 使用翻译函数
const title = $t('page.dashboard.title');

// 检查翻译是否存在
if ($te('common.button.submit')) {
  console.log('翻译存在');
}

// 在组件中使用
const { t } = useI18n();
const buttonText = t('button.save');
```

---

## 12. Icons（图标包）

### 12.1 功能说明

`@vben/icons` 包提供了图标组件和图标管理功能。

**依赖：**
- `@vben-core/icons`: 核心图标组件
- `@vben-core/shadcn-ui`: UI 组件库

**导出：**
```typescript
export * from './iconify';           // Iconify 图标
export * from './iconify-offline';   // 离线 Iconify 图标
export { default as EmptyIcon } from './icons/empty-icon.vue';
export * from './svg';               // SVG 图标
export { VbenIcon } from '@vben-core/shadcn-ui';
```

**使用示例：**
```vue
<template>
  <VbenIcon icon="mdi:home" />
  <EmptyIcon />
</template>
```

---

## 13. Styles（样式包）

### 13.1 样式导出

**文件：** `packages/styles/src/index.ts`

```typescript
// 导出不同 UI 库的样式
export default `
@import '@vben-core/design/css/global.css';
`;

// 单独导出各 UI 库样式
export { default as antd } from './antd/index.css';
export { default as antdvNext } from './antdv-next/index.css';
export { default as ele } from './ele/index.css';
export { default as naive } from './naive/index.css';
export { default as global } from './global/index.scss';
```

**使用示例：**
```typescript
// 在 main.ts 中导入
import styles from '@vben/styles';

// 或在 Vite 配置中导入
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@vben/styles/global';`,
      },
    },
  },
});
```

---

## 14. 依赖关系

### 14.1 包依赖图

```
@vben/common-ui
├── @vben-core/design
├── @vben-core/form-ui
├── @vben-core/popup-ui
├── @vben-core/preferences
├── @vben-core/shadcn-ui
├── @vben/constants
├── @vben/hooks
├── @vben/icons
├── @vben/locales
├── @vben/preferences
├── @vben/types
└── @vueuse/core

@vben/layouts
├── @vben-core/composables
├── @vben-core/design
├── @vben-core/form-ui
├── @vben-core/layout-ui
├── @vben-core/menu-ui
├── @vben-core/popup-ui
├── @vben-core/shadcn-ui
├── @vben-core/shared
├── @vben-core/tabs-ui
├── @vben/constants
├── @vben/hooks
├── @vben/icons
├── @vben/locales
├── @vben/preferences
├── @vben/stores
├── @vben/types
├── @vben/utils
└── @vueuse/core

@vben/utils
├── @vben-core/shared
├── @vben-core/typings
├── crypto-js
├── file-type
├── jsencrypt
└── sm-crypto

@vben/stores
├── @vben-core/preferences
├── @vben-core/shared
├── @vben-core/typings
├── pinia
├── pinia-plugin-persistedstate
└── secure-ls
```

### 14.2 外部依赖

**核心依赖：**
- `vue`: ^3.5.x
- `vue-router`: ^4.x
- `pinia`: ^2.x
- `@vueuse/core`: ^12.x
- `@vueuse/integrations`: ^12.x

**工具库：**
- `crypto-js`: ^4.2.0 (加密)
- `jsencrypt`: ^3.5.4 (RSA 加密)
- `sm-crypto`: ^0.3.13 (国密加密)
- `file-type`: ^19.5.0 (文件类型检测)

**UI 相关：**
- `codemirror`: 代码编辑器
- `tippy.js`: 提示框
- `vditor`: Markdown 编辑器
- `qrcode`: 二维码生成
- `json-bigint`: 大数字 JSON 解析

---

## 15. 开发指南

### 15.1 添加新的工具包

**步骤：**

1. **创建包目录：**
```bash
mkdir -p packages/new-package/src
```

2. **创建 package.json：**
```json
{
  "name": "@vben/new-package",
  "version": "5.7.0",
  "license": "MIT",
  "type": "module",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "dependencies": {
    "@vben-core/shared": "workspace:*"
  }
}
```

3. **创建 TypeScript 配置：**
```json
{
  "extends": "@vben/tsconfig/web.json",
  "compilerOptions": {
    "outDir": "dist",
    "baseUrl": "."
  },
  "include": ["src"]
}
```

4. **导出模块：**
```typescript
// src/index.ts
export * from './module';
```

### 15.2 扩展现有包

#### 添加新的 Hook

```typescript
// packages/effects/hooks/src/use-new-feature.ts
import { ref } from 'vue';

export function useNewFeature() {
  const state = ref('initial');
  
  function updateState(newState: string) {
    state.value = newState;
  }
  
  return {
    state,
    updateState,
  };
}
```

**导出：**
```typescript
// packages/effects/hooks/src/index.ts
export * from './use-new-feature';
```

#### 添加新的加密算法

```typescript
// packages/utils/src/encryption/impl/new-encryption.ts
import { BaseSymmetricEncryption } from '../base';

export class NewEncryption extends BaseSymmetricEncryption {
  encrypt(data: string, key: string): string {
    // 实现加密逻辑
    return encryptedData;
  }
  
  decrypt(data: string, key: string): string {
    // 实现解密逻辑
    return originalData;
  }
}
```

**导出：**
```typescript
// packages/utils/src/encryption/index.ts
export * from './impl/new-encryption';
```

---

## 16. 常见问题

### Q1: 如何添加新的字典枚举？

**A:** 在 `packages/constants/src/dict-enum.ts` 中添加：

```typescript
export const DictEnum = {
  // ... 现有枚举
  NEW_DICT_TYPE: 'new_dict_type',
} as const;
```

### Q2: 如何实现自定义权限判断逻辑？

**A:** 扩展 `useAccess` 函数：

```typescript
// packages/effects/access/src/use-access.ts
function hasAccessByCustom(condition: () => boolean) {
  return condition();
}

return {
  // ... 现有方法
  hasAccessByCustom,
};
```

### Q3: 如何添加新的 UI 组件？

**A:** 在 `packages/effects/common-ui/src/components/` 下创建：

```vue
<!-- NewComponent.vue -->
<script lang="ts" setup>
interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <div>{{ title }}</div>
</template>
```

**导出：**
```typescript
// packages/effects/common-ui/src/components/index.ts
export { default as NewComponent } from './new-component.vue';
```

### Q4: 如何扩展加密算法？

**A:** 继承基础加密类：

```typescript
import { BaseAsymmetricEncryption } from '@vben/utils';

export class CustomEncryption extends BaseAsymmetricEncryption {
  encrypt(data: string): string {
    // 自定义加密实现
  }
  
  decrypt(encryptedData: string): string {
    // 自定义解密实现
  }
}
```

### Q5: 如何添加新的 Store 模块？

**A:** 在 `packages/stores/src/modules/` 下创建：

```typescript
// new-module.ts
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useNewStore = defineStore('core-new', {
  state: () => ({
    data: null,
  }),
  actions: {
    setData(data: any) {
      this.data = data;
    },
  },
});

// 热更新
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useNewStore, hot));
}
```

**导出：**
```typescript
// packages/stores/src/modules/index.ts
export * from './new-module';
```

---

**文档版本：** v1.0  
**最后更新：** 2026-04-04  
**维护者：** Vben Admin Team
