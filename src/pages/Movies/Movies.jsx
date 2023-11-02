import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../servises/AxiosAPI';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const getSearchMoviesByQuery = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies(searchName);

        if (results.length > 0) {
          setSearchMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getSearchMoviesByQuery();
  }, [searchName]);

  return (
    <div>
      <SearchForm
        searchName={searchName}
        updateQueryString={updateQueryString}
      />
      {loading && <Loader />}
      <MoviesList movies={searchMovies} />
    </div>
  );
};

export default Movies;
