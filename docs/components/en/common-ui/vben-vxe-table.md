---
outline: deep
---

# Vben Vxe Table

`Vben Vxe Table` 将 `vxe-table` 与 `Vben Form` 封装在一起，使您可以使用共享 API 构建可搜索的数据表格。

## 适配器示例

当前渲染器适配器使用 `renderTableDefault(...)` 进行表格单元格渲染：

```ts
vxeUI.renderer.add('CellImage', {
  renderTableDefault(_renderOpts, params) {
    const { column, row } = params;
    return h(Image, { src: row[column.field] });
  },
});

vxeUI.renderer.add('CellLink', {
  renderTableDefault(renderOpts) {
    const { props } = renderOpts;
    return h(
      Button,
      { size: 'small', type: 'link' },
      { default: () => props?.text },
    );
  },
});
```

## 基础用法

```vue
<script setup lang="ts">
import { useVbenVxeGrid } from '#/adapter/vxe-table';

const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions: {},
  formOptions: {},
  gridEvents: {},
});
</script>

<template>
  <Grid />
</template>
```

<DemoPreview dir="demos/vben-vxe-table/basic" />

## GridApi

| 方法 | 描述 | 类型 |
| --- | --- | --- |
| `setLoading` | 更新加载状态 | `(loading: boolean) => void` |
| `setGridOptions` | 合并新的表格选项 | `(options: Partial<VxeGridProps['gridOptions']>) => void` |
| `reload` | 重新加载数据并重置分页 | `(params?: Record<string, any>) => void` |
| `query` | 查询数据但保持当前页码 | `(params?: Record<string, any>) => void` |
| `grid` | `vxe-grid` 实例 | `VxeGridInstance` |
| `formApi` | 搜索表单 API | `FormApi` |
| `toggleSearchForm` | 切换或强制设置搜索表单的显示状态 | `(show?: boolean) => boolean` |

## 属性

| 属性 | 描述 | 类型 |
| --- | --- | --- |
| `tableTitle` | 表格标题 | `string` |
| `tableTitleHelp` | 表格标题的帮助文本 | `string` |
| `class` | 外部容器的类名 | `string` |
| `gridClass` | `vxe-grid` 节点的类名 | `string` |
| `gridOptions` | `vxe-grid` 选项 | `DeepPartial<VxeTableGridOptions>` |
| `gridEvents` | `vxe-grid` 事件处理器 | `DeepPartial<VxeGridListeners>` |
| `formOptions` | 搜索表单选项 | `VbenFormProps` |
| `showSearchForm` | 搜索表单是否可见 | `boolean` |
| `separator` | 搜索表单与表格主体之间的分隔符 | `boolean \| SeparatorOptions` |

## 插槽

| 插槽 | 描述 |
| ----------------- | ------------------------------------------------------- |
| `toolbar-actions` | 工具栏左侧，靠近标题位置 |
| `toolbar-tools` | 工具栏右侧，内置工具按钮之前 |
| `table-title` | 自定义表格标题 |

所有以 `form-` 开头的具名插槽都会转发到搜索表单。
