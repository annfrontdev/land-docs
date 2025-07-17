import comp from "/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/guide.html.vue"
const data = JSON.parse("{\"path\":\"/guide.html\",\"title\":\"Руководство\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752757168000,\"contributors\":[{\"name\":\"annfrontdev\",\"username\":\"annfrontdev\",\"email\":\"ann.frontend.job@gmail.com\",\"commits\":2,\"url\":\"https://github.com/annfrontdev\"}],\"changelog\":[{\"hash\":\"9840e191b177a4d3fec5c26a9c8358c320f4a097\",\"time\":1752757168000,\"email\":\"ann.frontend.job@gmail.com\",\"author\":\"annfrontdev\",\"message\":\"init\"},{\"hash\":\"5ae7377e33cb47c3b536cadc31575f975198f392\",\"time\":1752756326000,\"email\":\"ann.frontend.job@gmail.com\",\"author\":\"annfrontdev\",\"message\":\"init\"}]},\"filePathRelative\":\"guide.md\"}")
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
