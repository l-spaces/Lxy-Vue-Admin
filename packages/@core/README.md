# @vben-core

Vben Admin 框架的核心基础设施层，提供底层 SDK、UI 组件库和共享工具。该目录后续完善后，可能会迁移出去或者发布到 npm，**请勿将任何业务逻辑和业务包放在该目录**。

## 概述

`@vben-core` 是 Vben Admin 框架的核心技术基础设施，采用模块化架构设计，将基础功能划分为四个主要模块：基础共享包、组合式函数、偏好设置管理和 UI 组件库。作为整个框架的技术基石，它不包含任何业务逻辑，仅提供纯技术层面的基础设施支持，确保框架的可维护性和可扩展性。

## 目录结构

```
packages/@core/
├── base/                         # 基础共享包
│   ├── design/                   # 设计系统（CSS 变量、BEM 样式）
│   ├── icons/                    # 图标系统（Lucide、Iconify）
│   ├── shared/                   # 共享工具库（工具函数、缓存、颜色）
│   ├── typings/                  # TypeScript 类型定义
│   └── README.md
│
├── composables/                  # Vue 组合式函数集合
│   ├── src/
│   │   ├── use-simple-locale/    # 国际化模块
│   │   ├── use-is-mobile.ts      # 移动端检测
│   │   ├── use-layout-style.ts   # 布局样式计算
│   │   ├── use-namespace.ts      # BEM 命名空间
│   │   ├── use-priority-value.ts # 优先级值获取
│   │   ├── use-scroll-lock.ts    # 滚动锁定
│   │   └── use-sortable.ts       # 拖拽排序
│   └── README.md
│
├── preferences/                  # 用户偏好设置管理
│   ├── src/
│   │   ├── config.ts             # 默认配置
│   │   ├── constants.ts          # 常量定义
│   │   ├── preferences.ts        # 偏好设置管理器
│   │   ├── types.ts              # 类型定义
│   │   ├── update-css-variables.ts # CSS 变量更新
│   │   └── use-preferences.ts    # 组合式函数
│   └── README.md
│
├── ui-kit/                       # UI 组件库集合
│   ├── form-ui/                  # 表单组件包
│   ├── layout-ui/                # 布局组件包
│   ├── menu-ui/                  # 菜单组件包
│   ├── popup-ui/                 # 弹窗组件包
│   ├── shadcn-ui/                # 基础 UI 组件包
│   └── README.md
│
└── README.md
```

## 核心模块说明

### 1. @vben-core/base - 基础共享包

框架的基础设施层，包含设计系统、图标系统、共享工具和类型定义等核心模块。**该模块不依赖任何 workspace 依赖**，确保独立性和可移植性。

#### 子包列表

| 子包 | 包名 | 说明 |
|------|------|------|
| design | `@vben-core/design` | 设计系统，提供 CSS 变量驱动的主题系统和 BEM 样式工具 |
| icons | `@vben-core/icons` | 图标系统，基于 Lucide 和 Iconify 的图标组件 |
| shared | `@vben-core/shared` | 共享工具库，包含工具函数、缓存管理、颜色处理等 |
| typings | `@vben-core/typings` | TypeScript 类型定义，提供框架通用的类型声明 |

#### 主要功能

- **设计令牌**: CSS 变量驱动的主题系统，支持亮色/暗色主题切换
- **BEM 样式**: SCSS 实现的 BEM 命名规范工具
- **工具函数**: 类名合并、日期处理、树形数据处理、对象差异比较等
- **缓存管理**: localStorage/sessionStorage 封装，支持数据过期
- **颜色处理**: 颜色格式转换、主题色计算
- **类型定义**: 菜单记录、标签页、布局类型等核心类型

```typescript
import { cn, formatDate, treeToList } from '@vben-core/shared/utils';
import { StorageManager } from '@vben-core/shared/cache';
import { colorToHsla, generatorColor } from '@vben-core/shared/color';
import { IconifyIcon, createIcon } from '@vben-core/icons';
import type { MenuRecordRaw } from '@vben-core/typings';
```

详细文档请参阅 [base/README.md](./base/README.md)。

---

### 2. @vben-core/composables - 组合式函数集合

Vue 3 组合式函数库，封装了布局计算、响应式检测、命名空间管理、国际化、滚动锁定、拖拽排序等常用功能。

#### 导出函数

| 函数 | 说明 |
|------|------|
| `useIsMobile` | 移动端检测，基于 Tailwind CSS 断点 |
| `useLayoutContentStyle` | 布局内容区域样式计算 |
| `useLayoutHeaderStyle` | 布局头部高度控制 |
| `useLayoutFooterStyle` | 布局底部高度控制 |
| `useNamespace` | BEM 命名空间生成器 |
| `usePriorityValue` | 优先级值获取（属性透传场景） |
| `useScrollLock` | 页面滚动锁定 |
| `useSimpleLocale` | 轻量级国际化支持 |
| `useSortable` | 基于 Sortable.js 的拖拽排序 |

#### 使用示例

```typescript
import { useIsMobile, useNamespace, useSimpleLocale } from '@vben-core/composables';

const { isMobile } = useIsMobile();
const ns = useNamespace('button');
const { $t, setSimpleLocale } = useSimpleLocale();

ns.b();              // 'vben-button'
ns.e('icon');        // 'vben-button__icon'
ns.m('primary');     // 'vben-button--primary'
```

详细文档请参阅 [composables/README.md](./composables/README.md)。

---

### 3. @vben-core/preferences - 偏好设置管理

用户偏好设置管理模块，负责管理用户个性化配置，支持配置持久化、响应式更新、主题切换等功能。

#### 核心功能

- **配置管理**: 应用、主题、侧边栏、标签页、面包屑等配置
- **持久化存储**: 自动保存到 localStorage，支持命名空间隔离
- **响应式更新**: 基于 Vue 响应式系统，自动更新 CSS 变量
- **主题系统**: 15 种内置主题，支持自定义主题色
- **移动端适配**: 自动检测移动端，响应式断点监听

#### 使用示例

```typescript
import { preferencesManager, usePreferences, updatePreferences } from '@vben-core/preferences';

// 初始化
await preferencesManager.initPreferences({
  namespace: 'my-app',
  overrides: { app: { name: 'My Application' } },
});

// 获取偏好设置
const { isDark, isMobile, layout, theme } = usePreferences();

// 更新偏好设置
updatePreferences({ theme: { mode: 'dark' } });
```

详细文档请参阅 [preferences/README.md](./preferences/README.md)。

---

### 4. @vben-core/ui-kit - UI 组件库集合

UI 组件集合目录，采用模块化架构设计，将不同类型的 UI 组件进行分类管理，提供统一的组件接口和一致的开发体验。

#### 子包列表

| 子包 | 包名 | 说明 |
|------|------|------|
| form-ui | `@vben-core/form-ui` | 表单组件，支持 Schema 驱动、字段依赖、VeeValidate + Zod 验证 |
| layout-ui | `@vben-core/layout-ui` | 布局组件，支持 7 种布局模式（侧边菜单、顶部菜单、混合导航等） |
| menu-ui | `@vben-core/menu-ui` | 菜单组件，支持多级菜单、折叠、徽标、主题切换 |
| popup-ui | `@vben-core/popup-ui` | 弹窗组件，包含 Modal、Drawer、Alert |
| shadcn-ui | `@vben-core/shadcn-ui` | 基础 UI 组件，基于 shadcn/ui 和 Reka UI 封装 |

#### 支持的布局模式

| 布局类型 | 说明 |
|---------|------|
| `sidebar-nav` | 侧边菜单布局（默认） |
| `header-nav` | 顶部菜单布局 |
| `mixed-nav` | 侧边 & 顶部菜单混合布局 |
| `sidebar-mixed-nav` | 侧边混合菜单布局 |
| `header-sidebar-nav` | 顶部通栏 + 侧边导航 |
| `header-mixed-nav` | 头部混合导航模式 |
| `full-content` | 全屏内容布局 |

#### 使用示例

```vue
<script setup lang="ts">
import { VbenAdminLayout } from '@vben-core/layout-ui';
import { useVbenForm, z } from '@vben-core/form-ui';
import { useVbenModal } from '@vben-core/popup-ui';
import { VbenButton, VbenInput } from '@vben-core/shadcn-ui';
</script>
```

详细文档请参阅 [ui-kit/README.md](./ui-kit/README.md)。

## 模块依赖关系

```
┌─────────────────────────────────────────────────────────────────┐
│                        @vben-core/base                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│  │  design  │ │  icons   │ │  shared  │ │ typings  │           │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    @vben-core/composables                        │
│  useIsMobile │ useNamespace │ useScrollLock │ useSortable ...   │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│  @vben-core/     │ │  @vben-core/     │ │  @vben-core/     │
│   preferences    │ │     ui-kit       │ │                  │
│                  │ │                  │ │                  │
│ PreferencesMgr   │ │ form-ui          │ │                  │
│ usePreferences   │ │ layout-ui        │ │                  │
│                  │ │ menu-ui          │ │                  │
│                  │ │ popup-ui         │ │                  │
│                  │ │ shadcn-ui        │ │                  │
└──────────────────┘ └──────────────────┘ └──────────────────┘
              │               │
              └───────┬───────┘
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                         应用层 (apps/*)                          │
│                   web-antd / web-ele / web-naive                 │
└─────────────────────────────────────────────────────────────────┘
```

## 与其他目录的关系

```
@vben-core
    │
    ├──► apps/*                    # 应用层使用所有核心模块
    │       ├── web-antd           # Antdv Next 应用
    │       ├── web-ele            # Element Plus 应用
    │       └── web-naive          # Naive UI 应用
    │
    ├──► packages/effects          # 效果包使用共享工具和组合式函数
    │
    ├──► packages/stores           # 状态管理使用类型定义和工具函数
    │
    └──► packages locales          # 国际化资源与 useSimpleLocale 配合
```

## 设计原则

### 1. 零业务依赖

核心模块不包含任何业务逻辑，保持纯技术基础设施定位，确保可独立发布和复用。

### 2. 模块化架构

各子包独立发布，可根据需要按需引入，避免不必要的依赖，支持 Tree-shaking。

### 3. 类型安全

完整的 TypeScript 类型定义，提供良好的开发体验和类型提示，所有模块均导出类型。

### 4. 框架解耦

UI 组件库通过统一的封装层，实现与具体 UI 框架（Ant Design、Element Plus、Naive UI）的解耦。

### 5. 响应式优先

组合式函数返回值均为响应式引用或计算属性，与 Vue 3 响应式系统无缝集成。

### 6. 主题适配

所有组件支持亮色/暗色主题切换，与偏好设置系统无缝集成，通过 CSS 变量实现主题切换。

## 快速开始

### 安装依赖

```bash
# 安装所有核心模块
pnpm add @vben-core/shared @vben-core/design @vben-core/icons @vben-core/typings \
         @vben-core/composables @vben-core/preferences \
         @vben-core/form-ui @vben-core/layout-ui @vben-core/menu-ui \
         @vben-core/popup-ui @vben-core/shadcn-ui
```

### 初始化应用

```typescript
import { initPreferences } from '@vben-core/preferences';
import '@vben-core/design';

// 初始化偏好设置
await initPreferences({
  namespace: 'my-app',
  overrides: {
    app: { name: 'My Application' },
    theme: { mode: 'light' },
  },
});
```

### 使用组件

```vue
<script setup lang="ts">
import { VbenAdminLayout } from '@vben-core/layout-ui';
import { useVbenForm, z } from '@vben-core/form-ui';
import { useVbenModal } from '@vben-core/popup-ui';
import { usePreferences } from '@vben-core/preferences';

const { isDark, layout } = usePreferences();

const [Form, formApi] = useVbenForm({
  schema: [
    {
      component: 'VbenInput',
      fieldName: 'username',
      label: '用户名',
      rules: z.string().min(3),
    },
  ],
  handleSubmit: (values) => console.log(values),
});

const [Modal, modalApi] = useVbenModal({
  title: '表单',
});
</script>

<template>
  <VbenAdminLayout :layout="layout">
    <template #content>
      <Form />
      <Modal />
    </template>
  </VbenAdminLayout>
</template>
```

## 注意事项

### 禁止事项

- **禁止业务逻辑**: 该目录仅用于技术基础设施，不包含任何业务逻辑
- **禁止循环依赖**: 核心模块不应依赖项目中的其他包
- **禁止 workspace 依赖**: `@vben-core/base` 不应引入 workspace 依赖

### 开发规范

- **版本同步**: 子包版本号保持同步更新
- **测试覆盖**: 工具函数需有对应的单元测试（`__tests__` 目录）
- **命名规范**: 组件名称使用 `Vben` 前缀，文件使用 kebab-case
- **样式规范**: 使用 Tailwind CSS，遵循 BEM 命名规范

### 发布计划

该目录后续完善后，计划：
1. 迁移到独立仓库
2. 发布到 npm 公共仓库
3. 支持独立版本管理和更新

## 相关文档

- [base/README.md](./base/README.md) - 基础共享包详细文档
- [composables/README.md](./composables/README.md) - 组合式函数详细文档
- [preferences/README.md](./preferences/README.md) - 偏好设置详细文档
- [ui-kit/README.md](./ui-kit/README.md) - UI 组件库详细文档
