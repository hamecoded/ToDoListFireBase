import * as actionTypes from '../actionTypes';

const initialState =  [
  { id: 0, hex: '#dadada', label: 'this is the 0 item' },
  { id: 1, hex: '#999999', label: 'this is the 1 item' },
  { id: 2, hex: '#df8888', label: 'this is the 2 item' }
];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ITEM_DELETE:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.ITEM_ADD:
      return state.concat(action.payload.item);
    case actionTypes.ITEMS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default itemsReducer;