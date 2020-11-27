import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// Components
import Page from 'src/components/Parts/Page';
import SearchForm from 'src/components/Parts/SearchForm';
import ProducerSynopsis from 'src/containers/ProducerSynopsis'
import Carte from 'src/containers/Carte';

import './styles.scss';

const Producers = ({
  inputValue,
  fetchProducers,
  changeInputValue,
  producers,
  producersAddresses,
  searchProducers,
  clearGeometry,
  hasBeenSubmitted,
  hasNotBeenSubmitted,
}) => {
  // console.log(isSubmitted);
  useEffect(() => {
    clearGeometry();

    if (!hasBeenSubmitted) {
      fetchProducers();
    }
    if (hasBeenSubmitted) {
      hasNotBeenSubmitted();
    }
  }, []);
  return (
    <Page title="Producteurs">
      <div className="producers">
        <SearchForm
          placeholder="Entrez une ville ou un produit"
          submitMessage="Rechercher des producteurs"
          addMessage="Devenir producteur"
          link="/register/producer"
          inputValue={inputValue}
          onSubmit={searchProducers}
          onChange={changeInputValue}
        />
        <div className="producers__content">
          <div className="producers__content__side">
            <p className="producers__content__side__title">Les producteurs :</p>
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
            {producers.length <= 0 && <p className="itineraries__content__side__error">Aucun producteur ne correspond à votre recherche</p>}
          </div>
          <div className="producers__content__map">
            <Carte adress={producersAddresses} />
          </div>
        </div>
      </div>
    </Page>
  );
};

Producers.propTypes = {
  inputValue: PropTypes.string.isRequired,
  fetchProducers: PropTypes.func.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  producers: PropTypes.array.isRequired,
  producersAddresses: PropTypes.object,
  clearGeometry: PropTypes.func.isRequired,
  searchProducers: PropTypes.func.isRequired,
  hasBeenSubmitted: PropTypes.bool.isRequired,
  hasNotBeenSubmitted: PropTypes.func.isRequired,
};

Producers.defaultProps = {
  producersAddresses: {},
};

export default Producers;
