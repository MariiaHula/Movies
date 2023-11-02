import { fetchTrending } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hook/useHttp';
import React from 'react';

const Home = () => {
  const { data: movies, loading } = useHttp(fetchTrending);

  return (
    <div>
      <h1>Trending Today</h1>
      {loading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
