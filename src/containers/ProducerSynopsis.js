// Npm Import
import { connect } from 'react-redux';

// Local Import
import ProducerSynopsis from 'src/components/Producers/ProducerSynopsis';

// Action Creators
import {
  fetchTags,
} from 'src/actions/tags';

import { fetchAddressesPro} from 'src/actions/producers';

import { fetchGeometry } from 'src/actions/carte';
// map...
const mapStateToProps = (state) => ({
  producersTags: state.producers.producersTags,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: (tagsIriArray, producerId) => dispatch(fetchTags(tagsIriArray, producerId)),
  fetchAddressesPro: (address, producerId) => dispatch(fetchAddressesPro(address, producerId)),
  fetchGeometry: (address, reset) => dispatch(fetchGeometry(address, reset)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ProducerSynopsis);
