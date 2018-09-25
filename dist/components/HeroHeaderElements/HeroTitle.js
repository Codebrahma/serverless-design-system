'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroTitle = function HeroTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _atoms.Heading.h2,
    {
      lineHeight: 0,
      letterSpacing: '-1.1px',
      fontSize: 5,
      mb: 1,
      fontFamily: 'Serverless',
      align: 'center',
      color: 'white'
    },
    children
  );
};

exports.default = HeroTitle;