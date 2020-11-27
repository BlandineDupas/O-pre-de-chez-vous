import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page'
import Carte from 'src/containers/Carte';
import Button from 'src/components/Parts/Button';

import { changeDateFormat } from 'src/selectors';

// STYLES
import './styles.scss';

import img from './profileItinerary.png';

const ItineraryDetails = ({
  id,
  fetchItinerary,
  departureAddress,
  arrivalAddress,
  dateDeparture,
  dateArrival,
  description,
  userId,
  username,
  image,
}) => {
  useEffect(() => fetchItinerary(id), []);

  return (
    <Page>
      <div className="itinerary-details">
        <div className="itinerary-details__left">
          <div className="itinerary-details__info">
            <div className="itinerary-details__info-title">
              <p>{departureAddress} - {arrivalAddress}</p>
            </div>
            <div className="itinerary-details__info-date">
              <div className="itinerarys-details__info-date-departure">
                <p>Départ :</p>
                <p>{changeDateFormat(dateDeparture)}</p>
              </div>
              <div className="itinerary-details__info-date-arrival">
                <span>Arrivée :</span>
                <p>{changeDateFormat(dateArrival)}</p>
              </div>
            </div>
          </div>
          <div className="itinerary-details__description">
            <p>{description}</p>
          </div>
          <div className="itinerary-details__map">
            <Carte />
          </div>
        </div>
        <div className="itinerary-details__right">
          <div className="itinerary-details__profile">
            <span className="itinerary-details__profile-user"> Proposé par {username}</span>
            <div className="itinerary-details__profile-picture">
              <img className="itinerary-details__profile-img" src={image} />
            </div>
            <div className="itinerary-details__button">
              <Link to={`/user/profile/${userId}`}>
                <Button content="Voir le profil" />
              </Link>
            </div>
            <div className="itinerary-details__button">
              <Link to="/messages/raphael">
                <Button content="Envoyer un message" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

ItineraryDetails.propTypes = {
  id: PropTypes.string.isRequired,
  fetchItinerary: PropTypes.func.isRequired,
  departureAddress: PropTypes.string,
  arrivalAddress: PropTypes.string,
  dateDeparture: PropTypes.string,
  dateArrival: PropTypes.string,
  description: PropTypes.string,
  userId: PropTypes.number,
  image: PropTypes.string,
  username: PropTypes.string,
};

ItineraryDetails.defaultProps = {
  departureAddress: '',
  arrivalAddress: '',
  dateDeparture: '',
  dateArrival: '',
  description: '',
  userId: null,
  image: '',
  username: '',
};

export default ItineraryDetails;
