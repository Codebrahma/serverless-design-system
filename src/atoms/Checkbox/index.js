import styled from 'styled-components'
import PropTypes from 'prop-types'

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 10px;
`

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

Checkbox.defaultProps = {
  disabled: false,
  defaultChecked: false,
}

export default Checkbox
