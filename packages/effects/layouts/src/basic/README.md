# Basic Layout

基础布局组件，提供完整的后台管理系统页面布局解决方案，支持多种布局模式、菜单配置、标签页管理等功能。

## 概述

`basic` 目录包含 Vben Admin 框架的核心布局组件，是整个应用的主布局容器。它整合了头部导航、侧边菜单、内容区域、标签页、页脚等核心布局元素，支持多种布局模式的动态切换，并与偏好设置系统深度集成，实现布局的个性化配置。

## 目录结构

```
packages/effects/layouts/src/basic/
├── content/                      # 内容区域组件
│   ├── content-spinner.vue       # 内容加载动画
│   ├── content.vue               # 内容容器组件
│   ├── index.ts                  # 导出入口
│   └── use-content-spinner.ts    # 加载动画逻辑
│
├── copyright/                    # 版权信息组件
│   ├── copyright.vue             # 版权信息展示
│   └── index.ts
│
├── footer/                       # 页脚组件
│   ├── footer.vue                # 页脚容器
│   └── index.ts
│
├── header/                       # 头部区域组件
│   ├── header.vue                # 头部容器组件
│   └── index.ts
│
├── menu/                         # 菜单组件
│   ├── extra-menu.vue            # 扩展菜单（双列布局）
│   ├── index.ts
│   ├── menu.vue                  # 主菜单组件
│   ├── mixed-menu.vue            # 混合菜单组件
│   ├── use-extra-menu.ts         # 扩展菜单逻辑
│   ├── use-mixed-menu.ts         # 混合菜单逻辑
│   └── use-navigation.ts         # 导航逻辑
│
├── tabbar/                       # 标签页组件
│   ├── index.ts
│   ├── tabbar.vue                # 标签页容器
│   └── use-tabbar.ts             # 标签页逻辑
│
├── index.ts                      # 主入口
├── layout.vue                    # 布局主组件
└── README.md
```

## 核心组件说明

### 1. BasicLayout - 主布局组件

布局的核心容器组件，整合所有布局元素，支持多种布局模式。

#### 支持的布局模式

| 布局类型 | 说明 |
|---------|------|
| `sidebar-nav` | 侧边菜单布局（默认） |
| `header-nav` | 顶部菜单布局 |
| `mixed-nav` | 侧边 & 顶部菜单混合布局 |
| `sidebar-mixed-nav` | 侧边混合菜单布局（双列） |
| `header-sidebar-nav` | 顶部通栏 + 侧边导航 |
| `header-mixed-nav` | 头部混合导航模式 |
| `full-content` | 全屏内容布局 |

#### 主要功能

- **布局切换**: 支持运行时动态切换布局模式
- **主题适配**: 自动适配亮色/暗色主题
- **响应式设计**: 自动检测移动端并调整布局
- **偏好设置集成**: 与偏好设置系统深度集成
- **插槽扩展**: 提供丰富的插槽支持自定义扩展

#### 使用示例

```vue
<script setup lang="ts">
import { BasicLayout } from '@vben/layouts';
</script>

<template>
  <BasicLayout
    @clear-preferences-and-logout="handleLogout"
    @click-logo="handleClickLogo"
  >
    <template #logo-text>
      <span>自定义 Logo 文字</span>
    </template>
    <template #user-dropdown>
      <UserDropdown />
    </template>
    <template #notification>
      <Notification />
    </template>
    <template #lock-screen>
      <LockScreen />
    </template>
    <template #extra>
      <CustomWidget />
    </template>
  </BasicLayout>
</template>
```

---

### 2. LayoutHeader - 头部区域组件

头部导航区域组件，支持自定义插槽和内置工具组件。

#### 插槽排序规则

**左侧插槽 (`header-left-n`)**
- 排序范围：0-19 为自定义区域，20 以后为面包屑区域
- 命名方式：`header-left-0`、`header-left-1` ... `header-left-19`

**右侧插槽 (`header-right-n`)**
- 排序范围和内置组件位置：

| 排序范围 | 组件/用途 |
|---------|----------|
| 0-49 | 自定义插槽区域 |
| 50 | 全局搜索 (`global-search`) |
| 51-59 | 自定义插槽区域 |
| 60 | 主题切换 (`theme-toggle`) |
| 61-69 | 自定义插槽区域 |
| 70 | 语言切换 (`language-toggle`) |
| 71-79 | 自定义插槽区域 |
| 80 | 全屏切换 (`fullscreen`) |
| 81-89 | 自定义插槽区域 |
| 90 | 通知中心 (`notification`) |
| 91-149 | 自定义插槽区域 |
| 150 | 用户下拉菜单 (`user-dropdown`) |
| 151+ | 自定义插槽区域 |

#### 内置工具组件

| 组件 | 说明 | 条件 |
|------|------|------|
| `refresh` | 刷新按钮 | `preferences.widget.refresh` |
| `global-search` | 全局搜索 | `preferences.widget.globalSearch` |
| `preferences` | 偏好设置按钮 | `preferencesButtonPosition.header` |
| `theme-toggle` | 主题切换 | `preferences.widget.themeToggle` |
| `language-toggle` | 语言切换 | `preferences.widget.languageToggle` |
| `timezone` | 时区切换 | `preferences.widget.timezone` |
| `fullscreen` | 全屏切换 | `preferences.widget.fullscreen` |
| `notification` | 通知中心 | `preferences.widget.notification` |

#### 使用示例

```vue
<template>
  <LayoutHeader theme="light">
    <template #breadcrumb>
      <Breadcrumb />
    </template>
    <template #menu>
      <HeaderMenu />
    </template>
    <template #header-left-0>
      <CustomLeftWidget />
    </template>
    <template #header-right-10>
      <CustomRightWidget />
    </template>
    <template #user-dropdown>
      <UserDropdown />
    </template>
  </LayoutHeader>
</template>
```

---

### 3. LayoutMenu - 菜单组件

菜单导航组件，支持垂直和水平两种模式。

#### 主要功能

- **多级菜单**: 支持无限层级嵌套
- **折叠模式**: 支持菜单折叠/展开
- **手风琴模式**: 同级菜单互斥展开
- **国际化**: 自动翻译菜单名称
- **路由跳转**: 自动处理路由导航

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `accordion` | `boolean` | `true` | 是否开启手风琴模式 |
| `collapse` | `boolean` | `false` | 是否折叠 |
| `collapseShowTitle` | `boolean` | `false` | 折叠时是否显示标题 |
| `defaultActive` | `string` | - | 默认激活菜单 |
| `menus` | `MenuRecordRaw[]` | `[]` | 菜单数据 |
| `mode` | `'horizontal' \| 'vertical'` | `'vertical'` | 菜单模式 |
| `rounded` | `boolean` | `true` | 是否圆角风格 |
| `theme` | `'light' \| 'dark'` | `'light'` | 主题 |

#### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `select` | `(key: string, mode?: string)` | 菜单选中事件 |
| `open` | `(key: string, path: string[])` | 子菜单展开事件 |

---

### 4. LayoutMixedMenu - 混合菜单组件

用于混合布局模式的一级菜单组件，支持双列布局。

#### 主要功能

- **一级菜单展示**: 仅展示顶级菜单
- **悬停展开**: 鼠标悬停展开子菜单
- **点击切换**: 点击切换当前模块

---

### 5. LayoutExtraMenu - 扩展菜单组件

双列布局模式下的扩展菜单组件，展示二级及以下菜单。

#### 主要功能

- **子菜单展示**: 展示当前模块的子菜单
- **折叠支持**: 支持折叠/展开
- **主题适配**: 独立的主题配置

---

### 6. LayoutTabbar - 标签页组件

多标签页管理组件，支持标签页的打开、关闭、固定等功能。

#### 主要功能

- **标签页管理**: 打开、关闭、刷新、固定
- **拖拽排序**: 支持标签页拖拽排序
- **右键菜单**: 丰富的右键菜单操作
- **滚动支持**: 鼠标滚轮滚动切换标签
- **持久化**: 标签页状态持久化存储

#### 右键菜单选项

| 操作 | 说明 |
|------|------|
| 关闭 | 关闭当前标签页 |
| 固定/取消固定 | 固定标签页（不可关闭） |
| 最大化/还原 | 最大化内容区域 |
| 刷新 | 刷新当前页面 |
| 新窗口打开 | 在新窗口打开当前页面 |
| 关闭左侧 | 关闭左侧所有标签页 |
| 关闭右侧 | 关闭右侧所有标签页 |
| 关闭其他 | 关闭其他所有标签页 |
| 关闭所有 | 关闭所有标签页 |

---

### 7. LayoutContent - 内容区域组件

主内容区域组件，负责页面内容的渲染和缓存。

#### 主要功能

- **路由视图**: 渲染当前路由组件
- **KeepAlive**: 页面缓存支持
- **过渡动画**: 页面切换过渡效果
- **IFrame 支持**: 内嵌页面支持
- **DOM 缓存**: 特殊页面的 DOM 缓存

---

### 8. LayoutFooter - 页脚组件

页脚区域组件，用于展示版权信息等。

#### 使用示例

```vue
<LayoutFooter>
  <Copyright
    company-name="My Company"
    company-site-link="https://example.com"
    date="2024"
    icp="京ICP备xxxxxxxx号"
    icp-link="https://beian.miit.gov.cn"
  />
</LayoutFooter>
```

---

### 9. Copyright - 版权信息组件

版权信息展示组件，支持 ICP 备案号显示。

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `companyName` | `string` | `'Vben Admin'` | 公司名称 |
| `companySiteLink` | `string` | `''` | 公司网站链接 |
| `date` | `string` | `'2024'` | 版权年份 |
| `icp` | `string` | `''` | ICP 备案号 |
| `icpLink` | `string` | `''` | ICP 备案链接 |

## 核心 Hooks

### useMixedMenu - 混合菜单逻辑

处理混合布局模式下的菜单状态管理。

```typescript
const {
  handleMenuSelect,    // 菜单选中处理
  handleMenuOpen,      // 菜单展开处理
  headerActive,        // 头部菜单激活路径
  headerMenus,         // 头部菜单数据
  sidebarActive,       // 侧边菜单激活路径
  sidebarMenus,        // 侧边菜单数据
  mixHeaderMenus,      // 混合头部菜单
  sidebarVisible,      // 侧边栏是否可见
} = useMixedMenu();
```

### useExtraMenu - 扩展菜单逻辑

处理双列布局模式下的扩展菜单状态管理。

```typescript
const {
  extraActiveMenu,         // 扩展菜单激活路径
  extraMenus,              // 扩展菜单数据
  handleDefaultSelect,     // 默认选中处理
  handleMenuMouseEnter,    // 鼠标移入处理
  handleMixedMenuSelect,   // 混合菜单选中处理
  handleSideMouseLeave,    // 鼠标移出处理
  sidebarExtraVisible,     // 扩展菜单是否可见
} = useExtraMenu();
```

### useTabbar - 标签页逻辑

处理标签页的状态管理和操作。

```typescript
const {
  createContextMenus,    // 创建右键菜单
  currentActive,         // 当前激活标签
  currentTabs,           // 当前标签列表
  handleClick,           // 标签点击处理
  handleClose,           // 标签关闭处理
} = useTabbar();
```

## 插槽列表

### BasicLayout 插槽

| 插槽名 | 说明 |
|--------|------|
| `logo-text` | Logo 文字区域 |
| `user-dropdown` | 用户下拉菜单 |
| `notification` | 通知中心 |
| `timezone` | 时区选择器 |
| `lock-screen` | 锁屏组件 |
| `extra` | 额外内容区域 |
| `header-left-n` | 头部左侧自定义插槽 |
| `header-right-n` | 头部右侧自定义插槽 |

## 依赖关系

```
basic/
    │
    ├──► @vben-core/layout-ui      # 基础布局组件
    │
    ├──► @vben-core/menu-ui        # 菜单组件
    │
    ├──► @vben-core/tabs-ui        # 标签页组件
    │
    ├──► @vben-core/shadcn-ui      # UI 基础组件
    │
    ├──► @vben/preferences         # 偏好设置
    │
    ├──► @vben/stores              # 状态管理
    │
    ├──► @vben/locales             # 国际化
    │
    └──► @vben/hooks               # 组合式函数
```

## 与其他目录的关系

```
basic/
    │
    ├──► ../authentication/        # 认证布局（登录页面）
    │
    ├──► ../widgets/               # 布局小部件
    │       ├── breadcrumb/        # 面包屑
    │       ├── global-search/     # 全局搜索
    │       ├── lock-screen/       # 锁屏
    │       ├── notification/      # 通知中心
    │       ├── preferences/       # 偏好设置面板
    │       ├── theme-toggle/      # 主题切换
    │       └── user-dropdown/     # 用户下拉菜单
    │
    ├──► ../hooks/                 # 布局相关 Hooks
    │
    ├──► ../iframe/                # IFrame 页面支持
    │
    └──► ../route-cached/          # 路由缓存支持
```

## 使用方法

### 在应用中使用

```typescript
import { BasicLayout } from '@vben/layouts';

// 在路由配置中使用
const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
    ],
  },
];
```

### 自定义头部插槽

```vue
<BasicLayout>
  <template #header-left-0>
    <CustomButton />
  </template>
  <template #header-right-10>
    <CustomWidget />
  </template>
</BasicLayout>
```

### 监听布局事件

```vue
<BasicLayout
  @clear-preferences-and-logout="handleClearAndLogout"
  @click-logo="handleClickLogo"
>
</BasicLayout>
```

## 注意事项

### 插槽排序

- 头部插槽按照数字索引排序，数字越小越靠前
- 左侧插槽索引 0-19 为自定义区域，20 以后为面包屑区域
- 右侧插槽索引 0-49 为自定义区域，内置组件占用特定位置

### 菜单国际化

- 菜单名称会自动通过 `$t()` 函数进行翻译
- 确保菜单名称对应的国际化 key 已配置

### 标签页缓存

- 标签页缓存依赖路由 `meta.keepAlive` 配置
- 固定标签页（affixTab）会在应用启动时自动添加

### 布局切换

- 切换布局模式时会自动调整菜单和侧边栏状态
- 移动端会强制使用侧边菜单布局
