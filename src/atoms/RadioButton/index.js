import styled from 'styled-components'

const RadioButton = styled.input.attrs({
  type: 'radio'
})`
  margin-right: 10px;
`

RadioButton.displayName = 'RadioButton'

RadioButton.defaultProps = {
  disabled: false,
  defaultChecked: false,
}

export default RadioButton
