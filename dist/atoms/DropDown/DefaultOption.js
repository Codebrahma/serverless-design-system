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

var _Relative = require('../Relative');

var _Relative2 = _interopRequireDefault(_Relative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OptionContainer = (0, _styledComponents2.default)(_Relative2.default)`
  background: ${({ isSelected }) => isSelected ? '#f2f9fc' : null};
  color: ${({ isSelected }) => isSelected ? '#333' : null};
  cursor: pointer;
  ${_styledSystem.background}

  &:hover {
    background-color: rgba(39, 39, 39, .1);
  }
`;

OptionContainer.defaultProps = {
  color: 'rgba(51, 51, 51, 0.8)',
  px: 1,
  py: '14.5px'
};

class Option extends _react2.default.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    const { label, value, selected } = props;

    this.state = {
      value: typeof value === 'undefined' ? label : value,
      label: typeof label === 'undefined' ? value : label,
      isSelected: (value || label) === selected
    };
  }

  render() {
    const { label, isSelected, value } = this.state;

    return _react2.default.createElement(
      OptionContainer,
      _extends({
        key: value,
        onMouseDown: this.onSelect,
        onClick: this.onSelect,
        isSelected: isSelected
      }, this.props.styleProps),
      label
    );
  }
}
exports.default = Option;

var _initialiseProps = function () {
  this.onSelect = () => {
    const { label, value } = this.state;
    this.props.onSelect(value, label);
  };
};