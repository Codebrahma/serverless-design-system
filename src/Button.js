import styled from 'styled-components'
import theme from './theme'

const white = theme.colors.white;
const serverlessRed = theme.colors.serverlessRed;

const secondary = (props) =>{
  if(!props.secondary) return;
  return {
    background: 'transparent',
    border: `1px solid ${serverlessRed}`,
    color: `${serverlessRed}`,
    '&:hover': {
      //TODO fix the hover to base on the variable
      background: `rgba(253,87,80,0.10)`
    }
  }
}

const Button = styled.button`
  border: none;
  padding: 1em 3.500em;
  background-color: ${serverlessRed};
  color: ${white};
  font-family: serverless;
  font-size: 1.125em;
  letter-spacing: 0.047em;
  transition: background 0.5s ease;
  &:disabled {
    opacity: 0.2;
  }
  &:hover {
    background-color: ${props => props.disabled? 
      null : props.theme.colors.darkServerlessRed
    };
  }
  ${secondary}
`

Button.defaultProps = {
  theme: theme
}

Button.displayName = 'Button'

export default Button