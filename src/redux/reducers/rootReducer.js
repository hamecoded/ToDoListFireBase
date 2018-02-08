import { combineReducers } from 'redux';

// reducers
import items from './itemsReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  items,
  user
});

export default rootReducer;