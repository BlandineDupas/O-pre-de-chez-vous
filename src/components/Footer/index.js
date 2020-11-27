// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <Link to="/legal-mentions" className="footer__link">Mentions Légales</Link>
    <Link to="/contact" className="footer__link">Contact</Link>
    <Link to="/us" className="footer__link">Qui sommes-nous ?</Link>
  </div>
);

export default Footer;
