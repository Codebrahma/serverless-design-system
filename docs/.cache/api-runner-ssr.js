var plugins = [{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-12345689-1"},
    },{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.js"},
    },{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/codebrhama/Documents/projects/serverless-design-system/docs/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Emilia","short_name":"Emilia - Gatsby Starter Portfolio","description":"Dark One-Page portfolio with cards & detailed project views","start_url":"/","background_color":"#2b2e3c","theme_color":"#3498DB","display":"minimal-ui","icons":[{"src":"/logos/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/logos/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
