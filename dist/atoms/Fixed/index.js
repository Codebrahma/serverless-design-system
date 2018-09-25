'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(_Box2.default)`
  position: fixed;

  ${_styledSystem.top}
  ${_styledSystem.left}
  ${_styledSystem.right}
  ${_styledSystem.bottom}
  ${_styledSystem.zIndex}
`;