import React from 'react'
import ReactDOM from 'react-dom'

import DefaultFieldContainer from './DefaultFieldContainer'
import TogglableArrowIcon from './DefaultIcon'
import DefaultMenuContainer from './DefaultMenuContainer'
import DefaultOption from './DefaultOption'

import Box from './../Box';

const DEFAULT_PLACEHOLDER_STRING = 'Select'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: props.value || {
        label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: ''
      },
      isOpen: false
    }
    this.mounted = true
  }

  componentWillReceiveProps (newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({selected: newProps.value})
    } else if (!newProps.value) {
      this.setState({selected: {
        label: typeof newProps.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : newProps.placeholder,
        value: ''
      }})
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleMouseDown = (event) => {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen)
    }
    if (event.type === 'mousedown' && event.button !== 0) return
    event.stopPropagation()
    event.preventDefault()

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  handleDocumentClick = (event) => {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false })
        }
      }
    }
  }

  setValue = (value, label) => {
    let newState = {
      selected: { value, label },
      isOpen: false
    }
    this.fireChangeEvent(newState)
    this.setState(newState)
  }

  fireChangeEvent = (newState) => {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected)
    }
  }

  render() {
    const { isOpen, selected } = this.state;
    const {
      container: MainContainer,
      fieldContainer: FieldContainer,
      placeholderContainer: PlaceholderContainer,
      icon: Icon,
      menuContainer: MenuContainer,
      option: Option
    } = this.props;
    const placeHolderValue = typeof selected === 'string' ? selected : selected.label;

    return (
      <MainContainer>
        <FieldContainer onClick={this.handleMouseDown}>
          <PlaceholderContainer>
            { placeHolderValue }
          </PlaceholderContainer>
          <Icon isOpen={isOpen} />
        </FieldContainer>
        <MenuContainer isOpen={isOpen}>
          {
            this.props.options.map((option, index) => (
              <Option
                {...option}
                key={index}
                selected={selected}
                onSelect={this.setValue}
              />
            ))
          }
        </MenuContainer>
      </MainContainer>
    )
  }
}

Dropdown.defaultProps = {
  options: [],
  container: Box.relative,
  fieldContainer: DefaultFieldContainer,
  placeholderContainer: Box.relative,
  icon: TogglableArrowIcon,
  menuContainer: DefaultMenuContainer,
  option: DefaultOption,
}

export default Dropdown
