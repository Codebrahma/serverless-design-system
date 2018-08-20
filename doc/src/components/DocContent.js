import React from 'react';
import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../../src/theme';
import './style.css';

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
  position: relative;
`;

const CopyToClipboardLink = styled.button`
  font-size: 12px;
  padding: 10px;
  position: absolute;
  color: white;
  cursor: pointer;
  right: 0;
  border: 0;
  background: rgb(255, 255, 255, 0.2);
  min-width: 50px;
  text-align: center;
  &:after {
    content: 'copy';
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: rgb(255, 255, 255, 0.8);

    &:after {
      content: '✔ done';
    }
  }
`;

const StyledEditor = styled(LiveEditor)`
  overflow: scroll;
  width: 100%;
`;

const StyledPreview = styled(LivePreview)`
  padding: 20px 0;
  width: 100%;
`;

const StyledHeader = styled.h3`
`;

class NodeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null }
  }

  render() {
    const { node: { html, frontmatter }, scope } = this.props;
    const formattedCode = html.replace(/<([\/]*)codeblock>/g, '').trim();
    const clipboardValue = this.state.value || formattedCode;

    return (
      <LiveProvider
        code={formattedCode}
        scope={this.props.scope}
      >
        <StyledHeader>
          {frontmatter.title}
        </StyledHeader>
        <LiveWrapper>
          <CopyToClipboard text={clipboardValue}>
            <CopyToClipboardLink />
          </CopyToClipboard>
          <StyledEditor onChange={(value) => this.setState({ value })} />
          <ThemeProvider theme={theme}>
            <StyledPreview />
          </ThemeProvider>
        </LiveWrapper>
      </LiveProvider>
    );
  }
}

const DocContent = ({ nodes, scope }) => {
  if (nodes.length === 0) return null;
  const sortedNodes = nodes.sort((a, b) => a.node.frontmatter.path > b.node.frontmatter.path);
  return (
    <div style={{ fontSize: '16px' }}>
      {
        sortedNodes.map((item, index) => {
          return (item.node.frontmatter.path.split('/')[2]) === 'props' ? (
            <div key={index}>
              <h3>Props for {item.node.frontmatter.title}</h3>
              <div key={index} dangerouslySetInnerHTML={{ __html: item.node.html }} />
            </div>
          ) : (
            <NodeList key={index} node={item.node} scope={scope} />
          );
        })
      }
    </div>
  );
};

export default DocContent;
