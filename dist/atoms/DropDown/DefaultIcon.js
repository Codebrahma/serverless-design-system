'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = _styledComponents2.default.span`
  display: inline;
  border-color: ${({ isOpen }) => isOpen ? 'transparent transparent #999' : '#999 transparent transparent'};
  border-style: solid;
  border-width: ${({ isOpen }) => isOpen ? '0 5px 5px' : '5px 5px 0'};
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 24px;
  width: 0;
`;

Icon.defaultProps = { isOpen: false };

exports.default = Icon;