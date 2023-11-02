import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servises/AxiosAPI';
import Loader from 'components/Loader/Loader';
import { useHttp } from 'hook/useHttp';
import { Author, Container, Content, List, ListItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const { data: reviews, loading } = useHttp(fetchReviews, movieId);

  return (
    <Container>
      {loading && <Loader />}
      <List>
        {reviews.length ? (
          reviews.map(review => (
            <ListItem key={review.id}>
              <Author>Author: {review.author}</Author>
              <Content>{review.content}</Content>
            </ListItem>
          ))
        ) : (
          <Content>There are no reviews for this movie yet</Content>
        )}
      </List>
    </Container>
  );
};

export default Reviews;
