import { fetchProducts } from "../../../api";

export const loadProductsAction = (newProduct) => async (dispatch, getState) => {
    // await fetchProducts()
    dispatch({
        type: 'LOAD_PRODUCTS',
            payload: newProduct,
    })
}

// export const loadProductsAction = (newProduct) => async dispatch => {
//     return {
//         type: 'LOAD_PRODUCTS',
//         payload: newProduct,
//     }
// }
//