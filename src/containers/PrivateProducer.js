// Npm Import
import { connect } from 'react-redux';

// Local Import
import PrivateProducer from 'src/components/Profile/Producer/PrivateProducer';

// PICTURES
import producerImg from 'src/assets/img/profile.jpg';

// Action Creators
import {
  fetchProducer,
} from 'src/actions/producers';

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
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducer: (id) => dispatch(fetchProducer(id)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(PrivateProducer);
