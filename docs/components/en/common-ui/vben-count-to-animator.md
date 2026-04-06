---
outline: deep
---

# Vben CountToAnimator

`CountToAnimator` 渲染数字过渡动画。

## 基础用法

使用 `start-val`、`end-val` 和 `duration` 控制动画范围和时长。

<DemoPreview dir="demos/vben-count-to-animator/basic" />

## 格式化

使用 `prefix`、`suffix`、`separator` 和 `decimal` 控制数字的显示格式。

<DemoPreview dir="demos/vben-count-to-animator/custom" />

## 属性

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `startVal` | 起始值 | `number` | `0` |
| `endVal` | 结束值 | `number` | `2021` |
| `duration` | 动画时长（毫秒） | `number` | `1500` |
| `autoplay` | 自动开始 | `boolean` | `true` |
| `prefix` | 值前缀 | `string` | `''` |
| `suffix` | 值后缀 | `string` | `''` |
| `separator` | 千位分隔符 | `string` | `','` |
| `decimal` | 小数点分隔符 | `string` | `'.'` |
| `color` | 文本颜色 | `string` | `''` |
| `useEasing` | 启用过渡预设缓动 | `boolean` | `true` |
| `transition` | 过渡预设名称 | `keyof typeof TransitionPresets` | `'linear'` |
| `decimals` | 保留小数位数 | `number` | `0` |

## 事件

| 事件 | 描述 | 类型 |
| ------------ | ------------------------------- | ------------ |
| `started` | 动画开始时触发 | `() => void` |
| `finished` | 动画结束时触发 | `() => void` |
| `onStarted` | `started` 的已弃用别名 | `() => void` |
| `onFinished` | `finished` 的已弃用别名 | `() => void` |

## 暴露方法

| 方法 | 描述 | 类型 |
| ------- | --------------------------------- | ------------ |
| `reset` | 重置为 `startVal` 并重新执行 | `() => void` |
