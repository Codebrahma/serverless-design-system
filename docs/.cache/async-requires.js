// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/codebrhama/Documents/projects/serverless-design-system/docs/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/layouts/index.js")
}