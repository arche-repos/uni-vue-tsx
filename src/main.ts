import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}


import { initDingH5RemoteDebug } from "dingtalk-h5-remote-debug";
initDingH5RemoteDebug();
