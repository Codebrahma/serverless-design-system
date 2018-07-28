// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-project-js": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/src/templates/project.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/layout-index.json"),
  "amy-luo.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/amy-luo.json"),
  "matt-cannon.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/matt-cannon.json"),
  "mona-magnussen.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/mona-magnussen.json"),
  "roman-kraft.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/roman-kraft.json"),
  "marion-michele.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/marion-michele.json"),
  "dev-404-page.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/codebrhama/Documents/projects/serverless-design-system/docs/.cache/json/index.json")
}