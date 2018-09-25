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

const Flex = (0, _styledComponents2.default)(_Box2.default)`
  display: flex;

  ${_styledSystem.alignItems}
  ${_styledSystem.flexDirection}
  ${_styledSystem.flexWrap}
  ${_styledSystem.justifyContent}
  ${_styledSystem.order}
`;

Flex.spaceBetween = (0, _styledComponents2.default)(Flex)`
  justify-content: space-between;
`;

Flex.horizontallyCenter = (0, _styledComponents2.default)(Flex)`
  justify-content: center;
`;

Flex.verticallyCenter = (0, _styledComponents2.default)(Flex)`
  align-items: center;
`;

Flex.center = (0, _styledComponents2.default)(Flex)`
  justify-content: center;
  align-items: center;
`;

Flex.column = (0, _styledComponents2.default)(Flex)`
  flex-direction: column;
`;

Flex.row = (0, _styledComponents2.default)(Flex)`
  flex-direction: row;
`;

Flex.inline = (0, _styledComponents2.default)(Flex)`
  display: inline-flex;
`;

exports.default = Flex;