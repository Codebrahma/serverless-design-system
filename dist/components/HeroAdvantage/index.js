'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _atoms = require('../../atoms');

var _molecules = require('../../molecules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeroAdvantage = ({ img, title, description }) => _react2.default.createElement(
  _atoms.Flex,
  { width: [1, 1, 1 / 3], px: [0, 0, 2], mt: 2, flexDirection: 'column' },
  _react2.default.createElement(
    _atoms.Flex,
    { justifyContent: ['center', 'center', 'left'] },
    _react2.default.createElement(
      _molecules.TextWithIcon,
      {
        iconSrc: img,
        iconHeight: '26px',
        iconWidth: '45px',
        iconTop: '-5px',
        iconLeft: '-10px',
        backgroundSize: 'cover',
        textAlign: ['center', 'center', 'left']
      },
      _react2.default.createElement(
        _atoms.Text.span,
        {
          color: 'white',
          fontFamily: 'SoleilBk',
          fontSize: '4',
          align: 'center'
        },
        title
      )
    )
  ),
  _react2.default.createElement(
    _molecules.P,
    { color: 'gray.3' },
    description
  )
);

HeroAdvantage.propTypes = {
  img: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired
};

exports.default = HeroAdvantage;