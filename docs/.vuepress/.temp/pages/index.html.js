import comp from "/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Главная\",\"lang\":\"ru-RU\",\"frontmatter\":{\"home\":true,\"title\":\"Главная\",\"heroImage\":\"/ariadna.svg\",\"actions\":[{\"text\":\"В руководство\",\"link\":\"/guide.html\",\"type\":\"primary\"}]},\"git\":{\"updatedTime\":1752756326000,\"contributors\":[{\"name\":\"annfrontdev\",\"username\":\"annfrontdev\",\"email\":\"ann.frontend.job@gmail.com\",\"commits\":1,\"url\":\"https://github.com/annfrontdev\"}],\"changelog\":[{\"hash\":\"5ae7377e33cb47c3b536cadc31575f975198f392\",\"time\":1752756326000,\"email\":\"ann.frontend.job@gmail.com\",\"author\":\"annfrontdev\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
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
