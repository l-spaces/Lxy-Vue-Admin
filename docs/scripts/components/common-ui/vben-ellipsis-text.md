---
title: 省略文本组件
description: Vben EllipsisText 省略文本组件的使用方法和 API
outline: deep
lastUpdated: true
---

# Vben EllipsisText

`EllipsisText` 显示长文本，支持截断、工具提示和可选的展开/收起行为。

## 基础用法

通过默认插槽传入文本，并使用 `maxWidth` 限制可视宽度。

<DemoPreview dir="demos/vben-ellipsis-text/line" />

## 当前属性

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expand` | 允许点击展开行为 | `boolean` | `false` |
| `line` | 最大可见行数 | `number` | `1` |
| `maxWidth` | 文本区域的最大宽度 | `number \| string` | `'100%'` |
| `placement` | 工具提示位置 | `'bottom' \| 'left' \| 'right' \| 'top'` | `'top'` |
| `tooltip` | 启用工具提示 | `boolean` | `true` |
| `tooltipWhenEllipsis` | 仅在文本实际被截断时显示工具提示 | `boolean` | `false` |
| `ellipsisThreshold` | 检查截断时使用的像素阈值 | `number` | `3` |
| `tooltipBackgroundColor` | 工具提示背景颜色 | `string` | `''` |
| `tooltipColor` | 工具提示文本颜色 | `string` | `''` |
| `tooltipFontSize` | 工具提示字体大小（像素） | `number` | `14` |
| `tooltipMaxWidth` | 工具提示最大宽度（像素） | `number` | - |
| `tooltipOverlayStyle` | 工具提示内容样式 | `CSSProperties` | `{ textAlign: 'justify' }` |

## 事件

| 事件 | 描述 | 类型 |
| --- | --- | --- |
| `expandChange` | 展开状态变化时触发 | `(isExpand: boolean) => void` |

## 插槽

| 插槽 | 描述 |
| --------- | ---------------------- |
| `tooltip` | 自定义工具提示内容 |
