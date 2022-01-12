import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from "./Reducers/index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = compose(
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, composeEnhancers);

export default store