import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link'

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

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Sidebar = ({ list, onClickListItem, activeComponent }) => {
  return (
    <SidebarWrapper>
      <SidebarSubList>
        <SidebarHeader>Atoms</SidebarHeader>
        {
          list.atoms.map((name, index) => (
            <ALink
              to={`/?component=${name}`}
              key={index}
            >
              <SidebarItem
                onClick={() => { onClickListItem(name); }}
                active={activeComponent === name}
              >
                {capitalize(name)}
              </SidebarItem>
            </ALink>
          ))
        }
      </SidebarSubList>
      <SidebarSubList>
        <SidebarHeader>Molecules</SidebarHeader>
        {
          list.molecules.map((name, index) => (
            <ALink
              to={`/?component=${name}`}
              key={index}
            >
              <SidebarItem
                onClick={() => { onClickListItem(name); }}
                active={activeComponent === name}
              >
                {capitalize(name)}
              </SidebarItem>
            </ALink>
          ))
        }
      </SidebarSubList>
      <SidebarSubList>
        <SidebarHeader>Components</SidebarHeader>
        {
          list.components.map((name, index) => (
            <ALink
              to={`/?component=${name}`}
              key={index}
            >
              <SidebarItem
                key={index}
                onClick={() => { onClickListItem(name); }}
                active={activeComponent === name}
              >
                {capitalize(name)}
              </SidebarItem>
            </ALink>
          ))
        }
      </SidebarSubList>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  list: PropTypes.object,
  onClickListItem: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  list: { atoms: [], molecules: [], components: [] },
};

export default Sidebar;
