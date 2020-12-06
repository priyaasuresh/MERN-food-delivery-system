import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Appetizers</SidebarLink>
        <SidebarLink to='/'>Dish Of the Day</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/s'>SIGN UP</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;