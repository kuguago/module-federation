import { createApp } from "vue";
import App from "./App.vue";
// import VxeUIAll from "vxe-pc-ui";
// import "vxe-pc-ui/lib/style.css";
// import VxeUITable from "vxe-table";
// import "vxe-table/lib/style.css";
import microApp from "@micro-zoe/micro-app";

declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__?: boolean;

    Vue?: any;
  }
}
const app = createApp(App);

microApp.start({
  globalAssets: {
    js: [
      "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource-umd/vue/dist/vue.global.prod.js",
      "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource-umd/vue-router/dist/vue-router.global.prod.js",
    ],
  },
  plugins: {
    modules: {
      "my-app": [
        {
          loader(code, url) {
            // 按实际情况 加js文件判断
            // VUE
            code = code.replace("var Vue", "window.Vue");
            // VUE-ROUTER
            code = code.replace("var VueRouter", "window.VueRouter");
            // ElementPlusIconsVue

            return code;
          },
        },
      ],
    },
  },
});
microApp.setGlobalData({ Vue: "全局数据" });
app.mount("#app");
