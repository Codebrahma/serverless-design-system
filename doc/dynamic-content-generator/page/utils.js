const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')

const getFileFromProjectRoot = (filename) => (
  path.join(projectRoot, filename)
)

module.exports = {
  projectRoot,
  getFileFromProjectRoot
}
