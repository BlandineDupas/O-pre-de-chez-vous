// Npm Import
import { connect } from 'react-redux';

// Local Import
import Tag from 'src/components/Producers/ProducerSynopsis/Tag';

// Action Creators

// map...
const mapStateToProps = (state) => ({
  tags: state.tags.tags,
});

const mapDispatchToProps = {};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Tag);
