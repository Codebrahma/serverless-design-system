import * as atoms from './atoms';
import * as molecules from './molecules';
import * as components from './components';
import withBeforeAfter from './withBeforeAfter';
import ThemeProvider from './themeProvider'
import theme from './theme'

export default {
  ...atoms,
  ...molecules,
  ...components,
}

export {
  withBeforeAfter,
  ThemeProvider,
  theme
}
