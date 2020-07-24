import {ActionType} from './actions';
import {extend} from '@root/utils/utils';
import {Authorization} from '@root/types';

const initialState = {
  authorizationStatus: null,
  authInfo: null,
  favoriteOffers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_AUTH:
      return extend(state, {authorizationStatus: Authorization.AUTH});

    case ActionType.SET_STATUS_NOT_AUTH:
      return extend(state, {authorizationStatus: Authorization.NOT_AUTH});

    case ActionType.SET_USER_DATA:
      return extend(state, {authInfo: action.payload});

    case ActionType.SET_FAVORITE_OFFERS:
      return extend(state, {favoriteOffers: action.payload});

    default:
      return state;
  }
};
