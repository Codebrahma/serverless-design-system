const dir = require('node-dir')
const { getFileFromProjectRoot } = require('./utils')

const createPages = (type, createPage, onComplete) => {
  dir.subdirs(getFileFromProjectRoot(`src/content/${type}s/`), (err, components) => {
    if (err) { throw err }

    components.forEach((component) => {
      const componentName = component.split('/').pop()
      createPage({
        path: `${type}/${componentName}`,
        component: getFileFromProjectRoot(`src/templates/doc.js`),
        context: { componentName, type },
      })
    })
    onComplete()
  })
}

const pageCreator = (componentType, createPage) => (
  new Promise((resolve, reject) => {
    try { createPages(componentType, createPage, resolve) }
    catch(e) {
      console.log('error generating atom pages:', e)
      reject(e)
    }
  })
)

module.exports = pageCreator
