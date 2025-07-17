import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "ru-RU",
  title: "Руководство",
  description: "Для клиентов веб-студии",

  theme: defaultTheme({
    logo: "./ariadna.svg",
    navbar: ["/", "/guide"],
  }),

  bundler: viteBundler(),
});
