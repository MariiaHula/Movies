import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleWrapper = styled.nav`
  display: flex;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }
`;
