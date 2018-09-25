'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('./../Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondaryButton = (0, _styledComponents2.default)(_Button2.default).withConfig({
  displayName: 'SecondaryButton',
  componentId: 'qu9ir5-0'
})(['background:', ';border-style:solid;border-width:', ';border-color:', ';color:', ';&:hover{background:', ';};'], function (_ref) {
  var background = _ref.background;
  return background || 'transparent';
}, function (_ref2) {
  var borderWidth = _ref2.borderWidth;
  return borderWidth;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primaryColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primaryColor;
}, function (props) {
  return props.disabled ? null : (0, _utils.hexToRgbA)(props.theme.colors.primaryColor, '0.1');
});

SecondaryButton.defaultProps = {
  borderWidth: '1px'
};

exports.default = SecondaryButton;