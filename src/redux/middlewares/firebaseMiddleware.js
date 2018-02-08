import * as actionTypes from '../actionTypes';
import firebaseManager from '../../firebaseManager';

const instance = new firebaseManager();
const firebaseMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case actionTypes.ITEMS_FETCH:
      // only once
      // instance.get('/items').then((snapshot) => {
      //   dispatch({
      //     type: actionTypes.ITEMS_FETCH_SUCCESS,
      //     payload: {data: snapshot.val()}
      //   });
      // });

      // subscribe
      const callback = (data) => {
        dispatch({
          type: actionTypes.ITEMS_FETCH_SUCCESS,
          payload: {data}
        });
      };

      instance.subscribe('/items', callback);
      break;
    default:
      break;
  }

  next(action);
};

export default firebaseMiddleware;