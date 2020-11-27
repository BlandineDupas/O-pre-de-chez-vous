import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Button from 'src/components/Parts/Button';
import { changeDateFormat, changeDateTime } from 'src/selectors';

import './styles.scss';

const ItinerarySynopsis = ({
  departure,
  arrival,
  id,
  dateDeparture,
  dateArrival,
  fetchItineraryUser,
  userIriArray,
  userItinerary,
  userProfile,
  fetchGeometry,
  clearGeometry,
}) => {
  useEffect(() => {
    if (!userProfile) {
      fetchItineraryUser(userIriArray, id);
    }
  }, []);
  return (
    <div
      className="itinerary-synopsis"
      onMouseEnter={() => {
        clearGeometry();
        fetchGeometry(departure);
        fetchGeometry(arrival);
      }}
    >
      <div>
        <p className="itinerary-synopsis__destination">{departure} - {arrival}</p>
        <p className="itinerary-synopsis__date"><time dateTime={changeDateTime(dateDeparture)}>{changeDateFormat(dateDeparture)}</time> - <time dateTime="2020-09-08">{changeDateFormat(dateArrival)}</time></p>
      </div>
      {!userProfile && (
        <div className="itinerary-synopsis__author">
          <img className="author__pic" src={userItinerary[id] && userItinerary[id].image} alt={userItinerary[id] && userItinerary[id].username} />
          <p>{userItinerary[id] && userItinerary[id].username}</p>
        </div>
      )}
      <Link to={`/itinerary/${id}`}>
        <Button content="Voir le détail" />
      </Link>
    </div>
  );
};

// var d = new Date();
// console.log(d.toLocaleString());

ItinerarySynopsis.propTypes = {
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dateArrival: PropTypes.string.isRequired,
  dateDeparture: PropTypes.string.isRequired,
  username: PropTypes.string,
  image: PropTypes.string,
  userIriArray: PropTypes.array,
  fetchItineraryUser: PropTypes.func,
  userItinerary: PropTypes.any,
  userProfile: PropTypes.bool,
  fetchGeometry: PropTypes.func.isRequired,
  clearGeometry: PropTypes.func.isRequired,
};

ItinerarySynopsis.defaultProps = {
  username: '',
  image: '',
  userIriArray: [],
  userProfile: false,
  userItinerary: '',
  fetchItineraryUser: () => {},
};

export default ItinerarySynopsis;
