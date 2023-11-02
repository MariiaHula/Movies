import NavBar from 'components/NavBar/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer, MainContainer } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>

      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default Layout;
