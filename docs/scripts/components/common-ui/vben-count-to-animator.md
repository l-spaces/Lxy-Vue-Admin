---
title: 数字动画组件
description: "@vben/common-ui 的 CountTo 组件能力与属性说明"
outline: deep
lastUpdated: true
---

# `CountTo`

## 简介

`CountTo` 位于 `packages/effects/common-ui/src/components/count-to`，用于数值过渡动画展示；`@vben-core/shadcn-ui` 中另有 `VbenCountToAnimator`，两者都属于数字动效能力。

## 适用范围

- 仪表盘统计数字动画
- 需要前缀/后缀/小数格式化的数值展示

## 对应源码目录或关键文件

- `packages/effects/common-ui/src/components/count-to/index.ts`
- `packages/effects/common-ui/src/components/count-to/types.ts`
- `packages/effects/common-ui/src/components/count-to/count-to.vue`

## 核心机制或功能说明

### 导出方式

- `CountTo`（组件）
- `types.ts` 中的 `CountToProps` 与 `TransitionPresets`

### `CountToProps` 关键属性

- 值与动画：
  - `startVal`
  - `endVal`
  - `duration`
  - `delay`
  - `disabled`
  - `transition`
- 数值格式：
  - `decimals`
  - `decimal`
  - `separator`
  - `prefix`
  - `suffix`
- 样式类与样式对象：
  - `mainClass/decimalClass/prefixClass/suffixClass`
  - `mainStyle/decimalStyle/prefixStyle/suffixStyle`

### 事件

- `started`
- `finished`

这两个事件来自 `useTransition` 的生命周期回调。

### 实现要点

- 内部使用 `@vueuse/core` 的 `useTransition`
- `endVal` 变化会触发重新动画
- 组件把整数与小数部分拆开渲染，便于分别定制样式

## 使用方式、扩展方式或注意事项

- 当 `disabled = true` 时会跳过动画，适合首屏性能敏感场景。
- 需要统一数字格式时建议通过 `separator/decimals` 配置，而不是在外层手工字符串拼接。
- 业务若直接使用 `VbenCountToAnimator`，应同步核对其实现与 `CountTo` 的 API 差异。
