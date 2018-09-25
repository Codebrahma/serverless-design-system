'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _customStyleSystem = require('./customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (comp) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
  var beforeBlockStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var afterBlockStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var selectorStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  return (0, _styledComponents2.default)(comp).withConfig({
    displayName: 'withBeforeAfter',
    componentId: 'sc-93zelm-0'
  })(['', '{&:before{', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '}&:after{', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '}', '}'], selector, _customStyleSystem.beforeBoxHeight, _customStyleSystem.beforeBoxWidth, beforeBlockStyle, _customStyleSystem.beforeBoxBorderWidth, _customStyleSystem.beforeBoxLeft, _customStyleSystem.beforeBoxBackgroundColor, _customStyleSystem.beforeBoxContent, _customStyleSystem.beforeBoxTop, _customStyleSystem.afterBoxHeight, _customStyleSystem.afterBoxWidth, afterBlockStyle, _customStyleSystem.afterBoxBorderWidth, _customStyleSystem.afterBoxLeft, _customStyleSystem.afterBoxBackgroundColor, _customStyleSystem.afterBoxContent, _customStyleSystem.afterBoxTop, selectorStyle);
};