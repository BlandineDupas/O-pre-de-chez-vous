import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import RegisterField from 'src/components/Register/RegisterField';
import InputField from 'src/containers/InputField';
import InputCheckbox from 'src/containers/InputCheckbox';
import Page from 'src/components/Parts/Page';
import Button from 'src/components/Parts/Button';
import ProducerForm from 'src/components/ProducerRegister/ProducerForm';

// STYLES
import './styles.scss';

const Register = ({ wantToBeProducer, registerSubmit, errors }) => (
  <Page title="S'inscrire">
    {errors.length > 0 && (
      <ul className="errors">ERREURS :
        {errors.map((error) => <li key={error} className="errors__item">{error}</li>)}
      </ul>
    )}
    <form
      className="registerForm"
      onSubmit={(evt) => {
        evt.preventDefault();
        registerSubmit();
      }}
    >
      <p className="registerForm__redirection">
        <Link to="/login">Je possède déjà un compte. Je me connecte !</Link>
      </p>

      <RegisterField label="Identité">
        <InputField
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Votre prénom"
          isRequired
        />
        <InputField
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Votre nom"
          isRequired
        />
      </RegisterField>

      <RegisterField label="Données de connexion">
        <InputField
          type="email"
          name="email"
          id="email"
          placeholder="Votre adresse email"
          isRequired
        />
        <InputField
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
          isRequired
        />
        <InputField
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirmez votre mot de passe"
          isRequired
        />
      </RegisterField>

      <RegisterField label="Téléphone">
        <InputField
          type="tel"
          name="tel"
          id="tel"
          placeholder="Votre numéro de téléphone"
        />
      </RegisterField>

      <InputCheckbox
        id="producer"
        label="Je suis un producteur."
        name="producer"
      />

      {wantToBeProducer && (
        <>
          <ProducerForm />
        </>
      )}

      <InputCheckbox
        id="conditionsAgreement"
        label="J'accepte les conditions d'utilisation du site"
        name="conditionsAgreement"
        isRequired
      />

      <Button type="submit" content="Je m'inscris" />

    </form>
  </Page>
);

Register.propTypes = {
  wantToBeProducer: PropTypes.bool.isRequired,
  registerSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array,
};

Register.defaultProps = {
  errors: null,
};

export default Register;
