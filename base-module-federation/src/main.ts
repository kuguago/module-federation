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
  excludeAssetFilter: (url) => {
    console.log("url-------------", url);
    return true;
  },
});
microApp.setData("my-app", { Vue: window.Vue });
app.mount("#app");
