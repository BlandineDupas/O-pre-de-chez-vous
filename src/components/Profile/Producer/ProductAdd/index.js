import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'src/components/Parts/Button';
import ProductAdd from 'src/containers/ProductAdd'

// STYLES
import './styles.scss';

const Product = ({
  productName,
  price,
  changeAddProductInputValue,
  addProductSubmit,
}) => (
  <form
    className="product"
    onSubmit={(evt) => {
      evt.preventDefault();
      addProductSubmit();
    }}
  >
    {/* <img className="product__img" src={productImg} alt={productName} /> */}
    <input
      className="product__title-add"
      name="name"
      type="text"
      id="name"
      placeholder="Nom du produit"
      value={productName}
      onChange={(evt) => changeAddProductInputValue(evt.target.value, evt.target.name)}
      required
    />
    <input
      className="product__price-add"
      name="price"
      type="text"
      id="id"
      placeholder="Prix"
      value={price}
      onChange={(evt) => changeAddProductInputValue(evt.target.value, evt.target.name)}
      required
    />
    <Button content="Ajouter le produit" type="submit" />
  </form>
);

Product.propTypes = {
  productImg: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  changeAddProductInputValue: PropTypes.func.isRequired,
  addProductSubmit: PropTypes.func.isRequired,
};

Product.defaultProps = {
  productImg: '',
  productName: '',
  price: '',
};

export default Product;
