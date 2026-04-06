---
title: Alert 警告组件
description: Vben Alert 警告组件的使用方法和 API
outline: deep
lastUpdated: true
---

# Vben Alert

`Alert` 提供轻量级的 JavaScript 驱动对话框，用于简单的 `alert`、`confirm` 和 `prompt` 风格交互。

## 基础用法

使用 `alert` 显示单确认按钮对话框：

<DemoPreview dir="demos/vben-alert/alert" />

使用 `confirm` 进行确认/取消交互：

<DemoPreview dir="demos/vben-alert/confirm" />

当需要简单的用户输入时使用 `prompt`：

<DemoPreview dir="demos/vben-alert/prompt" />

## useAlertContext

如果 `content`、`footer` 或 `icon` 通过自定义组件渲染，您可以在该组件内部调用 `useAlertContext()` 来访问当前对话框的操作方法。

| 方法        | 描述               | 类型         |
| ----------- | ------------------ | ------------ |
| `doConfirm` | 触发确认操作       | `() => void` |
| `doCancel`  | 触发取消操作       | `() => void` |

## 核心类型

```ts
export type IconType = 'error' | 'info' | 'question' | 'success' | 'warning';

export type BeforeCloseScope = {
  isConfirm: boolean;
};

export type AlertProps = {
  beforeClose?: (
    scope: BeforeCloseScope,
  ) => boolean | Promise<boolean | undefined> | undefined;
  bordered?: boolean;
  buttonAlign?: 'center' | 'end' | 'start';
  cancelText?: string;
  centered?: boolean;
  confirmText?: string;
  containerClass?: string;
  content: Component | string;
  contentClass?: string;
  contentMasking?: boolean;
  footer?: Component | string;
  icon?: Component | IconType;
  overlayBlur?: number;
  showCancel?: boolean;
  title?: string;
};

export type PromptProps<T = any> = {
  beforeClose?: (scope: {
    isConfirm: boolean;
    value: T | undefined;
  }) => boolean | Promise<boolean | undefined> | undefined;
  component?: Component;
  componentProps?: Recordable<any>;
  componentSlots?:
    | (() => any)
    | Recordable<unknown>
    | VNode
    | VNodeArrayChildren;
  defaultValue?: T;
  modelPropName?: string;
} & Omit<AlertProps, 'beforeClose'>;
```
