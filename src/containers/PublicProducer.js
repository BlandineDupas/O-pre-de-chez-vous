// Npm Import
import { connect } from 'react-redux';

// Local Import
import PublicProducer from 'src/components/Profile/Producer/PublicProducer';

// PICTURES
import producerImg from 'src/assets/img/profile.jpg';

// Action Creators
import {
  fetchProducer,
} from 'src/actions/producers';

import { loadDiscussion } from 'src/actions/messages';

// PICTURES
import images from 'src/assets/img/Camembert.jpg';

// map...
const mapStateToProps = (state) => ({
  imagePro: state.producers.producer.imagePro,
  companyPro: state.producers.producer.companyPro,
  firstname: state.producers.producer.firstname,
  lastname: state.producers.producer.lastname,
  websitePro: state.producers.producer.websitePro,
  rate: 3,
  descriptionPro: state.producers.producer.descriptionPro,
  addressPro: state.producers.producer.addressPro,
  products: state.producers.producer.productsData,
  iri: state.producers.producer['@id'],
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducer: (id) => dispatch(fetchProducer(id)),
  loadDiscussion: (addresseeIri) => dispatch(loadDiscussion(addresseeIri)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(PublicProducer);
