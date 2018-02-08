import * as actionTypes from '../actionTypes';

export const itemDelete = (id) => ({
  type: actionTypes.ITEM_DELETE,
  payload: {
    id
  }
});

export const itemAdd = (item) => ({
  type: actionTypes.ITEM_ADD,
  payload: {
    item
  }
});

export const resetItems = () => ({
  type: actionTypes.ITEMS_RESET
});