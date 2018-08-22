import React from 'react'
import styled from 'styled-components'

import Relative from './../Relative'

const OptionContainer = styled(Relative)`
  background-color: ${({ isSelected }) => isSelected ? '#f2f9fc' : null };
  color: ${({ isSelected }) => isSelected ? '#333' : null };
  cursor: pointer;

  &:hover {
    background-color: rgba(39, 39, 39, .1);
  }
`

OptionContainer.defaultProps = {
  color: 'rgba(51, 51, 51, 0.8)',
  px: 1,
  py: '14.5px',
}

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    const { label, value, selected } = props

    this.state = {
      value: typeof value === 'undefined' ? label : value,
      label: typeof label === 'undefined' ? value : label,
      isSelected: ((value || label) === selected),
    }
  }

  onSelect = () => (
    this.props.onSelect(this.state.value, this.state.label)
  )

  render() {
    const { label, isSelected, value } = this.state;

    return (
      <OptionContainer
        key={value}
        onMouseDown={this.onSelect}
        onClick={this.onSelect}
        isSelected={isSelected}
        {...this.props.styleProps}
      >
        { label }
      </OptionContainer>
    )
  }
}
