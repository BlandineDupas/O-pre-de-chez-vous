import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Button from 'src/components/Parts/Button';

const Form = ({ sendMessage, inputValue, setNewMessageContent, submitMessage }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // sendMessage();
    submitMessage();
  };

  const handleOnChange = (event) => {
    setNewMessageContent(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        className="form__input"
        placeholder="Saisir votre message"
        type="text"
        value={inputValue}
        onChange={handleOnChange}
      />
      <Button
        className="form__submit__button"
        value="Envoi"
        type="submit"
        content="Envoi"
      />
    </form>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setNewMessageContent: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired,
};

export default Form;
