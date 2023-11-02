import React from 'react';

import { Container, HomeLink, Image, Message } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Image
        src="https://149434221.v2.pressablecdn.com/wp-content/uploads/2015/08/404-page-error.png"
        alt="404 page"
      />
      <Message>This page does not exist, please return to </Message>
      <HomeLink to="/">Home</HomeLink>
    </Container>
  );
};

export default NotFound;
