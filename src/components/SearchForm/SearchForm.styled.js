import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-shadow: 15%;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
`;

export const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
  width: 350px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0055aa;
  }
`;
