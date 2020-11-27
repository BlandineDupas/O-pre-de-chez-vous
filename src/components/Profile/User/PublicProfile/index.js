import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import Description from 'src/components/Profile/Description';
import Rate from 'src/components/Parts/Rate';
import Button from 'src/components/Parts/Button';
import ItinerarySynopsis from 'src/containers/ItinerarySynopsis';

// STYLES
import './styles.scss';

const PublicProfile = ({
  id,
  fetchProfileUser,
  firstname,
  image,
  itineraries,
  rate,
  fetchUserItinerary,
}) => {
  // console.log(itineraries);
  useEffect(() => {
    fetchProfileUser(id);
    fetchUserItinerary(id);
  }, []);
  return (
    <Page>
      <div className="user-public-profile">
        <div className="user-public-profile__info">
          <img className="user-public-profile__info__picture" src={image} alt={firstname} />
          <div className="user-public-profile__info__names">
            <p>{firstname} </p>
            <Rate rate={rate} />
            <Link to="/messages/raphael">
              <Button content="Envoyer un message" />
            </Link>
          </div>
        </div>

        <Description title="Description générale" content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié" />

        <Description title="Ses derniers trajets proposés">
          {itineraries.length > 0 && itineraries.map((itinerary) => (
            <ItinerarySynopsis
              key={itinerary.id}
              id={itinerary.id}
              departure={itinerary.departureAddress}
              arrival={itinerary.arrivalAddress}
              dateDeparture={itinerary.dateDeparture}
              dateArrival={itinerary.dateArrival}
              userIriArray={itinerary.user}
              userProfile
            />
          ))};
        </Description>

      </div>
    </Page>
  );
};

PublicProfile.propTypes = {
  id: PropTypes.string.isRequired,
  fetchProfileUser: PropTypes.func.isRequired,
  // fetchUserItinerary: PropTypes.func.isRequired,
  firstname: PropTypes.string,
  // name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string,
  itineraries: PropTypes.array,
  fetchUserItinerary: PropTypes.func.isRequired,
};

PublicProfile.defaultProps = {
  itineraries: [],
  image: '',
  firstname: '',
};

export default PublicProfile;
