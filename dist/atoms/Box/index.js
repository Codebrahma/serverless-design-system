'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents2.default.div.withConfig({
  displayName: 'Box',
  componentId: 'sc-981m4z-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], _styledSystem.color, _styledSystem.display, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.maxWidth, _styledSystem.minHeight, _styledSystem.minWidth, _styledSystem.space, _styledSystem.width, _customStyleSystem.boxSizing);

Box.defaultProps = {
  boxSizing: 'border-box'
};

Box.displayName = 'Box';

exports.default = Box;