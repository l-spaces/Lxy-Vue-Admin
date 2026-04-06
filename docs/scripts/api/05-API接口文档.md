---
title: API 接口文档
description: API 架构设计、核心接口、系统管理接口与请求配置
lastUpdated: true
---

# API 接口文档

## 目录

- [1. API 架构设计](#1-api-架构设计)
  - [1.1 目录结构](#11-目录结构)
  - [1.2 定义规范](#12-定义规范)
- [2. 核心接口](#2-核心接口)
  - [2.1 认证接口](#21-认证接口)
  - [2.2 用户接口](#22-用户接口)
  - [2.3 菜单接口](#23-菜单接口)
- [3. 系统管理接口](#3-系统管理接口)
  - [3.1 用户管理](#31-用户管理)
  - [3.2 角色管理](#32-角色管理)
  - [3.3 菜单管理](#33-菜单管理)
  - [3.4 部门管理](#34-部门管理)
  - [3.5 字典管理](#35-字典管理)
- [4. 监控模块接口](#4-监控模块接口)
- [5. 工作流模块接口](#5-工作流模块接口)
- [6. 请求配置](#6-请求配置)
  - [6.1 请求拦截器](#61-请求拦截器)
  - [6.2 响应拦截器](#62-响应拦截器)
  - [6.3 错误处理](#63-错误处理)
- [7. 数据模型](#7-数据模型)

---

## 1. API 架构设计

### 1.1 目录结构

```
api/
├── core/                    # 核心接口
│   ├── auth.ts              # 认证接口
│   ├── captcha.ts           # 验证码接口
│   ├── menu.ts              # 菜单接口
│   ├── upload.ts            # 上传接口
│   └── user.ts              # 用户接口
├── system/                  # 系统管理接口
│   ├── user/                # 用户管理
│   ├── role/                # 角色管理
│   ├── menu/                # 菜单管理
│   ├── dept/                # 部门管理
│   ├── post/                # 岗位管理
│   ├── dict/                # 字典管理
│   ├── config/              # 参数配置
│   ├── notice/              # 通知公告
│   ├── oss/                 # 文件管理
│   ├── tenant/              # 租户管理
│   └── social/              # 社交账号
├── monitor/                 # 监控模块接口
│   ├── cache/               # 缓存监控
│   ├── online/              # 在线用户
│   ├── operlog/             # 操作日志
│   └── logininfo/           # 登录日志
├── tool/                    # 工具模块接口
│   └── gen/                 # 代码生成
├── workflow/                # 工作流接口
│   ├── category/            # 流程分类
│   ├── definition/          # 流程定义
│   ├── instance/            # 流程实例
│   └── task/                # 流程任务
├── common.d.ts              # 通用类型定义
├── helper.ts                # API 辅助函数
└── index.ts                 # API 导出
```

### 1.2 定义规范

**接口定义格式**：

```typescript
import type { PageQuery, PageResult } from '#/api/common';
import { alovaInstance } from '#/utils/http';

// 1. 请求参数类型
export interface UserQuery extends PageQuery {
  userName?: string;
  phoneNumber?: string;
  status?: string;
}

// 2. 响应数据类型
export interface User {
  userId: string;
  userName: string;
  nickName: string;
  email: string;
  // ...
}

// 3. API 枚举
enum Api {
  userList = '/system/user/list',
  userDetail = '/system/user/{userId}',
  userAdd = '/system/user',
  userUpdate = '/system/user',
  userDelete = '/system/user',
}

// 4. 接口方法
export async function userList(query: UserQuery) {
  return alovaInstance.get<PageResult<User>>(Api.userList, {
    params: query,
  });
}

export async function userDetail(userId: string) {
  return alovaInstance.get<User>(Api.userDetail.replace('{userId}', userId));
}
```

---

## 2. 核心接口

### 2.1 认证接口

**文件路径**：`api/core/auth.ts`

#### 登录接口

```typescript
POST /auth/login
```

**请求参数**：

```typescript
interface SimpleLoginParams {
  clientId?: string;        // 客户端 ID
  grantType: GrantType;     // 授权类型：password | captcha | social
  tenantId: string;         // 租户 ID
  username: string;         // 用户名
  password: string;         // 密码
  code?: string;            // 验证码
  uuid?: string;            // 验证码 ID
}
```

**响应数据**：

```typescript
interface LoginResult {
  access_token: string;     // 访问令牌
  client_id: string;        // 客户端 ID
  expire_in: number;        // 过期时间（秒）
}
```

**使用示例**：

```typescript
import { loginApi } from '#/api';

const result = await loginApi({
  grantType: 'password',
  tenantId: '000000',
  username: 'admin',
  password: '123456',
});
```

#### 登出接口

```typescript
POST /auth/logout
```

**使用示例**：

```typescript
import { doLogout } from '#/api';

await doLogout();
```

#### 获取租户列表

```typescript
GET /auth/tenant/list
```

**响应数据**：

```typescript
interface TenantResp {
  tenantEnabled: boolean;    // 是否启用租户
  voList: TenantOption[];    // 租户列表
}

interface TenantOption {
  companyName: string;       // 公司名称
  domain?: string;           // 绑定域名
  tenantId: string;          // 租户 ID
}
```

### 2.2 用户接口

**文件路径**：`api/core/user.ts`

#### 获取用户信息

```typescript
GET /system/user/getInfo
```

**响应数据**：

```typescript
interface UserInfoResp {
  permissions: string[];     // 权限列表
  roles: string[];           // 角色列表
  user: User;                // 用户信息
}

interface User {
  userId: number;
  userName: string;
  nickName: string;
  avatar: string;
  email: string;
  phonenumber: string;
  sex: string;
  status: string;
  deptId: number;
  deptName: string;
  roles: Role[];
  createTime: string;
}
```

**使用示例**：

```typescript
import { getUserInfoApi } from '#/api';

const userInfo = await getUserInfoApi();
```

### 2.3 菜单接口

**文件路径**：`api/core/menu.ts`

#### 获取用户菜单

```typescript
GET /system/menu/getRouters
```

**响应数据**：

```typescript
interface Menu {
  name: string;              // 菜单名称
  path: string;              // 路由路径
  hidden: boolean;           // 是否隐藏
  component: string;         // 组件名称
  alwaysShow?: boolean;      // 总是显示
  query?: string;            // 路由参数
  redirect?: string;         // 重定向路径
  meta: MenuMeta;            // 路由元信息
  children: Menu[];          // 子菜单
}

interface MenuMeta {
  title: string;             // 菜单标题
  icon: string;              // 菜单图标
  noCache: boolean;          // 是否不缓存
  link?: string;             // 外链地址
}
```

**使用示例**：

```typescript
import { getAllMenusApi } from '#/api';

const menus = await getAllMenusApi();
```

---

## 3. 系统管理接口

### 3.1 用户管理

**文件路径**：`api/system/user/index.ts`

#### 用户列表

```typescript
GET /system/user/list
```

**请求参数**：

```typescript
interface UserQuery extends PageQuery {
  userId?: string;
  userName?: string;
  nickName?: string;
  phoneNumber?: string;
  status?: string;
  deptId?: string;
  createTime?: [string, string];
}
```

#### 新增用户

```typescript
POST /system/user
```

**请求参数**：

```typescript
interface User {
  userId?: string;
  tenantId?: string;
  deptId: number;
  userName: string;
  nickName: string;
  userType?: string;
  email?: string;
  phonenumber?: string;
  sex?: string;
  avatar?: string;
  status?: string;
  remark?: string;
  roleIds?: string[];
  postIds?: number[];
}
```

#### 修改用户

```typescript
PUT /system/user
```

#### 删除用户

```typescript
DELETE /system/user/{userIds}
```

#### 重置密码

```typescript
PUT /system/user/resetPwd
```

**请求参数**：

```typescript
interface ResetPwdParam {
  userId: string;
  password: string;
}
```

#### 修改用户状态

```typescript
PUT /system/user/changeStatus
```

**请求参数**：

```typescript
{
  userId: string;
  status: string;
}
```

### 3.2 角色管理

**文件路径**：`api/system/role/index.ts`

#### 角色列表

```typescript
GET /system/role/list
```

**请求参数**：

```typescript
interface RoleQuery extends PageQuery {
  roleName?: string;
  roleKey?: string;
  status?: string;
}
```

#### 角色数据权限

```typescript
PUT /system/role/dataScope
```

**请求参数**：

```typescript
{
  roleId: string;
  dataScope: string;
  deptIds: number[];
}
```

### 3.3 菜单管理

**文件路径**：`api/system/menu/index.ts`

#### 菜单列表

```typescript
GET /system/menu/list
```

**请求参数**：

```typescript
interface MenuQuery {
  menuName?: string;
  visible?: string;
  status?: string;
}
```

#### 新增菜单

```typescript
POST /system/menu
```

**请求参数**：

```typescript
interface Menu {
  menuId?: number;
  menuName: string;
  parentId: number;
  orderNum: number;
  path: string;
  component?: string;
  query?: string;
  isFrame: string;
  isCache: string;
  menuType: string;
  visible: string;
  status: string;
  perms?: string;
  icon?: string;
  remark?: string;
}
```

### 3.4 部门管理

**文件路径**：`api/system/dept/index.ts`

#### 部门列表

```typescript
GET /system/dept/list
```

#### 部门树

```typescript
GET /system/dept/treeselect
```

**响应数据**：

```typescript
interface DeptTree {
  id: number;
  label: string;
  parentId: number;
  weight: number;
  children?: DeptTree[];
}
```

### 3.5 字典管理

**文件路径**：`api/system/dict/`

#### 字典类型列表

```typescript
GET /system/dict/type/list
```

#### 字典数据列表

```typescript
GET /system/dict/data/list
```

**请求参数**：

```typescript
interface DictDataQuery extends PageQuery {
  dictType?: string;
  dictLabel?: string;
  status?: string;
}
```

#### 根据字典类型获取字典数据

```typescript
GET /system/dict/data/type/{dictType}
```

---

## 4. 监控模块接口

### 在线用户

**文件路径**：`api/monitor/online/index.ts`

```typescript
// 在线用户列表
GET /system/online/list

// 强制登出
DELETE /system/online/{tokenId}
```

### 操作日志

**文件路径**：`api/monitor/operlog/index.ts`

```typescript
// 操作日志列表
GET /system/operlog/list

// 删除操作日志
DELETE /system/operlog/{operIds}

// 清空操作日志
DELETE /system/operlog/clean

// 导出操作日志
GET /system/operlog/export
```

### 登录日志

**文件路径**：`api/monitor/logininfo/index.ts`

```typescript
// 登录日志列表
GET /system/logininfor/list

// 删除登录日志
DELETE /system/logininfor/{infoIds}

// 清空登录日志
DELETE /system/logininfor/clean

// 导出登录日志
GET /system/logininfor/export
```

### 缓存监控

**文件路径**：`api/monitor/cache/index.ts`

```typescript
// 获取缓存信息
GET /system/cache

// 获取缓存键名列表
GET /system/cache/getNames

// 获取缓存键值
GET /system/cache/getKeys/{cacheName}

// 获取缓存内容
GET /system/cache/getValue/{cacheName}/{cacheKey}

// 清理缓存
DELETE /system/cache/clearCacheName/{cacheName}
DELETE /system/cache/clearCacheKey/{cacheKey}
DELETE /system/cache/clearCacheAll
```

---

## 5. 工作流模块接口

### 流程定义

**文件路径**：`api/workflow/definition/index.ts`

```typescript
// 流程定义列表
GET /workflow/processDefinition/list

// 部署流程
POST /workflow/processDefinition/deploy

// 发布流程
PUT /workflow/processDefinition/publish/{id}

// 取消发布
PUT /workflow/processDefinition/unPublish/{id}

// 删除流程定义
DELETE /workflow/processDefinition/{id}
```

### 流程实例

**文件路径**：`api/workflow/instance/index.ts`

```typescript
// 流程实例列表
GET /workflow/processInstance/list

// 流程实例详情
GET /workflow/processInstance/{id}

// 删除流程实例
DELETE /workflow/processInstance/{id}

// 取消流程实例
POST /workflow/processInstance/stopProcessInstance
```

### 流程任务

**文件路径**：`api/workflow/task/index.ts`

```typescript
// 待办任务列表
GET /workflow/task/waitingList

// 已办任务列表
GET /workflow/task/finishList

// 我的申请列表
GET /workflow/task/myDocument

// 完成任务
POST /workflow/task/complete

// 任务转办
POST /workflow/task/transfer

// 任务退回
POST /workflow/task/return

// 任务驳回
POST /workflow/task/reject
```

---

## 6. 请求配置

### 6.1 请求拦截器

**文件路径**：`utils/http/index.ts`

```typescript
beforeRequest: (request) => {
  const { config } = request;

  // 1. 添加 Token
  if (config.withToken && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 2. 添加语言设置
  const language = preferences.app.locale.replace('-', '_');
  config.headers['Accept-Language'] = language;
  config.headers['Content-Language'] = language;

  // 3. 添加 ClientID
  config.headers.ClientID = clientId;

  // 4. 请求加密
  if (enableEncrypt && encrypt) {
    const key = randomStr(32);
    config.headers['encrypt-key'] = asymmetricEncryption.encrypt(encodeBase64(key));
    request.data = symmetricEncryption.encrypt(JSON.stringify(data), key);
  }
}
```

### 6.2 响应拦截器

```typescript
responded: {
  onSuccess: async (response) => {
    // 1. 响应解密
    const encryptKey = response.headers?.['encrypt-key'];
    if (encryptKey) {
      const secret = decodeBase64(asymmetricEncryption.decrypt(encryptKey));
      response.data = JSON.parse(symmetricEncryption.decrypt(response.data, secret));
    }

    // 2. 业务状态码判断
    const { code, data, msg } = response.data;
    if (code === BUSINESS_SUCCESS_CODE) {
      return data;
    }

    // 3. 登录超时处理
    if (code === UNAUTHORIZED_CODE) {
      handleUnauthorizedLogout();
    }

    // 4. 业务异常
    throw new BusinessException(code, msg);
  },

  onError: (error) => {
    // HTTP 错误处理
    checkStatus(error?.response?.status, error.message);
    return Promise.reject(error);
  }
}
```

### 6.3 错误处理

**错误类型**：

```typescript
// 业务异常
export class BusinessException extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

// 未授权异常
export class UnauthorizedException extends Error {}

// 不可能的 401 异常
export class ImpossibleReturn401Exception extends Error {}
```

**状态码处理**：

```typescript
// utils/http/checkStatus.ts
export function checkStatus(status: number, msg: string) {
  switch (status) {
    case 400:
      message.error(msg);
      break;
    case 401:
      handleUnauthorizedLogout();
      break;
    case 403:
      message.error('拒绝访问');
      break;
    case 404:
      message.error('资源不存在');
      break;
    case 500:
      message.error('服务器错误');
      break;
    default:
      message.error(msg || '请求失败');
  }
}
```

---

## 7. 数据模型

### 通用模型

**文件路径**：`api/common.d.ts`

```typescript
// ID 类型
export type ID = number | string;
export type IDS = (number | string)[];

// 基础实体
export interface BaseEntity {
  createBy?: string;
  createDept?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
}

// 分页信息
export interface PageResult<T = any> {
  rows: T[];
  total: number;
}

// 分页查询参数
export interface PageQuery {
  isAsc?: string;
  orderByColumn?: string;
  pageNum?: number;
  pageSize?: number;
}

// HTTP 响应
export interface HttpResponse<T = any> {
  code: number;
  data: T;
  msg: string;
}
```

### 用户模型

**文件路径**：`api/system/user/model.d.ts`

```typescript
export interface User {
  userId: string;
  tenantId: string;
  deptId: number;
  userName: string;
  nickName: string;
  userType: string;
  email: string;
  phonenumber: string;
  sex: string;
  avatar?: string;
  status: string;
  loginIp: string;
  loginDate: string;
  remark: string;
  createTime: string;
  dept: Dept;
  roles: Role[];
  roleIds?: string[];
  postIds?: number[];
}
```

---

**文档版本：** v1.0  
**最后更新：** 2026-04-06  
**维护者：** Lxy-Vue-Admin Team
