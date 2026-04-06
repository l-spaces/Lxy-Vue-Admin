# Lxy-Vue-Admin 开发文档中心

## 📚 文档目录

本目录包含 Lxy-Vue-Admin 项目的完整开发文档，按类型分类组织，便于团队成员快速查阅和理解。

---

## 📁 文档结构

```
docs/
├── guide/                    # 开发指南
├── api/                      # API文档
├── analysis/                 # 分析文档
├── components/               # 组件文档
├── packages/                 # 包文档索引
├── internal/                 # 内部工具文档索引
├── scripts/                  # 脚本文档索引
├── apps/                     # 应用文档索引
├── changelog/                # 变更日志
└── reference/                # 参考资料
```

---

## 🚀 快速开始

### 新手入门路径

如果你是第一次接触本项目，建议按以下顺序阅读：

| 步骤 | 文档 | 说明 |
|------|------|------|
| 1 | [项目概述](./guide/01-项目概述.md) | 了解项目基本信息、技术栈、特性 |
| 2 | [环境配置指南](./guide/02-环境配置指南.md) | 搭建开发环境、安装依赖 |
| 3 | [核心模块功能详解](./guide/04-核心模块功能详解.md) | 了解核心功能模块 |

### 开发工作路径

如果你需要进行功能开发，建议阅读：

| 步骤 | 文档 | 说明 |
|------|------|------|
| 1 | [架构设计说明](./guide/03-架构设计说明.md) | 理解项目架构设计 |
| 2 | [API接口文档](./api/05-API接口文档.md) | 了解接口规范和定义 |
| 3 | [开发规范](./guide/06-开发规范.md) | 遵循代码规范和最佳实践 |

### 问题排查路径

如果你遇到了问题，可以查看：

| 文档 | 说明 |
|------|------|
| [常见问题解决方案](./guide/07-常见问题解决方案.md) | 环境问题、开发问题、部署问题 |
| [环境配置指南](./guide/02-环境配置指南.md) | 检查环境配置是否正确 |

---

## 📖 文档分类

### 一、开发指南 (guide/)

| 文档 | 说明 | 适用对象 |
|------|------|----------|
| [01-项目概述](./guide/01-项目概述.md) | 项目简介、技术栈、特性、快速开始 | 所有人员 |
| [02-环境配置指南](./guide/02-环境配置指南.md) | 环境要求、安装步骤、配置说明 | 新入职开发 |
| [03-架构设计说明](./guide/03-架构设计说明.md) | 分层架构、Monorepo、核心模块设计 | 架构师、开发 |
| [04-核心模块功能详解](./guide/04-核心模块功能详解.md) | 认证授权、路由权限、状态管理等 | 开发人员 |
| [06-开发规范](./guide/06-开发规范.md) | 代码规范、Git规范、最佳实践 | 开发人员 |
| [07-常见问题解决方案](./guide/07-常见问题解决方案.md) | 环境问题、开发问题、部署问题 | 所有人员 |

### 二、API文档 (api/)

| 文档 | 说明 | 适用对象 |
|------|------|----------|
| [05-API接口文档](./api/05-API接口文档.md) | API架构、核心接口、业务接口 | 开发人员 |

### 三、分析文档 (analysis/)

| 文档 | 说明 | 适用对象 |
|------|------|----------|
| [开发文档](./analysis/开发文档.md) | 原有详细开发文档 | 所有人员 |
| [登录页面架构分析](./analysis/登录页面架构分析.md) | 登录模块架构分析 | 开发人员 |
| [package.json对比分析](./analysis/package.json%20对比分析.md) | 依赖包对比分析 | 开发人员 |

### 四、组件文档 (components/)

#### 英文组件文档 (en/)

**通用UI组件 (common-ui/)**

| 文档 | 说明 |
|------|------|
| [vben-alert](./components/en/common-ui/vben-alert.md) | Alert 警告组件 |
| [vben-api-component](./components/en/common-ui/vben-api-component.md) | API 组件 |
| [vben-count-to-animator](./components/en/common-ui/vben-count-to-animator.md) | 数字动画组件 |
| [vben-drawer](./components/en/common-ui/vben-drawer.md) | 抽屉组件 |
| [vben-ellipsis-text](./components/en/common-ui/vben-ellipsis-text.md) | 省略文本组件 |
| [vben-form](./components/en/common-ui/vben-form.md) | 表单组件 |
| [vben-modal](./components/en/common-ui/vben-modal.md) | 模态框组件 |
| [vben-vxe-table](./components/en/common-ui/vben-vxe-table.md) | 表格组件 |

**布局UI组件 (layout-ui/)**

| 文档 | 说明 |
|------|------|
| [page](./components/en/layout-ui/page.md) | 页面布局组件 |

**组件介绍**

| 文档 | 说明 |
|------|------|
| [introduction](./components/en/introduction.md) | 组件介绍 |

### 五、变更日志 (changelog/)

| 文档 | 说明 |
|------|------|
| [CHANGELOG](./changelog/CHANGELOG.md) | 项目变更日志 |

### 六、参考资料 (reference/)

| 文档 | 说明 |
|------|------|
| [文档目录](./reference/文档目录.md) | 原有文档目录索引 |

---

## 📦 项目模块文档

### Packages 文档

共享包目录下的 README.md 文档：

| 包名 | 说明 | 路径 |
|------|------|------|
| @vben/packages | 包目录总览 | [README.md](../packages/README.md) |
| @vben/@core | 核心模块 | [README.md](../packages/@core/README.md) |
| @vben/effects | 效果包 | [README.md](../packages/effects/README.md) |
| @vben/utils | 工具库 | [README.md](../packages/utils/README.md) |
| @vben/types | 类型定义 | [README.md](../packages/types/README.md) |
| @vben/constants | 常量定义 | [README.md](../packages/constants/README.md) |
| @vben/icons | 图标库 | [README.md](../packages/icons/README.md) |
| @vben/styles | 样式库 | [README.md](../packages/styles/README.md) |

### Internal 文档

内部工具目录下的 README.md 文档：

| 包名 | 说明 | 路径 |
|------|------|------|
| @vben/internal | 内部工具总览 | [README.md](../internal/README.md) |

### Scripts 文档

脚本工具目录下的文档：

| 文档 | 说明 | 路径 |
|------|------|------|
| 代码生成模板 | Ant Design Vue Next 专用 | [README.md](../scripts/代码生成模板antdv-next专用/README.md) |
| 更新指南 | 模板更新指南 | [更新指南.md](../scripts/代码生成模板antdv-next专用/更新指南.md) |
| VSH | VSH 脚本工具 | [README.md](../scripts/vsh/README.md) |
| Turbo Run | Turbo 运行脚本 | [README.md](../scripts/turbo-run/README.md) |

### Apps 文档

应用目录下的文档：

| 文档 | 说明 | 路径 |
|------|------|------|
| 核心视图 | 核心视图说明 | [README.md](../apps/web-antd/src/views/_core/README.md) |
| 国际化 | 国际化配置 | [README.md](../apps/web-antd/src/locales/README.md) |
| 上传组件 | 上传组件说明 | [note.md](../apps/web-antd/src/components/upload/src/note.md) |

---

## 🔗 技术栈参考

| 技术 | 官方文档 |
|------|----------|
| Vue 3 | https://vuejs.org/ |
| Vben Admin | https://doc.vben.pro/ |
| Ant Design Vue Next | https://github.com/antdv-next/antdv-next |
| TypeScript | https://www.typescriptlang.org/ |
| Vite | https://vitejs.dev/ |
| Pinia | https://pinia.vuejs.org/ |
| Vue Router | https://router.vuejs.org/ |
| Alova | https://alova.js.org/ |
| VueUse | https://vueuse.org/ |

---

## 📝 文档维护

- **文档版本**：v2.0
- **最后更新**：2026-04-06
- **维护团队**：Lxy-Vue-Admin Team

### 文档规范

1. **命名规范**：使用数字前缀排序，如 `01-xxx.md`
2. **格式规范**：统一使用 Markdown 格式
3. **目录规范**：每个文档包含目录导航
4. **链接规范**：使用相对路径引用

### 贡献指南

如有文档问题或建议，请提交 Issue 或 PR。

---

**Happy Coding!** 🚀
