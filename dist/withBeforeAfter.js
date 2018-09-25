'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _customStyleSystem = require('./customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (comp, selector = `&`, beforeBlockStyle = ``, afterBlockStyle = ``, selectorStyle = ``) => (0, _styledComponents2.default)(comp)`
    ${selector} {
      &:before {
        ${_customStyleSystem.beforeBoxHeight}
        ${_customStyleSystem.beforeBoxWidth}
        ${beforeBlockStyle}
        ${_customStyleSystem.beforeBoxBorderWidth}
        ${_customStyleSystem.beforeBoxLeft}
        ${_customStyleSystem.beforeBoxBackgroundColor}
        ${_customStyleSystem.beforeBoxContent}
        ${_customStyleSystem.beforeBoxTop}
      }

      &:after {
        ${_customStyleSystem.afterBoxHeight}
        ${_customStyleSystem.afterBoxWidth}
        ${afterBlockStyle}
        ${_customStyleSystem.afterBoxBorderWidth}
        ${_customStyleSystem.afterBoxLeft}
        ${_customStyleSystem.afterBoxBackgroundColor}
        ${_customStyleSystem.afterBoxContent}
        ${_customStyleSystem.afterBoxTop}
      }

      ${selectorStyle}
    }
  `;