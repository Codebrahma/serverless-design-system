'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EachImage = function EachImage(_ref) {
  var logo = _ref.src,
      altText = _ref.altText,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      containerProps = _ref.containerProps,
      objectFit = _ref.objectFit;
  return _react2.default.createElement(
    _atoms.InlineBlock,
    { my: 2 },
    _react2.default.createElement(
      _atoms.Flex.horizontallyCenter,
      containerProps,
      _react2.default.createElement(_atoms.Image, {
        src: logo,
        alt: altText,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        objectFit: objectFit
      })
    )
  );
};

var ImageList = function ImageList(_ref2) {
  var list = _ref2.list,
      props = _objectWithoutProperties(_ref2, ['list']);

  return _react2.default.createElement(
    _atoms.ResponsiveStack.verticallyCenter,
    {
      justifyContent: 'space-between',
      width: 1
    },
    list.map(function (_ref3) {
      var src = _ref3.src,
          altText = _ref3.altText;
      return _react2.default.createElement(EachImage, _extends({
        key: src,
        src: src,
        altText: altText
      }, props));
    })
  );
};

exports.default = ImageList;