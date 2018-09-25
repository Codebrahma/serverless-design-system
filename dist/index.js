'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.ThemeProvider = exports.withBeforeAfter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = require('./atoms');

var atoms = _interopRequireWildcard(_atoms);

var _molecules = require('./molecules');

var molecules = _interopRequireWildcard(_molecules);

var _components = require('./components');

var components = _interopRequireWildcard(_components);

var _withBeforeAfter = require('./withBeforeAfter');

var _withBeforeAfter2 = _interopRequireDefault(_withBeforeAfter);

var _themeProvider = require('./themeProvider');

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, atoms, molecules, components);
exports.withBeforeAfter = _withBeforeAfter2.default;
exports.ThemeProvider = _themeProvider2.default;
exports.theme = _theme2.default;