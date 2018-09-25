'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioButton = _styledComponents2.default.input.attrs({
  type: 'radio'
})`
  margin-right: 10px;
`;

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  disabled: false,
  defaultChecked: false
};

exports.default = RadioButton;