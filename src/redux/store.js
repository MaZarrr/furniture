import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./root-reducer";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import '../../patchProcess'

const middlewares = [thunk, logger];

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));