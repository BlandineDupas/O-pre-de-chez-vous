import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Page from 'src/components/Parts/Page';
import Button from 'src/components/Parts/Button';
import Field from './Field';

// STYLES
import './styles.scss';

const LoginForm = ({
  identifiant,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <Page title="Se connecter">
      <form autoComplete="off" className="loginForm" onSubmit={handleSubmit}>
        <Field
          name="identifiant"
          placeholder="Identifiant"
          onChange={changeField}
          value={identifiant}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />

        <div className="loginForm__redirection">
          {/* TODO redirection mdp oublié */}
          <a href="">Mot de passe oublié</a>
        </div>

        <Button type="submit" content="Se connecter" />

        <div className="loginForm__redirection">
          <Link to="/register">Je n'ai pas encore de compte. Je m'inscris !</Link>
        </div>
      </form>
    </Page>
  );
};

LoginForm.propTypes = {
  identifiant: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
