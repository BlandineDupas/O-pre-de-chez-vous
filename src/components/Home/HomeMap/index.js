import React from 'react';

import './styles.scss';

import img from './cartefrance.png';

const HomeMap = () => (
  <div className="homeMap">
    <img className="homeMap__img" src={img} alt="Carte de France" />
  </div>

);

export default HomeMap;
