import { Text } from '../../atoms';
import theme from '../../theme';

const Heading = Text.withComponent('h3');
Heading.defaultProps = {
  fontFamily: theme.font.header
};

Heading.displayName = 'Heading';

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  fontSize: 7,
  lineHeight: 3,
  letterSpacing: theme.letterSpacings.h1,
  fontWeight: theme.fontWeights.normal,
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  fontSize: 6,
  lineHeight: 0,
  letterSpacing: theme.letterSpacings.h2,
  fontWeight: theme.fontWeights.normal,
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  fontSize: 5,
  lineHeight: 1,
  letterSpacing: theme.letterSpacings.h3,
  fontWeight: theme.fontWeights.normal,
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  fontSize: 4,
  lineHeight: 0,
  letterSpacing: theme.letterSpacings.h4,
  fontWeight: theme.fontWeights.normal,
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  fontSize: 3,
  lineHeight: 3,
  letterSpacing: theme.letterSpacings.h5,
  fontWeight: theme.fontWeights.normal,
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  fontSize: 2,
  lineHeight: 3,
  letterSpacing: theme.letterSpacings.h6,
  fontWeight: theme.fontWeights.normal,
};

export default Heading;
