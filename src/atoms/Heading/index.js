import { Text } from '../index.js';
import theme from '../../theme';

const Heading = Text.withComponent('h3').extend`
  font-family: ${theme.font.header};
  color: ${theme.colors.black}
`;

Heading.displayName = 'Heading';

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  fontSize: 7,
  lineHeight: 5,
  letterSpacing: 0,
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  fontSize: 6,
  lineHeight: 4,
  letterSpacing: 4,
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  fontSize: 5,
  lineHeight: 4,
  letterSpacing: 0,
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  fontSize: 4,
  lineHeight: 3,
  letterSpacing: 3,
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  fontSize: 3,
  lineHeight: 2,
  letterSpacing: 2,
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  fontSize: 2,
  lineHeight: 2,
  letterSpacing: 1,
};

export default Heading;
