import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import {
  AdditionalInfo,
  AdditionalInfoItem,
  GenreItem,
  GenresList,
  MovieDetailsContainer,
  MovieInfo,
  MovieInfo1,
  MovieOverview,
  MoviePoster,
  MovieTitle,
} from './MovieDtails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/');

  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        setLoading(true);
        const results = await fetchMovieDetails(movieId);
        console.log(results);
        if (results) {
          setMovieInfo(results);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  if (!movieInfo) {
    return loading && <Loader />;
  }

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieInfo || {};

  return (
    <MovieDetailsContainer>
      <Link to={goBackRef.current}>
        <button type="button">Go back</button>
      </Link>
      <MovieInfo>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
          }
          alt={title}
        />
        <MovieInfo1>
          <MovieTitle>
            {title}: ({release_date.slice(0, 4)})
          </MovieTitle>
          <p>User score: {(popularity / 100).toFixed(0)}%</p>
          <h2>Overview</h2>
          <MovieOverview>{overview}</MovieOverview>
          <h2>Genres</h2>
          <GenresList>
            {genres.map(genre => (
              <GenreItem key={genre.id}>{genre.name}</GenreItem>
            ))}
          </GenresList>
        </MovieInfo1>
      </MovieInfo>
      <hr />
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <AdditionalInfoItem to="cast">Cast</AdditionalInfoItem>
          <AdditionalInfoItem to="reviews">Reviews</AdditionalInfoItem>
        </ul>
        <hr />
        <Outlet />
      </AdditionalInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
