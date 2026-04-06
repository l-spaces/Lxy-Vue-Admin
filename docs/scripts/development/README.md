---
title: 开发流程指南
description: Lxy-Vue-Admin 项目开发流程、分支管理、代码提交规范
---

# 开发流程指南

## 开发环境准备

### 必要工具

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 20.0.0 | JavaScript 运行时 |
| pnpm | >= 9.0.0 | 包管理器 |
| Git | >= 2.30.0 | 版本控制 |
| VS Code | 最新版 | 推荐编辑器 |

### 推荐 VS Code 插件

- Vue - Official (Vue.volar)
- ESLint
- Prettier
- Oxlint
- Tailwind CSS IntelliSense

## 分支管理

### 分支命名规范

| 分支类型 | 命名格式 | 示例 |
|----------|----------|------|
| 主分支 | main | main |
| 开发分支 | develop | develop |
| 功能分支 | feature/功能名 | feature/user-management |
| 修复分支 | fix/问题描述 | fix/login-error |
| 发布分支 | release/版本号 | release/1.0.0 |

### 分支操作流程

```bash
# 创建新功能分支
git checkout -b feature/new-feature

# 开发完成后合并到 develop
git checkout develop
git merge feature/new-feature

# 发布时创建 release 分支
git checkout -b release/1.0.0

# 发布后合并到 main
git checkout main
git merge release/1.0.0
git tag v1.0.0
```

## 代码提交规范

### Commit Message 格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型说明

| Type | 说明 | 示例 |
|------|------|------|
| feat | 新功能 | feat(auth): 添加用户登录功能 |
| fix | 修复 Bug | fix(api): 修复接口请求超时问题 |
| docs | 文档更新 | docs(readme): 更新安装说明 |
| style | 代码格式 | style: 格式化代码 |
| refactor | 重构 | refactor(utils): 重构工具函数 |
| perf | 性能优化 | perf(table): 优化表格渲染性能 |
| test | 测试 | test(user): 添加用户模块单元测试 |
| chore | 构建/工具 | chore: 更新依赖版本 |
| revert | 回滚 | revert: 回滚上次提交 |

### 提交示例

```bash
# 添加新功能
git commit -m "feat(dashboard): 添加数据统计图表组件"

# 修复 Bug
git commit -m "fix(login): 修复记住密码功能失效问题"

# 文档更新
git commit -m "docs(api): 更新接口文档说明"
```

## 开发流程

### 1. 拉取最新代码

```bash
git checkout develop
git pull origin develop
```

### 2. 创建功能分支

```bash
git checkout -b feature/your-feature
```

### 3. 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 4. 代码检查

```bash
# 运行 ESLint
pnpm lint

# 运行类型检查
pnpm typecheck

# 运行测试
pnpm test
```

### 5. 提交代码

```bash
git add .
git commit -m "feat: your feature description"
```

### 6. 推送并创建 PR

```bash
git push origin feature/your-feature
```

然后在 Gitee 上创建 Pull Request。

## 代码规范

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文件名 | kebab-case | user-profile.vue |
| 组件名 | PascalCase | UserProfile |
| 变量名 | camelCase | userProfile |
| 常量名 | UPPER_SNAKE_CASE | API_BASE_URL |
| CSS 类名 | kebab-case | user-profile-container |

### 目录结构规范

```
src/
├── views/              # 页面组件
│   └── user/
│       ├── index.vue       # 页面入口
│       ├── components/     # 页面组件
│       └── composables/    # 页面组合式函数
├── components/         # 通用组件
├── composables/        # 通用组合式函数
├── api/                # API 接口
├── stores/             # 状态管理
└── utils/              # 工具函数
```

### 组件开发规范

```vue
<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  title: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  update: [value: string]
}>()

const localValue = ref('')

const computedValue = computed(() => localValue.value.toUpperCase())

onMounted(() => {
  // 初始化逻辑
})
</script>

<style scoped>
.component-name {
  /* 样式 */
}
</style>
```

## 调试技巧

### Vue DevTools

安装 Vue DevTools 浏览器扩展，用于：
- 组件树查看
- 状态管理调试
- 性能分析
- 路由追踪

### 控制台调试

```javascript
// 在组件中
console.log('debug:', data)

// 使用 debugger
debugger
```

### 网络请求调试

在浏览器开发者工具的 Network 面板中查看：
- 请求 URL
- 请求参数
- 响应数据
- 请求时间

## 常见问题

### 依赖安装失败

```bash
# 清除缓存
pnpm store prune

# 删除 node_modules
rm -rf node_modules

# 重新安装
pnpm install
```

### 热更新不生效

```bash
# 重启开发服务器
pnpm dev

# 清除缓存后重启
pnpm dev --force
```

### 类型检查错误

```bash
# 重新生成类型
pnpm typecheck
```
