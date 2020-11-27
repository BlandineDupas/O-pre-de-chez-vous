import React, { useEffect } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import './styles.scss';
import Button from 'src/components/Parts/Button';
import NavRoute from 'src/components/Parts/NavRoute';

const Nav = ({
  toggleMenu,
  menuIsVisible,
  resizeWindow,
  displayMenu,
  isLogged,
  logout,
  username,
  userId,
  inputValue,
  changeNavInput,
  navSubmit,
  selectValue,
  searchProducers,
  searchItineraries,
  changeSelectValue,
}) => {
  // console.log('resize test');
  useEffect(() => {
    resizeWindow();
    displayMenu();
    window.addEventListener('resize', resizeWindow);
    window.addEventListener('resize', displayMenu);
    // When component will unmount we remove the listener :
    return () => {
      window.removeEventListener('resize', resizeWindow);
      window.removeEventListener('resize', displayMenu);
    };
  }, []);
  return (
    <div className="nav">
      <div className="nav__main">
        <div className="nav__toggler" onClick={toggleMenu}>Menu ></div>
        {menuIsVisible && (
          <div className="nav__menu">
            <NavLink to="/" exact className="nav__menu__link" activeClassName="nav__menu__link--active">
              Accueil
            </NavLink>
            <NavLink to="/itineraries/list" exact className="nav__menu__link" activeClassName="nav__menu__link--active">
              Trajets
            </NavLink>
            <NavLink to="/producers/list" exact className="nav__menu__link" activeClassName="nav__menu__link--active">
              Producteurs
            </NavLink>
          </div>
        )}
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            navSubmit();
            if (selectValue === 'producer') {
              searchProducers();
            }
            if (selectValue === 'itinerary') {
              searchItineraries();
            }
          }}
          className="nav__search"
        >
          <div className="nav__search--fields">
            <input className="nav__search__inputField" type="text" placeholder="Tapez votre recherche" value={inputValue} onChange={(evt) => changeNavInput(evt.target.value, selectValue)} />
            <select
              className="nav__search__selectField"
              name="search"
              id="search"
              value={selectValue}
              onChange={(evt) => changeSelectValue(evt.target.value, inputValue)}
            >
              <option className="nav__search__selectField--option" value="producer">Producteurs</option>
              <option className="nav__search__selectField--option" value="itinerary">Trajets</option>
            </select>
          </div>
          <Button type="submit" content="Ok" />
          {/* <button type="submit" className="nav__search__button"> Ok </button> */}
        </form>
      </div>
      <div className="nav__login">
        {!isLogged && (
          <>
            <Link to="/register">
              <Button type="submit" className="nav__login__button" content="Inscription"/>
            </Link>
            <Link to="/login">
              <Button type="submit" className="nav__login__button" content="Connexion"/>
            </Link>
          </>
        )}
        {isLogged && (
          <>
            <div className="nav__login__menu">
              <NavLink to="/messages/list" exact className="nav__login__menu__link" activeClassName="nav__login__menu__link--active">
                Messagerie
              </NavLink>
              <NavLink to={`/user/overview/${userId}`} exact className="nav__login__menu__link" activeClassName="nav__login__menu__link--active">
                Mon profil
              </NavLink>
            </div>
            <Button className="nav__login__button" content="Déconnexion" onClick={logout} />
            {/* <p className="nav__login__hi">Bonjour <span 
            className="nav__login__hi--name">{username}</span> !</p> */}
          </>
        )}
      </div>
    </div>
  );
};

Nav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuIsVisible: PropTypes.bool.isRequired,
  resizeWindow: PropTypes.func.isRequired,
  displayMenu: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string,
  userId: PropTypes.number,
  searchProducers: PropTypes.func.isRequired,
  searchItineraries: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeNavInput: PropTypes.func.isRequired,
  navSubmit: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  changeSelectValue: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  username: '',
  userId: null,
};

export default Nav;
