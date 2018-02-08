import { createStore, compose, applyMiddleware } from 'redux';

// root reducer
import rootReducer from './reducers/rootReducer';

const storeEnhancers = compose(
  applyMiddleware()
);

const initialState = {};
const store = createStore(rootReducer, initialState, storeEnhancers);

export default store;