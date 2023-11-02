import { fetchTrending } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hook/useHttp';
import React from 'react';
import { Container, Title } from './Home.styled';

const Home = () => {
  const { data: movies, loading } = useHttp(fetchTrending);

  return (
    <Container>
      <Title>Trending Today</Title>
      {loading && <Loader />}
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;
