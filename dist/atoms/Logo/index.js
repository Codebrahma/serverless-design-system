'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = _styledComponents2.default.img.withConfig({
  displayName: 'Logo',
  componentId: 'kv0fwj-0'
})(['cursor:pointer;', ' ', ''], _styledSystem.height, _styledSystem.width);

Logo.displayName = 'Logo';

exports.default = Logo;