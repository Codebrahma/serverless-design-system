const pageGenerator = require('./dynamic-content-generator/page')

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => (
  pageGenerator(createPage)
)