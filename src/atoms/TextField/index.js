import styled from 'styled-components';
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  letterSpacing,
  lineHeight,
  space,
  width,
  borderRadius,
} from 'styled-system';

import {
  placeholderColor,
  placeholderFontFamily,
  placeholderFontSize,
  placeholderFontStyle,
  placeholderFontWeight,
  placeholderLineHeight,
  placeholderLetterSpacing,
} from './../../customStyleSystem';

const fontStyle = props => ({
  fontStyle: props.fontStyle ? props.fontStyle : null,
});

const boxSizing = props => ({
  boxSizing: props.boxSizing ? props.boxSizing : null,
});

const border = props => ({
  border: props.border ? props.border : null,
});

const TextField = styled.input`
  ::-webkit-input-placeholder {
    ${placeholderColor}
    ${placeholderFontFamily}
    ${placeholderFontSize}
    ${placeholderFontStyle}
    ${placeholderFontWeight}
    ${placeholderLineHeight}
    ${placeholderLetterSpacing}
  }
  ::-moz-placeholder {
    ${placeholderColor}
    ${placeholderFontFamily}
    ${placeholderFontSize}
    ${placeholderFontStyle}
    ${placeholderFontWeight}
    ${placeholderLineHeight}
    ${placeholderLetterSpacing}
  }
  :-ms-input-placeholder {
    ${placeholderColor}
    ${placeholderFontFamily}
    ${placeholderFontSize}
    ${placeholderFontStyle}
    ${placeholderFontWeight}
    ${placeholderLineHeight}
    ${placeholderLetterSpacing}
  }
  :-moz-placeholder {
    ${placeholderColor}
    ${placeholderFontFamily}
    ${placeholderFontSize}
    ${placeholderFontStyle}
    ${placeholderFontWeight}
    ${placeholderLineHeight}
    ${placeholderLetterSpacing}
  }
  -webkit-appearance: ${(props) => props.webkitAppearance};

  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${height}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${width}
  ${boxSizing}
  ${border}
  ${borderRadius}
`;

export default TextField;
