import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as components from '../../../src';

import DocContent from '../components/DocContent';
import Sidebar from './Sidebar';

const scope = {
  ...components,
};

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 80%;
  min-width: 400px;
  padding-left: 10%;
  padding-right: 15%;
  overflow-y: scroll;
  overflow-x: scroll;
  font-size: 1.2rem;
`;

class Documentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: 'button',
      nodes: [],
      sidebarList: { atoms: [], molecules: [] },
    };
  }

  componentDidMount() {
    const docEdges = this.props.data.allMarkdownRemark.edges;
    const {
      activeComponent,
    } = this.state;
    const nodes = docEdges.filter(edge => edge.node.frontmatter.component === activeComponent);
    const sidebarList = docEdges.reduce((accumulator, edge) => {
      const {
        node: {
          frontmatter,
        },
      } = edge;
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

      return accumulator;
    }, {
      atoms: [],
      molecules: [],
    });

    this.setState({
      nodes,
      sidebarList,
    });
  }

  onClickListItem = (activeComponent) => {
    const docEdges = this.props.data.allMarkdownRemark.edges;
    const nodes = docEdges.filter(edge => edge.node.frontmatter.component === activeComponent);

    this.setState({
      nodes,
      activeComponent,
    });
  }
  render() {
    const {
      nodes,
      sidebarList,
      activeComponent,
    } = this.state;

    return (
      <Wrapper>
        <Sidebar
          list={sidebarList}
          onClickListItem={this.onClickListItem}
          activeComponent={activeComponent}
        />
        <Content>
          <DocContent nodes={nodes} scope={scope} />
        </Content>
      </Wrapper>
    );
  }
}

Documentation.propTypes = {
  data: PropTypes.object,
};

Documentation.defaultProps = { 
  data: '',
};

export default Documentation;

export const query = graphql`
  query DocsQuery {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            path
            date
            title
            type
            component
          }
        }
      }
    }
  }
`;