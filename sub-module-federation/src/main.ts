import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__?: boolean;
    Vue: typeof import("vue");
    microApp: {
      getData(): unknown;
      addGlobalDataListener: (callback: (data: any) => any) => void;
    };
    mount: () => void;
  }
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log("子应用在微前端环境下");
  console.log(window);
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
} else {
  console.log("子应用单独运行");
  console.log(window);
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}
