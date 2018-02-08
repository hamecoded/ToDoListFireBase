import * as actionTypes from '../actionTypes';

export const initialState =  {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;