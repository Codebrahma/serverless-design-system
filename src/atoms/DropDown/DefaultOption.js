import React from 'react'
import styled from 'styled-components'

import Box from './../Box'

const StyledOptionContainer = styled(Box.relative)`
  background-color: ${({ isSelected }) => isSelected ? '#f2f9fc' : null };
  color: ${({ isSelected }) => isSelected ? '#333' : null };

  &:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`

StyledOptionContainer.propTypes = {
  color: 'rgba(51, 51, 51, 0.8)',
  cursor: 'pointer',
  px: '8px',
  py: 1,
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
      <StyledOptionContainer
        key={value}
        onMouseDown={this.onSelect}
        onClick={this.onSelect}
        isSelected={isSelected}
      >
        { label }
      </StyledOptionContainer>
    )
  }
}
