#   uni-vue-tsx


基于 uni-app + Vue3 + TypeScript 的每周业务小程序/H5 模板，开箱即用，支持编译到微信小程序与 H5 端。

## 技术栈

- **uni-app** – 多端开发框架  
- **Vue 3** – 渐进式 JavaScript 框架  
- **TypeScript** – 类型安全  
- **Vite** – 极速构建工具  
- **yarn** – 包管理器  

## 快速开始

### 使用 giget 模板（推荐）

```bash
# 一条命令创建新项目
npx giget@latest gh:arche-repos/uni-vue-tsx my-project

# 进入目录
cd my-project
yarn install         # 安装依赖
```

> 若未安装 giget，亦可全局安装：`npm i -g giget`

### 本地开发

```bash
# 运行微信小程序 dev 模式
yarn dev:mp-weixin

# 运行 H5 dev 模式
yarn dev:h5
```

## 常用脚本

| 命令                | 说明                         |
|---------------------|------------------------------|
| `yarn dev:mp-weixin`| 微信小程序开发模式           |
| `yarn dev:h5`       | H5 开发模式                  |
| `yarn build:mp-weixin` | 构建微信小程序生产包     |
| `yarn build:h5`     | 构建 H5 生产包               |
| `yarn lint`         | 执行 ESLint 代码检查         |
| `yarn type-check`   | 执行 TypeScript 类型检查     |

## 项目结构

```
uni-vue-tsx
├── src/
│   ├── pages/          # 业务页面
│   ├── static/         # 静态资源
│   ├── App.vue         # 应用入口
│   ├── main.ts         # 应用初始化
│   ├── manifest.json   # 小程序全局配置
│   └── pages.json      # 页面路由与窗口表现配置
├── index.html          # H5 模板
├── vite.config.ts      # Vite 构建配置
└── tsconfig.json       # TypeScript 配置
```

## 多端差异

- 小程序端：请使用微信开发者工具打开 `dist/build/mp-weixin/` 目录进行预览上传  
- H5 端：执行 `yarn dev:h5` 后访问本地服务即可  

## 注意事项

1. 修改 `src/pages.json` 可调整页面路由及导航栏样式  
2. 全局样式统一放在 `src/uni.scss`  
3. 如需新增页面，请在 `src/pages/` 创建文件夹并在 `pages.json` 中注册  

## 文档索引

- [快速开始](docs/01-快速开始.md)
- [使用 giget 模板](docs/02-使用-giget-模板.md)

## 开发环境配置

项目已集成完整的开发环境配置，确保团队协作时代码风格一致：

### 编辑器配置
- **`.editorconfig`** - 跨编辑器代码风格统一
- **`.vscode/settings.json`** - VS Code专属配置：
  - 保存时自动格式化代码
  - 保存时自动整理 import
  - 自动修复 ESLint 问题
  - TypeScript/JavaScript/Vue 文件格式化规则

### 所需 VS Code 扩展
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Vue Language Features (Volar)** - Vue3 支持

## License

MIT