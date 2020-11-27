import { FETCH_GEOMETRY, saveGeometry, clearGeometry } from 'src/actions/carte';
import * as opencage from 'opencage-api-client';

const carte = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GEOMETRY:
      if (action.reset) {
        // console.log(action.reset);
        store.dispatch(clearGeometry());
      }
      opencage
        .geocode({ key: store.getState().carte.apikey, q: action.adress })
        .then((response) => {
          // console.log(response.results[0].geometry);
          const stateGeometries = store.getState().carte.geometry;
          const newGeometries = [];
          // console.log('base', newGeometries);
          stateGeometries.forEach((geometry) => {
            newGeometries.push(geometry);
          });
          // console.log('concat', newGeometries);
          newGeometries.push(response.results[0].geometry);
          // console.log('push', newGeometries);
          store.dispatch(saveGeometry(newGeometries));
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    default:
      next(action);
  }
};

export default carte;
