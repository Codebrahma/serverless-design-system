'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Flex = require('./../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ResponsiveStack = (0, _styledComponents2.default)(_Flex2.default)`
  ${_styledSystem.flexDirection}
`;

ResponsiveStack.spaceBetween = (0, _styledComponents2.default)(ResponsiveStack)`
  justify-content: space-between;
`;

ResponsiveStack.horizontallyCenter = (0, _styledComponents2.default)(ResponsiveStack)`
  justify-content: center;
`;

ResponsiveStack.verticallyCenter = (0, _styledComponents2.default)(ResponsiveStack)`
  align-items: center;
`;

ResponsiveStack.center = (0, _styledComponents2.default)(ResponsiveStack)`
  justify-content: center;
  align-items: center;
`;

ResponsiveStack.propTypes = {
  flexDirection: _propTypes2.default.array
};

ResponsiveStack.defaultProps = {
  flexDirection: ['column', 'column', 'row']
};

exports.default = ResponsiveStack;