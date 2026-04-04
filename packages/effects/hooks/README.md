# @vben/hooks

## 概述

`@vben/hooks` 是 Vben Admin 框架的业务级组合式函数（Hooks）集合包。该包提供了多个应用共享的通用 Hooks，继承并扩展了 `@vben-core/composables` 的所有能力，专注于解决业务场景中的常见需求，如标签页管理、内容区域最大化、水印、分页等功能。

## 主要功能

- **标签页管理**：提供完整的标签页操作能力，包括关闭、固定、刷新等
- **内容区域最大化**：支持一键切换内容区域的全屏展示模式
- **水印功能**：基于 `watermark-js-plus` 的页面水印解决方案
- **分页处理**：响应式数据分页 Hook，支持动态列表分页
- **页面刷新**：便捷的页面刷新控制
- **应用配置**：统一的应用配置管理
- **设计令牌适配**：多 UI 框架的设计系统令牌转换
- **悬停状态控制**：支持延迟的元素悬停状态监测

## 目录结构

```
packages/effects/hooks/
├── src/
│   ├── index.ts                    # 统一导出入口
│   ├── use-app-config.ts           # 应用配置 Hook
│   ├── use-content-maximize.ts     # 内容区域最大化 Hook
│   ├── use-design-tokens.ts        # 设计令牌适配 Hook
│   ├── use-hover-toggle.ts         # 悬停状态控制 Hook
│   ├── use-pagination.ts           # 分页处理 Hook
│   ├── use-refresh.ts              # 页面刷新 Hook
│   ├── use-tabs.ts                 # 标签页管理 Hook
│   └── use-watermark.ts            # 水印功能 Hook
├── package.json                    # 包配置文件
├── tsconfig.json                   # TypeScript 配置
└── README.md                       # 说明文档
```

## 核心 Hooks 详解

### useTabs - 标签页管理

提供完整的标签页操作能力，是框架标签页系统的核心 Hook。

```typescript
import { useTabs } from '@vben/hooks';

const {
  closeLeftTabs,       // 关闭左侧标签页
  closeRightTabs,      // 关闭右侧标签页
  closeAllTabs,        // 关闭所有标签页
  closeOtherTabs,      // 关闭其他标签页
  closeCurrentTab,     // 关闭当前标签页
  closeTabByKey,       // 根据 key 关闭标签页
  pinTab,              // 固定标签页
  unpinTab,            // 取消固定标签页
  toggleTabPin,        // 切换标签页固定状态
  refreshTab,          // 刷新标签页
  openTabInNewWindow,  // 在新窗口打开标签页
  setTabTitle,         // 设置标签页标题（支持静态/动态标题）
  resetTabTitle,       // 重置标签页标题
  getTabDisableState,  // 获取操作禁用状态
} = useTabs();

// 示例：关闭当前标签页左侧的所有标签
await closeLeftTabs();

// 示例：设置动态标题（支持多语言）
import { computed } from 'vue';
setTabTitle(computed(() => t('page.dashboard')));
```

### useContentMaximize - 内容区域最大化

控制页面内容区域的全屏展示，隐藏头部和侧边栏。

```typescript
import { useContentMaximize } from '@vben/hooks';

const { contentIsMaximize, toggleMaximize } = useContentMaximize();

// 切换最大化状态
toggleMaximize();

// 响应式获取当前状态
console.log(contentIsMaximize.value);
```

### useWatermark - 水印功能

基于 `watermark-js-plus` 实现的页面水印解决方案。

```typescript
import { useWatermark } from '@vben/hooks';

const { updateWatermark, destroyWatermark } = useWatermark();

// 设置水印
await updateWatermark({
  content: 'Vben Admin',
  fontSize: '20px',
  globalAlpha: 0.25,
});

// 销毁水印
destroyWatermark();
```

### usePagination - 分页处理

响应式数据分页 Hook，适用于前端分页场景。

```typescript
import { usePagination } from '@vben/hooks';
import { ref } from 'vue';

const dataList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const {
  paginationList,    // 当前页数据
  currentPage,       // 当前页码
  total,             // 总条数
  setCurrentPage,    // 设置当前页
  setPageSize,       // 设置每页条数
} = usePagination(dataList, 5);

// 切换到第二页
setCurrentPage(2);

// 修改每页显示条数
setPageSize(10);
```

### useRefresh - 页面刷新

便捷的页面刷新控制。

```typescript
import { useRefresh } from '@vben/hooks';

const { refresh } = useRefresh();

// 刷新当前页面
await refresh();
```

### useAppConfig - 应用配置

统一管理应用的全局配置信息。

```typescript
import { useAppConfig } from '@vben/hooks';

const config = useAppConfig(import.meta.env, import.meta.env.PROD);

// 返回配置对象
// {
//   apiURL: string,           // 后端地址
//   clientId: string,         // 客户端标识
//   enableEncrypt: boolean,   // 是否启用加密
//   rsaPrivateKey: string,    // RSA 私钥
//   rsaPublicKey: string,     // RSA 公钥
//   sseEnable: boolean,       // 是否启用 SSE
//   websocketEnable: boolean, // 是否启用 WebSocket
// }
```

### useAntdDesignTokens / useNaiveDesignTokens / useElementPlusDesignTokens

为不同 UI 框架提供设计令牌转换，将框架的设计系统变量映射到各 UI 框架的主题配置。

```typescript
import { 
  useAntdDesignTokens,
  useNaiveDesignTokens,
  useElementPlusDesignTokens 
} from '@vben/hooks';

// Ant Design Vue 令牌
const { tokens } = useAntdDesignTokens();
// tokens.colorPrimary, tokens.colorError, tokens.borderRadius...

// Naive UI 令牌
const { commonTokens } = useNaiveDesignTokens();
// commonTokens.primaryColor, commonTokens.errorColor...

// Element Plus 令牌
// 自动更新 CSS 变量以适配 Element Plus 主题
```

### useHoverToggle - 悬停状态控制

支持延迟响应的元素悬停状态监测，适用于下拉菜单、悬浮提示等场景。

```typescript
import { useHoverToggle } from '@vben/hooks';
import { ref } from 'vue';

const triggerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();

const [isHover, controller] = useHoverToggle(
  [triggerRef, contentRef],
  {
    enterDelay: 0,      // 进入延迟
    leaveDelay: 300,    // 离开延迟
  }
);

// 控制监听器
controller.enable();   // 启用
controller.disable();  // 禁用
```

## 使用方法

### 安装依赖

```bash
# 进入目标应用目录，例如 apps/xxxx-app
# cd apps/xxxx-app
pnpm add @vben/hooks
```

### 基本使用

```typescript
import { 
  useTabs, 
  useContentMaximize, 
  useWatermark,
  usePagination 
} from '@vben/hooks';

// 在组件中使用
const { closeCurrentTab, setTabTitle } = useTabs();
const { toggleMaximize } = useContentMaximize();
```

### 继承核心能力

该包通过导出 `@vben-core/composables` 的所有内容，继承了核心层提供的通用 Hooks：

```typescript
// 可以直接使用核心层的 Hooks
import { 
  useNamespace,      // BEM 命名空间
  useSortable,       // 拖拽排序
  useEmit,           // 事件发射
  // ...更多核心 Hooks
} from '@vben/hooks';
```

## 与其他目录的关联关系

```
@vben/hooks
    │
    ├── @vben-core/composables (继承)
    │   └── 提供基础组合式函数能力
    │
    ├── @vben/preferences (依赖)
    │   └── 用户偏好设置管理
    │
    ├── @vben/stores (依赖)
    │   └── Pinia 状态管理 Store
    │
    ├── @vben/types (依赖)
    │   └── TypeScript 类型定义
    │
    ├── @vben/utils (依赖)
    │   └── 通用工具函数
    │
    └── packages/effects/layouts (被依赖)
        └── 布局组件使用这些 Hooks
```

### 依赖说明

| 依赖包 | 用途 |
|--------|------|
| `@vben-core/composables` | 继承基础 Hooks 能力，如 `useNamespace` |
| `@vben/preferences` | 获取和更新用户偏好设置 |
| `@vben/stores` | 访问标签页 Store 等状态管理 |
| `@vben/types` | 全局类型定义 |
| `@vben/utils` | 工具函数，如颜色转换 |
| `@vueuse/core` | Vue 组合式工具库 |
| `vue-router` | 路由相关功能 |
| `watermark-js-plus` | 水印实现库 |

## 设计原则

1. **业务导向**：专注于业务场景中的常见需求，与核心层的通用 Hooks 形成互补
2. **响应式优先**：所有 Hooks 返回响应式数据，确保与 Vue 的响应式系统无缝集成
3. **类型安全**：完整的 TypeScript 类型支持，提供良好的开发体验
4. **可组合性**：Hooks 之间可以相互组合，构建更复杂的业务逻辑
5. **框架无关性**：设计令牌适配层支持多种 UI 框架（Ant Design Vue、Naive UI、Element Plus）

## 注意事项

- 该包中的 Hooks 主要面向业务场景，如需更通用的功能，请使用 `@vben-core/composables`
- `useWatermark` 会在组件卸载时自动销毁水印，无需手动清理
- `useTabs` 的操作依赖于 `@vben/stores` 中的 `tabbarStore`
- 设计令牌 Hooks 需要在 DOM 就绪后使用，因为它们需要读取 CSS 变量
