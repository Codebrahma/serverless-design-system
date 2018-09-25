'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _atoms = require('../../atoms');

var _molecules = require('../../molecules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeroDescription = ({ children }) => _react2.default.createElement(
  _atoms.Flex.horizontallyCenter,
  { px: [2, 2, 5, '18%'], pb: 1 },
  _react2.default.createElement(
    _molecules.P,
    { lineHeight: 3, align: 'center' },
    children
  )
);

exports.default = HeroDescription;