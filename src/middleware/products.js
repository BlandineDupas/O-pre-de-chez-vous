import axios from 'axios';

import {
  FETCH_PRODUCTS,
  saveProduct,
  DELETE_PRODUCT,
  ADD_PRODUCT_SUBMIT,
  clearProductAdd,
} from 'src/actions/products';

const baseUriAPI = 'http://52.207.229.243';

const products = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      action.productsIrisArray.forEach((iri) => {
        axios.get(`${baseUriAPI}${iri}`, {}, {'Content-Type': 'application/json'})
          .then((response) => store.dispatch(saveProduct(response.data)))
          .catch((error) => console.log(error));
      });
      break;
    case DELETE_PRODUCT:
      axios.delete(`${baseUriAPI}${action.iri}`, { headers: {
        Authorization: `Bearer ${sessionStorage.jwt}`,
        'Content-Type': 'application/json',
      }})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      break;
    case ADD_PRODUCT_SUBMIT:
      axios.post(`${baseUriAPI}/api/products`, {
        image:"http://lorempixel.com/640/480",
        name: store.getState().productAdd.name,
        price: store.getState().productAdd.price,
        user: `/api/users/${store.getState().auth.user.id}`,
        // user: store.getState().auth.user.iri,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(saveProduct(response.data));
          store.dispatch(clearProductAdd());
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default products;

