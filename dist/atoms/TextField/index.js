'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontStyle = function fontStyle(props) {
  return {
    fontStyle: props.fontStyle ? props.fontStyle : null
  };
};

var boxSizing = function boxSizing(props) {
  return {
    boxSizing: props.boxSizing ? props.boxSizing : null
  };
};

var border = function border(props) {
  return {
    border: props.border ? props.border : null
  };
};

var TextField = _styledComponents2.default.input.withConfig({
  displayName: 'TextField',
  componentId: 'pjlewr-0'
})(['::-webkit-input-placeholder{', ' ', ' ', ' ', ' ', ' ', ' ', '}::-moz-placeholder{', ' ', ' ', ' ', ' ', ' ', ' ', '}:-ms-input-placeholder{', ' ', ' ', ' ', ' ', ' ', ' ', '}:-moz-placeholder{', ' ', ' ', ' ', ' ', ' ', ' ', '}-webkit-appearance:', ';', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], _customStyleSystem.placeholderColor, _customStyleSystem.placeholderFontFamily, _customStyleSystem.placeholderFontSize, _customStyleSystem.placeholderFontStyle, _customStyleSystem.placeholderFontWeight, _customStyleSystem.placeholderLineHeight, _customStyleSystem.placeholderLetterSpacing, _customStyleSystem.placeholderColor, _customStyleSystem.placeholderFontFamily, _customStyleSystem.placeholderFontSize, _customStyleSystem.placeholderFontStyle, _customStyleSystem.placeholderFontWeight, _customStyleSystem.placeholderLineHeight, _customStyleSystem.placeholderLetterSpacing, _customStyleSystem.placeholderColor, _customStyleSystem.placeholderFontFamily, _customStyleSystem.placeholderFontSize, _customStyleSystem.placeholderFontStyle, _customStyleSystem.placeholderFontWeight, _customStyleSystem.placeholderLineHeight, _customStyleSystem.placeholderLetterSpacing, _customStyleSystem.placeholderColor, _customStyleSystem.placeholderFontFamily, _customStyleSystem.placeholderFontSize, _customStyleSystem.placeholderFontStyle, _customStyleSystem.placeholderFontWeight, _customStyleSystem.placeholderLineHeight, _customStyleSystem.placeholderLetterSpacing, function (props) {
  return props.webkitAppearance;
}, _styledSystem.color, _styledSystem.fontFamily, _styledSystem.fontSize, fontStyle, _styledSystem.fontWeight, _styledSystem.height, _styledSystem.letterSpacing, _styledSystem.lineHeight, _styledSystem.space, _styledSystem.width, boxSizing, border, _styledSystem.borderRadius);

exports.default = TextField;