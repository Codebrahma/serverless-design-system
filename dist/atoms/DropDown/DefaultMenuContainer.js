'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Card = require('./../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuContainer = (0, _styledComponents2.default)(_Card2.default).withConfig({
  displayName: 'DefaultMenuContainer__MenuContainer',
  componentId: 'sc-1s96lm8-0'
})(['position:absolute;overflow:auto;', ' ', ' ', ' ', ' ', ' ', ''], _styledSystem.left, _styledSystem.top, _styledSystem.right, _styledSystem.bottom, _styledSystem.zIndex, _styledSystem.background);

MenuContainer.defaultProps = {
  background: 'white',
  border: '1px solid #ccc',
  mt: '-1px',
  maxHeight: '200px',
  top: '100%',
  width: 1,
  zIndex: '100'
};

exports.default = function (_ref) {
  var isOpen = _ref.isOpen,
      styleProps = _ref.styleProps,
      children = _ref.children;
  return isOpen ? _react2.default.createElement(
    MenuContainer,
    styleProps,
    children
  ) : null;
};