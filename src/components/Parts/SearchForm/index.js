import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'src/components/Parts/Button';

import './styles.scss';

const SearchForm = ({
  placeholder,
  submitMessage,
  addMessage,
  link,
  onSubmit,
  inputValue,
  onChange,
}) => (
  <div className="searchForm">
    <form onSubmit={(evt) => {
      evt.preventDefault();
      onSubmit();
    }}
    >
      <input className="searchForm__input" type="text" placeholder={placeholder} value={inputValue} onChange={(evt) => onChange(evt.target.value)} />
      <Button type="submit" className="button--submit" content={submitMessage} />
    </form>
    <p className="searchForm--separator">ou</p>
    <Link to={link}>
      <Button content={addMessage} />
    </Link>
  </div>
);

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  submitMessage: PropTypes.string.isRequired,
  addMessage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
