'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./../Box');

var _Box2 = _interopRequireDefault(_Box);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_Box2.default).withConfig({
  displayName: 'Flex',
  componentId: 'sc-5527kh-0'
})(['display:flex;', ' ', ' ', ' ', ' ', ''], _styledSystem.alignItems, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledSystem.justifyContent, _styledSystem.order);

Flex.spaceBetween = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__spaceBetween',
  componentId: 'sc-5527kh-1'
})(['justify-content:space-between;']);

Flex.horizontallyCenter = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__horizontallyCenter',
  componentId: 'sc-5527kh-2'
})(['justify-content:center;']);

Flex.verticallyCenter = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__verticallyCenter',
  componentId: 'sc-5527kh-3'
})(['align-items:center;']);

Flex.center = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__center',
  componentId: 'sc-5527kh-4'
})(['justify-content:center;align-items:center;']);

Flex.column = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__column',
  componentId: 'sc-5527kh-5'
})(['flex-direction:column;']);

Flex.row = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__row',
  componentId: 'sc-5527kh-6'
})(['flex-direction:row;']);

Flex.inline = (0, _styledComponents2.default)(Flex).withConfig({
  displayName: 'Flex__inline',
  componentId: 'sc-5527kh-7'
})(['display:inline-flex;']);

exports.default = Flex;