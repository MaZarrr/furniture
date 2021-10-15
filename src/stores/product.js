// // import { createReducer } from '../store';
//
// const initialState = {
//     list: [],
// };
//
// const actions = {
//     'ADD_CAT': addCat,
// };
//
// function addCat(state, action) {
//     return {
//         list: [...state.list, action.payload],
//     }
// }
//
// export default createReducer(initialState, actions);

const initialState = { value: 0 }

function catReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CAT':
            return { ...state, value: state.value + 1 }
        case 'decrement':
            return { ...state, value: state.value - 1 }
        case 'incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state
    }
}

export default catReducer









// import { writable } from "svelte/store";
// import localProducts from "../../localProducts";
//
// const store = writable([...localProducts])
//
// // subscribe
// // set
// // update
//
// export default store;