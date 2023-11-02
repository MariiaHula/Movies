import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  max-width: 300px;
  margin: 20px;
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
`;

export const ActorName = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

export const CharacterName = styled.p`
  font-size: 16px;
`;
