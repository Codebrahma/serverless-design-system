import React from 'react';
import {
  LiveEditor,
  LivePreview,
  LiveProvider,
} from 'react-live';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../../src/theme';

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`;

const StyledEditor = styled(LiveEditor)`
  overflow: scroll;
  width: 100%;
`;

const StyledPreview = styled(LivePreview)`
  margin-top:10px;
  width: 100%;
`;

const StyledHeader = styled.h3`
  font-style: italic;
`;

const NodeList = ({ node, scope }) => (
  <LiveProvider
    code={node.html}
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
    <div>
      {
        sortedNodes.map((item, index) => {
          return (item.node.frontmatter.path.split('/')[2]) === 'props' ? (
            <div key={index} dangerouslySetInnerHTML={{ __html: item.node.html }} />
          ) : (
            <NodeList key={index} node={item.node} scope={scope} />
          );
        })
      }
    </div>
  );
};

export default DocContent;
