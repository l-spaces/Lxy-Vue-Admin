---
title: JsonPreview JSON 预览
description: "@vben/common-ui 的只读 JSON 预览包装器，基于 vue-json-pretty"
outline: deep
lastUpdated: true
---

# `JsonPreview`

## 简介
`JsonPreview` 是一个轻量级只读预览组件，底层直接包裹 `vue-json-pretty`。

## 适用范围

- 配置详情预览
- 接口返回数据展示
- 需要快速浏览层级结构但不需要完整交互的场景

## 对应源码目录或关键文件

- `packages/effects/common-ui/src/components/json-preview/index.ts`
- `packages/effects/common-ui/src/components/json-preview/json-preview.vue`

## 核心机制

### 导出

- `JsonPreview`

### 关键 Props

- `data`：待预览数据

### 固定行为

- 默认展开深度为 `3`
- 显示数组长度
- 根路径固定为 `res`

## 使用方式与注意事项

- 这是纯展示组件，不提供复制、折叠事件或自定义主题能力。
- 适合做详情页内的数据补充展示，不适合作为大规模交互式 JSON 编辑器。
