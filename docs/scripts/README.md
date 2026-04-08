---
title: 开发文档索引
description: Lxy-Vue-Admin 项目开发文档总索引，包含开发指南、部署指南、维护指南等
---

# 开发文档索引

## 📚 文档分类

### 开发指南

| 文档 | 说明 |
|------|------|
| [项目概述](./guide/01-项目概述) | 项目简介、技术栈、特性与快速开始指南 |
| [环境配置指南](./guide/02-环境配置指南) | 开发环境搭建、依赖安装与配置说明 |
| [架构设计说明](./guide/03-架构设计说明) | 项目分层架构、Monorepo 架构与核心模块设计 |
| [核心模块功能详解](./guide/04-核心模块功能详解) | 认证授权、路由权限、状态管理、组件系统等核心模块详解 |
| [开发规范](./guide/06-开发规范) | 代码规范、组件开发规范、API 开发规范与 Git 提交规范 |
| [常见问题解决方案](./guide/07-常见问题解决方案) | 环境配置问题、开发常见问题、构建部署问题解决方案 |

### API 文档

| 文档 | 说明 |
|------|------|
| [API 接口文档](./api/05-API接口文档) | API 架构设计、核心接口、系统管理接口与请求配置 |

### 组件文档

| 文档 | 说明 |
|------|------|
| [组件介绍](./components/introduction) | 框架组件使用模式、配置点和主要 API 介绍 |
| [Alert 警告组件](./components/common-ui/vben-alert) | Vben Alert 警告组件的使用方法和 API |
| [Form 表单组件](./components/common-ui/vben-form) | Vben Form 表单组件的使用方法和 API |
| [Modal 模态框组件](./components/common-ui/vben-modal) | Vben Modal 模态框组件的使用方法和 API |
| [Drawer 抽屉组件](./components/common-ui/vben-drawer) | Vben Drawer 抽屉组件的使用方法和 API |
| [VxeTable 表格组件](./components/common-ui/vben-vxe-table) | Vben VxeTable 高性能表格组件的使用方法和 API |
| [API 组件](./components/common-ui/vben-api-component) | Vben ApiComponent 组件的使用方法和 API |
| [数字动画组件](./components/common-ui/vben-count-to-animator) | Vben CountToAnimator 数字动画组件的使用方法和 API |
| [省略文本组件](./components/common-ui/vben-ellipsis-text) | Vben EllipsisText 省略文本组件的使用方法和 API |
| [Page 页面组件](./components/layout-ui/page) | Vben Page 页面布局组件的使用方法和 API |

### 分析文档

| 文档 | 说明 |
|------|------|
| [开发文档](./analysis/开发文档) | Lxy-Vue-Admin 完整开发文档 |
| [登录页面架构分析](./analysis/登录页面架构分析) | 登录页面组件嵌套关系与设计原因分析 |
| [package.json 对比分析](./analysis/package.json 对比分析) | Monorepo 架构下根目录与应用目录 package.json 配置分析 |

### 变更日志

| 文档 | 说明 |
|------|------|
| [CHANGELOG](./changelog/CHANGELOG) | 项目版本更新记录与变更说明 |

### 开发流程文档

| 文档 | 说明 |
|------|------|
| [开发流程指南](./development/README) | 开发流程、分支管理、代码提交规范 |
| [部署指南](./deployment/README) | 构建命令、静态部署、Docker 部署、CI/CD 配置 |
| [维护指南](./maintenance/README) | 日常维护、版本管理、问题排查、备份恢复 |

---

## 🚀 快速开始

### 新手入门

1. 阅读 [项目概述](./guide/01-项目概述) 了解项目基本情况
2. 按照 [环境配置指南](./guide/02-环境配置指南) 搭建开发环境
3. 学习 [架构设计说明](./guide/03-架构设计说明) 理解项目结构
4. 参考 [开发规范](./guide/06-开发规范) 进行开发

### 组件开发

1. 阅读 [组件介绍](./components/introduction) 了解组件系统
2. 根据需要查阅具体组件文档
3. 遵循 [开发规范](./guide/06-开发规范) 中的组件开发规范

### 问题排查

1. 查阅 [常见问题解决方案](./guide/07-常见问题解决方案)
2. 查看 [CHANGELOG](./changelog/CHANGELOG) 了解版本变更

---

## 📁 文档目录结构

```
docs/scripts/
├── guide/                    # 开发指南
│   ├── 01-项目概述.md
│   ├── 02-环境配置指南.md
│   ├── 03-架构设计说明.md
│   ├── 04-核心模块功能详解.md
│   ├── 06-开发规范.md
│   └── 07-常见问题解决方案.md
├── api/                      # API 文档
│   └── 05-API接口文档.md
├── components/               # 组件文档
│   ├── introduction.md
│   ├── common-ui/            # 通用组件
│   └── layout-ui/            # 布局组件
├── analysis/                 # 分析文档
│   ├── 开发文档.md
│   ├── 登录页面架构分析.md
│   └── package.json 对比分析.md
├── changelog/                # 变更日志
│   └── CHANGELOG.md
├── development/              # 开发流程指南
│   └── README.md
├── deployment/               # 部署指南
│   └── README.md
├── maintenance/              # 维护指南
│   └── README.md
└── README.md                 # 本文件（文档索引）
```

---

## 🔗 相关链接

- [Gitee 仓库](https://gitee.com/my_spaces/lxy-vue-admin)
- [Vben Admin 官方文档](https://doc.vben.pro/)
- [Antdv Next 文档](https://antdv-next.com/)
