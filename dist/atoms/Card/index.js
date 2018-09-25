'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('./../Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (0, _styledComponents2.default)(_Box2.default).withConfig({
  displayName: 'Card',
  componentId: 'phpqrs-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], _styledSystem.border, _styledSystem.borderLeft, _styledSystem.borderRight, _styledSystem.borderTop, _styledSystem.borderBottom, _styledSystem.borderStyle, _styledSystem.borderWidth, _styledSystem.borderColor, _styledSystem.borderRadius, _styledSystem.boxShadow);

Card.displayName = 'Card';

exports.default = Card;