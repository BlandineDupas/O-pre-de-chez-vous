// Npm Import
import { connect } from 'react-redux';

// Local Import
import Product from 'src/components/Profile/Producer/Product';

// Action Creators
import { deleteProduct } from 'src/actions/products';

// map...
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Product);
