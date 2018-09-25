'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('./../Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SecondaryButton = (0, _styledComponents2.default)(_Button2.default)`
  background: ${({ background }) => background || 'transparent'};
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth};
  border-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  &:hover {
    background: ${props => props.disabled ? null : (0, _utils.hexToRgbA)(props.theme.colors.primaryColor, '0.1')};
  };
`;

SecondaryButton.defaultProps = {
  borderWidth: '1px'
};

exports.default = SecondaryButton;