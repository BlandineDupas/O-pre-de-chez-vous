export const FETCH_PRODUCERS = 'FETCH_PRODUCERS';
export const SEARCH_PRODUCERS = 'SEARCH_PRODUCERS';
export const SAVE_PRODUCERS = 'SAVE_PRODUCERS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const FETCH_PRODUCER = 'FETCH_PRODUCER';
export const SAVE_PRODUCER = 'SAVE_PRODUCER';
export const FETCH_ADDRESS_PRO = 'FETCH_ADDRESS_PRO';
export const SAVE_ADDRESS_PRO = 'SAVE_ADDRESS_PRO';
export const FETCH_ADDRESSES_PRO = 'FETCH_ADDRESSES_PRO';
export const SAVE_ADDRESSES_PRO = 'SAVE_ADDRESSES_PRO';
export const CLEAR_PRODUCERS = 'CLEAR_PRODUCERS';
export const FETCH_HOME_PRODUCERS = 'FETCH_HOME_PRODUCERS';

export const fetchProducers = () => ({
  type: FETCH_PRODUCERS,
});

export const searchProducers = () => ({
  type: SEARCH_PRODUCERS,
});

export const saveProducers = (producers) => ({
  type: SAVE_PRODUCERS,
  producers,
});

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const fetchProducer = (id) => ({
  type: FETCH_PRODUCER,
  id,
});

export const saveProducer = (producer) => ({
  type: SAVE_PRODUCER,
  producer,
});

export const fetchAddressPro = (iri) => ({
  type: FETCH_ADDRESS_PRO,
  iri,
});

export const saveAddressPro = (address) => ({
  type: SAVE_ADDRESS_PRO,
  address,
});
//Adreses sur la map
export const fetchAddressesPro = (address, producerId) => ({
  type: FETCH_ADDRESSES_PRO,
  address,
  producerId,
});

export const saveAddressesPro = (address, producerId) => ({
  type: SAVE_ADDRESSES_PRO,
  address, 
  producerId,
});

export const clearProducers = () => ({
  type: CLEAR_PRODUCERS,
});

export const fetchHomeProducers = () => ({
  type: FETCH_HOME_PRODUCERS,
});
