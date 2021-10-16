import { createReducer } from '../../../common/utils';
import localCategory from "../../../../localCategory";

const initialState = {
    list: localCategory,
};

const actions = {
    'LOAD_PRODUCTS': loadProducts,
};

function loadProducts(state, { type, payload }) {
    console.log(type)
    return {
        list: [...state.list, payload],
    }
}

export default createReducer(initialState, actions);