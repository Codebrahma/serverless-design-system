import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Header from '../components/Header';
import config from '../../config/site';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.gridColumns}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
  margin: -6rem auto 6rem auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0 ${props => props.theme.contentPadding} 1.45rem;
  position: relative;
`;

const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <div>
    Gatsby Bootstrapped
  </div>
);

export default Index;
