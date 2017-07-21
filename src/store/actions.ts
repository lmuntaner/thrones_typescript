import { Action } from 'redux';

import House from '../models/House';

export interface AddHousesAction extends Action {
  houses: Array<House>,
};

export const ADD_HOUSES = 'addHouses';

export type Actions = AddHousesAction;

export const addHouses = (houses: Array<House>): AddHousesAction => ({
  type: ADD_HOUSES,
  houses,
});
