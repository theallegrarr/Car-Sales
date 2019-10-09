import * as types from './actionTypes';

export const additionalPrice = 0;
export const car = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  };

export const stores = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]

const initialState = {
  additionalPrice: additionalPrice,
  car: car,
  stores: stores,
}

export function storeReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return {
        ...state,
        [state.additionalPrice]: state.additionalPrice+=action.payload.price,
        [state.car.features]: state.car.features.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        })
      };
    case types.REMOVE_FEATURE:
      const newFeatures=state.car.features.filter((a) => {
        return  a.id !== action.payload.id;
        });
      
      return {
          ...state,
          [state.additionalPrice]: state.additionalPrice-=action.payload.price,
          [state.car.features]: state.car.features=newFeatures,
        };
    default:
      return state;
  };
}