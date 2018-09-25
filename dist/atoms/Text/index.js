'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fontStyle = props => ({
  fontStyle: props.fontStyle || null
});

const Text = _styledComponents2.default.div`
  ${_styledSystem.color}
  ${_styledSystem.fontFamily}
  ${_styledSystem.fontSize}
  ${fontStyle}
  ${_styledSystem.fontWeight}
  ${_styledSystem.letterSpacing}
  ${_styledSystem.lineHeight}
  ${_styledSystem.space}
  ${_customStyleSystem.align}
  ${_styledSystem.opacity}
`;

Text.displayName = 'Text';

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');

exports.default = Text;