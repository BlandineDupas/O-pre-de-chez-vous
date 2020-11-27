import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './styles.scss';
import Button from 'src/components/Parts/Button';
import Page from 'src/components/Parts/Page';
import Carte from 'src/containers/Carte';

const ItineraryAdd = ({
  changeAddInputValue,
  addItinerarySubmit,
  departureCity,
  arrivalCity,
  departureDate,
  arrivalDate,
  description,
  aroundAccepted,

}) => (
  <Page title="Ajouter un trajet">
    <div className="itinerary-add">
      <form 
        className="itinerary-add__left"
        onSubmit={(evt) => {
          evt.preventDefault();
          addItinerarySubmit();
        }}>
        <div className="itinerary-add__fieldset">
          <label>
            <p className="itinerary-add__label"> Ville de départ </p>
            <input
              name="departureCity"
              className="itinerary-add__input"
              placeholder="Ville de départ*"
              type="text"
              value={departureCity}
              onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
            />
          </label>
          <label>
            <p className="itinerary-add__label"> Ville d'arrivée </p>
            <input
              name="arrivalCity"
              className="itinerary-add__input"
              placeholder="Ville d'arrivée*"
              type="text"
              value={arrivalCity}
              onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
            />
          </label>
        </div>
        <div className="itinerary-add__fieldset">
          <label>
            <p className="itinerary-add__label"> Date de départ </p>
            <input
              name="departureDate"
              className="itinerary-add__input"
              placeholder="30-12-2020*"
              type="text"
              value={departureDate}
              onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
            />
          </label>
          <label>
            <p className="itinerary-add__label"> Date d'arrivée </p>
            <input
              name="arrivalDate"
              className="itinerary-add__input"
              placeholder="30-12-2020*"
              type="text"
              value={arrivalDate}
              onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
            />
          </label>
        </div>
          <div className="itinerary-add__fieldset">
            <label>
              <p className="itinerary-add__label"> Description </p>
              <textarea
                name="description"
                className="itinerary-add__input"
                placeholder="Description"
                type="textarea"
                value={description}
                onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
              />
            </label>
            <label>
              <p className="itinerary-add__label"> Détours acceptés (km) </p>
              <input
                name="aroundAccepted"
                className="itinerary-add__input"
                placeholder="Détours acceptés (km)"
                type="text"
                value={aroundAccepted}
                onChange={(evt) => changeAddInputValue(evt.target.value, evt.target.name)}
              />
            </label>
          </div>
        <div className="itinerary-add__fieldset">
          <Button type="submit" className="itinerary-add__button" content="Ajouter le trajet" />
        </div>
      </form>
      {/* <div className="itinerary-add__map">
        <Carte />
      </div> */}
    </div>
  </Page>

);

ItineraryAdd.propTypes = {
  departureCity: PropTypes.string.isRequired,
  arrivalCity: PropTypes.string.isRequired,
  departureDate: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  aroundAccepted: PropTypes.string.isRequired,
  changeAddInputValue: PropTypes.func.isRequired,
  addItinerarySubmit: PropTypes.func.isRequired,
};

export default ItineraryAdd;
