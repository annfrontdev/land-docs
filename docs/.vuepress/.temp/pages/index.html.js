import comp from "/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Главная\",\"lang\":\"ru-RU\",\"frontmatter\":{\"home\":true,\"title\":\"Главная\",\"heroImage\":\"/ariadna.svg\",\"actions\":[{\"text\":\"В руководство\",\"link\":\"/guide.html\",\"type\":\"primary\"}]},\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
