'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atoms = require('../../atoms');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P = _atoms.Text.withComponent('p');

P.defaultProps = {
  fontFamily: _theme2.default.font.p,
  fontWeight: 'normal',
  fontStyle: 'normal',
  color: 'gray.3',
  fontSize: 2,
  lineHeight: 4
};

exports.default = P;