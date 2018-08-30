import { Text } from '../../atoms';
import theme from '../../theme';

const P = Text.withComponent('p');

P.defaultProps = {
  fontFamily: theme.font.p,
  fontWeight: 'normal',
  fontStyle: 'normal',
  color: 'gray.3',
  fontSize: 2,
  lineHeight: 4,
};

export default P;
