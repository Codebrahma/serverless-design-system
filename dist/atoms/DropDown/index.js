'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

const DEFAULT_PLACEHOLDER_STRING = 'Select';

class Dropdown extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = event => {
      if (this.props.onFocus && typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.isOpen);
      }
      if (event.type === 'mousedown' && event.button !== 0) return;
      event.stopPropagation();
      event.preventDefault();

      if (!this.props.disabled) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    };

    this.handleDocumentClick = event => {
      if (this.mounted) {
        if (!_reactDom2.default.findDOMNode(this).contains(event.target)) {
          if (this.state.isOpen) {
            this.setState({ isOpen: false });
          }
        }
      }
    };

    this.setValue = (value, label) => {
      let newState = {
        selected: { value, label },
        isOpen: false
      };
      this.fireChangeEvent(newState);
      this.setState(newState);
    };

    this.fireChangeEvent = newState => {
      if (newState.selected !== this.state.selected && this.props.onChange) {
        this.props.onChange(newState.selected);
      }
    };

    this.state = {
      selected: props.value || {
        label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: ''
      },
      isOpen: false
    };
    this.mounted = true;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({ selected: newProps.value });
    } else if (!newProps.value) {
      this.setState({ selected: {
          label: typeof newProps.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : newProps.placeholder,
          value: ''
        } });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  render() {
    const { isOpen, selected } = this.state;
    const {
      icon: Icon,
      containerProps,
      fieldContainerProps,
      placeholderProps,
      menuContainerProps,
      options,
      optionProps
    } = this.props;

    const placeHolderValue = typeof selected === 'string' ? selected : selected.label;

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
        options.constructor.name === 'Array' && options.map((option, index) => _react2.default.createElement(_DefaultOption2.default, _extends({}, option, {
          styleProps: optionProps,
          key: index,
          selected: selected,
          onSelect: this.setValue
        })))
      )
    );
  }
}

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