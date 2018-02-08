import * as actionTypes from '../actionTypes';

export const initialState =  [
  { hex: '#dadada', label: 'this is the default sample item' }
];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ITEMS_RESET:
    //   return initialState;
    case actionTypes.ITEMS_FETCH_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default itemsReducer;