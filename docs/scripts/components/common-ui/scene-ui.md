---
title: Scene UI 场景页面
description: "packages/effects/common-ui/src/ui 的场景页面导出，覆盖关于、认证、仪表盘、个人中心和兜底页"
outline: deep
lastUpdated: true
---

# `src/ui`

## 简介
`packages/effects/common-ui/src/ui` 不是基础组件目录，而是场景页面层。它把项目内高频页面壳、登录页、仪表盘、个人中心和兜底页统一沉淀为可复用导出。

## 适用范围

- 关于页
- 登录、注册、忘记密码、扫码登录、登录过期弹窗
- 仪表盘概览与工作台
- 个人中心与设置页
- 403/404/500/coming-soon/offline 兜底页

## 对应源码目录或关键文件

- `packages/effects/common-ui/src/ui/index.ts`
- `packages/effects/common-ui/src/ui/about/about.ts`
- `packages/effects/common-ui/src/ui/about/about.vue`
- `packages/effects/common-ui/src/ui/authentication/index.ts`
- `packages/effects/common-ui/src/ui/authentication/types.ts`
- `packages/effects/common-ui/src/ui/dashboard/index.ts`
- `packages/effects/common-ui/src/ui/dashboard/typing.ts`
- `packages/effects/common-ui/src/ui/profile/index.ts`
- `packages/effects/common-ui/src/ui/profile/types.ts`
- `packages/effects/common-ui/src/ui/fallback/index.ts`
- `packages/effects/common-ui/src/ui/fallback/fallback.ts`

## 导出结构

| 模块 | 主要导出 | 说明 |
| --- | --- | --- |
| `about` | `About` | 关于页，基于 `Page` 和项目元数据渲染 |
| `authentication` | `AuthenticationLogin`、`AuthenticationCodeLogin`、`AuthenticationForgetPassword`、`AuthenticationQrCodeLogin`、`AuthenticationRegister`、`AuthenticationLoginExpiredModal`、相关类型 | 登录与认证场景页 |
| `dashboard` | `AnalysisChartCard`、`AnalysisChartsTabs`、`AnalysisOverview`、`WorkbenchHeader`、`WorkbenchProject`、`WorkbenchQuickNav`、`WorkbenchTodo`、`WorkbenchTrends`、相关类型 | 仪表盘分析区和工作台区 |
| `profile` | `Profile`、`ProfileBaseSetting`、`ProfileNotificationSetting`、`ProfilePasswordSetting`、`ProfileSecuritySetting`、相关类型 | 个人中心壳和设置页 |
| `fallback` | `Fallback`、`FallbackProps` | 兜底页和异常页 |

## 核心机制

### About

- `About` 使用 `Page` 作为页面容器。
- 组件通过 `__VBEN_ADMIN_METADATA__` 展示版本、作者、仓库、文档地址等信息。
- `AboutProps` 只包含 `name`、`title`、`description` 三个字段。

### Authentication

- `AuthenticationLogin` 通过 `useVbenForm` 渲染登录表单。
- `AuthenticationLogin` 支持记住账号，并通过本地存储保存用户名。
- `AuthenticationCodeLogin`、`AuthenticationForgetPassword`、`AuthenticationRegister` 都是表单提交型页面壳。
- `AuthenticationQrCodeLogin` 使用 `useQRCode` 生成二维码。
- `AuthenticationLoginExpiredModal` 通过 `useVbenModal` 包装过期登录弹窗，并自动计算 `z-index`。

### Dashboard

- `AnalysisOverview` 以 `AnalysisOverviewItem` 为数据源，渲染统计卡片。
- `AnalysisChartsTabs` 以 `TabOption[]` 为数据源，渲染标签页和插槽内容。
- `WorkbenchHeader`、`WorkbenchProject`、`WorkbenchQuickNav`、`WorkbenchTodo`、`WorkbenchTrends` 分别对应工作台顶部、项目面板、快捷入口、待办和趋势列表。
- `dashboard/typing.ts` 只提供场景数据类型，不是通用组件类型库。

### Profile

- `Profile` 是个人中心页面壳，内部组合 `Page`、纵向 `Tabs` 和内容插槽。
- `ProfileBaseSetting` 与 `ProfilePasswordSetting` 基于 `useVbenForm`。
- `ProfileNotificationSetting` 与 `ProfileSecuritySetting` 通过 `SettingProps` 接收开关项并向外派发 `change` 事件。
- `Props`、`FormSchemaItem`、`SettingProps` 只适用于这一组场景组件。

### Fallback

- `Fallback` 根据 `status` 自动选择标题、描述和图标。
- `status` 支持 `403`、`404`、`500`、`coming-soon`、`offline`。
- `403` 和 `404` 会显示返回首页按钮。
- `500` 和 `offline` 会显示刷新按钮。

## 使用方式与注意事项

- 这一层属于场景页面，不应和 `components/` 里的基础组件混写在同一文档。
- `AuthenticationLoginExpiredModal` 当前已在 `apps/web-antd/src/layouts/basic.vue` 中使用。
- `Fallback` 的路由使用在 `apps/web-antd/src/router/access.ts` 里有直接映射。
- 如果要查具体参数，优先进入对应目录的 `types.ts` 或单个 `.vue` 文件，而不是在总览页里猜测。
