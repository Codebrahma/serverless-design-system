import styled from 'styled-components';
import {
  border,
  borderColor,
  color,
  fontFamily,
  fontSize,
  letterSpacing,
  space,
  width,
} from 'styled-system';

import { hexToRgbA } from '../../utils';


// TODO refactor the hover state implementation
// i.e the logic for disabled buttons not to hover is repeated
// across primary and secondary
const secondary = (props) => {
  if (!props.secondary) return null;
  return {
    background: 'transparent',
    border: `1px solid ${props.theme.colors.primaryColor}`,
    color: `${props.theme.colors.primaryColor}`,
    '&:hover': {
      // TODO fix the hover to base on the variable
      background: props.disabled ? null :
        hexToRgbA(props.theme.colors.secondaryColor, '0.1'),
    },
  };
};

const Button = styled.button.attrs({
  color: 'white',
  bg: 'primaryColor',
  fontFamily: 'Serverless',
  px: '3.5em',
  py: '1em',
  fontSize: '3',
  letterSpacing: 'primaryBtn',
})`
  ${secondary}
  ${color} ${border} ${borderColor}
  ${fontFamily} ${fontSize} ${space}
  ${letterSpacing} ${width}
  transition: background 0.5s ease;
  &:disabled {
    opacity: 0.2;
  }
  &:hover {
    background-color: ${props => (props.disabled ?
    null : props.theme.colors.secondaryColor)
};
  }
`;

Button.displayName = 'Button';

export default Button;
