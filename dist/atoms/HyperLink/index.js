'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HyperLink = _styledComponents2.default.a.withConfig({
  displayName: 'HyperLink',
  componentId: 'qghr5z-0'
})(['', ' ', ' ', ' ', ' &:hover{', '}&:active{', '}'], _customStyleSystem.textDecoration, _styledSystem.borderBottom, _styledSystem.borderColor, _styledSystem.color, function (_ref) {
  var hoverColor = _ref.hoverColor;
  return { color: hoverColor };
}, function (_ref2) {
  var activeColor = _ref2.activeColor;
  return { color: activeColor };
});

HyperLink.defaultProps = {
  color: 'gray.3'
};

exports.default = HyperLink;