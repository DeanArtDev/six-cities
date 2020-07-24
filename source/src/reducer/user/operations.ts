import {ActionCreator as UserActionCreator} from './actions';
import {ActionCreator as MainActionCreator} from '@root/reducer/main/actions';
import {ActionCreator as DataActionCreator} from '@root/reducer/data/actions';
import {AppRoute} from '@root/consts/consts';
import {FavoriteStatus} from '@root/types';

import {ErrorType} from '@root/types';
import history from '@root/history';
import {NameSpace} from '@root/types';

const STATUS = {
  OK: 200,
  UNAUTHORIZED: 401,
};

export const Operation = {
  checkAuth: () => (dispatch, _, api) => {
    return api.checkAuth()
    .then((response) => {
        if (response.status === STATUS.OK) {
          dispatch(UserActionCreator.setAuthInfo(response.data));
          dispatch(UserActionCreator.setStatusAuth());
        }
      })
      .catch((err) => {

        if (err.response.status === STATUS.UNAUTHORIZED) {
          dispatch(UserActionCreator.setStatusNotAuth());
        }
      });
  },
  login: (authInfo) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStateLoading());

    return api.login(authInfo)
      .then((response) => {
        dispatch(UserActionCreator.setAuthInfo(response.data));
        dispatch(UserActionCreator.setStatusAuth());
        dispatch(MainActionCreator.setAppStateReady());
      })
      .catch((err) => {
        dispatch(MainActionCreator.setErrorMessage(ErrorType.SING_IN, err));
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
  changeFavorite: (id, isFavorite, isNear) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStateLoading());
    const status = isFavorite ? FavoriteStatus.OFF : FavoriteStatus.ON;

    return api.changeFavoriteStatus(id, status)
      .then((data) => {
        if (isNear) {
          dispatch(DataActionCreator.changeNeighbourOffers(getState(), data));
        }

        dispatch(DataActionCreator.changeOffers(getState(), data));
        dispatch(DataActionCreator.setDetailOfferById(id, getState()[NameSpace.DATA].offers));
        dispatch(MainActionCreator.setAppStateReady());
      })
      .catch((err) => {
        if (err.response.status === STATUS.UNAUTHORIZED) {
          history.push(AppRoute.SING_IN);
        }
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStateLoading());

    return api.loadFavoriteOffers()
      .then((data) => {
        dispatch(UserActionCreator.setFavoriteOffers(data));
        dispatch(MainActionCreator.setAppStateReady());
      })
      .catch((err) => {
        dispatch(MainActionCreator.setErrorMessage(ErrorType.FAVORITE, err));
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
  changeFavoriteList: (id) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStateLoading());

    return api.changeFavoriteStatus(id, FavoriteStatus.OFF)
      .then((data) => {
        dispatch(DataActionCreator.changeOffers(getState(), data));
        dispatch(UserActionCreator.removeFavorite(getState(), data));
        dispatch(MainActionCreator.setAppStateReady());
      })
      .catch((err) => {
        if (err.response.status === STATUS.UNAUTHORIZED) {
          history.push(AppRoute.SING_IN);
        }
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
};
