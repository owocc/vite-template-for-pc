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
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme.scss" as *;`,
      },
    },
  },
});
