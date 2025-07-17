export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Главная"} }],
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"Руководство"} }],
  ["/hostings-table.html", { loader: () => import(/* webpackChunkName: "hostings-table.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/hostings-table.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nana/Documents/web.chill.games/land-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
