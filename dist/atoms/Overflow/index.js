'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _customStyleSystem = require('./../../customStyleSystem');

var _Box = require('./../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Overflow = (0, _styledComponents2.default)(_Box2.default)`
  ${_customStyleSystem.overflow}
  ${_customStyleSystem.overflowX}
  ${_customStyleSystem.overflowY}
`;

Overflow.displayName = 'Overflow';

exports.default = Overflow;