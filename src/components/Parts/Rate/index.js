import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Rate = ({ rate }) => {
  const full = [];
  for (let i = 1; i <= 5; i++) {
    full.push({
      key: i,
      value: (rate >= i),
    });
  }

  return (
    <div className="rate">
      <div className="rate__stars">
        {full.map((star) => <p key={star.key} className={classnames({ 'rate__stars--full': star.value }, { 'rate__stars--empty': !star.value })}>★</p>)}
      </div>
      <a className="rate__link">Lire les avis</a>
    </div>
  );
};

Rate.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rate;
