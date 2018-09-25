'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Heading = require('../../atoms/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const comp = ({ img, imgProps, title, description, children }) => _react2.default.createElement(
  _atoms.Box,
  {
    px: [2, 3, 2],
    py: [2, 2, 2]
  },
  _react2.default.createElement(
    _atoms.Flex.horizontallyCenter,
    null,
    _react2.default.createElement(_atoms.Image, _extends({
      height: '100%',
      src: img,
      alt: title,
      mx: 'auto'
    }, imgProps))
  ),
  _react2.default.createElement(
    _Heading2.default.h3,
    {
      align: 'center',
      fontFamily: 'SoleilBk',
      my: 3
    },
    title
  ),
  _react2.default.createElement(
    _Typography2.default,
    {
      align: 'center',
      mt: 0,
      fontSize: 3
    },
    description
  ),
  children
);

const ImageCard = (0, _styledComponents2.default)(comp)``;

exports.default = ImageCard;