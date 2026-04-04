# @vben-core/preferences

用户偏好设置管理模块，提供应用配置的存储、读取、更新和持久化功能。

## 概述

`@vben-core/preferences` 是 Vben Admin 框架的偏好设置管理核心模块，负责管理用户个性化配置，包括主题、布局、侧边栏、标签页、面包屑等各类偏好设置。支持配置持久化、响应式更新、主题切换等功能。

## 目录结构

```
packages/@core/preferences/
├── __tests__/                    # 单元测试
│   ├── __snapshots__/
│   │   └── config.test.ts.snap
│   ├── config.test.ts
│   └── preferences.test.ts
├── src/
│   ├── config.ts                 # 默认偏好设置配置
│   ├── constants.ts              # 常量定义（主题预设、时区等）
│   ├── index.ts                  # 主入口
│   ├── preferences.ts            # 偏好设置管理器
│   ├── types.ts                  # TypeScript 类型定义
│   ├── update-css-variables.ts   # CSS 变量更新
│   └── use-preferences.ts        # 组合式函数
├── package.json
├── tsconfig.json
└── tsdown.config.ts
```

## 核心模块说明

### 1. PreferencesManager - 偏好设置管理器

偏好设置的核心管理类，提供完整的配置管理能力。

```typescript
import { preferencesManager } from '@vben-core/preferences';

// 初始化偏好设置
await preferencesManager.initPreferences({
  namespace: 'my-app',
  overrides: {
    app: { name: 'My Application' },
  },
});

// 获取当前偏好设置（只读）
const preferences = preferencesManager.getPreferences();

// 获取初始偏好设置
const initial = preferencesManager.getInitialPreferences();

// 更新偏好设置
preferencesManager.updatePreferences({
  theme: { mode: 'dark' },
});

// 重置偏好设置
preferencesManager.resetPreferences();

// 清除缓存
preferencesManager.clearCache();
```

#### 主要方法

| 方法 | 说明 | 参数 |
|------|------|------|
| `initPreferences` | 初始化偏好设置 | `{ namespace, overrides }` |
| `getPreferences` | 获取当前偏好设置（只读） | - |
| `getInitialPreferences` | 获取初始偏好设置 | - |
| `updatePreferences` | 更新偏好设置 | `DeepPartial<Preferences>` |
| `resetPreferences` | 重置为初始状态 | - |
| `clearCache` | 清除所有缓存 | - |

---

### 2. usePreferences - 组合式函数

提供响应式的偏好设置访问和计算属性。

```typescript
import { usePreferences } from '@vben-core/preferences';

const {
  // 基础属性
  isDark,              // 是否暗黑模式
  isMobile,            // 是否移动端
  theme,               // 当前主题 ('dark' | 'light')
  locale,              // 当前语言
  layout,              // 布局方式

  // 布局判断
  isFullContent,       // 是否全屏内容模式
  isSideNav,           // 是否侧边导航模式
  isSideMixedNav,      // 是否侧边混合模式
  isHeaderNav,         // 是否头部导航模式
  isHeaderMixedNav,    // 是否头部混合导航模式
  isMixedNav,          // 是否混合导航模式
  isSideMode,          // 是否包含侧边导航

  // 功能状态
  keepAlive,           // 是否开启 keep-alive
  sidebarCollapsed,    // 侧边栏是否折叠
  contentIsMaximize,   // 内容是否最大化

  // 快捷键
  globalSearchShortcutKey,    // 全局搜索快捷键是否启用
  globalLogoutShortcutKey,    // 全局注销快捷键是否启用
  globalLockScreenShortcutKey, // 锁屏快捷键是否启用

  // 登录页面布局
  authPanelLeft,       // 登录面板在左侧
  authPanelRight,      // 登录面板在右侧
  authPanelCenter,     // 登录面板居中

  // 其他
  diffPreference,      // 偏好设置变化差异
  preferencesButtonPosition, // 偏好设置按钮位置
} = usePreferences();
```

---

### 3. 类型定义

偏好设置包含以下配置模块：

#### AppPreferences - 应用配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `accessMode` | `AccessModeType` | `'frontend'` | 权限模式 |
| `authPageLayout` | `AuthPageLayoutType` | `'panel-right'` | 登录页面布局 |
| `colorGrayMode` | `boolean` | `false` | 灰色模式 |
| `colorWeakMode` | `boolean` | `false` | 色弱模式 |
| `compact` | `boolean` | `false` | 紧凑模式 |
| `contentCompact` | `ContentCompactType` | `'wide'` | 内容紧凑类型 |
| `defaultHomePath` | `string` | `'/analytics'` | 默认首页路径 |
| `dynamicTitle` | `boolean` | `true` | 动态标题 |
| `layout` | `LayoutType` | `'sidebar-nav'` | 布局方式 |
| `locale` | `SupportedLanguagesType` | `'zh-CN'` | 语言 |
| `name` | `string` | `'Vben Admin'` | 应用名称 |
| `watermark` | `boolean` | `false` | 水印开关 |
| `zIndex` | `number` | `200` | z-index 基础值 |

#### ThemePreferences - 主题配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `builtinType` | `BuiltinThemeType` | `'default'` | 内置主题类型 |
| `buttonWaveMode` | `string` | `'Default'` | 按钮波纹模式 |
| `colorPrimary` | `string` | `'hsl(215 100% 54%)'` | 主题色 |
| `colorSuccess` | `string` | `'hsl(144 57% 58%)'` | 成功色 |
| `colorWarning` | `string` | `'hsl(42 84% 61%)'` | 警告色 |
| `colorDestructive` | `string` | `'hsl(348 100% 61%)'` | 错误色 |
| `mode` | `ThemeModeType` | `'auto'` | 主题模式 |
| `radius` | `string` | `'0.5'` | 圆角大小 |
| `fontSize` | `number` | `16` | 字体大小 |

#### SidebarPreferences - 侧边栏配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `collapsed` | `boolean` | `false` | 是否折叠 |
| `collapsedButton` | `boolean` | `true` | 折叠按钮可见 |
| `enable` | `boolean` | `true` | 是否启用 |
| `width` | `number` | `224` | 侧边栏宽度 |
| `collapseWidth` | `number` | `60` | 折叠宽度 |
| `draggable` | `boolean` | `true` | 菜单拖拽 |

#### TabbarPreferences - 标签页配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enable` | `boolean` | `true` | 是否启用 |
| `height` | `number` | `38` | 标签页高度 |
| `keepAlive` | `boolean` | `true` | 缓存功能 |
| `persist` | `boolean` | `true` | 持久化 |
| `styleType` | `TabsStyleType` | `'chrome'` | 标签页风格 |
| `showIcon` | `boolean` | `true` | 显示图标 |
| `showRefresh` | `boolean` | `true` | 显示刷新按钮 |
| `showMaximize` | `boolean` | `true` | 显示最大化按钮 |

#### HeaderPreferences - 顶栏配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enable` | `boolean` | `true` | 是否启用 |
| `height` | `number` | `50` | 顶栏高度 |
| `hidden` | `boolean` | `false` | 是否隐藏 |
| `mode` | `LayoutHeaderModeType` | `'fixed'` | 显示模式 |

#### BreadcrumbPreferences - 面包屑配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enable` | `boolean` | `true` | 是否启用 |
| `showHome` | `boolean` | `false` | 显示首页图标 |
| `showIcon` | `boolean` | `true` | 显示图标 |
| `styleType` | `BreadcrumbStyleType` | `'normal'` | 风格类型 |

---

### 4. 内置主题预设

```typescript
import { BUILT_IN_THEME_PRESETS, COLOR_PRESETS } from '@vben-core/preferences';

// 所有内置主题
BUILT_IN_THEME_PRESETS: [
  { type: 'default', color: 'hsl(215 100% 54%)' },      // 默认蓝
  { type: 'violet', color: 'hsl(245 82% 67%)' },        // 紫罗兰
  { type: 'pink', color: 'hsl(347 77% 60%)' },          // 粉色
  { type: 'yellow', color: 'hsl(42 84% 61%)' },         // 黄色
  { type: 'sky-blue', color: 'hsl(231 98% 65%)' },      // 天蓝
  { type: 'green', color: 'hsl(161 90% 43%)' },         // 绿色
  { type: 'zinc', color: 'hsl(240 5% 26%)' },           // 锌灰
  { type: 'deep-green', color: 'hsl(181 84% 32%)' },    // 深绿
  { type: 'deep-blue', color: 'hsl(211 91% 39%)' },     // 深蓝
  { type: 'orange', color: 'hsl(18 89% 40%)' },         // 橙色
  { type: 'rose', color: 'hsl(0 75% 42%)' },            // 玫瑰红
  { type: 'neutral', color: 'hsl(0 0% 25%)' },          // 中性灰
  { type: 'slate', color: 'hsl(215 25% 27%)' },         // 石板灰
  { type: 'gray', color: 'hsl(217 19% 27%)' },          // 灰色
  { type: 'custom', color: '' },                        // 自定义
]

// 常用颜色预设（前7个）
COLOR_PRESETS: [...]
```

---

### 5. CSS 变量更新

偏好设置变更时自动更新 CSS 变量：

```typescript
// 自动处理的 CSS 变量
--primary          // 主题色
--success          // 成功色
--warning          // 警告色
--destructive      // 错误色
--radius           // 圆角
--font-size-base   // 基础字体大小
--menu-font-size   // 菜单字体大小
```

## 使用方法

### 安装

```bash
pnpm add @vben-core/preferences
```

### 初始化

在应用入口初始化偏好设置：

```typescript
import { initPreferences } from '@vben-core/preferences';

// 初始化
await initPreferences({
  namespace: 'vben-admin',
  overrides: {
    app: {
      name: 'My App',
      defaultHomePath: '/dashboard',
    },
    theme: {
      mode: 'light',
      colorPrimary: 'hsl(215 100% 54%)',
    },
  },
});
```

### 在组件中使用

```vue
<script setup lang="ts">
import { usePreferences, updatePreferences } from '@vben-core/preferences';

const { isDark, isMobile, layout } = usePreferences();

// 切换主题
const toggleTheme = () => {
  updatePreferences({
    theme: { mode: isDark.value ? 'light' : 'dark' },
  });
};

// 切换侧边栏
const toggleSidebar = () => {
  updatePreferences({
    sidebar: { collapsed: !sidebarCollapsed.value },
  });
};
</script>

<template>
  <div :class="{ dark: isDark }">
    <p>当前布局: {{ layout }}</p>
    <p>移动端: {{ isMobile }}</p>
    <button @click="toggleTheme">切换主题</button>
  </div>
</template>
```

### 导出 API

```typescript
import {
  // 管理器
  preferencesManager,
  
  // 偏好设置对象
  preferences,
  
  // 方法
  initPreferences,
  getPreferences,
  updatePreferences,
  resetPreferences,
  clearCache,
  
  // 组合式函数
  usePreferences,
  
  // 常量
  BUILT_IN_THEME_PRESETS,
  COLOR_PRESETS,
  DEFAULT_TIME_ZONE_OPTIONS,
  
  // 类型
  type Preferences,
  type AppPreferences,
  type ThemePreferences,
  // ...
} from '@vben-core/preferences';
```

## 特性

### 1. 持久化存储

- 自动保存到 localStorage
- 支持命名空间隔离
- 防抖保存优化性能

### 2. 响应式更新

- 基于 Vue 响应式系统
- 自动更新 CSS 变量
- 支持监听系统主题变化

### 3. 移动端适配

- 自动检测移动端
- 响应式断点监听
- 移动端布局自动切换

### 4. 主题系统

- 15 种内置主题
- 支持自定义主题色
- 自动生成颜色变量
- 支持亮色/暗色/自动模式

## 依赖关系

```
@vben-core/preferences
    │
    ├──► @vben-core/shared      # 存储管理、工具函数
    │
    ├──► @vben-core/typings     # 类型定义
    │
    └──► @vueuse/core           # 响应式工具
```

## 与其他目录的关系

```
@vben-core/preferences
    │
    ├──► apps/*                 # 应用层初始化和使用
    │
    ├──► @vben-core/ui-kit      # UI 组件读取偏好设置
    │
    └──► packages/effects       # 效果包读取配置
```

## 注意事项

- **初始化顺序**: 必须在使用其他 API 前调用 `initPreferences`
- **命名空间**: 不同应用应使用不同命名空间避免冲突
- **响应式**: `getPreferences()` 返回只读对象，需通过 `updatePreferences` 修改
- **主题切换**: 主题变更会自动更新 CSS 变量和 DOM 类名
