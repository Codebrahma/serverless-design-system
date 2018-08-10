import { Text } from '../../atoms';
import theme from '../../theme';

const P = Text.withComponent('p');
P.defaultProps = {
  fontFamily: theme.font.p,
  color: 'gray.3',
  fontSize: 2,
  lineHeight: 4,
};


P.s = Text.withComponent('p');
P.s.defaultProps = {
  fontFamily: theme.font.psmall,
  color: 'gray.2',
  fontSize: 0,
  lineHeight: 4,
};

P.l = Text.withComponent('p');
P.l.defaultProps = {
  fontFamily: theme.font.plarge,
  color: 'black',
  fontSize: 4,
  lineHeight: 3,
  fontWeight: 'normal',
  fontStyle: 'normal'
};
export default P;
