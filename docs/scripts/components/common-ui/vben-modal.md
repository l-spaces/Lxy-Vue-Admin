---
title: Modal 模态框组件
description: "@vben-core/popup-ui 的 useVbenModal、状态模型与连接组件机制"
outline: deep
lastUpdated: true
---

# `@vben-core/popup-ui` Modal

## 简介

Modal 能力位于 `packages/@core/ui-kit/popup-ui/src/modal`，通过 `useVbenModal` 返回组件与 API，实现命令式控制。

## 适用范围

- 页面弹窗编辑/详情
- 外层容器 + 内层业务组件的“连接组件”模式
- 统一设置默认弹窗行为

## 对应源码目录或关键文件

- `packages/@core/ui-kit/popup-ui/src/modal/index.ts`
- `packages/@core/ui-kit/popup-ui/src/modal/modal.ts`
- `packages/@core/ui-kit/popup-ui/src/modal/modal-api.ts`
- `packages/@core/ui-kit/popup-ui/src/modal/use-modal.ts`
- `apps/web-antd/src/bootstrap.ts`

## 核心机制或功能说明

### 导出方式

`src/modal/index.ts` 导出：

- `VbenModal`
- `useVbenModal`
- `setDefaultModalProps`
- 类型：`ModalProps`、`ModalState`、`ModalApiOptions`、`ExtendedModalApi`

### Modal 状态模型

`ModalProps` 关键属性包括：

- 展示控制：`header`、`footer`、`title`、`description`
- 交互控制：`closeOnClickModal`、`closeOnPressEscape`、`fullscreenButton`
- 状态控制：`loading`、`confirmLoading`、`confirmDisabled`、`submitting`
- 布局控制：`appendToMain`、`centered`、`overlayBlur`、`animationType`

### `ModalApi` 关键方法

- `open()`
- `close()`
- `setState(...)`
- `setData(payload)` / `getData<T>()`
- `lock(isLocked?)` / `unlock()`
- `modalLoading(loading)`

### connectedComponent 模式

`useVbenModal({ connectedComponent })` 时：

- 外层通过 `provide/inject` 连接内层组件
- 内层 API 会透传回外层
- 源码会警告：`connectedComponent` 场景不建议再直接传 Modal props，以降低复杂度

### 项目接入现状

- `apps/web-antd/src/bootstrap.ts` 已设置默认 Modal 参数：
  - `fullscreenButton: false`
  - `animationType: 'scale'`

## 使用方式、扩展方式或注意事项

- 弹窗表单提交场景优先使用 `lock()`，避免用户重复操作。
- 需要跨组件传递临时数据时使用 `setData/getData`，不要滥用全局 store。
- 若修改默认弹窗行为，应在 `bootstrap.ts` 集中处理，避免页面级分散配置。
