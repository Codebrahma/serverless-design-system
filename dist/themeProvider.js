'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomThemeProvider = function CustomThemeProvider(props) {
  return _react2.default.createElement(_styledComponents.ThemeProvider, props);
};

CustomThemeProvider.defaultProps = { theme: _theme2.default };

exports.default = CustomThemeProvider;