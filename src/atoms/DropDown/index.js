import React from 'react'
import ReactDOM from 'react-dom'

import DefaultContainer from './DefaultContainer'
import DefaultFieldContainer from './DefaultFieldContainer'
import DefaultPlaceholder from './DefaultPlaceholder'
import DefaultIcon from './DefaultIcon'
import DefaultMenuContainer from './DefaultMenuContainer'
import DefaultOption from './DefaultOption'

const DEFAULT_PLACEHOLDER_STRING = 'Select...'

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
      selected: {
        value,
        label
      },
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
    const placeHolderValue = typeof selected === 'string' ? selected : selected.label;

    return (
      <DefaultContainer>
        <DefaultFieldContainer onClick={this.handleMouseDown}>
          <DefaultPlaceholder>
            { placeHolderValue }
          </DefaultPlaceholder>
          <DefaultIcon isOpen={isOpen} />
        </DefaultFieldContainer>
        <DefaultMenuContainer isOpen={isOpen}>
          {
            this.props.options.map((option, index) => (
              <DefaultOption
                {...option}
                key={index}
                selected={selected}
                onSelect={this.setValue}
              />
            ))
          }
        </DefaultMenuContainer>
      </DefaultContainer>
    )
  }
}

Dropdown.defaultProps = {
  options: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
  ]
}

export default Dropdown
