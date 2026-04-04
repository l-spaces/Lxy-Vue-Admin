# Simple i18n

简单的国际化实现，为框架核心组件提供轻量级的多语言支持。

## 概述

`use-simple-locale` 是一个轻量级的国际化解决方案，专为框架内部组件设计。与完整的应用级国际化方案（如 `vue-i18n`）不同，它专注于提供核心 UI 组件所需的基础翻译功能，无需复杂的配置和依赖。

## 主要功能

- **轻量级**: 零外部依赖，仅依赖 Vue 响应式系统
- **共享状态**: 基于 `@vueuse/core` 的 `createSharedComposable` 实现全局共享
- **类型安全**: 完整的 TypeScript 类型支持
- **按需翻译**: 仅包含框架核心组件所需的翻译文本

## 目录结构

```
use-simple-locale/
├── index.ts      # 组合式函数主入口
├── messages.ts   # 多语言消息定义
└── README.md     # 文档说明
```

## 文件说明

### index.ts

核心组合式函数，导出 `useSimpleLocale`。

```typescript
import { useSimpleLocale } from '@vben-core/composables';

const { $t, currentLocale, setSimpleLocale } = useSimpleLocale();
```

### messages.ts

多语言消息定义，包含以下翻译键：

| 键名 | 中文 | 英文 |
|------|------|------|
| `confirm` | 确认 | Confirm |
| `cancel` | 取消 | Cancel |
| `submit` | 提交 | Submit |
| `reset` | 重置 | Reset |
| `expand` | 展开 | Expand |
| `collapse` | 收起 | Collapse |
| `prompt` | 提示 | Prompt |

## API 参考

### useSimpleLocale()

返回一个包含以下属性和方法的对象：

#### 返回值

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| `$t` | `ComputedRef<(key: string) => string>` | 翻译函数，根据键名返回对应语言的文本 |
| `currentLocale` | `Ref<Locale>` | 当前语言设置 |
| `setSimpleLocale` | `(locale: Locale) => void` | 设置当前语言 |

#### Locale 类型

```typescript
type Locale = 'en-US' | 'zh-CN';
```

## 使用方法

### 基础用法

```vue
<script setup lang="ts">
import { useSimpleLocale } from '@vben-core/composables';

const { $t, currentLocale, setSimpleLocale } = useSimpleLocale();

// 切换语言
const switchToEnglish = () => {
  setSimpleLocale('en-US');
};

const switchToChinese = () => {
  setSimpleLocale('zh-CN');
};
</script>

<template>
  <div>
    <p>当前语言: {{ currentLocale }}</p>
    <button @click="switchToEnglish">English</button>
    <button @click="switchToChinese">中文</button>
    
    <!-- 使用翻译 -->
    <button>{{ $t('confirm') }}</button>
    <button>{{ $t('cancel') }}</button>
  </div>
</template>
```

### 在组件中使用

```typescript
import { useSimpleLocale } from '@vben-core/composables';

export function useMyComponent() {
  const { $t } = useSimpleLocale();
  
  const showConfirmDialog = () => {
    return confirm($t('confirm'));
  };
  
  return {
    showConfirmDialog,
  };
}
```

## 设计原理

### 为什么需要 Simple i18n？

1. **框架内部需求**: 框架核心组件（如 Modal、Drawer、Form）需要基础的多语言支持
2. **避免依赖传递**: 不应强制应用层使用特定的国际化方案
3. **独立运行**: 即使应用未配置国际化，框架组件仍能正常显示本地化文本

### 与应用级国际化的区别

| 特性 | Simple i18n | 应用级国际化 (vue-i18n) |
|------|-------------|------------------------|
| 作用范围 | 框架核心组件 | 整个应用 |
| 翻译数量 | 7 个核心词汇 | 数百/数千条 |
| 配置复杂度 | 零配置 | 需要配置 |
| 外部依赖 | 无 | vue-i18n |
| 功能特性 | 基础翻译 | 复数、日期、货币等 |

## 扩展消息

如需扩展翻译消息，可修改 `messages.ts` 文件：

```typescript
export const messages: Record<Locale, Record<string, string>> = {
  'en-US': {
    // 现有消息...
    newKey: 'New Message',
  },
  'zh-CN': {
    // 现有消息...
    newKey: '新消息',
  },
};
```

## 与其他模块的关系

```
use-simple-locale
    │
    ├──► @vben-core/composables   # 作为子模块导出
    │
    ├──► @vben-core/shared        # 依赖共享工具
    │
    └──► UI 组件                   # Modal、Drawer、Form 等组件使用
```

## 注意事项

- **状态共享**: 由于使用 `createSharedComposable`，所有组件实例共享同一语言状态
- **回退机制**: 当翻译键不存在时，返回键名本身
- **语言限制**: 目前仅支持 `zh-CN` 和 `en-US` 两种语言
- **非替代方案**: 此模块不替代应用级的国际化方案，仅用于框架内部组件
