import styled from 'styled-components'
import PropTypes from 'prop-types'

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 10px;
`

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  disabled: false,
  defaultChecked: false,
}

export default Checkbox
