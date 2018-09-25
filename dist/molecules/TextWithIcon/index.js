'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const TextWithIcon = _styledComponents2.default.span`
  ${_styledSystem.textAlign}
  position: relative;
  > h1, h2, h3, h4, h5, h6, span, p, div {
    position: relative;
    z-index: 1;

    &:before {
      z-index: -1;
      content: ' ';
      background-image: url(${props => props.iconSrc});
      ${_styledSystem.top}
      ${_styledSystem.left}
      ${_styledSystem.height}
      ${_styledSystem.width}
      ${_styledSystem.position}
      ${_styledSystem.backgroundSize}
      ${_styledSystem.backgroundPosition}
      ${_styledSystem.backgroundRepeat}
    }
  }
`;

TextWithIcon.displayName = 'TextWithIcon';

TextWithIcon.defaultProps = {
  position: 'absolute',
  backgroundSize: 'cover'
};

exports.default = (_ref) => {
  let { iconTop, iconLeft, iconHeight, iconWidth } = _ref,
      otherProps = _objectWithoutProperties(_ref, ['iconTop', 'iconLeft', 'iconHeight', 'iconWidth']);

  return _react2.default.createElement(TextWithIcon, _extends({
    top: iconTop,
    left: iconLeft,
    height: iconHeight,
    width: iconWidth
  }, otherProps));
};