import { Action, combineReducers, createStore, Store } from 'redux';

import { Actions, AddHousesAction, ADD_HOUSES } from './actions';
import House from '../models/House';

interface HousesState {
  [url: string]: House,
};

export interface State {
  houses: HousesState,
};

const houses = (state: HousesState = {}, action: Actions ): HousesState => {
  switch (action.type) {
    case ADD_HOUSES: {
      const newState = { ...state };
      action.houses.forEach((house: House): void => {
        newState[house.url] = house;
      });

      return newState;
    }
    default:
      return state;
  }
};

const reducer = combineReducers<State>({
  houses,
});

const store: Store<State> = createStore<State>(reducer);

export default store;
