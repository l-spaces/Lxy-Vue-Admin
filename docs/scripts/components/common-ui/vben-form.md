---
title: Form 表单组件
description: Vben Form 表单组件的使用方法和 API
outline: deep
lastUpdated: true
---

# Vben Form

`Vben Form` 是跨不同 UI 库变体使用的共享表单抽象，如 `Ant Design Vue`、`Element Plus`、`Naive UI` 以及本仓库中添加的其他适配器。

> 如果文档中的某些细节不够清晰，请同时查看在线演示。

## 适配器设置

每个应用在 `src/adapter/form.ts` 和 `src/adapter/component/index.ts` 下维护自己的适配器层。

当前适配器模式为：

- 首先初始化共享组件适配器
- 调用 `setupVbenForm(...)`
- 通过 `modelPropNameMap` 映射特殊的 `v-model:*` 属性名称
- 保持表单空状态与实际 UI 库行为一致

### 表单适配器示例

```ts
import type {
  VbenFormSchema as FormSchema,
  VbenFormProps,
} from '@vben/common-ui';

import type { ComponentType } from './component';

import { setupVbenForm, useVbenForm as useForm, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { initComponentAdapter } from './component';

initComponentAdapter();
setupVbenForm<ComponentType>({
  config: {
    baseModelPropName: 'value',
    emptyStateValue: null,
    modelPropNameMap: {
      Checkbox: 'checked',
      Radio: 'checked',
      Switch: 'checked',
      Upload: 'fileList',
    },
  },
  defineRules: {
    required: (value, _params, ctx) => {
      if (value === undefined || value === null || value.length === 0) {
        return $t('ui.formRules.required', [ctx.label]);
      }
      return true;
    },
    selectRequired: (value, _params, ctx) => {
      if (value === undefined || value === null) {
        return $t('ui.formRules.selectRequired', [ctx.label]);
      }
      return true;
    },
  },
});

const useVbenForm = useForm<ComponentType>;

export { useVbenForm, z };
export type VbenFormSchema = FormSchema<ComponentType>;
export type { VbenFormProps };
```

### 组件适配器示例

```ts
import type { Component, SetupContext } from 'vue';

import type { BaseFormComponentType } from '@vben/common-ui';

import { h } from 'vue';

import { globalShareState } from '@vben/common-ui';
import { $t } from '@vben/locales';
import {
  AutoComplete,
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Divider,
  Input,
  InputNumber,
  InputPassword,
  Mentions,
  notification,
  Radio,
  RadioGroup,
  RangePicker,
  Rate,
  Select,
  Space,
  Switch,
  Textarea,
  TimePicker,
  TreeSelect,
  Upload,
} from 'ant-design-vue';

const withDefaultPlaceholder = <T extends Component>(
  component: T,
  type: 'input' | 'select',
) => {
  return (props: any, { attrs, slots }: Omit<SetupContext, 'expose'>) => {
    const placeholder = props?.placeholder || $t(`ui.placeholder.${type}`);
    return h(component, { ...props, ...attrs, placeholder }, slots);
  };
};

export type ComponentType =
  | 'AutoComplete'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'DatePicker'
  | 'DefaultButton'
  | 'Divider'
  | 'Input'
  | 'InputNumber'
  | 'InputPassword'
  | 'Mentions'
  | 'PrimaryButton'
  | 'Radio'
  | 'RadioGroup'
  | 'RangePicker'
  | 'Rate'
  | 'Select'
  | 'Space'
  | 'Switch'
  | 'Textarea'
  | 'TimePicker'
  | 'TreeSelect'
  | 'Upload'
  | BaseFormComponentType;

async function initComponentAdapter() {
  const components: Partial<Record<ComponentType, Component>> = {
    AutoComplete,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    DefaultButton: (props, { attrs, slots }) => {
      return h(Button, { ...props, attrs, type: 'default' }, slots);
    },
    Divider,
    Input: withDefaultPlaceholder(Input, 'input'),
    InputNumber: withDefaultPlaceholder(InputNumber, 'input'),
    InputPassword: withDefaultPlaceholder(InputPassword, 'input'),
    Mentions: withDefaultPlaceholder(Mentions, 'input'),
    PrimaryButton: (props, { attrs, slots }) => {
      return h(Button, { ...props, attrs, type: 'primary' }, slots);
    },
    Radio,
    RadioGroup,
    RangePicker,
    Rate,
    Select: withDefaultPlaceholder(Select, 'select'),
    Space,
    Switch,
    Textarea: withDefaultPlaceholder(Textarea, 'input'),
    TimePicker,
    TreeSelect: withDefaultPlaceholder(TreeSelect, 'select'),
    Upload,
  };

  globalShareState.setComponents(components);
  globalShareState.defineMessage({
    copyPreferencesSuccess: (title, content) => {
      notification.success({
        description: content,
        message: title,
        placement: 'bottomRight',
      });
    },
  });
}

export { initComponentAdapter };
```

## 基础用法

通过 `useVbenForm` 创建表单：

<DemoPreview dir="demos/vben-form/basic" />

## 关键 API 说明

- `useVbenForm` 返回 `[Form, formApi]`
- `formApi.getFieldComponentRef()` 和 `formApi.getFocusedField()` 在当前版本中可用
- `handleValuesChange(values, fieldsChanged)` 在较新版本中包含第二个参数
- `fieldMappingTime` 和 `scrollToFirstError` 是当前表单属性的一部分

## 参考

如需完整的中文 API 表格和更多示例，请参阅中文组件页面以获取完整的参数矩阵。
