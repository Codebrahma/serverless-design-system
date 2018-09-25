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

var List = _styledComponents2.default.ul.withConfig({
  displayName: 'List',
  componentId: 'f4z44x-0'
})(['', ''], _styledSystem.space);

var ListItem = _styledComponents2.default.li.withConfig({
  displayName: 'List__ListItem',
  componentId: 'f4z44x-1'
})(['', ' ', ' ', ''], _styledSystem.space, _styledSystem.display, _customStyleSystem.styleType);

ListItem.noStyleType = (0, _styledComponents2.default)(ListItem).withConfig({
  displayName: 'List__noStyleType',
  componentId: 'f4z44x-2'
})(['list-style-type:none;']);

exports.List = List;
exports.ListItem = ListItem;