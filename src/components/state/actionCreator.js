import * as types from './actionTypes';
import uuid from 'uuid';

export function addFeature(name, price) {
  return {
    type: types.ADD_FEATURE,
    payload: {
      id: uuid(),
      name: name,
      price: price,
    },
  };
}

export function removeFeature(id) {
  return {
    type: types.REMOVE_FEATURE,
    payload: {
      id: id,
    },
  };
}
