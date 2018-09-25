'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeroMainTitle = ({ children }) => _react2.default.createElement(
  _atoms.Heading.h1,
  { align: 'center', fontFamily: 'Serverless', color: 'white' },
  children
);

exports.default = HeroMainTitle;