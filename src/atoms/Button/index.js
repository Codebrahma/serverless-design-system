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
  minWidth,
} from 'styled-system';


// TODO: Customize hovering color based on props. 
// This will break the header / hero section button hover
const Button = styled.button`
  ${color} ${border} ${borderColor}
  ${fontFamily} ${fontSize} ${space}
  ${letterSpacing} ${width} ${minWidth}
  &:disabled {
    opacity: 0.2;
  }
  &:hover {
    background-color: ${ props => 
        props.disabled ? null : props.theme.colors.secondaryColor
      };
    cursor: pointer;
  }
`;

Button.defaultProps = {
  color: 'white',
  bg: 'primaryColor',
  border: 'none',
  fontFamily: 'Serverless',
  px: '3.5em',
  py: '1em',
  fontSize: '3',
  letterSpacing: 'primaryBtn',
};

Button.displayName = 'Button';

export default Button;
