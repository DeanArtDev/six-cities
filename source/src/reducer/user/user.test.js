import {reducer as userReducer} from './user.ts';
import {ActionCreator, ActionType} from './actions.ts';
import {ActionType as MainActionType} from '@root/reducer/main/actions';
import {Operation} from './operations.ts';
import API from '@root/api';
import MockAdapter from 'axios-mock-adapter';
import {TestMock} from '@root/test-mock/test-mock';
import {extend} from "@root/utils/utils";

describe(`UserReducer: `, () => {

  let initialState = {
    authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
    authInfo: null,
    favoriteOffers: [],
  };

  describe(`Reducer should return initialState: `, () => {

    it(`Reducer without additional parameters should return initial state`, () => {
      expect(userReducer(void 0, {}))
        .toEqual(initialState);
    });
  });

  describe(`Action creators: `, () => {

    it(`Action creator set status authorized`, () => {
      expect(userReducer(initialState, ActionCreator.setStatusAuth()))
        .toEqual(extend(initialState, {authorizationStatus: TestMock.authorizationStatus.AUTH}));
    });
    it(`Action creator set status not authorized`, () => {
      expect(userReducer(initialState, ActionCreator.setStatusNotAuth()))
        .toEqual(extend(initialState, {authorizationStatus: TestMock.authorizationStatus.NOT_AUTH}));
    });
    it(`Action creator set authorization info`, () => {
      expect(userReducer(initialState, ActionCreator.setAuthInfo(TestMock.authInfoNotAdapted)))
        .toEqual(extend(initialState, {authInfo: TestMock.authInfo}));
    });
    it(`Action creator set favorite offers`, () => {
      expect(userReducer({}, ActionCreator.setFavoriteOffers(TestMock.offers)))
        .toEqual({favoriteOffers: TestMock.offers});
    });
    it(`Action creator remove from favorite offers`, () => {
      initialState = {
        USER: {
          favoriteOffers: TestMock.adaptedOffers,
        }
      };
      expect(userReducer({}, ActionCreator.removeFavorite(initialState, TestMock.adaptedOffers[0])))
        .toEqual({favoriteOffers: [TestMock.adaptedOffers[1]]});
    });
  });

  describe(`Operations should work correctly`, () => {

    const api = new API(() => {});
    const adapterAPI = new MockAdapter(api._api);

    it(`Should make a correct API request authorization`, () => {
      const checkAuth = Operation.checkAuth();
      const dispatch = jest.fn();

      adapterAPI
        .onGet(`/login`)
        .reply(200, [{fake: true}]);

      return checkAuth(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.SET_STATUS_AUTH,
          });
        });

    });
    it(`Should make a correct API login`, () => {
      const login = Operation.login(TestMock.authInfoNotAdapted);
      const dispatch = jest.fn();

      adapterAPI
        .onPost(`/login`)
        .reply(200, TestMock.authInfoNotAdapted);

      return login(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(4);
          expect(dispatch).toHaveBeenNthCalledWith(4, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
    it(`Should make a correct API changeFavoriteStatus`, () => {
      const changeFavorite = Operation.changeFavorite(`33`, false, false);
      const dispatch = jest.fn();

      adapterAPI
        .onPost(`/favorite/33/0`)
        .reply(200, TestMock.adaptedOffers[0]);

      return changeFavorite(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
    it(`Should make a correct API loadFavoriteOffers`, () => {
      const loadFavoriteOffers = Operation.loadFavoriteOffers();
      const dispatch = jest.fn();

      adapterAPI
        .onGet(`/favorite`)
        .reply(200, [{fake: true}]);

      return loadFavoriteOffers(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(3);
          /**
           * .toHaveBeenNthCalledWith(*, param) в param - передаются данные номера nthCall
           */
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: MainActionType.SET_APP_STATE_LOADING,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.SET_FAVORITE_OFFERS,
            payload: [{fake: true}],
          });
          expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
    it(`Should make a correct API changeFavoriteList`, () => {
      const changeFavoriteList = Operation.changeFavoriteList(44);
      const dispatch = jest.fn();

      adapterAPI
        .onPost(`/favorite/44/1`)
        .reply(200, [{fake: true}]);

      return changeFavoriteList(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: MainActionType.SET_APP_STATE_LOADING,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
  });
});


