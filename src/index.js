import { ThemeProvider } from 'styled-components'
import * as atoms from './atoms';
import * as molecules from './molecules';
import * as components from './components';
import withBeforeAfter from './withBeforeAfter';

export default {
  ...atoms,
  ...molecules,
  ...components,
  withBeforeAfter,
  ThemeProvider,
};
