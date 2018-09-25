'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _atoms = require('../../atoms');

var _molecules = require('../../molecules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroInlineDescription = function HeroInlineDescription(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _atoms.Flex.horizontallyCenter,
    { px: [2, 2, 0], pb: 1 },
    _react2.default.createElement(
      _molecules.P,
      { m: 0, fontSize: '2rem', lineHeight: 3, color: 'white', align: 'center' },
      children
    )
  );
};

exports.default = HeroInlineDescription;