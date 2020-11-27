import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import ItinerarySynopsis from 'src/containers/ItinerarySynopsis';
import SearchForm from 'src/components/Parts/SearchForm';
import Carte from 'src/containers/Carte';

// STYLES
import './styles.scss';

const Itineraries = ({
  fetchItineraries,
  itineraries,
  inputValue,
  searchItineraries,
  changeInputValue,
  hasBeenSubmitted,
  hasNotBeenSubmitted,
}) => {
  useEffect(() => {
    if (!hasBeenSubmitted) {
      fetchItineraries();
    }
    if (hasBeenSubmitted) {
      hasNotBeenSubmitted();
    }
  }, []);
  return (
    <Page title="Trajets">
      <div className="itineraries">
        <SearchForm placeholder="Entrez une ville ou un lieu" submitMessage="Rechercher un trajet" addMessage="Proposer un trajet" link="/itinerary/add" inputValue={inputValue} onSubmit={searchItineraries} onChange={changeInputValue} />
        <div className="itineraries__content">
          <div className="itineraries__content__side">
            <p className="itineraries__content__side__title">Liste des trajets</p>
            {/* TODO Relier le trajet au user */}
            {itineraries.length > 0 && itineraries.map((itinerary) => (
              <ItinerarySynopsis
                key={itinerary.id}
                id={itinerary.id}
                departure={itinerary.departureAddress}
                arrival={itinerary.arrivalAddress}
                dateDeparture={itinerary.dateDeparture}
                dateArrival={itinerary.dateArrival}
                userIriArray={itinerary.user}
              />
            ))}
            {itineraries.length <= 0 && <p className="itineraries__content__side__error">Aucun trajet ne correspond à votre recherche</p>}
          </div>
          <div className="itineraries__content__map">
            <Carte itinerary />
          </div>
        </div>
      </div>
    </Page>
  );
};

Itineraries.propTypes = {
  fetchItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.array.isRequired,
  searchItineraries: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  hasBeenSubmitted: PropTypes.bool.isRequired,
  hasNotBeenSubmitted: PropTypes.func.isRequired,
};

export default Itineraries;
