import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hook/useHttp';

const Home = () => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getTrendingMovies = async () => {
  //     try {
  //       setLoading(true);
  //       const { results } = await fetchTrending();
  //       if (results.length > 0) {
  //         setMovies(results);
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getTrendingMovies();
  // }, [error]);

  const [movies, setMovies, loading, error] = useHttp(fetchTrending);

  return (
    <div>
      <h1>Trending Today</h1>
      {loading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
