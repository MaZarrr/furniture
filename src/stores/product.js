// import { createReducer } from '../store';
//
const initialState = {
    list: [],
};

const catsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_CAT':
            return {
                ...state,
            }

        default:
            return state
    }
}

export default catsReducer;
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

// const initialState = { value: 0 }

// function catReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_CAT':
//             return { ...state, value: state.value + 1 }
//         default:
//             return state
//     }
// }
//
// export default catReducer









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