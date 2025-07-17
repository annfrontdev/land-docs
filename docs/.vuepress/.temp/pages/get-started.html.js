import comp from "/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/page.html.vue"
const data = JSON.parse("{\"path\":\"/page.html\",\"title\":\"Руководство\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"page.md\"}")
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
