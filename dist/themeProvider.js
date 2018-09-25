'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CustomThemeProvider = props => React.createElement(_styledComponents.ThemeProvider, props);

CustomThemeProvider.defaultProps = { theme: _theme2.default };

exports.default = CustomThemeProvider;