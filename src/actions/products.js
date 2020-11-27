export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT_SUBMIT = 'ADD_PRODUCT_SUBMIT';
export const CLEAR_PRODUCT_ADD = 'CLEAR_PRODUCT_ADD';
export const CHANGE_ADD_PRODUCT_INPUT_VALUE = 'CHANGE_ADD_PRODUCT_INPUT_VALUE';

export const fetchProducts = (productsIrisArray) => ({
  type: FETCH_PRODUCTS,
  productsIrisArray,
});

export const saveProduct = (product) => ({
  type: SAVE_PRODUCT,
  product,
});

export const deleteProduct = (iri) => ({
  type: DELETE_PRODUCT,
  iri,
});

export const addProductSubmit = () => ({
  type: ADD_PRODUCT_SUBMIT,
});

export const clearProductAdd = () => ({
  type: CLEAR_PRODUCT_ADD,
});

export const changeAddProductInputValue = (value, name) => ({
  type: CHANGE_ADD_PRODUCT_INPUT_VALUE,
  value,
  name,
});
