import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import ProducerForm from 'src/components/ProducerRegister/ProducerForm';
import InputCheckbox from 'src/containers/InputCheckbox';
import Page from 'src/components/Parts/Page';
import Button from 'src/components/Parts/Button';

// STYLES
import './styles.scss';

const ProducerRegister = ({ registerProducerSubmit }) => (
  <Page title="Je deviens producteur">
    <form
      className="registerForm"
      onSubmit={(evt) => {
        evt.preventDefault();
        registerProducerSubmit();
      }}
    >
      <p className="registerForm__redirection">
        <Link to="/register">Je ne suis pas encore utilisateur du site. Je m'inscris !</Link>
      </p>
      <ProducerForm />
      <InputCheckbox
        id="conditionsAgreement"
        label="J'accepte les conditions d'utilisation du site"
        name="conditionsAgreement"
        isRequired
      />

      <Button type="submit" className="registerForm__button" content="Je m'inscris" />
    </form>
  </Page>
);

ProducerRegister.propTypes = {
  registerProducerSubmit: PropTypes.func.isRequired,
};

export default ProducerRegister;
