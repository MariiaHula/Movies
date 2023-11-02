import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const MovieInfo = styled.div`
  padding: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
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

export const GenresTitle = styled.h2`
  margin: 20px 0;
`;
export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 30px;
`;

export const GenreItem = styled.li`
  margin: 5px 0;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
  padding: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const AdditionalInfoItem = styled(Link)`
  display: block;
  margin: 10px 0;
  font-size: 18px;
  text-decoration: none;
  color: #0077cc;
  font-weight: 600;

  &.hower {
    color: #0055aa;
  }
`;
