---
outline: deep
---

# Page

`Page` 是业务页面的标准顶级布局容器。它提供头部区域、内容区域和可选的底部区域。

## 属性

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 页面标题 | `string \| slot` | - |
| `description` | 页面描述 | `string \| slot` | - |
| `contentClass` | 内容区域的类名 | `string` | - |
| `headerClass` | 头部区域的类名 | `string` | - |
| `footerClass` | 底部区域的类名 | `string` | - |
| `autoContentHeight` | 从可见布局高度自动计算内容区域高度 | `boolean` | `false` |
| `heightOffset` | 启用自动高度时从内容区域减去的额外高度偏移量 | `number` | `0` |

## 插槽

| 插槽 | 描述 |
| ------------- | ------------------------- |
| `default` | 页面内容 |
| `title` | 自定义标题 |
| `description` | 自定义描述 |
| `extra` | 头部右侧内容 |
| `footer` | 底部内容 |
