import '../patchProcess'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import catReducer from './stores/product';

// export const createReducer = (initialState, handlers) => {
//     return (state = initialState, action) => {
//         return (handlers[action.type] && handlers[action.type](state, action)) || state;
//     };
// };

const rootReducer = combineReducers({
    cats: catReducer,
});
export default createStore(rootReducer, {});