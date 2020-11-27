export const SAVE_GEOMETRY = 'SAVE_GEOMETRY';
export const FETCH_GEOMETRY = 'FETCH_GEOMETRY';
export const CLEAR_GEOMETRY = 'CLEAR_GEOMETRY';

export const saveGeometry = (geometry) => ({
  type: SAVE_GEOMETRY,
  geometry,
});

export const fetchGeometry = (adress, reset = false) => ({
  type: FETCH_GEOMETRY,
  adress,
  reset,
});

export const clearGeometry = () => ({
  type: CLEAR_GEOMETRY,
});
