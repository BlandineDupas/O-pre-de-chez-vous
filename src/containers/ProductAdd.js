// Npm Import
import { connect } from 'react-redux';

// Local Import
import ProductAdd from 'src/components/Profile/Producer/ProductAdd';

// Action Creators
import { addProductSubmit, changeAddProductInputValue } from 'src/actions/products';

// map...
const mapStateToProps = (state) => ({
  productName: state.productAdd.name,
  price: state.productAdd.price,
});

const mapDispatchToProps = (dispatch) => ({
  addProductSubmit: () => dispatch(addProductSubmit()),
  changeAddProductInputValue: (value, name) => dispatch(changeAddProductInputValue(value, name)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);
