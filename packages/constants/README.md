# @vben/constants

## 概述

`@vben/constants` 是 Vben Admin 框架中的业务常量包，用于定义和管理多个应用共享的业务常量。该包继承了 `@vben-core/shared/constants` 的所有能力，并在此基础上扩展了业务相关的常量定义，为整个项目提供统一的常量管理机制。

## 主要功能

- **路径常量管理**: 定义应用内的核心路径，如登录页面路径
- **国际化配置**: 提供支持的语言选项配置
- **业务状态码**: 定义 HTTP 状态码和业务状态码
- **角色权限常量**: 定义超级管理员、管理员等角色相关常量
- **字典枚举**: 提供系统字典类型的枚举定义
- **业务标识常量**: 定义租户ID、客户端ID等业务标识

## 核心模块说明

### 1. core.ts - 核心业务常量

该模块定义了应用的核心业务常量，包括：

- **路径常量**
  - `LOGIN_PATH`: 登录页面 URL 地址

- **国际化配置**
  - `SUPPORT_LANGUAGES`: 支持的语言列表（简体中文、English）

- **业务标识**
  - `DEFAULT_TENANT_ID`: 默认租户ID
  - `DEFAULT_CLIENT_ID`: 默认客户端ID

- **状态码定义**
  - `BUSINESS_SUCCESS_CODE`: 业务成功状态码 (200)
  - `UNAUTHORIZED_CODE`: 未授权状态码 (401)

- **角色权限**
  - `SUPERADMIN_USER_ID`: 超级管理员用户ID
  - `SUPERADMIN_ROLE_ID`: 超级管理员角色ID
  - `SUPERADMIN_ROLE_KEY`: 超级管理员角色标识
  - `ADMIN_ROLE_KEY`: 管理员角色标识

- **状态枚举**
  - `EnableStatus`: 启用/禁用状态
  - `YesNo`: 是/否枚举

### 2. dict-enum.ts - 字典枚举常量

该模块定义了系统中使用的字典类型枚举，包括：

- **系统字典**
  - `SYS_COMMON_STATUS`: 通用状态
  - `SYS_DEVICE_TYPE`: 设备类型
  - `SYS_GRANT_TYPE`: 授权类型
  - `SYS_NORMAL_DISABLE`: 正常/禁用状态
  - `SYS_NOTICE_STATUS`: 通知状态
  - `SYS_NOTICE_TYPE`: 通知类型
  - `SYS_OPER_TYPE`: 操作类型
  - `SYS_OSS_ACCESS_POLICY`: OSS权限桶类型
  - `SYS_SHOW_HIDE`: 显示状态
  - `SYS_USER_SEX`: 性别
  - `SYS_YES_NO`: 是否

- **工作流字典**
  - `WF_BUSINESS_STATUS`: 业务状态
  - `WF_FORM_TYPE`: 表单类型
  - `WF_TASK_STATUS`: 任务状态

### 3. index.ts - 统一导出

该模块作为包的入口文件，负责：
- 导出 `core.ts` 中的所有常量
- 导出 `dict-enum.ts` 中的字典枚举
- 重新导出 `@vben-core/shared/constants` 中的所有常量

## 目录结构

```
packages/constants/
├── src/
│   ├── core.ts           # 核心业务常量定义
│   ├── dict-enum.ts      # 字典枚举常量定义
│   └── index.ts          # 统一导出入口
├── package.json          # 包配置文件
├── tsconfig.json         # TypeScript 配置
└── README.md             # 说明文档
```

## 使用方法

### 安装依赖

在目标应用目录下添加依赖：

```bash
# 进入目标应用目录，例如 apps/web-antd
cd apps/web-antd
pnpm add @vben/constants
```

### 基础使用

```typescript
// 导入路径常量
import { LOGIN_PATH } from '@vben/constants';

// 导入语言配置
import { SUPPORT_LANGUAGES } from '@vben/constants';

// 导入状态码
import { BUSINESS_SUCCESS_CODE, UNAUTHORIZED_CODE } from '@vben/constants';

// 导入角色常量
import { SUPERADMIN_ROLE_KEY, ADMIN_ROLE_KEY } from '@vben/constants';

// 导入字典枚举
import { DictEnum } from '@vben/constants';

// 使用字典枚举
const status = DictEnum.SYS_COMMON_STATUS;
```

### 实际应用场景

#### 1. 路由守卫中使用

```typescript
import { LOGIN_PATH } from '@vben/constants';

if (!isAuthenticated) {
  return redirect(LOGIN_PATH);
}
```

#### 2. 国际化配置

```typescript
import { SUPPORT_LANGUAGES } from '@vben/constants';

const languageOptions = SUPPORT_LANGUAGES.map(lang => ({
  label: lang.label,
  value: lang.value
}));
```

#### 3. 权限判断

```typescript
import { SUPERADMIN_USER_ID, SUPERADMIN_ROLE_KEY } from '@vben/constants';

if (user.id === SUPERADMIN_USER_ID) {
  // 超级管理员逻辑
}
```

#### 4. 字典数据获取

```typescript
import { DictEnum } from '@vben/constants';

// 获取字典数据
const statusDict = await getDictData(DictEnum.SYS_COMMON_STATUS);
```

## 与其他目录的关联关系

### 依赖关系

- **依赖包**:
  - `@vben-core/shared`: 继承其 constants 模块的所有能力

### 被依赖关系

该包被项目中的多个模块广泛使用：

- **应用层** (`apps/web-antd`):
  - 认证模块: 使用 `LOGIN_PATH`、`UNAUTHORIZED_CODE` 等常量
  - 系统管理: 使用字典枚举、角色常量等
  - 监控模块: 使用状态码、字典枚举等
  - 工作流模块: 使用工作流相关字典枚举

- **布局层** (`packages/effects/layouts`):
  - 语言切换组件: 使用 `SUPPORT_LANGUAGES`
  - 偏好设置: 使用相关配置常量

- **通用UI** (`packages/effects/common-ui`):
  - 关于页面: 使用框架相关常量

### 在项目架构中的定位

```
项目架构层次:
├── apps/                    # 应用层
│   └── web-antd/           # Web应用（使用 @vben/constants）
├── packages/               # 包层
│   ├── @core/             # 核心层
│   │   └── shared/        # 共享工具（提供基础常量）
│   ├── effects/           # 效果层（使用 @vben/constants）
│   └── constants/         # 业务常量层（本包）
```

`@vben/constants` 位于包层的业务常量层，向上为应用层和效果层提供业务常量支持，向下继承核心层的共享常量能力，起到了承上启下的作用。

## 开发指南

### 添加新的业务常量

1. **核心业务常量**: 在 `src/core.ts` 中添加
2. **字典枚举**: 在 `src/dict-enum.ts` 中添加
3. **确保导出**: 在 `src/index.ts` 中已自动导出

### 命名规范

- 常量使用大写字母和下划线: `CONSTANT_NAME`
- 字典枚举使用大驼峰: `DictEnumName`
- 类型定义使用大驼峰: `TypeName`

### 最佳实践

- 保持常量的单一职责原则
- 避免在常量文件中添加复杂逻辑
- 及时更新文档说明
- 遵循 TypeScript 类型安全原则

## 版本信息

- **当前版本**: 5.7.0
- **许可证**: MIT
- **仓库地址**: [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
