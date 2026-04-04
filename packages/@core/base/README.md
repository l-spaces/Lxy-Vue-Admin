# @vben-core/base

基础共享包，提供框架底层的核心功能支持。**请勿引入 workspace 依赖**，确保该包保持独立性和可移植性。

## 概述

`@vben-core/base` 是 Vben Admin 框架的基础设施层，包含设计系统、图标系统、共享工具和类型定义等核心模块。作为整个框架的基石，它不依赖任何业务逻辑，仅提供纯技术层面的基础设施支持。

## 目录结构

```
packages/@core/base/
├── design/          # 设计系统
├── icons/           # 图标系统
├── shared/          # 共享工具库
├── typings/         # TypeScript 类型定义
└── README.md
```

## 子包说明

### 1. design - 设计系统

**包名**: `@vben-core/design`

设计系统包，提供统一的视觉设计规范和样式基础。

#### 主要功能

- **设计令牌（Design Tokens）**: CSS 变量驱动的主题系统，支持亮色/暗色主题切换
- **BEM 样式系统**: SCSS 实现的 BEM 命名规范工具
- **全局样式**: 包含全局样式、过渡动画、进度条等基础样式

#### 导出路径

| 路径 | 说明 |
|------|------|
| `@vben-core/design` | 设计令牌和全局样式 |
| `@vben-core/design/bem` | BEM SCSS 工具 |
| `@vben-core/design/theme` | 主题 CSS 文件 |

#### 目录结构

```
design/
├── src/
│   ├── css/              # 全局样式文件
│   │   ├── global.css    # 全局基础样式
│   │   ├── transition.css # 过渡动画样式
│   │   ├── nprogress.css # 进度条样式
│   │   └── ui.css        # UI 组件样式
│   ├── design-tokens/    # 设计令牌
│   │   ├── default.css   # 默认主题变量
│   │   ├── dark.css      # 暗色主题变量
│   │   └── index.ts      # 令牌导出入口
│   └── scss-bem/         # BEM 样式工具
│       ├── bem.scss      # BEM 混入和函数
│       └── constants.scss # BEM 常量定义
└── package.json
```

---

### 2. icons - 图标系统

**包名**: `@vben-core/icons`

图标系统包，提供统一的图标组件和图标管理能力。

#### 主要功能

- **Lucide 图标**: 基于 Lucide Vue Next 的图标组件
- **Iconify 支持**: 支持 Iconify 图标库，可在线或离线使用
- **图标创建工具**: 提供创建自定义图标的工具函数

#### 导出内容

| 导出项 | 说明 |
|--------|------|
| `IconifyIcon` | Iconify 图标组件 |
| `addCollection` | 添加图标集合 |
| `addIcon` | 添加单个图标 |
| `listIcons` | 列出可用图标 |
| `createIcon` | 创建自定义图标组件 |

#### 依赖

- `@iconify/vue`: Iconify Vue 组件库
- `lucide-vue-next`: Lucide 图标库

---

### 3. shared - 共享工具库

**包名**: `@vben-core/shared`

共享工具库，提供框架通用的工具函数、缓存管理、颜色处理等功能。

#### 导出路径

| 路径 | 说明 |
|------|------|
| `@vben-core/shared/utils` | 工具函数集合 |
| `@vben-core/shared/constants` | 常量定义 |
| `@vben-core/shared/color` | 颜色处理工具 |
| `@vben-core/shared/cache` | 缓存管理 |
| `@vben-core/shared/store` | 状态存储 |

#### 工具函数模块

| 模块 | 说明 |
|------|------|
| `cn` | 类名合并工具（基于 clsx） |
| `date` | 日期处理工具 |
| `diff` | 对象差异比较 |
| `dom` | DOM 操作工具 |
| `download` | 文件下载工具 |
| `inference` | 类型推断工具 |
| `letter` | 字母处理工具 |
| `merge` | 对象合并工具 |
| `nprogress` | 进度条控制 |
| `resources` | 资源加载工具 |
| `stack` | 栈数据结构 |
| `state-handler` | 状态处理器 |
| `to` | 类型转换工具 |
| `tree` | 树形数据处理 |
| `unique` | 数组去重 |
| `update-css-variables` | CSS 变量更新 |
| `util` | 通用工具函数 |
| `window` | 窗口操作工具 |

#### 缓存模块

提供 `StorageManager` 类，支持：
- localStorage / sessionStorage 封装
- 数据过期时间设置
- 数据序列化/反序列化

#### 颜色模块

提供颜色处理功能：
- 颜色格式转换（RGB、HSL、HEX）
- 颜色生成器
- 主题色计算

---

### 4. typings - TypeScript 类型定义

**包名**: `@vben-core/typings`

TypeScript 类型定义包，提供框架通用的类型声明。

#### 导出路径

| 路径 | 说明 |
|------|------|
| `@vben-core/typings` | 通用类型定义 |
| `@vben-core/typings/vue-router` | Vue Router 类型扩展 |

#### 类型模块

| 模块 | 说明 |
|------|------|
| `app.d.ts` | 应用级类型定义 |
| `basic.d.ts` | 基础类型定义 |
| `helper.d.ts` | 辅助类型定义 |
| `menu-record.ts` | 菜单记录类型 |
| `tabs.ts` | 标签页类型 |
| `vue-router.d.ts` | Vue Router 类型扩展 |

## 使用方法

### 安装依赖

```bash
pnpm add @vben-core/shared @vben-core/design @vben-core/icons @vben-core/typings
```

### 导入示例

```typescript
// 工具函数
import { cn, formatDate, treeToList } from '@vben-core/shared/utils';

// 常量
import { VBEN_GITHUB_URL } from '@vben-core/shared/constants';

// 颜色处理
import { colorToHsla, generatorColor } from '@vben-core/shared/color';

// 缓存管理
import { StorageManager } from '@vben-core/shared/cache';

// 图标
import { IconifyIcon, createIcon } from '@vben-core/icons';

// 类型
import type { MenuRecordRaw } from '@vben-core/typings';
```

### 样式导入

```typescript
// 导入设计系统样式
import '@vben-core/design';

// 导入 BEM SCSS 工具
@use '@vben-core/design/bem';
```

## 设计原则

1. **零业务依赖**: 不引入任何业务逻辑，保持纯技术基础设施定位
2. **框架无关**: 工具函数不依赖特定框架，可在任何 JavaScript 环境使用
3. **类型安全**: 完整的 TypeScript 类型支持
4. **Tree-shaking**: 支持 ESM 模块，优化打包体积
5. **独立发布**: 每个子包可独立发布和使用

## 与其他目录的关系

```
@vben-core/base
    │
    ├──► @vben-core/ui-kit     # UI 组件依赖基础类型和样式
    │
    ├──► @vben-core/composables # 组合式函数依赖工具函数
    │
    ├──► packages/effects       # 效果包依赖共享工具
    │
    └──► apps/*                 # 应用层依赖所有基础包
```

## 注意事项

- **禁止循环依赖**: 该包作为基础设施层，不应依赖项目中的其他包
- **版本同步**: 子包版本号保持同步更新
- **测试覆盖**: 工具函数需有对应的单元测试（`__tests__` 目录）
