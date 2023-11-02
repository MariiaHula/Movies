import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
