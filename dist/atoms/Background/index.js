'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Background = _styledComponents2.default.div`
  ${_styledSystem.height}
  ${_styledSystem.width}
  ${_styledSystem.background}
  ${_styledSystem.backgroundImage}
  ${_styledSystem.backgroundRepeat}
  ${_styledSystem.backgroundSize}
  ${_styledSystem.backgroundPosition}
  ${_styledSystem.minHeight}
  ${_styledSystem.minWidth}
  ${_styledSystem.maxHeight}
  ${_styledSystem.maxWidth}
`;

Background.displayName = 'Background';

exports.default = Background;