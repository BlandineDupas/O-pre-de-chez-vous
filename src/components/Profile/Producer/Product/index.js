import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'src/components/Parts/Button';

// STYLES
import './styles.scss';

const Product = ({
  productImg,
  productName,
  price,
  editable,
  deleteProduct,
  iri,
}) => (
  <div className="product">
    <img className="product__img" src={productImg} alt={productName} />
    <p className="product__title">{productName}</p>
    <p className="product__price">{price} </p>
    {editable && <Button content="Retirer le produit" onClick={deleteProduct} onClickParam={iri} />}
  </div>
);

Product.propTypes = {
  productImg: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  editable: PropTypes.bool,
  deleteProduct: PropTypes.func,
  iri: PropTypes.string,
};

Product.defaultProps = {
  productImg: '',
  productName: '',
  price: '',
  editable: false,
  deleteProduct: null,
  iri: '',
};

export default Product;
