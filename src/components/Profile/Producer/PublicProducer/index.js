import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Page from 'src/components/Parts/Page';
import Button from 'src/components/Parts/Button';
import Rate from 'src/components/Parts/Rate';
import Description from 'src/components/Profile/Description';
import Carte from 'src/containers/Carte';
import Product from 'src/containers/Product';

// Selectors
import { slugifyText } from 'src/selectors';
// STYLES
import './styles.scss';

const PublicProducer = ({
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
  iri,
  loadDiscussion,
}) => {
  // console.log('IRI', iri);
  useEffect(() => fetchProducer(id), []);
  const fullAddress = `${addressPro.streetNumber} ${addressPro.type} ${addressPro.streetName} ${addressPro.city} ${addressPro.postCode} ${addressPro.country}`;
  return (
    <Page title={companyPro}>
      <div className="producer-public-profile">
        <div className="producer-public-profile__info">
          <img className="producer-public-profile__info__picture" src={imagePro} alt={companyPro} />
          <div className="producer-public-profile__info__names">
            <p>{firstname} {lastname}</p>
            <p>Site internet:&nbsp;
              <a className="producer-public-profile__link" href={websitePro}>
                {websitePro}
              </a>
            </p>
            <Rate rate={rate} />
            <Link to={`/messages/${slugifyText(companyPro)}`}>
              <Button content="Envoyer un message" onClick={loadDiscussion} onClickParam={iri} />
            </Link>
          </div>
        </div>
        <div className="producer-public-profile__map">
          <Carte adress={fullAddress} />
        </div>

        <Description title="Description générale" content={descriptionPro} />

        <div className="producer-public-profile__products">
          <h2 className="producer-public-profile__subtitle">Mes produits</h2>
          {products.map((item) => (
            <Product
              key={item.id}
              productName={item.name}
              price={item.price}
              productImg={item.image}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

PublicProducer.propTypes = {
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
  iri: PropTypes.string,
  loadDiscussion: PropTypes.func.isRequired,
};

PublicProducer.defaultProps = {
  companyPro: '',
  imagePro: '',
  firstname: '',
  lastname: '',
  websitePro: '',
  rate: null,
  descriptionPro: '',
  addressPro: {},
  products: [],
  iri: '',
};

export default PublicProducer;
