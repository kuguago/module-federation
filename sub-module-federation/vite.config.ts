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
          injectScript: `
           <script type="importmap">
            {
              "imports": {
                "vue": "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource/vue.esm-browser.prod.js",
                "vue-router": "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource/vue-router.esm-browser.js",
                "@vue/devtools-api": "https://unpkg.com/@vue/devtools-api@6.6.1/lib/esm/index.js"
              }
            }
          </script>
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
        format: "es",
        paths: {
          vue: "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource/vue.esm-browser.prod.js",
          "vue-router":
            "https://aplus-front-cdn.oss-cn-hangzhou.aliyuncs.com/aplus-frontend-static-resource/vue-router.esm-browser.js",
        },
      },
    },
  },
});
