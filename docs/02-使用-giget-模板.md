# 使用 giget 模板

本项目已支持 [giget](https://github.com/unjs/giget)，一条命令即可创建新仓库。

## 快速开始

```bash
# 使用 npx（推荐）
npx giget@latest gh:your-username/uni-vue-tsx my-project

# 或全局安装
npm i -g giget
giget gh:your-username/uni-vue-tsx my-project
```

进入项目并安装依赖：

```bash
cd my-project
yarn install
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `gh:` | 仓库托管平台，支持 `gh:`（GitHub）、`gitlab:` 等 |
| `your-username/uni-vue-tsx` | 模板仓库地址，按需替换 |
| `my-project` | 本地目录名 |

## 高级用法

1. 指定分支  
   ```bash
   npx giget gh:your-username/uni-vue-tsx#dev my-project
   ```

2. 仅克隆子目录（Monorepo 场景）  
   ```bash
   npx giget gh:your-username/uni-vue-tsx/templates/h5 my-h5
   ```

3. 自动安装依赖  
   ```bash
   npx giget gh:your-username/uni-vue-tsx my-project --install
   ```

## 与 degit 差异

| 特性 | giget | degit |
| ---- | ---- | ---- |
| 仓库语法 | `gh:user/repo` | `user/repo` |
| 子目录克隆 | ✅ | ❌ |
| 自动安装依赖 | ✅ | ❌ |
| 配置文件 | `giget.config.ts` | `degit.json` |

## 模板配置

模板根目录已内置 `giget.config.ts`，可定义：

- 需要忽略的文件
- 需要排除的目录
- 重命名规则
- 安装后自动执行的脚本

克隆时，`giget` 会自动读取并应用这些规则，无需手动干预。