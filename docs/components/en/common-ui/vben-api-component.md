---
outline: deep
---

# Vben ApiComponent

`ApiComponent` 是一个包装器，用于为现有组件附加远程选项加载行为，同时保留原始组件的使用模式。

## 常规用法

当前包装流程为：

- 通过 `component` 传入目标组件
- 通过 `api` 获取远程数据
- 通过 `beforeFetch` 和 `afterFetch` 转换数据
- 通过 `resultField`、`valueField`、`labelField` 和 `childrenField` 映射远程字段
- 通过 `optionsPropName` 将标准化后的选项传递给目标组件

```vue
<script lang="ts" setup>
import { ApiComponent } from '@vben/common-ui';

import { Cascader } from 'ant-design-vue';

function fetchApi() {
  return Promise.resolve([
    {
      label: 'Zhejiang',
      value: 'zhejiang',
      children: [{ label: 'Hangzhou', value: 'hangzhou' }],
    },
  ]);
}
</script>

<template>
  <ApiComponent
    :api="fetchApi"
    :component="Cascader"
    :immediate="false"
    children-field="children"
    loading-slot="suffixIcon"
    visible-event="onDropdownVisibleChange"
  />
</template>
```

## 当前属性

| 属性 | 描述 | 类型 |
| --- | --- | --- |
| `component` | 被包装的目标组件 | `Component` |
| `api` | 远程请求函数 | `(arg?: any) => Promise<any>` |
| `params` | 额外的请求参数 | `Record<string, any>` |
| `beforeFetch` | 请求前的钩子 | `AnyPromiseFunction` |
| `afterFetch` | 请求后的钩子 | `AnyPromiseFunction` |
| `visibleEvent` | 用于懒加载数据的事件名称 | `string` |
| `loadingSlot` | 用于渲染加载图标的插槽名称 | `string` |
| `modelPropName` | 被包装组件的模型属性名 | `string` |
| `autoSelect` | 自动选择第一个/最后一个/唯一选项，或使用自定义函数 | `'first' \| 'last' \| 'one' \| ((items) => item) \| false` |

## 暴露方法

| 方法 | 描述 |
| --- | --- |
| `getComponentRef()` | 返回被包装组件的实例 |
| `updateParam(newParams)` | 合并并更新请求参数 |
| `getOptions()` | 返回已加载的选项 |
| `getValue()` | 返回当前绑定的值 |
