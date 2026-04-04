# @vben-core/ui-kit

UI 组件库集合模块，用于管理公共组件和不同 UI 组件库的封装组件，提供统一的组件接口和一致的开发体验。

## 概述

`@vben-core/ui-kit` 是 Vben Admin 框架的 UI 组件集合目录，采用模块化架构设计，将不同类型的 UI 组件进行分类管理。该目录包含五个独立的子包，分别负责表单、布局、菜单、弹窗和基础 UI 组件的实现。通过统一的封装层，实现了与具体 UI 框架的解耦，便于后续扩展和维护。

## 目录结构

```
packages/@core/ui-kit/
├── form-ui/                      # 表单组件包
│   ├── __tests__/                # 单元测试
│   │   └── form-api.test.ts
│   ├── src/
│   │   ├── components/           # 表单组件
│   │   │   └── form-actions.vue  # 表单操作按钮
│   │   ├── form-render/          # 表单渲染器
│   │   │   ├── context.ts        # 表单上下文
│   │   │   ├── dependencies.ts   # 字段依赖处理
│   │   │   ├── expandable.ts     # 展开/折叠功能
│   │   │   ├── form-field.vue    # 表单字段组件
│   │   │   ├── form-label.vue    # 表单标签组件
│   │   │   ├── form.vue          # 表单容器组件
│   │   │   ├── helper.ts         # 辅助函数
│   │   │   └── index.ts
│   │   ├── config.ts             # 表单配置
│   │   ├── form-api.ts           # 表单 API
│   │   ├── types.ts              # 类型定义
│   │   ├── use-form-context.ts   # 表单上下文 Hook
│   │   ├── use-vben-form.ts      # 表单组合式函数
│   │   ├── vben-form.vue         # 表单主组件
│   │   └── vben-use-form.vue     # 表单使用组件
│   ├── package.json
│   ├── tsconfig.json
│   └── tsdown.config.ts
│
├── layout-ui/                    # 布局组件包
│   ├── src/
│   │   ├── components/           # 布局组件
│   │   │   ├── widgets/          # 布局小部件
│   │   │   │   ├── index.ts
│   │   │   │   ├── sidebar-collapse-button.vue  # 侧边栏折叠按钮
│   │   │   │   └── sidebar-fixed-button.vue     # 侧边栏固定按钮
│   │   │   ├── index.ts
│   │   │   ├── layout-content.vue   # 内容区域
│   │   │   ├── layout-footer.vue    # 底部区域
│   │   │   ├── layout-header.vue    # 顶部区域
│   │   │   ├── layout-sidebar.vue   # 侧边栏区域
│   │   │   └── layout-tabbar.vue    # 标签页区域
│   │   ├── hooks/                # 布局相关 Hooks
│   │   │   ├── index.ts
│   │   │   ├── use-layout.ts     # 布局逻辑
│   │   │   └── use-sidebar-drag.ts  # 侧边栏拖拽
│   │   ├── index.ts
│   │   ├── vben-layout.ts        # 布局类型定义
│   │   └── vben-layout.vue       # 布局主组件
│   ├── package.json
│   ├── tsconfig.json
│   └── tsdown.config.ts
│
├── menu-ui/                      # 菜单组件包
│   ├── src/
│   │   ├── components/           # 菜单组件
│   │   │   ├── normal-menu/      # 普通菜单
│   │   │   │   ├── index.ts
│   │   │   │   ├── normal-menu.ts
│   │   │   │   └── normal-menu.vue
│   │   │   ├── collapse-transition.vue  # 折叠过渡动画
│   │   │   ├── index.ts
│   │   │   ├── menu-badge-dot.vue       # 菜单徽标圆点
│   │   │   ├── menu-badge.vue           # 菜单徽标
│   │   │   ├── menu-item.vue            # 菜单项
│   │   │   ├── menu.vue                 # 菜单容器
│   │   │   ├── sub-menu-content.vue     # 子菜单内容
│   │   │   └── sub-menu.vue             # 子菜单
│   │   ├── hooks/                # 菜单相关 Hooks
│   │   │   ├── index.ts
│   │   │   ├── use-menu-context.ts  # 菜单上下文
│   │   │   ├── use-menu-scroll.ts   # 菜单滚动
│   │   │   └── use-menu.ts          # 菜单逻辑
│   │   ├── utils/                # 工具函数
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── menu.vue              # 菜单主组件
│   │   ├── sub-menu.vue          # 子菜单组件
│   │   └── types.ts              # 类型定义
│   ├── package.json
│   ├── tsconfig.json
│   └── tsdown.config.ts
│
├── popup-ui/                     # 弹窗组件包
│   ├── src/
│   │   ├── alert/                # 警告提示组件
│   │   │   ├── AlertBuilder.ts   # 警告构建器
│   │   │   ├── alert.ts
│   │   │   ├── alert.vue
│   │   │   └── index.ts
│   │   ├── drawer/               # 抽屉组件
│   │   │   ├── __tests__/
│   │   │   │   └── drawer-api.test.ts
│   │   │   ├── drawer-api.ts     # 抽屉 API
│   │   │   ├── drawer.ts         # 抽屉类型
│   │   │   ├── drawer.vue        # 抽屉组件
│   │   │   ├── index.ts
│   │   │   └── use-drawer.ts     # 抽屉 Hook
│   │   ├── modal/                # 模态框组件
│   │   │   ├── __tests__/
│   │   │   │   └── modal-api.test.ts
│   │   │   ├── index.ts
│   │   │   ├── modal-api.ts      # 模态框 API
│   │   │   ├── modal.ts          # 模态框类型
│   │   │   ├── modal.vue         # 模态框组件
│   │   │   ├── use-modal-draggable.ts  # 拖拽功能
│   │   │   └── use-modal.ts      # 模态框 Hook
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── tsdown.config.ts
│
├── shadcn-ui/                    # shadcn/ui 基础组件包
│   ├── src/
│   │   ├── assets/
│   │   │   └── index.css         # 组件样式
│   │   ├── components/           # 封装的业务组件
│   │   │   ├── avatar/           # 头像组件
│   │   │   ├── back-top/         # 返回顶部
│   │   │   ├── breadcrumb/       # 面包屑
│   │   │   ├── button/           # 按钮组件
│   │   │   ├── checkbox/         # 复选框
│   │   │   ├── context-menu/     # 右键菜单
│   │   │   ├── count-to-animator/  # 数字动画
│   │   │   ├── dropdown-menu/    # 下拉菜单
│   │   │   ├── expandable-arrow/ # 展开箭头
│   │   │   ├── full-screen/      # 全屏组件
│   │   │   ├── hover-card/       # 悬浮卡片
│   │   │   ├── icon/             # 图标组件
│   │   │   ├── input-captcha/    # 验证码输入
│   │   │   ├── input-password/   # 密码输入
│   │   │   ├── logo/             # Logo 组件
│   │   │   ├── pin-input/        # PIN 输入
│   │   │   ├── popover/          # 气泡弹出框
│   │   │   ├── render-content/   # 内容渲染
│   │   │   ├── scrollbar/        # 滚动条
│   │   │   ├── segmented/        # 分段控制器
│   │   │   ├── select/           # 选择器
│   │   │   ├── spine-text/       # 脊柱文本
│   │   │   ├── spinner/          # 加载动画
│   │   │   └── tooltip/          # 工具提示
│   │   ├── ui/                   # shadcn/ui 原生组件
│   │   │   ├── accordion/        # 手风琴
│   │   │   ├── alert-dialog/     # 警告对话框
│   │   │   ├── avatar/           # 头像
│   │   │   ├── badge/            # 徽章
│   │   │   ├── breadcrumb/       # 面包屑
│   │   │   └── ...               # 更多组件
│   │   └── index.ts
│   ├── components.json           # shadcn/ui 配置
│   └── package.json
│
└── README.md
```

## 核心子包说明

### 1. @vben-core/form-ui - 表单组件包

提供强大的表单解决方案，支持动态表单配置、字段依赖、表单验证等功能。

#### 主要特性

- **Schema 驱动**: 通过 JSON Schema 配置表单结构
- **字段依赖**: 支持字段间的联动和条件渲染
- **表单验证**: 集成 VeeValidate + Zod 进行表单验证
- **栅格布局**: 支持响应式栅格布局
- **展开折叠**: 支持表单的展开/折叠功能

#### 使用示例

```typescript
import { setupVbenForm, useVbenForm, z } from '@vben-core/form-ui';

// 定义表单 Schema
const schema = [
  {
    component: 'VbenInput',
    fieldName: 'username',
    label: '用户名',
    rules: z.string().min(3, '用户名至少3个字符'),
  },
  {
    component: 'VbenInputPassword',
    fieldName: 'password',
    label: '密码',
    rules: z.string().min(6, '密码至少6个字符'),
  },
  {
    component: 'VbenSelect',
    fieldName: 'role',
    label: '角色',
    componentProps: {
      options: [
        { label: '管理员', value: 'admin' },
        { label: '用户', value: 'user' },
      ],
    },
  },
];

// 使用表单
const [Form, formApi] = useVbenForm({
  schema,
  handleSubmit: (values) => {
    console.log('表单提交:', values);
  },
});
```

#### 导出 API

```typescript
export {
  setupVbenForm,     // 表单配置设置
  useVbenForm,       // 表单组合式函数
  z,                 // Zod 验证库
} from '@vben-core/form-ui';

export type {
  VbenFormSchema,    // 表单 Schema 类型
  VbenFormProps,     // 表单属性类型
} from '@vben-core/form-ui';
```

---

### 2. @vben-core/layout-ui - 布局组件包

提供完整的后台管理系统布局解决方案，支持多种布局模式。

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
</script>

<template>
  <VbenAdminLayout
    layout="sidebar-nav"
    :sidebar-collapse="false"
    :header-visible="true"
    :tabbar-enable="true"
    header-theme="light"
    sidebar-theme="dark"
  >
    <template #logo>
      <Logo />
    </template>
    <template #header>
      <Header />
    </template>
    <template #menu>
      <Menu />
    </template>
    <template #content>
      <RouterView />
    </template>
  </VbenAdminLayout>
</template>
```

#### 核心组件

| 组件 | 说明 |
|------|------|
| `layout-header.vue` | 顶部区域组件 |
| `layout-sidebar.vue` | 侧边栏区域组件 |
| `layout-tabbar.vue` | 标签页区域组件 |
| `layout-content.vue` | 内容区域组件 |
| `layout-footer.vue` | 底部区域组件 |

---

### 3. @vben-core/menu-ui - 菜单组件包

提供灵活的菜单组件，支持多级菜单、折叠、徽标等功能。

#### 主要特性

- **多级菜单**: 支持无限层级嵌套
- **折叠模式**: 支持菜单折叠/展开
- **手风琴模式**: 同级菜单互斥展开
- **徽标显示**: 支持菜单项徽标和圆点
- **主题切换**: 支持亮色/暗色主题
- **自动滚动**: 自动滚动到激活菜单项

#### 使用示例

```vue
<script setup lang="ts">
import { Menu } from '@vben-core/menu-ui';

const menuItems = [
  {
    path: '/dashboard',
    icon: 'home',
    name: '仪表盘',
  },
  {
    path: '/system',
    icon: 'settings',
    name: '系统管理',
    children: [
      { path: '/system/user', name: '用户管理' },
      { path: '/system/role', name: '角色管理' },
    ],
  },
];
</script>

<template>
  <Menu
    :items="menuItems"
    :collapse="false"
    :accordion="true"
    theme="dark"
    rounded
  />
</template>
```

#### 导出 API

```typescript
export {
  Menu,           // 菜单主组件
  MenuBadge,      // 菜单徽标组件
  NormalMenu,     // 普通菜单组件
} from '@vben-core/menu-ui';

export type {
  MenuProps,      // 菜单属性类型
  MenuItemProps,  // 菜单项属性类型
  SubMenuProps,   // 子菜单属性类型
} from '@vben-core/menu-ui';
```

---

### 4. @vben-core/popup-ui - 弹窗组件包

提供统一的弹窗解决方案，包括模态框、抽屉和警告提示。

#### 组件列表

| 组件 | 说明 |
|------|------|
| `VbenModal` | 模态框组件 |
| `VbenDrawer` | 抽屉组件 |
| `VbenAlert` | 警告提示组件 |

#### 使用示例

```typescript
// 模态框使用
import { useVbenModal, VbenModal } from '@vben-core/popup-ui';

const [Modal, modalApi] = useVbenModal({
  title: '用户信息',
  onConfirm: async () => {
    // 确认逻辑
    modalApi.close();
  },
});

// 打开模态框
modalApi.open();

// 抽屉使用
import { useVbenDrawer, VbenDrawer } from '@vben-core/popup-ui';

const [Drawer, drawerApi] = useVbenDrawer({
  title: '详细信息',
  direction: 'right',
});

// 打开抽屉
drawerApi.open();
```

#### API 方法

| 方法 | 说明 |
|------|------|
| `open()` | 打开弹窗 |
| `close()` | 关闭弹窗 |
| `setState()` | 设置弹窗状态 |
| `getData()` | 获取弹窗数据 |

---

### 5. @vben-core/shadcn-ui - 基础 UI 组件包

基于 shadcn/ui 和 Reka UI 封装的基础组件库，提供丰富的 UI 原子组件。

#### 组件分类

**业务封装组件**

| 组件 | 说明 |
|------|------|
| `VbenButton` | 按钮组件 |
| `VbenInput` | 输入框组件 |
| `VbenSelect` | 选择器组件 |
| `VbenCheckbox` | 复选框组件 |
| `VbenBreadcrumb` | 面包屑组件 |
| `VbenAvatar` | 头像组件 |
| `VbenIcon` | 图标组件 |
| `VbenTooltip` | 工具提示 |
| `VbenPopover` | 气泡弹出框 |
| `VbenDropdownMenu` | 下拉菜单 |
| `VbenContextMenu` | 右键菜单 |
| `VbenScrollbar` | 滚动条 |
| `VbenSpinner` | 加载动画 |
| `VbenBackTop` | 返回顶部 |
| `VbenFullScreen` | 全屏组件 |
| `VbenSegmented` | 分段控制器 |
| `VbenCountToAnimator` | 数字动画 |
| `VbenInputPassword` | 密码输入框 |
| `VbenInputCaptcha` | 验证码输入 |
| `VbenPinInput` | PIN 码输入 |
| `VbenLogo` | Logo 组件 |

**shadcn/ui 原生组件**

包含 Accordion、AlertDialog、Avatar、Badge、Breadcrumb、Button、Card、Checkbox、Dialog、DropdownMenu、Label、Popover、Progress、RadioGroup、Select、Separator、Sheet、Slider、Switch、Table、Tabs、Toast、Tooltip 等组件。

#### 使用示例

```vue
<script setup lang="ts">
import {
  VbenButton,
  VbenInput,
  VbenSelect,
  VbenCheckbox,
} from '@vben-core/shadcn-ui';
</script>

<template>
  <VbenInput v-model="value" placeholder="请输入" />
  <VbenButton variant="primary">提交</VbenButton>
  <VbenSelect v-model="selected" :options="options" />
</template>
```

## 依赖关系

```
@vben-core/ui-kit
    │
    ├──► @vben-core/composables    # 组合式函数
    │
    ├──► @vben-core/shared         # 共享工具
    │
    ├──► @vben-core/typings        # 类型定义
    │
    ├──► @vben-core/icons          # 图标库
    │
    ├──► @vben-core/design         # 设计样式
    │
    ├──► @vueuse/core              # Vue 工具库
    │
    ├──► reka-ui                   # 无样式 UI 组件
    │
    ├──► vee-validate              # 表单验证
    │
    └──► zod                       # Schema 验证
```

## 与其他目录的关系

```
@vben-core/ui-kit
    │
    ├──► apps/*                    # 应用层使用组件
    │
    ├──► @vben-core/preferences    # 读取偏好设置配置
    │
    ├──► packages/effects          # 效果包使用组件
    │
    └──► packages/stores           # 状态管理关联
```

## 设计原则

### 1. 组件解耦

各子包独立发布，可根据需要按需引入，避免不必要的依赖。

### 2. 统一接口

所有组件遵循统一的命名规范和 API 设计，降低学习成本。

### 3. 类型安全

完整的 TypeScript 类型定义，提供良好的开发体验和类型提示。

### 4. 主题适配

组件支持亮色/暗色主题切换，与偏好设置系统无缝集成。

### 5. 响应式设计

组件内置响应式断点处理，自动适配不同屏幕尺寸。

## 开发指南

### 添加新组件

1. 确定组件所属子包（form-ui / layout-ui / menu-ui / popup-ui / shadcn-ui）
2. 在对应目录下创建组件文件
3. 在 `index.ts` 中导出组件和类型
4. 编写单元测试

### 组件命名规范

- 组件名称使用 `Vben` 前缀，如 `VbenButton`、`VbenModal`
- 组件文件使用 kebab-case，如 `button.vue`、`modal.vue`
- 类型文件统一放在 `types.ts` 中

### 样式规范

- 使用 Tailwind CSS 进行样式编写
- 遵循 BEM 命名规范
- 支持主题变量覆盖
