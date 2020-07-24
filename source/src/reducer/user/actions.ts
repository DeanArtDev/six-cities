import AuthInfoAdapter from '@root/adapters/auth-info-adapter';
import {removeFromFavorite} from '@root/reducer/user/selects';

export enum ActionType {
  SET_STATUS_AUTH = `SET_STATUS_AUTH`,
  SET_FAVORITE_OFFERS = `SET_FAVORITE_OFFERS`,
  SET_STATUS_NOT_AUTH = `SET_USER_NOT_AUTH`,
  SET_USER_DATA = `SET_USER_DATA`,
}

export const ActionCreator = {
  setStatusAuth: () => ({
    type: ActionType.SET_STATUS_AUTH,
  }),
  setStatusNotAuth: () => ({
    type: ActionType.SET_STATUS_NOT_AUTH,
  }),
  setAuthInfo: (authInfo) => ({
    type: ActionType.SET_USER_DATA,
    payload: AuthInfoAdapter.adaptAuthInfo(authInfo),
  }),
  setFavoriteOffers: (loadedOffers) => ({
    type: ActionType.SET_FAVORITE_OFFERS,
    payload: loadedOffers,
  }),
  removeFavorite: (state, offer) => ({
    type: ActionType.SET_FAVORITE_OFFERS,
    payload: removeFromFavorite(state, offer),
  }),
};
