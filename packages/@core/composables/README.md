# @vben-core/composables

Vue 组合式函数集合，提供框架通用的可复用逻辑。

## 概述

`@vben-core/composables` 是 Vben Admin 框架的核心组合式函数库，封装了布局计算、响应式检测、命名空间管理、国际化、滚动锁定、拖拽排序等常用功能。所有组合式函数均基于 Vue 3 Composition API 实现，支持 TypeScript 类型推断。

## 目录结构

```
packages/@core/composables/
├── src/
│   ├── __tests__/              # 单元测试
│   │   └── use-sortable.test.ts
│   ├── use-simple-locale/      # 国际化模块
│   │   ├── index.ts
│   │   ├── messages.ts
│   │   └── README.md
│   ├── index.ts                # 主入口
│   ├── use-is-mobile.ts        # 移动端检测
│   ├── use-layout-style.ts     # 布局样式计算
│   ├── use-namespace.ts        # BEM 命名空间
│   ├── use-priority-value.ts   # 优先级值获取
│   ├── use-scroll-lock.ts      # 滚动锁定
│   └── use-sortable.ts         # 拖拽排序
├── package.json
├── tsconfig.json
└── tsdown.config.ts
```

## 模块说明

### 1. useIsMobile - 移动端检测

检测当前设备是否为移动端，基于 Tailwind CSS 断点系统。

```typescript
import { useIsMobile } from '@vben-core/composables';

const { isMobile } = useIsMobile();
// isMobile: ComputedRef<boolean> - 小于 md 断点时为 true
```

**实现原理**: 使用 `@vueuse/core` 的 `useBreakpoints` 配合 Tailwind CSS 断点配置。

---

### 2. useLayoutContentStyle - 布局样式计算

计算布局内容区域的可见尺寸，支持动态响应窗口变化。

```typescript
import { useLayoutContentStyle, useLayoutHeaderStyle, useLayoutFooterStyle } from '@vben-core/composables';

// 内容区域样式
const { contentElement, overlayStyle, visibleDomRect } = useLayoutContentStyle();

// 头部高度控制
const { getLayoutHeaderHeight, setLayoutHeaderHeight } = useLayoutHeaderStyle();

// 底部高度控制
const { getLayoutFooterHeight, setLayoutFooterHeight } = useLayoutFooterStyle();
```

#### 返回值说明

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `contentElement` | `Ref<HTMLDivElement \| null>` | 内容区域 DOM 引用 |
| `overlayStyle` | `ComputedRef<CSSProperties>` | 固定定位覆盖层样式 |
| `visibleDomRect` | `Ref<VisibleDomRect \| null>` | 可见区域尺寸信息 |

#### CSS 变量

| 变量名 | 说明 |
|--------|------|
| `--layout-content-height` | 内容区域高度 |
| `--layout-content-width` | 内容区域宽度 |
| `--layout-header-height` | 头部高度 |
| `--layout-footer-height` | 底部高度 |

---

### 3. useNamespace - BEM 命名空间

生成符合 BEM 规范的 CSS 类名，参考 Element Plus 实现。

```typescript
import { useNamespace } from '@vben-core/composables';

const ns = useNamespace('button');

ns.b();                    // 'vben-button'
ns.e('icon');              // 'vben-button__icon'
ns.m('primary');           // 'vben-button--primary'
ns.be('group', 'item');    // 'vben-button-group__item'
ns.em('icon', 'large');    // 'vben-button__icon--large'
ns.bm('group', 'active');  // 'vben-button-group--active'
ns.is('loading');          // 'is-loading'
ns.is('disabled', true);   // 'is-disabled'
ns.is('hidden', false);    // ''

// CSS 变量
ns.cssVar({ color: 'red' });        // { '--vben-color': 'red' }
ns.cssVarBlock({ size: '16px' });   // { '--vben-button-size': '16px' }
ns.cssVarName('color');             // '--vben-color'
ns.cssVarBlockName('size');         // '--vben-button-size'
```

#### 方法说明

| 方法 | 说明 | 示例输出 |
|------|------|----------|
| `b(suffix?)` | Block 块 | `vben-button` |
| `e(element)` | Element 元素 | `vben-button__icon` |
| `m(modifier)` | Modifier 修饰符 | `vben-button--primary` |
| `be(block, element)` | Block + Element | `vben-button-group__item` |
| `em(element, modifier)` | Element + Modifier | `vben-button__icon--large` |
| `bm(block, modifier)` | Block + Modifier | `vben-button-group--active` |
| `bem(b, e, m)` | 完整 BEM | `vben-button-group__icon--large` |
| `is(name, state?)` | 状态类名 | `is-loading` |

---

### 4. usePriorityValue - 优先级值获取

按优先级顺序从多个来源获取值，用于组件属性透传场景。

```typescript
import { usePriorityValue, usePriorityValues, useForwardPriorityValues } from '@vben-core/composables';

// 单个值
const value = usePriorityValue('title', props, state);
// 优先级: slots > attrs > props > state

// 批量获取（每个值独立 ref）
const values = usePriorityValues(props, state);

// 批量获取（集中在一个 computed，用于透传）
const forwardValues = useForwardPriorityValues(props, state);
```

#### 优先级顺序

1. **插槽 (slots)** - 最高优先级
2. **属性 (attrs)**
3. **组件属性 (props)**
4. **状态 (state)** - 最低优先级

---

### 5. useScrollLock - 滚动锁定

锁定页面滚动，自动处理滚动条宽度补偿。

```typescript
import { useScrollLock, SCROLL_FIXED_CLASS } from '@vben-core/composables';

// 在组件中使用
useScrollLock();

// 固定定位元素需要添加特殊类名
// <div class="fixed-element _scroll__fixed_">...</div>
```

#### 功能特性

- 自动检测是否需要滚动条
- 计算滚动条宽度并补偿 `padding-right`
- 处理固定定位元素的滚动条闪烁问题
- 组件卸载时自动解锁

---

### 6. useSimpleLocale - 简易国际化

为框架核心组件提供轻量级多语言支持。

```typescript
import { useSimpleLocale } from '@vben-core/composables';

const { $t, currentLocale, setSimpleLocale } = useSimpleLocale();

// 使用翻译
$t('confirm');  // '确认' 或 'Confirm'

// 切换语言
setSimpleLocale('en-US');
setSimpleLocale('zh-CN');
```

详细文档请参阅 [use-simple-locale/README.md](./src/use-simple-locale/README.md)。

---

### 7. useSortable - 拖拽排序

基于 Sortable.js 的拖拽排序功能。

```typescript
import { useSortable } from '@vben-core/composables';

const containerRef = ref<HTMLElement>();

const { initializeSortable } = useSortable(containerRef.value!, {
  animation: 300,
  delay: 400,
  delayOnTouchOnly: true,
  onEnd: (evt) => {
    console.log('排序完成', evt.oldIndex, evt.newIndex);
  },
});

// 初始化排序
onMounted(() => {
  initializeSortable();
});
```

#### 默认配置

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `animation` | `300` | 动画时长 |
| `delay` | `400` | 拖拽延迟 |
| `delayOnTouchOnly` | `true` | 仅触摸设备延迟 |

---

### 8. Reka UI 导出

从 `reka-ui` 重新导出的组合式函数：

```typescript
import {
  useEmitAsProps,
  useForwardExpose,
  useForwardProps,
  useForwardPropsEmits,
} from '@vben-core/composables';
```

| 函数 | 说明 |
|------|------|
| `useEmitAsProps` | 将 emit 转换为 props 格式 |
| `useForwardExpose` | 转发组件暴露 |
| `useForwardProps` | 转发组件属性 |
| `useForwardPropsEmits` | 转发属性和事件 |

## 使用方法

### 安装

```bash
pnpm add @vben-core/composables
```

### 导入示例

```typescript
// 导入所有组合式函数
import {
  useIsMobile,
  useLayoutContentStyle,
  useNamespace,
  usePriorityValue,
  useScrollLock,
  useSimpleLocale,
  useSortable,
} from '@vben-core/composables';
```

### 完整示例

```vue
<script setup lang="ts">
import { useIsMobile, useNamespace, useSimpleLocale } from '@vben-core/composables';

const { isMobile } = useIsMobile();
const ns = useNamespace('my-component');
const { $t } = useSimpleLocale();
</script>

<template>
  <div :class="ns.b()">
    <span :class="ns.e('title')">{{ $t('confirm') }}</span>
    <span v-if="isMobile">移动端</span>
  </div>
</template>
```

## 依赖关系

```
@vben-core/composables
    │
    ├──► @vben-core/shared      # 共享工具函数和常量
    │
    ├──► @vueuse/core           # Vue 组合式工具库
    │
    ├──► reka-ui                # 无样式 UI 组件库
    │
    └──► sortablejs             # 拖拽排序库
```

## 与其他目录的关系

```
@vben-core/composables
    │
    ├──► @vben-core/ui-kit      # UI 组件使用组合式函数
    │
    ├──► packages/effects       # 效果包使用布局和滚动功能
    │
    └──► apps/*                 # 应用层使用所有组合式函数
```

## 设计原则

1. **单一职责**: 每个组合式函数专注于一个特定功能
2. **响应式优先**: 返回值均为响应式引用或计算属性
3. **类型安全**: 完整的 TypeScript 类型支持
4. **Tree-shaking**: 支持 ESM 模块按需导入
5. **无副作用**: 大多数函数标记为 `sideEffects: false`

## 注意事项

- **服务端渲染**: 部分函数依赖浏览器 API（如 `document`、`window`），需在 `onMounted` 后使用
- **内存管理**: `useScrollLock` 和 `useSortable` 会自动清理资源
- **命名空间**: `useNamespace` 默认使用 `vben` 前缀，可通过常量配置修改
