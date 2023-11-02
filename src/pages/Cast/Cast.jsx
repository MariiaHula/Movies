import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'servises/AxiosAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [castActors, setCastActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActors = async () => {
      try {
        setLoading(true);
        const { cast } = await fetchActors(movieId);
        console.log(cast);
        if (cast.length > 0) {
          setCastActors(cast);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getActors();
  }, [error, movieId]);

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
