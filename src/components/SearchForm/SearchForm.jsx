import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Input, StyledForm } from './SearchForm.styled';

const SearchForm = ({ searchName, updateQueryString }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    updateQueryString(query);
    reset();
  };
  const reset = () => {
    setQuery('');
  };
  return (
    <Container>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name={searchName}
          value={query}
          onChange={handleChangeInput}
          required
        />
        <Button type="submit">Search</Button>
      </StyledForm>
    </Container>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchName: PropTypes.string.isRequired,
  updateQueryString: PropTypes.func.isRequired,
};
