export default {
  name: 'uni-vue-tsx-template',
  description: '基于 uni-app + Vue3 + TypeScript 的多端开发模板',
  tags: ['uni-app', 'vue3', 'typescript', 'vite', 'template', 'multi-platform'],
  platforms: ['微信小程序', 'H5', '支付宝小程序', '抖音小程序'],
  features: [
    'Vue3 Composition API',
    'TypeScript 支持',
    'Vite 构建工具',
    'ESLint 代码检查',
    'Prettier 格式化',
    '多端兼容',
    '开箱即用'
  ],
  scripts: {
    dev: {
      'h5': 'yarn dev:h5',
      '微信小程序': 'yarn dev:mp-weixin',
      '支付宝小程序': 'yarn dev:mp-alipay'
    },
    build: {
      'h5': 'yarn build:h5',
      '微信小程序': 'yarn build:mp-weixin',
      '支付宝小程序': 'yarn build:mp-alipay'
    }
  }
}