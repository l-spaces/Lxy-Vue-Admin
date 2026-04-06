---
title: Modal 模态框组件
description: Vben Modal 模态框组件的使用方法和 API
outline: deep
lastUpdated: true
---

# Vben Modal

`Vben Modal` 是框架使用的共享模态框包装器。它支持拖拽行为、全屏模式、自适应高度处理、加载状态、连接组件和命令式 API。

## 基础用法

```ts
const [Modal, modalApi] = useVbenModal({
  // props
  // events
});
```

<DemoPreview dir="demos/vben-modal/basic" />

## 当前使用注意事项

- 如果使用 `connectedComponent`，内部和外部组件通过 `modalApi.setData()` 和 `modalApi.getData()` 共享数据。
- 当存在 `connectedComponent` 时，避免从连接侧传入额外的模态框属性。建议使用 `useVbenModal(...)` 或 `modalApi.setState(...)`。
- 默认模态框行为可以在 `apps/<app>/src/bootstrap.ts` 中通过 `setDefaultModalProps(...)` 进行调整。

## 关键属性

| 属性 | 描述 | 类型 |
| --- | --- | --- |
| `appendToMain` | 挂载到主内容区域而非 `body` | `boolean` |
| `connectedComponent` | 将内部组件连接到模态框包装器 | `Component` |
| `animationType` | 模态框进入/离开动画 | `'slide' \| 'scale'` |
| `fullscreenButton` | 显示或隐藏全屏切换按钮 | `boolean` |
| `overlayBlur` | 遮罩层模糊程度 | `number` |
| `submitting` | 提交时锁定模态框交互 | `boolean` |

## 事件

| 事件 | 描述 | 类型 |
| --- | --- | --- |
| `onBeforeClose` | 关闭前调用；返回 `false` 或拒绝可阻止关闭 | `() => Promise<boolean \| undefined> \| boolean \| undefined` |
| `onOpenChange` | 打开状态变化时调用 | `(isOpen: boolean) => void` |
| `onOpened` | 打开动画完成后调用 | `() => void` |
| `onClosed` | 关闭动画完成后调用 | `() => void` |

## modalApi

| 方法 | 描述 |
| --- | --- |
| `setState(...)` | 更新模态框状态 |
| `open()` | 打开模态框 |
| `close()` | 关闭模态框 |
| `setData(data)` | 存储共享数据 |
| `getData<T>()` | 读取共享数据 |
| `lock(isLocked = true)` | 将模态框锁定为提交状态 |
| `unlock()` | `lock(false)` 的别名 |
