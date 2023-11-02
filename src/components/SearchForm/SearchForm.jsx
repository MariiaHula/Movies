import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name={searchName}
          value={query}
          onChange={handleChangeInput}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchName: PropTypes.string.isRequired,
  updateQueryString: PropTypes.func.isRequired,
};
