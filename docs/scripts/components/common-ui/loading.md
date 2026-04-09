---
title: Loading 加载态
description: "@vben/common-ui 的加载组件与 loading/spinning 指令"
outline: deep
lastUpdated: true
---

# `Loading`

## 简介
`Loading` 模块同时提供组件和指令封装，用于页面或局部区域的加载态展示。

## 适用范围

- 页面数据拉取中的遮罩态
- 局部区域的等待态
- 需要在任意容器上直接加 `v-loading` / `v-spinning` 的场景

## 对应源码目录或关键文件

- `packages/effects/common-ui/src/components/loading/index.ts`
- `packages/effects/common-ui/src/components/loading/loading.vue`
- `packages/effects/common-ui/src/components/loading/spinner.vue`
- `packages/effects/common-ui/src/components/loading/directive.ts`

## 核心机制

### 导出

- `Loading`
- `Spinner`
- `registerLoadingDirective`

### 组件行为

- `Loading` 会把默认插槽作为被包裹内容，再叠加 `VbenLoading`。
- `Spinner` 只提供旋转加载指示，不包含文本。
- 两个组件都支持 `class`、`minLoadingTime` 和 `spinning`。

### 指令行为

- `registerLoadingDirective(app, params?)` 会注册 `loading` 和 `spinning` 指令。
- 指令值可以是 `boolean` 或配置对象。
- 更新时会直接更新内部组件 props。

## 使用方式与注意事项

- 指令注册时会额外注入相对定位样式，保证遮罩层定位正确。
- 如果只需要单独的 loading 图标，可以使用 `Spinner`；如果需要内容遮罩，使用 `Loading`。
