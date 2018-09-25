'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Relative = require('../Relative');

var _Relative2 = _interopRequireDefault(_Relative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionContainer = (0, _styledComponents2.default)(_Relative2.default).withConfig({
  displayName: 'DefaultOption__OptionContainer',
  componentId: 'eg2bng-0'
})(['background:', ';color:', ';cursor:pointer;', ' &:hover{background-color:rgba(39,39,39,.1);}'], function (_ref) {
  var isSelected = _ref.isSelected;
  return isSelected ? '#f2f9fc' : null;
}, function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected ? '#333' : null;
}, _styledSystem.background);

OptionContainer.defaultProps = {
  color: 'rgba(51, 51, 51, 0.8)',
  px: 1,
  py: '14.5px'
};

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _initialiseProps.call(_this);

    var label = props.label,
        value = props.value,
        selected = props.selected;


    _this.state = {
      value: typeof value === 'undefined' ? label : value,
      label: typeof label === 'undefined' ? value : label,
      isSelected: (value || label) === selected
    };
    return _this;
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          label = _state.label,
          isSelected = _state.isSelected,
          value = _state.value;


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
  }]);

  return Option;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelect = function () {
    var _state2 = _this2.state,
        label = _state2.label,
        value = _state2.value;

    _this2.props.onSelect(value, label);
  };
};

exports.default = Option;