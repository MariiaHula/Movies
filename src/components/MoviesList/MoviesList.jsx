import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieImage,
  MovieItem,
  MovieLink,
  MoviesListContainer,
} from './MoviesList.styled';

const MoviesList = ({ movies, query }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink
            to={`/movies/${movie.id.toString()}`}
            state={{ from: location }}
          >
            <MovieImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
              }
              alt={movie.title}
            />
            {movie.title}
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};
