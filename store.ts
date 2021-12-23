import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from "./Services/Reducers/index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store