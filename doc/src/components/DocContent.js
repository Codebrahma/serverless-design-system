import React from 'react';
import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../../src/theme';
import './style.css';

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
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

const NodeList = ({ node, scope }) => (
  <LiveProvider
    code={node.html.replace(/<([\/]*)codeblock>/g, '').trim()}
    scope={scope}
  >
    <StyledHeader>
      {node.frontmatter.title}
    </StyledHeader>
    <LiveWrapper>
      <StyledEditor />
      <ThemeProvider theme={theme}>
        <StyledPreview />
      </ThemeProvider>
    </LiveWrapper>
  </LiveProvider>
);

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
