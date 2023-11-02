import Loader from 'components/Loader/Loader';
import { useHttp } from 'hook/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'servises/AxiosAPI';

const Cast = () => {
  const { movieId } = useParams();

  const { data: castActors, loading } = useHttp(fetchActors, movieId);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {castActors.map(
          ({ id, profile_path, original_name, name, character }) => (
            <li key={id}>
              <img
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
                }
                alt={original_name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cast;
