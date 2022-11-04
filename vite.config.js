import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import postcssNesting from "postcss-nesting";
import { ViteAliases } from "vite-aliases";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver(),
      ],
    }),
    ViteAliases(),
    Icons({
      autoInstall: true,
    }),
  ],
  //样式配置
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
    preprocessorOptions: {
      scss: {
        //自定义主题
        additionalData: `@use "@/styles/theme.scss" as *;`,
      },
    },
  },
  //服务配置
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.1.2:8008",
        changeOrigin: true,
      },
    },
  },
});
