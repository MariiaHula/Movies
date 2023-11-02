import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MovieItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 250px;
`;
export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  display: block;
  margin-top: 10px;
  &:hover {
    color: #0077cc;
  }
`;
export const SorryImage = styled.img`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;
