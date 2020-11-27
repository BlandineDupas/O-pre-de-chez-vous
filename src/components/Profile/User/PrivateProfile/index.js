import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import Description from 'src/components/Profile/Description';
import Rate from 'src/components/Parts/Rate';
import Button from 'src/components/Parts/Button';
import ItinerarySynopsis from 'src/containers/ItinerarySynopsis';
import ProducerSynopsis from 'src/components/Producers/ProducerSynopsis';

// STYLES
import './styles.scss';

// import img from 'src/img/jeanreno.jpg';

const PrivateProfile = ({
  id,
  fetchProfileUser,
  firstname,
  image,
  rate,
  producer,
  email,
  phone,
  itineraries,
  fetchUserItinerary,
}) => {
  useEffect(() => {
    fetchProfileUser(id);
    fetchUserItinerary(id);
  }, []);
  return (
    <Page title={firstname}>
      <div className="user-private-profile">
        <div className="user-private-profile__info">
          <img className="user-private-profile__info__picture" src={image} alt={firstname} />
          <div className="user-private-profile__info__names">
            <p>{firstname} </p>
            <p>{email}</p>
            <p>Tel : {phone}</p>
            <Rate rate={rate} />
          </div>
        </div>
        <div className="user-private-profile__buttons">
          <Button content="Editer mon profil" />
          <Button content="Modifier mon mot de passe" />
          {producer && (
            <Link to={`/producer/overview/${id}`}>
              <Button content="Accéder à ma page producteur" />
            </Link>
          )}
          {!producer && (
            <Link to="/register/producer">
              <Button content="Devenir producteur" />
            </Link>
          )}
          <Button content="Supprimer mon compte" className="button--warning" />
        </div>

        <Description title="Description générale" content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié" />

        <Description title="Mes trajets">
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
          ))}
        </Description>

        <Description title="Mes producteurs favoris">
          {/* <ProducerSynopsis /> */}
        </Description>

      </div>
    </Page>
  );
};

PrivateProfile.propTypes = {
  id: PropTypes.number.isRequired,
  fetchProfileUser: PropTypes.func.isRequired,
  firstname: PropTypes.string,
  image: PropTypes.string,
  rate: PropTypes.number.isRequired,
  producer: PropTypes.bool.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  itineraries: PropTypes.array,
  fetchUserItinerary: PropTypes.func.isRequired,
};

PrivateProfile.defaultProps = {
  itineraries: [],
  phone: '',
  firstname: '',
  email: '',
  image: '',
};

export default PrivateProfile;
