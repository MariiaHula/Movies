import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const { results } = await fetchReviews(movieId);
        console.log(results);
        if (results.length > 0) {
          setReviews(results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [error, movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews for this movie yet</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
