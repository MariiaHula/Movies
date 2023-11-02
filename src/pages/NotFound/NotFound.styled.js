import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Message = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
`;
