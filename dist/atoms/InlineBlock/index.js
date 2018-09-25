'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineBlock = (0, _styledComponents2.default)(_Box2.default).withConfig({
  displayName: 'InlineBlock',
  componentId: 'laufxp-0'
})(['display:inline-block;']);

exports.default = InlineBlock;