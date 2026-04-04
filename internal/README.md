# Internal 目录说明文档

## 目录

- [Internal 目录说明文档](#internal-目录说明文档)
  - [目录](#目录)
  - [1. 概述](#1-概述)
    - [1.1 目录定位](#11-目录定位)
    - [1.2 主要功能](#12-主要功能)
    - [1.3 包列表](#13-包列表)
  - [2. Lint Configs（代码规范配置）](#2-lint-configs代码规范配置)
    - [2.1 Commitlint Config](#21-commitlint-config)
      - [文件说明](#文件说明)
      - [核心功能](#核心功能)
      - [配置项说明](#配置项说明)
      - [使用示例](#使用示例)
    - [2.2 ESLint Config](#22-eslint-config)
      - [架构设计](#架构设计)
      - [核心模块](#核心模块)
      - [规则配置](#规则配置)
      - [使用示例](#使用示例-1)
    - [2.3 Oxlint Config](#23-oxlint-config)
      - [功能说明](#功能说明)
      - [配置结构](#配置结构)
    - [2.4 Oxfmt Config](#24-oxfmt-config)
      - [功能说明](#功能说明-1)
    - [2.5 Stylelint Config](#25-stylelint-config)
      - [功能说明](#功能说明-2)
  - [3. Node Utils（Node.js 工具库）](#3-node-utilsnodejs-工具库)
    - [3.1 概述](#31-概述)
    - [3.2 核心模块详解](#32-核心模块详解)
      - [3.2.1 Monorepo 工具 (monorepo.ts)](#321-monorepo-工具-monorepots)
      - [3.2.2 文件系统工具 (fs.ts)](#322-文件系统工具-fsts)
      - [3.2.3 Git 工具 (git.ts)](#323-git-工具-gitts)
      - [3.2.4 Hash 工具 (hash.ts)](#324-hash-工具-hashts)
      - [3.2.5 日期工具 (date.ts)](#325-日期工具-datets)
      - [3.2.6 路径工具 (path.ts)](#326-路径工具-pathts)
      - [3.2.7 格式化器 (formatter.ts)](#327-格式化器-formatterts)
      - [3.2.8 Spinner 工具 (spinner.ts)](#328-spinner-工具-spinnerts)
    - [3.3 使用示例](#33-使用示例)
  - [4. Vite Config（Vite 构建配置）](#4-vite-configvite-构建配置)
    - [4.1 概述](#41-概述)
    - [4.2 核心配置模块](#42-核心配置模块)
      - [4.2.1 应用配置 (application.ts)](#421-应用配置-applicationts)
      - [4.2.2 库配置 (library.ts)](#422-库配置-libraryts)
      - [4.2.3 通用配置 (common.ts)](#423-通用配置-commonts)
    - [4.3 插件系统](#43-插件系统)
      - [4.3.1 插件加载器](#431-插件加载器)
      - [4.3.2 核心插件详解](#432-核心插件详解)
    - [4.4 使用示例](#44-使用示例)
  - [5. TypeScript Config（TS 配置）](#5-typescript-configts-配置)
    - [5.1 配置分类](#51-配置分类)
      - [5.1.1 base.json](#511-basejson)
      - [5.1.2 node.json](#512-nodejson)
      - [5.1.3 library.json](#513-libraryjson)
      - [5.1.4 web.json](#514-webjson)
      - [5.1.5 web-app.json](#515-web-appjson)
    - [5.2 使用方式](#52-使用方式)
  - [6. Tailwind Config（Tailwind CSS 配置）](#6-tailwind-configtailwind-css-配置)
    - [6.1 文件结构](#61-文件结构)
    - [6.2 功能说明](#62-功能说明)
  - [7. 依赖关系](#7-依赖关系)
    - [7.1 包依赖图](#71-包依赖图)
    - [7.2 外部依赖](#72-外部依赖)
  - [8. 开发指南](#8-开发指南)
    - [8.1 添加新的工具包](#81-添加新的工具包)
    - [8.2 修改 Lint 规则](#82-修改-lint-规则)
    - [8.3 扩展 Vite 插件](#83-扩展-vite-插件)
  - [9. 常见问题](#9-常见问题)
    - [Q1: 如何查看打包分析？](#q1-如何查看打包分析)
    - [Q2: 如何自定义 ESLint 规则？](#q2-如何自定义-eslint-规则)
    - [Q3: 如何添加新的 Commit Scope？](#q3-如何添加新的-commit-scope)
    - [Q4: 如何禁用全局 SCSS 注入？](#q4-如何禁用全局-scss-注入)
    - [Q5: 如何自定义 Loading 样式？](#q5-如何自定义-loading-样式)

---

## 1. 概述

### 1.1 目录定位

`internal` 目录是 Vben Admin Monorepo 项目的**内部工具库和配置文件集合**，包含了项目构建、开发、代码规范等核心基础设施。该目录下的所有包都是私有的（`private: true`），仅供项目内部使用，不发布到 npm。

### 1.2 主要功能

- **代码规范配置**：提供统一的 ESLint、Oxlint、Stylelint、Commitlint 等代码检查规则
- **构建工具配置**：提供 Vite 构建配置、TypeScript 配置、Tailwind CSS 配置
- **Node.js 工具库**：提供 Monorepo 管理、文件操作、Git 操作等通用工具函数
- **开发效率工具**：提供代码格式化、提交规范、构建优化等功能

### 1.3 包列表

| 包名 | 路径 | 功能描述 |
|------|------|----------|
| `@vben/commitlint-config` | `internal/lint-configs/commitlint-config` | Commitlint 提交规范配置 |
| `@vben/eslint-config` | `internal/lint-configs/eslint-config` | ESLint 代码检查配置 |
| `@vben/oxlint-config` | `internal/lint-configs/oxlint-config` | Oxlint 快速代码检查配置 |
| `@vben/oxfmt-config` | `internal/lint-configs/oxfmt-config` | Oxfmt 代码格式化配置 |
| `@vben/stylelint-config` | `internal/lint-configs/stylelint-config` | Stylelint CSS 检查配置 |
| `@vben/node-utils` | `internal/node-utils` | Node.js 工具函数库 |
| `@vben/vite-config` | `internal/vite-config` | Vite 构建配置和插件 |
| `@vben/tailwind-config` | `internal/tailwind-config` | Tailwind CSS 配置 |
| `@vben/tsconfig` | `internal/tsconfig` | TypeScript 配置模板 |

---

## 2. Lint Configs（代码规范配置）

### 2.1 Commitlint Config

**包名：** `@vben/commitlint-config`  
**主文件：** `index.mjs`

#### 文件说明

该包提供了项目的 Git 提交规范配置，基于 `@commitlint/config-conventional`，并进行了自定义扩展。

#### 核心功能

1. **提交类型定义**：定义了 15 种标准提交类型
2. **作用域验证**：自动从 Monorepo 包名中生成允许的 scope 列表
3. **智能 Scope 推荐**：根据 git status 自动推荐提交 scope
4. **快捷别名**：提供常用提交的快捷输入方式

#### 配置项说明

**提交类型（Type）：**
```javascript
[
  'feat',      // 新功能
  'fix',       // 修复 Bug
  'perf',      // 性能优化
  'style',     // 代码格式
  'docs',      // 文档变更
  'test',      // 测试相关
  'refactor',  // 代码重构
  'build',     // 构建流程
  'ci',        // CI 配置
  'chore',     // 日常事务
  'revert',    // 回滚提交
  'types',     // 类型定义
  'release',   // 发布版本
  'update',    // 更新操作
]
```

**自定义规则：**
- `body-leading-blank`: [2, 'always'] - body 前必须空行
- `footer-leading-blank`: [1, 'always'] - footer 前必须空行
- `header-max-length`: [2, 'always', 108] - 标题最大长度 108 字符
- `function-rules/scope-enum`: 动态验证 scope 必须在允许列表中

**快捷别名：**
```javascript
{
  b: 'build: bump dependencies',
  c: 'chore: update config',
  f: 'docs: fix typos',
  r: 'docs: update README',
  s: 'style: update code format',
}
```

#### 使用示例

```bash
# 使用交互式命令行提交
pnpm commit

# 使用快捷别名
pnpm commit :f  # 等同于 docs: fix typos

# 标准提交格式
git commit -m "feat(web-antd): 添加用户管理页面"
git commit -m "fix(auth): 修复登录超时问题\n\n- 增加 token 刷新机制\n- 优化错误提示"
```

---

### 2.2 ESLint Config

**包名：** `@vben/eslint-config`  
**主文件：** `src/index.ts`

#### 架构设计

采用 ESLint Flat Config 格式（ESLint 9.0+），支持异步加载配置模块，提供模块化、可扩展的 lint 配置方案。

#### 核心模块

**1. 配置入口（src/index.ts）**
```typescript
async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),         // Vue 项目配置
    javascript(),  // JavaScript 基础配置
    ignores(),     // 忽略文件配置
    typescript(),  // TypeScript 配置
    jsonc(),       // JSON/JSONC 配置
    node(),        // Node.js 配置
    perfectionist(), // 代码顺序整理
    unicorn(),     // 现代 JS 语法增强
    yaml(),        // YAML 配置
    pnpm(),        // pnpm 规范
    ...customConfig, // 自定义配置
    ...config,     // 用户扩展配置
  ];
  
  const resolved = await Promise.all(configs);
  return resolved.flat();
}
```

**2. Vue 配置（src/configs/vue.ts）**
- 基于 `eslint-plugin-vue`
- 支持 `.vue` 文件解析
- 规则包括：
  - `vue/define-macros-order`: 定义宏顺序（defineOptions → defineProps → defineEmits → defineSlots）
  - `vue/component-name-in-template-casing`: 组件名使用 PascalCase
  - `vue/html-self-closing`: 自闭合标签规则

**3. TypeScript 配置（src/configs/typescript.ts）**
- 基于 `@typescript-eslint/eslint-plugin`
- 与 Oxlint 规则去重（避免重复检查）
- 关键规则：
  - `@typescript-eslint/consistent-type-definitions`: 'off'（允许 interface 和 type）
  - `@typescript-eslint/no-explicit-any`: 'off'（允许 any）
  - `@typescript-eslint/explicit-function-return-type`: 'off'（不强制返回类型）

**4. 其他配置模块：**
- `javascript.js`: JavaScript 基础规则
- `jsonc.js`: JSON 文件格式检查
- `node.js`: Node.js 代码规范
- `perfectionist.js`: 导入语句和代码顺序整理
- `unicorn.js`: 现代 ES6+ 语法增强
- `yaml.js`: YAML 文件格式
- `pnpm.js`: pnpm monorepo 规范

#### 规则配置

**忽略文件规则：**
```typescript
function ignores() {
  return [{
    name: 'ignores',
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/.turbo',
      '**/build',
      '**/public',
    ],
  }];
}
```

**自定义配置扩展：**
```typescript
// src/custom-config.ts
export const customConfig: FlatConfig[] = [
  {
    files: ['**/*.ts'],
    rules: {
      // 自定义规则
    },
  },
];
```

#### 使用示例

**在项目中使用：**
```json
// package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "devDependencies": {
    "@vben/eslint-config": "workspace:*"
  }
}
```

**自定义扩展：**
```javascript
// eslint.config.js
import { defineConfig } from '@vben/eslint-config';

export default defineConfig([
  {
    files: ['apps/web-antd/src/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
]);
```

---

### 2.3 Oxlint Config

**包名：** `@vben/oxlint-config`  
**主文件：** `src/index.ts`

#### 功能说明

Oxlint 是基于 Rust 的快速 lint 工具，速度比 ESLint 快 50-100 倍。该配置提供与 ESLint 互补的快速代码检查。

#### 配置结构

**核心配置（src/configs/index.ts）：**
```typescript
import { defineConfig } from 'oxlint';

export const oxlintConfig = defineConfig({
  categories: {
    'correctness': 'warn',      // 正确性问题
    'perf': 'warn',             // 性能问题
    'style': 'warn',            // 风格问题
    'suspicious': 'warn',       // 可疑代码
  },
  rules: {
    // 自定义规则
  },
});
```

**配置合并工具：**
```typescript
function mergeOxlintConfigs(...configs: OxlintConfig[]) {
  // 合并多个配置，支持 extends 继承
}
```

**使用场景：**
- CI/CD 快速检查
- 开发中实时反馈
- 与 ESLint 互补（Oxlint 检查基础问题，ESLint 处理复杂规则）

---

### 2.4 Oxfmt Config

**包名：** `@vben/oxfmt-config`  
**主文件：** `src/index.ts`

#### 功能说明

Oxfmt 是基于 Rust 的代码格式化工具，提供比 Prettier 更快的格式化速度。

**配置内容：**
```typescript
export default {
  // Oxfmt 配置项
  // 目前主要使用 Prettier 进行格式化
};
```

**注意：** 项目主要使用 Prettier 进行代码格式化，Oxfmt 作为补充。

---

### 2.5 Stylelint Config

**包名：** `@vben/stylelint-config`  
**主文件：** `index.mjs`

#### 功能说明

提供 CSS/SCSS 代码检查规则，确保样式代码质量。

**核心规则：**
- 属性顺序
- 命名规范
- 颜色格式
- 缩进规则
- 空行规则

**使用示例：**
```json
// .stylelintrc.js
module.exports = {
  extends: ['@vben/stylelint-config'],
};
```

---

## 3. Node Utils（Node.js 工具库）

### 3.1 概述

**包名：** `@vben/node-utils`  
**主文件：** `src/index.ts`

该包提供了项目构建和开发过程中使用的通用 Node.js 工具函数，是其他 internal 包的基础依赖。

### 3.2 核心模块详解

#### 3.2.1 Monorepo 工具 (monorepo.ts)

**文件路径：** `src/monorepo.ts`

**功能描述：** 提供 Monorepo 项目管理工具，包括查找根目录、获取包信息等。

**核心函数：**

```typescript
/**
 * 查找大仓的根目录
 * @param cwd - 起始目录，默认为 process.cwd()
 * @returns 根目录路径，找不到返回空字符串
 */
function findMonorepoRoot(cwd: string = process.cwd()): string {
  let currentDir = resolve(cwd);
  while (true) {
    if (existsSync(join(currentDir, 'pnpm-lock.yaml'))) {
      return currentDir;
    }
    const parentDir = dirname(currentDir);
    if (parentDir === currentDir) {
      return '';
    }
    currentDir = parentDir;
  }
}

/**
 * 获取大仓的所有包（同步）
 * @returns { packages: Package[], root: string }
 */
function getPackagesSync() {
  const root = findMonorepoRoot();
  return getPackagesSyncFunc(root);
}

/**
 * 获取大仓的所有包（异步）
 */
async function getPackages() {
  const root = findMonorepoRoot();
  return await getPackagesFunc(root);
}

/**
 * 获取指定的包
 * @param pkgName - 包名
 */
async function getPackage(pkgName: string) {
  const { packages } = await getPackages();
  return packages.find((pkg: Package) => pkg.packageJson.name === pkgName);
}
```

**使用场景：**
- 构建脚本中获取所有子包
- 验证 commit scope 是否合法
- 包依赖分析

---

#### 3.2.2 文件系统工具 (fs.ts)

**文件路径：** `src/fs.ts`

**功能描述：** 提供简化的文件读写工具，基于 Node.js fs/promises。

**核心函数：**

```typescript
/**
 * 输出 JSON 文件（自动创建目录）
 * @param filePath - 文件路径
 * @param data - JSON 数据
 * @param spaces - 缩进空格数，默认 2
 */
export async function outputJSON(
  filePath: string,
  data: any,
  spaces: number = 2,
): Promise<void> {
  const dir = dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  const jsonData = JSON.stringify(data, null, spaces);
  await fs.writeFile(filePath, jsonData, 'utf8');
}

/**
 * 确保文件存在（不存在则创建）
 * @param filePath - 文件路径
 */
export async function ensureFile(filePath: string): Promise<void> {
  const dir = dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, '', { flag: 'a' });
}

/**
 * 读取 JSON 文件
 * @param filePath - 文件路径
 */
export async function readJSON(filePath: string): Promise<any> {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}
```

**使用示例：**
```typescript
import { outputJSON, readJSON } from '@vben/node-utils';

// 写入 JSON
await outputJSON('./dist/config.json', { name: 'test' });

// 读取 JSON
const config = await readJSON('./package.json');
```

---

#### 3.2.3 Git 工具 (git.ts)

**文件路径：** `src/git.ts`

**功能描述：** 提供 Git 操作工具，包括获取暂存文件、提交等。

**核心函数：**

```typescript
/**
 * 获取暂存区文件列表
 * @returns 文件路径数组
 */
async function getStagedFiles(): Promise<string[]> {
  const { stdout } = await execa('git', [
    '-c',
    'submodule.recurse=false',
    'diff',
    '--staged',
    '--diff-filter=ACMR',  // Added, Copied, Modified, Renamed
    '--name-only',
    '--ignore-submodules',
    '-z',  // 使用 NUL 分隔符
  ]);

  let changedList = stdout ? stdout.replace(/\0$/, '').split('\0') : [];
  changedList = changedList.map((item) => path.resolve(process.cwd(), item));
  const changedSet = new Set(changedList);
  changedSet.delete('');
  return [...changedSet];
}

// 导出 @changesets/git 的所有方法
export * from '@changesets/git';
export { getStagedFiles };
```

**使用场景：**
- 获取提交的文件列表
- 代码变更分析
- 自动化发布流程

---

#### 3.2.4 Hash 工具 (hash.ts)

**文件路径：** `src/hash.ts`

**功能描述：** 生成基于内容的 MD5 哈希值。

**核心函数：**

```typescript
/**
 * 生成内容哈希
 * @param content - 输入内容
 * @param hashLSize - 哈希长度（可选，截取前 N 位）
 * @returns MD5 哈希字符串
 */
function generatorContentHash(content: string, hashLSize?: number): string {
  const hash = createHash('md5')
    .update(content, 'utf8')
    .digest('hex');
  
  if (hashLSize) {
    return hash.slice(0, hashLSize);
  }
  
  return hash;
}
```

**使用示例：**
```typescript
import { generatorContentHash } from '@vben/node-utils';

const hash = generatorContentHash('file-content', 8);
// 输出：a1b2c3d4
```

---

#### 3.2.5 日期工具 (date.ts)

**文件路径：** `src/date.ts`

**功能描述：** 基于 dayjs 的日期格式化工具。

**核心函数：**
```typescript
import dayjs from 'dayjs';

export { dayjs };
export const formatDate = dayjs.format;
```

---

#### 3.2.6 路径工具 (path.ts)

**文件路径：** `src/path.ts`

**功能描述：** 路径转换工具，将 Windows 路径转为 Posix 路径。

**核心函数：**
```typescript
/**
 * 将路径转换为 Posix 格式（使用正斜杠）
 * @param p - 输入路径
 */
function toPosixPath(p: string): string {
  return p.replace(/\\/g, '/');
}
```

---

#### 3.2.7 格式化器 (formatter.ts)

**文件路径：** `src/formatter.ts`

**功能描述：** 代码格式化工具。

**核心函数：**
```typescript
/**
 * 格式化文件
 * @param filePath - 文件路径
 */
export async function formatFile(filePath: string): Promise<void> {
  // 使用 Prettier 格式化代码
}
```

---

#### 3.2.8 Spinner 工具 (spinner.ts)

**文件路径：** `src/spinner.ts`

**功能描述：** 命令行加载动画工具，基于 ora。

**核心函数：**
```typescript
import ora from 'ora';

export { ora };

/**
 * 创建加载动画
 */
export function createSpinner(text: string) {
  return ora(text).start();
}
```

**使用示例：**
```typescript
import { createSpinner } from '@vben/node-utils';

const spinner = createSpinner('Building...');
await doSomething();
spinner.succeed('Build complete!');
```

---

### 3.3 使用示例

**完整使用示例：**
```typescript
import {
  findMonorepoRoot,
  getPackagesSync,
  outputJSON,
  readJSON,
  getStagedFiles,
  generatorContentHash,
  colors,
  consola,
} from '@vben/node-utils';

// 查找根目录
const root = findMonorepoRoot();
console.log(`Monorepo root: ${root}`);

// 获取所有包
const { packages } = getPackagesSync();
packages.forEach(pkg => {
  consola.info(`Package: ${pkg.packageJson.name}`);
});

// 文件操作
await outputJSON('./output.json', { data: 'test' });
const config = await readJSON('./package.json');

// Git 操作
const stagedFiles = await getStagedFiles();
console.log(`Staged files: ${stagedFiles.length}`);

// 哈希生成
const hash = generatorContentHash('content', 8);
console.log(`Hash: ${hash}`);

// 日志输出
consola.success(colors.green('Task completed!'));
```

---

## 4. Vite Config（Vite 构建配置）

### 4.1 概述

**包名：** `@vben/vite-config`  
**主文件：** `src/index.ts`

该包提供基于 Vite 5.x 的构建配置，支持应用类型和库类型的构建，包含丰富的插件系统和环境配置。

### 4.2 核心配置模块

#### 4.2.1 应用配置 (application.ts)

**文件路径：** `src/config/application.ts`

**功能描述：** 提供 Vben Admin 应用的完整 Vite 配置。

**核心函数：**
```typescript
function defineApplicationConfig(userConfigPromise?: DefineApplicationOptions) {
  return defineConfig(async (config) => {
    // 1. 加载环境变量
    const { appTitle, base, port, ...envConfig } = await loadAndConvertEnv();
    const { command, mode } = config;
    const isBuild = command === 'build';
    
    // 2. 加载插件
    const plugins = await loadApplicationPlugins({
      archiver: true,              // 打包后压缩
      compress: false,             // gzip/brotli 压缩
      devtools: true,              // Vue DevTools
      i18n: true,                  // 国际化
      injectAppLoading: true,      // 注入 loading
      injectMetadata: true,        // 注入元数据
      license: true,               // 许可证检查
      nitroMock: !isBuild,         // 开发环境 mock
      print: !isBuild,             // 打印启动信息
      pwa: true,                   // PWA 支持
      vxeTableLazyImport: true,    // VXE Table 懒加载
      ...envConfig,
      ...application,
    });
    
    // 3. 配置构建选项
    const applicationConfig: UserConfig = {
      base,
      build: {
        rolldownOptions: {
          output: {
            assetFileNames: '[ext]/[name]-[hash].[ext]',
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'jse/index-[name]-[hash].js',
            manualChunks(id) {
              if (id.includes('antdv-next')) {
                return 'antdv-next';
              }
            },
          },
        },
        target: 'es2015',
      },
      css: createCssOptions(injectGlobalScss),
      plugins,
      server: {
        host: true,
        port,
        warmup: {
          clientFiles: [
            './index.html',
            './src/bootstrap.ts',
            './src/{views,layouts,router,store,api,adapter}/*',
          ],
        },
      },
    };
    
    // 4. 合并通用配置
    const mergedCommonConfig = mergeConfig(
      await getCommonConfig(), 
      applicationConfig
    );
    
    return mergeConfig(mergedCommonConfig, vite);
  });
}
```

**关键特性：**
- **代码分割**：自动分离 antdv-next 库到独立 chunk
- **资源命名**：带哈希的文件名，避免缓存问题
- **热更新优化**：预热关键文件，加快 HMR
- **CSS 注入**：自动注入全局 SCSS 变量

---

#### 4.2.2 库配置 (library.ts)

**文件路径：** `src/config/library.ts`

**功能描述：** 提供组件库、工具库的构建配置。

**核心配置：**
```typescript
function defineLibraryConfig(userConfigPromise?: DefineLibraryOptions) {
  return defineConfig(async (config) => {
    const plugins = await loadLibraryPlugins({
      dts: true,  // 生成类型声明
      ...options,
    });
    
    return {
      build: {
        lib: {
          entry: 'src/index.ts',
          formats: ['es'],
        },
        rollupOptions: {
          external: ['vue', 'vue-router'],
        },
      },
      plugins,
    };
  });
}
```

---

#### 4.2.3 通用配置 (common.ts)

**文件路径：** `src/config/common.ts`

**功能描述：** 提供应用和库共享的基础配置。

**配置内容：**
- 路径别名
- 解析选项
- 优化依赖
- 通用插件

---

### 4.3 插件系统

#### 4.3.1 插件加载器

**文件路径：** `src/plugins/index.ts`

**功能描述：** 根据条件动态加载 Vite 插件。

**核心函数：**
```typescript
/**
 * 加载条件插件
 */
async function loadConditionPlugins(
  conditionPlugins: ConditionPlugin[]
): Promise<PluginOption[]> {
  const plugins: PluginOption[] = [];
  for (const conditionPlugin of conditionPlugins) {
    if (conditionPlugin.condition) {
      const realPlugins = await conditionPlugin.plugins();
      plugins.push(...realPlugins);
    }
  }
  return plugins.flat();
}

/**
 * 加载通用插件
 */
async function loadCommonPlugins(
  options: CommonPluginOptions
): Promise<ConditionPlugin[]> {
  return [
    {
      condition: true,
      plugins: () => [
        viteVue({
          script: {
            defineModel: true,
          },
        }),
        viteVueJsx(),
        tailwindcss(),
      ],
    },
    {
      condition: !isBuild && devtools,
      plugins: () => [viteVueDevTools()],
    },
    // ... 更多插件
  ];
}
```

---

#### 4.3.2 核心插件详解

**1. Archiver 插件 (archiver.ts)**
```typescript
/**
 * 构建后自动打包 dist 目录为 ZIP
 */
export const viteArchiverPlugin = (
  options: ArchiverPluginOptions = {}
): PluginOption => {
  return {
    apply: 'build',
    closeBundle: {
      handler() {
        const { name = 'dist', outputDir = '.' } = options;
        zipFolder('dist', `${outputDir}/${name}.zip`);
      },
      order: 'post',
    },
    name: 'vite:archiver',
  };
};
```

**2. Inject App Loading 插件 (inject-app-loading/index.ts)**
```typescript
/**
 * 注入全局 loading 样式到 index.html
 */
async function viteInjectAppLoadingPlugin(
  isBuild: boolean,
  env: Record<string, any> = {},
  loadingTemplate = 'loading.html'
): Promise<PluginOption | undefined> {
  const loadingHtml = await getLoadingRawByHtmlTemplate(loadingTemplate);
  
  return {
    enforce: 'pre',
    name: 'vite:inject-app-loading',
    transformIndexHtml: {
      handler(html) {
        const re = /<body\s*>/;
        html = html.replace(re, `<body>${injectScript}${loadingHtml}`);
        return html;
      },
      order: 'pre',
    },
  };
}
```

**3. VXE Table 懒加载插件 (vxe-table.ts)**
```typescript
/**
 * VXE Table 组件懒加载
 */
async function viteVxeTableImportsPlugin(): Promise<PluginOption> {
  return [
    lazyImport({
      resolvers: [
        VxeResolver({ libraryName: 'vxe-table' }),
        VxeResolver({ libraryName: 'vxe-pc-ui' }),
      ],
    }),
  ];
}
```

**4. 其他核心插件：**
- `vite-plugin-pwa`: PWA 支持
- `@intlify/unplugin-vue-i18n`: 国际化
- `vite-plugin-compression`: Gzip/Brotli 压缩
- `vite-plugin-html`: HTML 模板处理
- `unplugin-dts`: 类型声明生成
- `rollup-plugin-visualizer`: 打包分析

---

### 4.4 使用示例

**在应用中使用：**
```typescript
// apps/web-antd/vite.config.ts
import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  application: {
    injectGlobalScss: true,
  },
  vite: {
    // 自定义 Vite 配置
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },
});
```

**在库中使用：**
```typescript
// packages/component/vite.config.ts
import { defineLibraryConfig } from '@vben/vite-config';

export default defineLibraryConfig({
  library: {
    dts: true,
  },
});
```

---

## 5. TypeScript Config（TS 配置）

### 5.1 配置分类

**包名：** `@vben/tsconfig`  
**路径：** `internal/tsconfig/`

#### 5.1.1 base.json

**文件路径：** `base.json`

**功能：** TypeScript 基础配置，所有配置的继承源。

**核心配置：**
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "exclude": ["**/node_modules/**", "**/dist/**", "**/.turbo/**"]
}
```

---

#### 5.1.2 node.json

**文件路径：** `node.json`

**功能：** Node.js 项目的 TypeScript 配置。

**核心配置：**
```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "types": ["node"]
  }
}
```

---

#### 5.1.3 library.json

**文件路径：** `library.json`

**功能：** 组件库、工具库的 TypeScript 配置。

**核心配置：**
```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "declaration": true,
    "noEmit": false
  }
}
```

---

#### 5.1.4 web.json

**文件路径：** `web.json`

**功能：** Web 应用的 TypeScript 配置。

**核心配置：**
```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "useDefineForClassFields": true
  }
}
```

---

#### 5.1.5 web-app.json

**文件路径：** `web-app.json`

**功能：** 完整 Web 应用配置，在 web.json 基础上增加类型支持。

**核心配置：**
```json
{
  "extends": "./web.json",
  "compilerOptions": {
    "types": ["vite/client", "@vben/types/global"]
  }
}
```

---

### 5.2 使用方式

**在 package.json 中引用：**
```json
{
  "devDependencies": {
    "@vben/tsconfig": "workspace:*"
  }
}
```

**在 tsconfig.json 中继承：**
```json
{
  "extends": "@vben/tsconfig/web-app.json",
  "compilerOptions": {
    // 自定义配置
  }
}
```

---

## 6. Tailwind Config（Tailwind CSS 配置）

### 6.1 文件结构

**包名：** `@vben/tailwind-config`  
**路径：** `internal/tailwind-config/`

**文件：**
- `src/index.ts`: 入口文件，导入主题 CSS
- `src/theme.css`: Tailwind 主题配置

---

### 6.2 功能说明

**主题配置内容：**
```css
@theme {
  /* 颜色配置 */
  --color-primary: #1890ff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-danger: #ff4d4f;
  
  /* 字体配置 */
  --font-family-sans: 'Inter', sans-serif;
  
  /* 动画配置 */
  --animate-fade-in: fade-in 0.3s ease-in-out;
}
```

**使用方式：**
```typescript
// vite.config.ts
import { tailwindcss } from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
};
```

---

## 7. 依赖关系

### 7.1 包依赖图

```
@vben/vite-config
├── @vben/node-utils (必需)
├── @vben/tailwind-config (可选)
└── 外部依赖 (Vite 插件等)

@vben/eslint-config
├── @vben/oxlint-config (互补)
└── 外部依赖 (eslint-plugin-*)

@vben/commitlint-config
├── @vben/node-utils (获取包列表)
└── 外部依赖 (commitlint)

@vben/node-utils
└── 外部依赖 (execa, chalk, consola 等)
```

### 7.2 外部依赖

**核心外部依赖：**
- `vite`: 5.x - 构建工具
- `eslint`: 9.x - 代码检查
- `typescript`: 5.x - 类型检查
- `dayjs`: 日期处理
- `execa`: 子进程执行
- `chalk`: 终端颜色
- `consola`: 控制台日志
- `archiver`: 文件压缩

---

## 8. 开发指南

### 8.1 添加新的工具包

**步骤：**

1. **创建包目录：**
```bash
mkdir -p internal/new-package/src
```

2. **初始化 package.json：**
```json
{
  "name": "@vben/new-package",
  "version": "5.7.0",
  "private": true,
  "type": "module",
  "main": "./dist/index.mjs",
  "exports": {
    ".": {
      "import": "./dist/index.mjs"
    }
  }
}
```

3. **编写源代码：**
```typescript
// src/index.ts
export function newFunction() {
  // 实现
}
```

4. **添加构建配置：**
```typescript
// tsdown.config.ts
export default {
  entry: ['src/index.ts'],
  outDir: 'dist',
};
```

5. **在其他包中使用：**
```json
{
  "dependencies": {
    "@vben/new-package": "workspace:*"
  }
}
```

---

### 8.2 修改 Lint 规则

**修改 ESLint 规则：**

1. **编辑配置文件：**
```typescript
// internal/lint-configs/eslint-config/src/configs/vue.ts
export async function vue() {
  return [{
    rules: {
      'vue/define-macros-order': ['error', {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      }],
    },
  }];
}
```

2. **测试规则：**
```bash
cd apps/web-antd
pnpm lint
```

3. **提交更改：**
```bash
git commit -m "style(eslint): 更新 Vue 宏定义顺序规则"
```

---

### 8.3 扩展 Vite 插件

**添加新插件：**

1. **创建插件文件：**
```typescript
// internal/vite-config/src/plugins/my-plugin.ts
import type { PluginOption } from 'vite';

export function viteMyPlugin(options: MyPluginOptions): PluginOption {
  return {
    name: 'vite:my-plugin',
    enforce: 'pre',
    transform(code, id) {
      // 转换逻辑
      return { code, map: null };
    },
  };
}
```

2. **导出插件：**
```typescript
// internal/vite-config/src/plugins/index.ts
export { viteMyPlugin } from './my-plugin';
```

3. **在配置中使用：**
```typescript
// internal/vite-config/src/config/application.ts
import { viteMyPlugin } from '../plugins';

export default defineApplicationConfig({
  application: {
    myPlugin: true,
  },
});
```

---

## 9. 常见问题

### Q1: 如何查看打包分析？

**A:** 运行以下命令：
```bash
pnpm build:antd --mode analyze
```
会自动打开 `./node_modules/.cache/visualizer/stats.html` 查看打包体积分析。

### Q2: 如何自定义 ESLint 规则？

**A:** 在项目根目录创建 `eslint.config.js`：
```javascript
import { defineConfig } from '@vben/eslint-config';

export default defineConfig([
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]);
```

### Q3: 如何添加新的 Commit Scope？

**A:** Scope 是从 Monorepo 包名自动生成的。添加新包后，commitlint 会自动识别：
```json
{
  "name": "@vben/new-package"
}
```

### Q4: 如何禁用全局 SCSS 注入？

**A:** 在 vite.config.ts 中设置：
```typescript
export default defineApplicationConfig({
  application: {
    injectGlobalScss: false,
  },
});
```

### Q5: 如何自定义 Loading 样式？

**A:** 在应用目录创建 `loading.html`：
```html
<!-- apps/web-antd/loading.html -->
<div class="loading">自定义 Loading</div>
```

---

**文档版本：** v1.0  
**最后更新：** 2026-04-04  
**维护者：** Vben Admin Team
