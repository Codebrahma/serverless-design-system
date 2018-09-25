'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _atoms = require('../../atoms');

var _molecules = require('../../molecules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UseCase = function UseCase(_ref) {
  var title = _ref.title,
      description = _ref.description,
      imgSrc = _ref.imgSrc,
      imageFirst = _ref.imageFirst;

  var descSectionPadding = _defineProperty({}, imageFirst ? 'pl' : 'pr', [0, 0, '50px', '230px']);

  return _react2.default.createElement(
    _atoms.ResponsiveStack,
    { py: [2, 2, 4] },
    _react2.default.createElement(
      _atoms.Flex.horizontallyCenter,
      _extends({
        flexDirection: 'column',
        width: [1, 1, 5 / 10],
        mb: 2,
        order: imageFirst ? [2, 2, 2] : [2, 2, 1]
      }, descSectionPadding),
      _react2.default.createElement(
        _atoms.Heading.h3,
        { fontFamily: 'SoleilBk' },
        title
      ),
      _react2.default.createElement(
        _molecules.P,
        null,
        description
      )
    ),
    _react2.default.createElement(
      _atoms.Flex.horizontallyCenter,
      {
        width: [1, 1, 5 / 10],
        mb: 2,
        order: imageFirst ? [1, 1, 1] : [1, 1, 2]
      },
      _react2.default.createElement(
        _atoms.Flex.center,
        { width: 1 },
        _react2.default.createElement(_atoms.Image, {
          src: imgSrc,
          alt: title,
          maxWidth: ['100%', '60%', '80%', '100%']
        })
      )
    )
  );
};

UseCase.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string.isRequired,
  imageFirst: _propTypes2.default.bool.isRequired
};

exports.default = UseCase;