import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const MovieInfo1 = styled.div`
  margin-top: 20px;
`;

export const MoviePoster = styled.img`
  max-width: 200px;
  height: 100%;
  margin-right: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
`;

export const MovieOverview = styled.p`
  margin-top: 10px;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const GenreItem = styled.li`
  margin: 5px 0;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

export const AdditionalInfoItem = styled(Link)`
  display: block;
  margin: 5px 0;
  font-size: 18px;
`;
