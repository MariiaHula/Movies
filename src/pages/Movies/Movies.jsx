import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
// import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../servises/AxiosAPI';
import { useSearchParams } from 'react-router-dom';
import { useHttp } from 'hook/useHttp';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const { data: movies, loading } = useHttp(fetchMovies, searchName);

  return (
    <div>
      <SearchForm
        searchName={searchName}
        updateQueryString={updateQueryString}
      />
      {loading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
