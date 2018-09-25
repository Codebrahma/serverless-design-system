'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HorizontalRule = _styledComponents2.default.div`
  border-top-style: ${({ type }) => type}
  display: block;
  height: 1px;

  ${_styledSystem.width}
  ${_customStyleSystem.horizontalRuleColor}
  ${_customStyleSystem.horizontalRuleHeight}
`;

HorizontalRule.defaultProps = {
  type: 'solid'
};

exports.default = HorizontalRule;