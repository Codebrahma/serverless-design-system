import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 20%;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #F0FFFF;
`;

const SidebarSubList = styled.div`
  
`;

const SidebarItem = styled.div`
  font-size: 16px;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  
  background-color: ${props => props.active ? '#d2d2d2' : null};
`;

const SidebarHeader = styled.h1`
  font-weight: bold;
  font-size: 1.3rem;
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
            <SidebarItem
              key={index}
              onClick={() => { onClickListItem(name); }}
              active={activeComponent === name}
            >
              {capitalize(name)}
            </SidebarItem>
          ))
        }
      </SidebarSubList>
      <SidebarSubList>
        <SidebarHeader>Molecules</SidebarHeader>
        {
          list.molecules.map((name, index) => (
            <SidebarItem
              key={index}
              onClick={() => { onClickListItem(name); }}
              active={activeComponent === name}
            >
              {capitalize(name)}
            </SidebarItem>
          ))
        }
      </SidebarSubList>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  list: PropTypes.object.isRequired,
  onClickListItem: PropTypes.func.isRequired,
};

export default Sidebar;
