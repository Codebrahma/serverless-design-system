'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fontStyle = props => ({
  fontStyle: props.fontStyle ? props.fontStyle : null
});

const boxSizing = props => ({
  boxSizing: props.boxSizing ? props.boxSizing : null
});

const border = props => ({
  border: props.border ? props.border : null
});

const TextField = _styledComponents2.default.input`
  ::-webkit-input-placeholder {
    ${_customStyleSystem.placeholderColor}
    ${_customStyleSystem.placeholderFontFamily}
    ${_customStyleSystem.placeholderFontSize}
    ${_customStyleSystem.placeholderFontStyle}
    ${_customStyleSystem.placeholderFontWeight}
    ${_customStyleSystem.placeholderLineHeight}
    ${_customStyleSystem.placeholderLetterSpacing}
  }
  ::-moz-placeholder {
    ${_customStyleSystem.placeholderColor}
    ${_customStyleSystem.placeholderFontFamily}
    ${_customStyleSystem.placeholderFontSize}
    ${_customStyleSystem.placeholderFontStyle}
    ${_customStyleSystem.placeholderFontWeight}
    ${_customStyleSystem.placeholderLineHeight}
    ${_customStyleSystem.placeholderLetterSpacing}
  }
  :-ms-input-placeholder {
    ${_customStyleSystem.placeholderColor}
    ${_customStyleSystem.placeholderFontFamily}
    ${_customStyleSystem.placeholderFontSize}
    ${_customStyleSystem.placeholderFontStyle}
    ${_customStyleSystem.placeholderFontWeight}
    ${_customStyleSystem.placeholderLineHeight}
    ${_customStyleSystem.placeholderLetterSpacing}
  }
  :-moz-placeholder {
    ${_customStyleSystem.placeholderColor}
    ${_customStyleSystem.placeholderFontFamily}
    ${_customStyleSystem.placeholderFontSize}
    ${_customStyleSystem.placeholderFontStyle}
    ${_customStyleSystem.placeholderFontWeight}
    ${_customStyleSystem.placeholderLineHeight}
    ${_customStyleSystem.placeholderLetterSpacing}
  }
  -webkit-appearance: ${props => props.webkitAppearance};

  ${_styledSystem.color}
  ${_styledSystem.fontFamily}
  ${_styledSystem.fontSize}
  ${fontStyle}
  ${_styledSystem.fontWeight}
  ${_styledSystem.height}
  ${_styledSystem.letterSpacing}
  ${_styledSystem.lineHeight}
  ${_styledSystem.space}
  ${_styledSystem.width}
  ${boxSizing}
  ${border}
  ${_styledSystem.borderRadius}
`;

exports.default = TextField;