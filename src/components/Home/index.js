import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import Header from 'src/components/Home/Header';
import HomeMap from 'src/components/Home/HomeMap';
import HomeSnippet from 'src/components/Home/HomeSnippet';
import ItinerarySynopsis from 'src/containers/ItinerarySynopsis';
import ProducerSynopsis from 'src/containers/ProducerSynopsis';

import './styles.scss';

const Home = ({
  itineraries,
  fetchHomeItineraries,
  fetchHomeProducers,
  producers,
  producersAddresses,
}) => {
  useEffect(() => {
    fetchHomeItineraries();
    fetchHomeProducers();
  }, []);
  // useEffect(() => fetchNext())
  return (
    // <Page>
      <div className="home">
        <Header />
        <main className="home__content">
          <div className="home__content--container">
            <HomeMap />
          </div>
          <div className="home__content--container">
            <HomeSnippet title="Un producteur au hasard" link="/producers/list">
              {producers.length > 0 && producers.map((producer) => (
                <ProducerSynopsis
                  key={producer.id}
                  id={producer.id}
                  company={producer.companyPro}
                  tags={producer.tags}
                  imagePro={producer.imagePro}
                  addressIri={producer.addresses}
                  address={producersAddresses[producer.id]}
                />
              ))}
            </HomeSnippet>
            <HomeSnippet title="Les prochains trajets" link="/itineraries/list">
              {itineraries.map((itinerary) => (
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
            </HomeSnippet>
          </div>
        </main>
      </div>
    // </Page>
  );
};

Home.propTypes = {
  itineraries: PropTypes.array.isRequired,
  fetchHomeItineraries: PropTypes.func.isRequired,
  fetchHomeProducers: PropTypes.func.isRequired,
  producers: PropTypes.array.isRequired,
  producersAddresses: PropTypes.object.isRequired,
};

export default Home;
