import { connect } from 'react-redux';
import Carte from 'src/components/Carte';
import { fetchGeometry } from 'src/actions/carte';

const mapStateToProps = (state) => ({
  geometries: state.carte.geometry,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchGeometry: (geometry) => dispatch(fetchGeometry(geometry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carte);
