import { combineReducers } from 'redux';

// reducers
import items from './itemsReducer';

const rootReducer = combineReducers({
  items
});

export default rootReducer;