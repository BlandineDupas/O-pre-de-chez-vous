import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Button from 'src/components/Parts/Button';
import Tag from './Tag';

import './styles.scss';

const ProducerSynopsis = ({
  id,
  company,
  tags,
  producersTags,
  imagePro,
  fetchTags,
  addressIri,
  fetchAddressesPro,
  address,
  fetchGeometry,
}) => {
  useEffect(() => {
    fetchTags(tags, id);
    fetchAddressesPro(addressIri, id);
  }, []);
  return (
    <div className="producer-synopsis" onClick={() => fetchGeometry(`${address.city}, ${address.postCode}, ${address.country}`, true)}>
      <div className="producer-synopsis__content">
        <div className="producer-synopsis__identity">
          <p className="producer-synopsis__name">{company}</p>
          <div className="producer-synopsis__pic" style={{ backgroundImage: `url(${imagePro})` }} />
        </div>
        <div className="producer-synopsis__products">
          <p className="producer-synopsis__products--title">Produits :</p>
          {producersTags[id]
          && producersTags[id].map((tag) => (
            <Tag key={tag.id} tagName={tag.name} />))}
        </div>
      </div>
      <Link to={`/producer/profile/${id}`}>
        <Button content="Accéder à la fiche producteur" />
      </Link>
    </div>
  );
};
ProducerSynopsis.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string,
  imagePro: PropTypes.string,
  tags: PropTypes.array.isRequired,
  producersTags: PropTypes.any.isRequired,
  fetchTags: PropTypes.func.isRequired,
  address: PropTypes.object,
  addressIri: PropTypes.array.isRequired,
  fetchAddressesPro: PropTypes.func.isRequired,
  fetchGeometry: PropTypes.func.isRequired,
};

ProducerSynopsis.defaultProps = {
  imagePro: '',
  address: {},
  company: '',
};

export default ProducerSynopsis;
