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

var _withBeforeAfter = require('../../withBeforeAfter');

var _withBeforeAfter2 = _interopRequireDefault(_withBeforeAfter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderWithCount = (0, _withBeforeAfter2.default)(_atoms.Heading.h3, `&`, `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.08;
    left: -5rem;
    top: -2.5rem;
  `, ``, `position: relative;`);

const Feature = ({
  header,
  img,
  content,
  leadingNumber,
  rightAligned,
  action
}) => _react2.default.createElement(
  _atoms.Column,
  {
    width: [1, 1, 0.49, 0.5],
    pr: [0, 0, 2, rightAligned ? '15.5%' : 0],
    pl: [0, 0, 2, rightAligned ? 0 : '15.5%'],
    pb: [4, 4, 5],
    style: { counterIncrement: 'step-counter' },
    justifyContent: action ? "space-between" : "flex-start"
  },
  _react2.default.createElement(
    _atoms.Relative,
    null,
    img && _react2.default.createElement(
      _atoms.Box,
      { mb: 25 },
      _react2.default.createElement(_atoms.Image, { src: img })
    ),
    _react2.default.createElement(
      HeaderWithCount,
      {
        fontFamily: 'SoleilBk',
        headingImagePresence: !!img,
        beforeBoxContent: ['none', 'none', leadingNumber ? "counter(step-counter, decimal-leading-zero)" : 'none']
      },
      header
    ),
    _react2.default.createElement(
      _molecules.P,
      null,
      content
    )
  ),
  action
);

Feature.propTypes = {
  header: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired,
  img: _propTypes2.default.string.isRequired,
  leadingNumber: _propTypes2.default.bool
};

Feature.defaultProps = {
  leadingNumber: true
};

exports.default = Feature;