'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = _Text2.default.withComponent('h3');
Heading.defaultProps = {
  fontFamily: _theme2.default.font.header
};

Heading.displayName = 'Heading';

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  fontSize: 7,
  lineHeight: 3,
  letterSpacing: _theme2.default.letterSpacings.h1,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '20px'
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  fontSize: 6,
  lineHeight: 0,
  letterSpacing: _theme2.default.letterSpacings.h2,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '20px'
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  fontSize: 5,
  lineHeight: 1,
  letterSpacing: _theme2.default.letterSpacings.h3,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '16px'
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  fontSize: 4,
  lineHeight: 0,
  letterSpacing: _theme2.default.letterSpacings.h4,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '12px'
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  fontSize: 3,
  lineHeight: 3,
  letterSpacing: _theme2.default.letterSpacings.h5,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '8px'
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  fontSize: 2,
  lineHeight: 3,
  letterSpacing: _theme2.default.letterSpacings.h6,
  fontWeight: _theme2.default.fontWeights.normal,
  mb: '4px'
};

exports.default = Heading;