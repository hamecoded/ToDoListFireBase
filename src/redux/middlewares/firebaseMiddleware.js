import * as actionTypes from '../actionTypes';
import firebaseManager from '../../firebaseManager';

const objToArr = (obj) => {
  const result = [];

  for (const key in obj) {
    result.push(Object.assign({}, obj[key], {
      id: key
    }));
  }

  return result;
};

const instance = new firebaseManager();
const firebaseMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case actionTypes.ITEMS_RESET:
      instance.reset();
      break;
    case actionTypes.ITEM_DELETE:
      instance.remove(action.payload.id)
        .then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
      break;
    case actionTypes.ITEM_ADD:
      instance.add(action.payload.item);
      break;
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
          payload: {data: objToArr(data)}
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