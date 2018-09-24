import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import logo from './../assets/images/logo.svg'

const SidebarWrapper = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #d2d2d2;
`;

const SidebarSubList = styled.div``;

const ALink = styled(Link)`
  text-decoration: none;
  color: #322500;
`;

const SidebarItem = styled.div`
  font-size: 14px;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  cursor: pointer;
  background: ${props => props.active ? '#e6f7ff' : '#fff'}; ;
  box-sizing: border-box;
  border-right: ${props => props.active ? '4px solid #1890ff' : null};
  color: ${props => props.active ? '#1890ff' : null};
`;

const SidebarHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  padding-left: 10px;
  background: #fff;
`;

const Logo = styled.img`
  margin: 10px;
  margin-top: 20px;
`

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const sort = (array) => (
  array.sort(function(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
  })
)

const Item = ({ name, type, active }) => (
  <ALink to={`/${type}/${name}`}>
    <SidebarItem active={active === name}>
      { capitalize(name) }
    </SidebarItem>
  </ALink>
)

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      list: {
        atoms: [],
        molecules: [],
        components: [],
      },
      active: props.path.split('/').pop(),
    }
  }

  componentDidMount() {
    const { edges = [] } = this.props.data || {}
    const list = edges.reduce((accumulator, edge) => {
      const { node: { frontmatter } } = edge;
      if (frontmatter.type === 'atom') {
        if (accumulator.atoms.indexOf(frontmatter.component) === -1) {
          accumulator.atoms.push(frontmatter.component);
        }
      }
      if (frontmatter.type === 'molecule') {
        if (accumulator.molecules.indexOf(frontmatter.component) === -1) {
          accumulator.molecules.push(frontmatter.component);
        }
      }
      if (frontmatter.type === 'component') {
        if (accumulator.components.indexOf(frontmatter.component) === -1) {
          accumulator.components.push(frontmatter.component);
        }
      }

      return accumulator;
    }, this.state.list);

    list.atoms.sort((a, b) => a > b);
    list.molecules.sort((a, b) => a > b);
    list.components.sort((a, b) => a > b);
    this.setState({ list });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.path === this.props.path) { return }
    this.setState({ active: nextProps.path.split('/').pop() })
  }

  render() {
    const { list, active } = this.state;

    return (
      <SidebarWrapper>
        <SidebarSubList>
          <ALink to="/">
            <Logo src={logo}  />
          </ALink>
          <SidebarHeader>Atoms</SidebarHeader>
          {
            sort(list.atoms).map((name, index) => (
              <Item
                key={index}
                name={name}
                active={active}
                type="atom"
              />
            ))
          }
        </SidebarSubList>
        <SidebarSubList>
          <SidebarHeader>Molecules</SidebarHeader>
          {
            sort(list.molecules).map((name, index) => (
              <Item
                key={index}
                name={name}
                active={active}
                type="molecule"
              />
            ))
          }
        </SidebarSubList>
        <SidebarSubList>
          <SidebarHeader>Components</SidebarHeader>
          {
            sort(list.components).map((name, index) => (
              <Item
                key={index}
                name={name}
                active={active}
                type="component"
              />
            ))
          }
        </SidebarSubList>
        <ALink to="/theme-provider">
          <SidebarHeader>Theme provider</SidebarHeader>
        </ALink>
      </SidebarWrapper>
    );
  }
}

Sidebar.defaultProps = {
  data: {},
  path: '',
};

export default Sidebar;

