import { connect } from 'svelte-redux-connect';
import { createSelector } from "reselect";
import { loadProductsAction } from "../../redux/reducers/products/products.actions";

// Import Svelte component
import Products from '../../routes/Products.svelte';

const loadProduct = state => state.products

const selectUndoneProducts = createSelector(
    [loadProduct],
    ({ list }) => list.filter(product => !product.select)
);

const mapDispatchToProps = {
    loadProducts: loadProductsAction
};

const mapStateToProps = state => ({
    products: selectUndoneProducts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
