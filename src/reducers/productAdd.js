import { ADD_PRODUCT_SUBMIT, CLEAR_PRODUCT_ADD, CHANGE_ADD_PRODUCT_INPUT_VALUE } from 'src/actions/products';

const initialState = {
  name: '',
  price: null,
};

const productAdd = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_SUBMIT:
      return {
        ...state,
      };
    case CLEAR_PRODUCT_ADD:
      return {
        ...state,
        name: '',
        price: '',
      };
    case CHANGE_ADD_PRODUCT_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      }
    default:
      return state;
  }
};

export default productAdd;
