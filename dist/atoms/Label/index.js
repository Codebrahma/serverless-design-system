'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.label`
  ${_styledSystem.fontFamily}
  ${_styledSystem.fontSize}
  ${_styledSystem.fontStyle}
  ${_styledSystem.fontWeight}
  ${_styledSystem.color}
  ${_styledSystem.lineHeight}
  ${_styledSystem.letterSpacing}
`;