import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleWrapper = styled.nav`
  margin-left: 40px;
  display: flex;
  gap: 40px;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 26px;
  text-decoration: none;
  color: black;

  &.active {
    color: blue;
  }
`;
