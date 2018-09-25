'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DefaultFieldContainer = require('./DefaultFieldContainer');

var _DefaultFieldContainer2 = _interopRequireDefault(_DefaultFieldContainer);

var _DefaultIcon = require('./DefaultIcon');

var _DefaultIcon2 = _interopRequireDefault(_DefaultIcon);

var _DefaultMenuContainer = require('./DefaultMenuContainer');

var _DefaultMenuContainer2 = _interopRequireDefault(_DefaultMenuContainer);

var _DefaultOption = require('./DefaultOption');

var _DefaultOption2 = _interopRequireDefault(_DefaultOption);

var _Relative = require('./../Relative');

var _Relative2 = _interopRequireDefault(_Relative);

var _Text = require('./../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PLACEHOLDER_STRING = 'Select';

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleMouseDown = function (event) {
      if (_this.props.onFocus && typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(_this.state.isOpen);
      }
      if (event.type === 'mousedown' && event.button !== 0) return;
      event.stopPropagation();
      event.preventDefault();

      if (!_this.props.disabled) {
        _this.setState({
          isOpen: !_this.state.isOpen
        });
      }
    };

    _this.handleDocumentClick = function (event) {
      if (_this.mounted) {
        if (!_reactDom2.default.findDOMNode(_this).contains(event.target)) {
          if (_this.state.isOpen) {
            _this.setState({ isOpen: false });
          }
        }
      }
    };

    _this.setValue = function (value, label) {
      var newState = {
        selected: { value: value, label: label },
        isOpen: false
      };
      _this.fireChangeEvent(newState);
      _this.setState(newState);
    };

    _this.fireChangeEvent = function (newState) {
      if (newState.selected !== _this.state.selected && _this.props.onChange) {
        _this.props.onChange(newState.selected);
      }
    };

    _this.state = {
      selected: props.value || {
        label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: ''
      },
      isOpen: false
    };
    _this.mounted = true;
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value && newProps.value !== this.state.selected) {
        this.setState({ selected: newProps.value });
      } else if (!newProps.value) {
        this.setState({ selected: {
            label: typeof newProps.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : newProps.placeholder,
            value: ''
          } });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isOpen = _state.isOpen,
          selected = _state.selected;
      var _props = this.props,
          Icon = _props.icon,
          containerProps = _props.containerProps,
          fieldContainerProps = _props.fieldContainerProps,
          placeholderProps = _props.placeholderProps,
          menuContainerProps = _props.menuContainerProps,
          options = _props.options,
          optionProps = _props.optionProps;


      var placeHolderValue = typeof selected === 'string' ? selected : selected.label;

      return _react2.default.createElement(
        _Relative2.default,
        containerProps,
        _react2.default.createElement(
          _DefaultFieldContainer2.default,
          _extends({
            onClick: this.handleMouseDown
          }, fieldContainerProps),
          _react2.default.createElement(
            _Text2.default.span,
            placeholderProps,
            placeHolderValue
          ),
          Icon && _react2.default.createElement(Icon, { isOpen: isOpen })
        ),
        _react2.default.createElement(
          _DefaultMenuContainer2.default,
          {
            isOpen: isOpen,
            styleProps: menuContainerProps
          },
          options.constructor.name === 'Array' && options.map(function (option, index) {
            return _react2.default.createElement(_DefaultOption2.default, _extends({}, option, {
              styleProps: optionProps,
              key: index,
              selected: selected,
              onSelect: _this2.setValue
            }));
          })
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

Dropdown.defaultProps = {
  options: [],
  icon: _DefaultIcon2.default,
  containerProps: {},
  fieldContainerProps: {},
  placeholderProps: {},
  menuContainerProps: {},
  optionProps: {}
};

exports.default = Dropdown;