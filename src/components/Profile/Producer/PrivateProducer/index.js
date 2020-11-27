import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import Button from 'src/components/Parts/Button';
import Rate from 'src/components/Parts/Rate';
import Product from 'src/containers/Product';
import ProductAdd from 'src/containers/ProductAdd';
import Carte from 'src/containers/Carte';

// STYLES
import './styles.scss';

const PrivateProducer = ({
  fetchProducer,
  imagePro,
  companyPro,
  firstname,
  lastname,
  websitePro,
  rate,
  descriptionPro,
  addressPro,
  products,
  id,
  editProfile,
}) => {
  useEffect(() => fetchProducer(id), []);
  const fullAddress = `${addressPro.streetNumber} ${addressPro.type} ${addressPro.streetName} ${addressPro.city} ${addressPro.postCode} ${addressPro.country}`;

  return (
    <Page title={companyPro}>
      <div className="producer-private-profile">
        <div className="producer-private-profile__info">
          <img className="producer-private-profile__info__picture" src={imagePro} alt={companyPro} />
          <div className="producer-private-profile__info__names">
            <p>{firstname} {lastname}</p>
            <p>Site internet:&nbsp;
              <a className="producer-private-profile__link" href={websitePro}>
                {websitePro}
              </a>
            </p>
            <Rate rate={rate} />
            <div className="producer-private-profile__info__buttons">
              <Button content="Editer mon profil" onClick={editProfile} />
              <Button content="Supprimer mon compte producteur" className="button--warning" />
            </div>

          </div>
        </div>
        <div className="producer-private-profile__map">
          <Carte adress={fullAddress} />
        </div>

        <div className="producer-private-profile__description">
          <h2 className="producer-private-profile__subtitle">Description générale</h2>
          <p>{descriptionPro}</p>
        </div>

        <div className="producer-private-profile__products">
          <h2 className="producer-private-profile__subtitle">
            Mes produits
          </h2>
          <ProductAdd />
          {products.map((item) => (
            <Product
              key={item.name}
              productName={item.name}
              price={item.price}
              productImg={item.image}
              iri={item['@id']}
              editable
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

PrivateProducer.propTypes = {
  fetchProducer: PropTypes.func.isRequired,
  companyPro: PropTypes.string,
  imagePro: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  websitePro: PropTypes.string,
  rate: PropTypes.number,
  descriptionPro: PropTypes.string,
  addressPro: PropTypes.object,
  products: PropTypes.array,
  id: PropTypes.string.isRequired,
};

PrivateProducer.defaultProps = {
  companyPro: '',
  imagePro: '',
  firstname: '',
  lastname: '',
  websitePro: '',
  rate: null,
  descriptionPro: '',
  addressPro: {},
  products: [],
};

export default PrivateProducer;
