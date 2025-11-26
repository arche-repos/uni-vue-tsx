// giget 模板配置
export default {
  name: 'uni-vue-tsx',
  description: 'uni-app Vue3 TypeScript 多端模板',
  repo: 'arche-repos/uni-vue-tsx',
  branch: 'main',
  dir: '.',
  ignore: [
    'node_modules',
    'dist',
    '.git',
    '.DS_Store',
    '*.log',
    'yarn-error.log',
    'package-lock.json'
  ],
  exclude: [
    '.git',
    'CHANGELOG.md',
    'LICENSE',
    'README.md',
    'CONTRIBUTING.md',
    '.github'
  ],
  // 拷贝后自动重命名
  rename: {
    'gitignore': '.gitignore',
    'env.example': '.env'
  },
  // 初始化后自动执行
  postInstall: [
    'echo "✅ 模板已初始化完毕！"',
    'echo "执行 yarn install 安装依赖..."',
    'yarn install'
  ]
} as const;