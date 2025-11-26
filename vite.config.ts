import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [uni.default(), vueJsx()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h, Fragment } from "vue"'
  }
}));
