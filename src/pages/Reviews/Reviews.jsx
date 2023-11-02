import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import { useHttp } from 'hook/useHttp';

const Reviews = () => {
  const { movieId } = useParams();

  const { data: reviews, loading } = useHttp(fetchReviews, movieId);

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
