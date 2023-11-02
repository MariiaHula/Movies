import NavBar from 'components/NavBar/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
