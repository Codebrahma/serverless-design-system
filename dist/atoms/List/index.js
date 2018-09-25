'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _customStyleSystem = require('./../../customStyleSystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const List = _styledComponents2.default.ul`
  ${_styledSystem.space}
`;

const ListItem = _styledComponents2.default.li`
  ${_styledSystem.space}
  ${_styledSystem.display}
  ${_customStyleSystem.styleType}
`;

ListItem.noStyleType = (0, _styledComponents2.default)(ListItem)`
  list-style-type: none;
`;

exports.List = List;
exports.ListItem = ListItem;