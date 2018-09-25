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

var TertiaryButton = (0, _styledComponents2.default)(_Button2.default).withConfig({
  displayName: 'TertiaryButton',
  componentId: 'sw8hbh-0'
})(['background:', ';color:', ';transition:background 0.5s ease;&:hover{background:', ';};'], function (_ref) {
  var background = _ref.background;
  return background || 'white';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primaryColor;
}, function (props) {
  return props.disabled ? null : (0, _utils.hexToRgbA)(props.theme.colors.white, 0.70);
});

exports.default = TertiaryButton;