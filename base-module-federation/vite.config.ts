import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          injectScript: ` <script src="https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource-umd/vue/dist/vue.global.prod.js"></script>
          
           <script src="https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource-umd/vue-router/dist/vue-router.global.prod.js"></script>
          `,
        },
      },
    }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        format: "umd",
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
