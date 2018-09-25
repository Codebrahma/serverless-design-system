'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = _styledComponents2.default.span.withConfig({
  displayName: 'DefaultIcon__Icon',
  componentId: 'sc-1gdyq0w-0'
})(['display:inline;border-color:', ';border-style:solid;border-width:', ';content:\' \';display:block;height:0;margin-top:-ceil(2.5);position:absolute;right:10px;top:24px;width:0;'], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'transparent transparent #999' : '#999 transparent transparent';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? '0 5px 5px' : '5px 5px 0';
});

Icon.defaultProps = { isOpen: false };

exports.default = Icon;