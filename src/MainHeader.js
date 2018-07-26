import React,{Component} from 'react'
import styled from 'styled-components'
import Box from './Box'
import Button from './Button'
import Image from './Image'
import {media} from './utils.js'

const Logo = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 120px;
  ${media.md`
    max-width: 100%;
  `}
`

const NavItem = styled.li`
  display: block;
  color: '#fff';
  ${media.md`
    display: inline-block;
  `}
`

const Nav = styled.ul`
  display: block;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: ${(props)=>props.isActive ? 'block' : 'none'};
  height: ${(props)=>props.isActive ? '100%' : 'auto'};
  overflow: hidden;
  transition: all .4s;
  
  ${media.md`
    width: auto;
    display: block;
    height: auto;
  `}
  ,
  ${NavItem} {
    > a {
      display: inline-block;
      padding: 11px 0px;
      font-family: Serverless;
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      ${media.md`
        padding: 36px 10px;
      `}

      ${media.lg`
        padding: 36px 25px;
      `}
    }
  }
`

const NavMobileToggle = styled.button`
  background: transparent;
  border: 0px;
  display: inline-block;
  color: #fff;
  ${media.md`
    display:none;
  `}
`

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      isMainNavActive: false,
    }
    this.toggleProperty = this.toggleProperty.bind(this);
  }

  toggleProperty(property){
    this.setState(prevState => {
      return {
        [property]: !prevState[property]
      } 
    })
  }

  render(){
    const {logo,theme,children} = this.props;
    const {isMainNavActive} = this.state;
    
    return(
      <Box 
        py={['11px','11px','0px']} 
        bg='black'
      >
        <Box  
          width={['90%','95%']}
          maxWidth={['90%',1260]} 
          m='auto'
          display='flex'
          flexWrap='wrap'
          flexDirection='row'
          justifyContent='space-between'
        >
          <Logo>
            <Image src={logo} display='inline-block' maxWidth='100%'/>
          </Logo>
          <NavMobileToggle onClick={(e)=>{this.toggleProperty('isMainNavActive')}}>
            {isMainNavActive ? (
              <span>Close</span>
            ) : (
              <span>Open</span>
            )}
          </NavMobileToggle>
          <Nav isActive={isMainNavActive}>
            <NavItem>
              <a>platform</a>
            </NavItem>
            <NavItem>
              <a>developer</a>
            </NavItem>
            <NavItem>
              <a>learn</a>
            </NavItem>
            <NavItem>
              <a>resources</a>
            </NavItem>
            <NavItem>
              <a>enterprises</a>
            </NavItem>
            <NavItem>
              <Button>sign up</Button>
            </NavItem>
          </Nav>
        </Box>
      </Box>
    );
  }
}

const MainHeader = styled(Header)``

export default MainHeader;