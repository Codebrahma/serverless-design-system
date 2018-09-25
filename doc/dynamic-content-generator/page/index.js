const generate = require('./generator')

const pageCreator = (createPage) => (
  Promise.all(
    ['atom', 'molecule', 'component'].
      map((comp) => generate(comp, createPage))
  )
)

module.exports = pageCreator
