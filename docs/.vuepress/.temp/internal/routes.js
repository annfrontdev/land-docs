export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Главная"} }],
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"Руководство"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
