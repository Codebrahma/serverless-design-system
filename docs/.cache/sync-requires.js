// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/index.json")
}