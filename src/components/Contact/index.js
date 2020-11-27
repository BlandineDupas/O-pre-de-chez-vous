import React from 'react';

// STYLES
import './styles.scss';
import Button from 'src/components/Parts/Button';
import Page from 'src/components/Parts/Page';

const Contact = () => (
<Page title="Nous contacter">
  <div className="contact">

    <div className="contact__center">

      <div className="contact__details-left">
        <div className="contact__mailName">
          <input
            className="contact__input"
            placeholder="Nom*"
            type="text"
            // value={inputValue}
            // onChange={handleOnChange}
          />
          <input
            className="contact__input"
            placeholder="E-mail*"
            type="text"
            // value={inputValue}
            // onChange={handleOnChange}
          />
        </div>
        <div className="contact__message">
          <textarea
            className="contact__input-message"
            placeholder="Entrez votre message*"
            type="text"
            // value={inputValue}
            // onChange={handleOnChange}
          />
        </div>
        <Button type="submit" className="contact__button" content="Envoyer"/>
      </div>

      <div className="contact__details-right">
        <p className="contact__phoneNumber">08.36.65.65.65</p>
        <p className="contact__emailAdress">Contact@contact.com</p>
      </div>
    </div>
  </div>
</Page>
);

export default Contact;
