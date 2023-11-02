import Loader from 'components/Loader/Loader';
import { useHttp } from 'hook/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'servises/AxiosAPI';
import {
  ActorImage,
  ActorName,
  CharacterName,
  Container,
  List,
  ListItem,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const { data: castActors, loading } = useHttp(fetchActors, movieId);

  return (
    <Container>
      {loading && <Loader />}
      <List>
        {castActors.length ? (
          castActors.map(
            ({ id, profile_path, original_name, name, character }) => (
              <ListItem key={id}>
                <ActorImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
                  }
                  alt={original_name}
                />
                <ActorName>{name}</ActorName>
                <CharacterName>Character: {character}</CharacterName>
              </ListItem>
            )
          )
        ) : (
          <p>There are no actors listed for this movie yet</p>
        )}
      </List>
    </Container>
  );
};

export default Cast;
