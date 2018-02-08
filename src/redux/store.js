import { createStore, compose, applyMiddleware } from 'redux';

// middlewares
import firebaseMiddleare from './middlewares/firebaseMiddleware';

// root reducer
import rootReducer from './reducers/rootReducer';

const middlewares = [firebaseMiddleare];

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const initialState = {};
const store = createStore(rootReducer, initialState, storeEnhancers);

export default store;