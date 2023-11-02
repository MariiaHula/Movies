import React from 'react';

import { StyleWrapper, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <StyleWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </StyleWrapper>
  );
};

export default NavBar;
