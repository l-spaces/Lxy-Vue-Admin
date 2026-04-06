---
outline: deep
---

# Vben Drawer

`Vben Drawer` 是框架使用的共享抽屉包装器。它支持自适应高度布局、加载状态、连接组件，以及与模态框 API 类似的命令式 API。

## 基础用法

```ts
const [Drawer, drawerApi] = useVbenDrawer({
  // props
  // events
});
```

<DemoPreview dir="demos/vben-drawer/basic" />

## 当前使用注意事项

- 如果使用 `connectedComponent`，内部和外部组件通过 `drawerApi.setData()` 和 `drawerApi.getData()` 共享数据。
- 默认抽屉行为可以在 `apps/<app>/src/bootstrap.ts` 中通过 `setDefaultDrawerProps(...)` 进行调整。
- `setState(...)` 操作的是 `DrawerState`，而不是 `ModalState`。

## 关键属性

| 属性 | 描述 | 类型 |
| --- | --- | --- |
| `appendToMain` | 挂载到主内容区域而非 `body` | `boolean` |
| `connectedComponent` | 将内部组件连接到抽屉包装器 | `Component` |
| `closeIconPlacement` | 关闭图标的位置 | `'left' \| 'right'` |
| `placement` | 抽屉所在侧边 | `'left' \| 'right' \| 'top' \| 'bottom'` |
| `overlayBlur` | 遮罩层模糊程度 | `number` |
| `submitting` | 提交时锁定抽屉交互 | `boolean` |

## 事件

| 事件 | 描述 | 类型 |
| --- | --- | --- |
| `onBeforeClose` | 关闭前调用；返回 `false` 或拒绝可阻止关闭 | `() => Promise<boolean \| undefined> \| boolean \| undefined` |
| `onOpenChange` | 打开状态变化时调用 | `(isOpen: boolean) => void` |
| `onOpened` | 打开动画完成后调用 | `() => void` |
| `onClosed` | 关闭动画完成后调用 | `() => void` |

## drawerApi

| 方法 | 描述 |
| --- | --- |
| `setState(...)` | 更新抽屉状态 |
| `open()` | 打开抽屉 |
| `close()` | 关闭抽屉 |
| `setData(data)` | 存储共享数据 |
| `getData<T>()` | 读取共享数据 |
| `lock(isLocked = true)` | 将抽屉锁定为提交状态 |
| `unlock()` | `lock(false)` 的别名 |
