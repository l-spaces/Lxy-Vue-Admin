---
title: VxeTable 表格组件
description: "@vben/plugins/vxe-table 与 web-antd 适配层说明"
outline: deep
lastUpdated: true
---

# `@vben/plugins/vxe-table`

## 简介

VXE 表格能力通过 `@vben/plugins/vxe-table` 提供，`web-antd` 在 `adapter/vxe-table.ts` 中完成全局配置和渲染器扩展。

## 适用范围

- 可搜索、可分页的中后台数据表格
- 需要与 `VbenForm` 联动的查询区
- 需要统一响应结构映射（`rows/total`）的接口列表页

## 对应源码目录或关键文件

- `packages/effects/plugins/src/vxe-table/index.ts`
- `packages/effects/plugins/src/vxe-table/types.ts`
- `packages/effects/plugins/src/vxe-table/use-vxe-grid.ts`
- `apps/web-antd/src/adapter/vxe-table.ts`

## 核心机制或功能说明

### 导出方式

`@vben/plugins/vxe-table` 当前导出：

- `setupVbenVxeTable`
- `useVbenVxeGrid`
- `VbenVxeGrid`
- 类型：
  - `VxeTableGridColumns`
  - `VxeTableGridOptions`
  - `VxeGridDefines`
  - `VxeGridListeners`
  - `VxeGridProps`
  - `VxeGridPropTypes`

### `useVbenVxeGrid` 返回值

- `[Grid, gridApi]`
- `gridApi` 通过 `ExtendedVxeGridApi` 提供状态读取与控制能力

### `VxeGridProps` 关键字段

- `gridOptions`
- `gridEvents`
- `formOptions`
- `showSearchForm`
- `tableTitle`
- `tableTitleHelp`
- `separator`

### web-antd 适配层配置

`apps/web-antd/src/adapter/vxe-table.ts` 已完成：

- `setupVbenVxeTable({ configVxeTable, useVbenForm })`
- 全局 `proxyConfig.response` 映射：
  - `result: 'rows'`
  - `total: 'total'`
  - `list: 'rows'`
- 自定义渲染器：
  - `CellImage`
  - `CellLink`
- 工具函数：
  - `vxeCheckboxChecked`
  - `addSortParams`

## 使用方式、扩展方式或注意事项

- 列表接口建议返回 `rows + total`，可直接复用默认代理映射。
- 自定义单元格优先通过 renderer 扩展，避免页面里重复渲染模板。
- 排序参数联调建议复用 `addSortParams`，保持后端排序协议一致。
