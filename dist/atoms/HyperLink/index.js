'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HyperLink = _styledComponents2.default.a`
  ${_customStyleSystem.textDecoration}
  ${_styledSystem.borderBottom}
  ${_styledSystem.borderColor}
  ${_styledSystem.color}

  &:hover {
    ${({ hoverColor }) => ({ color: hoverColor })}
  }

  &:active {
    ${({ activeColor }) => ({ color: activeColor })}
  }
`;

HyperLink.defaultProps = {
  color: 'gray.3'
};

exports.default = HyperLink;