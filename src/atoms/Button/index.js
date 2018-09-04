import styled from 'styled-components';
import {
  border,
  borderWidth,
  borderStyle,
  borderColor,
  color,
  fontFamily,
  fontSize,
  letterSpacing,
  space,
  width,
  height,
  minWidth,
} from 'styled-system';


// TODO: Customize hovering color based on props.
// This will break the header / hero section button hover
const Button = styled.button`
  padding: 1.8rem;

  ${color}
  ${border}
  ${borderWidth}
  ${borderStyle}
  ${borderColor}
  ${fontFamily}
  ${fontSize}
  ${space}
  ${letterSpacing}
  ${width}
  ${height}
  ${minWidth}

  &:disabled {
    opacity: 0.2;
  }

  &:hover {
    background-color: ${
      (props) => props.disabled ? null : props.theme.colors.secondaryColor
    };
    border-color: ${
      (props) => props.disabled ? null : props.theme.colors.secondaryColor
    }
    cursor: pointer;
  }
`;

Button.defaultProps = {
  width: '280px',
  color: 'white',
  bg: 'primaryColor',
  border: 'none',
  borderColor: 'primaryColor',
  fontFamily: 'Serverless',
  fontSize: '3',
  letterSpacing: 'primaryBtn',
};

Button.displayName = 'Button';

export default Button;
