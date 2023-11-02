import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import {
  AdditionalInfo,
  AdditionalInfoItem,
  GenreItem,
  GenresList,
  GenresTitle,
  MovieDetailsContainer,
  MovieInfo,
  MovieInfo1,
  MovieOverview,
  MoviePoster,
  MovieTitle,
} from './MovieDtails.styled';
import { useHttp } from 'hook/useHttp';
import { Button } from 'components/SearchForm/SearchForm.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const { data: movieInfo, loading } = useHttp(fetchMovieDetails, movieId);

  if (loading) {
    return <Loader />;
  }

  const { title, release_date, popularity, overview, genres, poster_path } =
    movieInfo;

  return (
    <MovieDetailsContainer>
      <Link to={goBackRef.current}>
        <Button type="button">Go back</Button>
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
            {title}: ({release_date?.slice(0, 4)})
          </MovieTitle>
          <p>User score: {(popularity / 100)?.toFixed(0)}%</p>
          <GenresTitle>Overview</GenresTitle>
          <MovieOverview>{overview}</MovieOverview>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {genres?.map(genre => (
              <GenreItem key={genre.id}>{genre.name}</GenreItem>
            ))}
          </GenresList>
        </MovieInfo1>
      </MovieInfo>

      <AdditionalInfo>
        <GenresTitle>Additional information</GenresTitle>
        <ul>
          <AdditionalInfoItem to="cast">Cast</AdditionalInfoItem>
          <AdditionalInfoItem to="reviews">Reviews</AdditionalInfoItem>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
