'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comp = function comp(_ref) {
  var img = _ref.img,
      children = _ref.children,
      name = _ref.name,
      designation = _ref.designation,
      alt = _ref.alt;

  var testimonial = children;
  return _react2.default.createElement(
    _atoms.Background,
    { background: 'white' },
    _react2.default.createElement(
      _atoms.Card,
      {
        px: [2, 3, 4],
        py: 5,
        border: 3,
        borderColor: 'primaryColor'
      },
      _react2.default.createElement(
        _atoms.Flex,
        {
          flexWrap: 'wrap',
          flexDirection: ['column', 'row'],
          justifyContent: ['', 'space-between']
        },
        _react2.default.createElement(
          _atoms.Text,
          {
            fontFamily: 'SoleilBk',
            fontSize: 4,
            fontStyle: 'italic',
            lineHeight: 3,
            mb: 3,
            width: 1
          },
          testimonial
        ),
        _react2.default.createElement(
          _atoms.ResponsiveStack,
          { width: 1 },
          _react2.default.createElement(
            _atoms.Flex,
            {
              width: [1, 1, 4 / 10],
              order: ['0', '0', '1'],
              alignItems: 'flex-end',
              justifyContent: ['flex-start', 'flex-start', 'flex-end']
            },
            _react2.default.createElement(_atoms.Image, {
              mt: 3,
              width: [82, 128],
              height: [27, 42],
              src: img,
              alt: alt
            })
          ),
          _react2.default.createElement(
            _atoms.Flex,
            {
              flexDirection: 'column',
              mt: 3,
              width: [1, 1, 6 / 10],
              order: ['1', '1', '0']
            },
            _react2.default.createElement(
              _atoms.Text,
              {
                fontFamily: 'SoleilBk',
                fontSize: 3,
                letterSpacing: 'smallNegative'
              },
              name
            ),
            _react2.default.createElement(
              _atoms.Text,
              {
                fontFamily: 'Soleil',
                fontSize: 0,
                lineHeight: 3,
                color: 'gray.2'
              },
              designation
            )
          )
        )
      )
    )
  );
};

comp.propTypes = {
  img: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  designation: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

var Testimonial = (0, _styledComponents2.default)(comp).withConfig({
  displayName: 'Testimonial',
  componentId: 'bgqztt-0'
})(['']);

exports.default = Testimonial;