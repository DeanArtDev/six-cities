import {ActionCreator} from './actions';
import {AppState} from '@root/types';
import {ErrorType} from '@root/types';
import {reducer as mainReducer} from './main';
import {extend} from '@root/utils/utils';

describe(`MainReducer: `, () => {

  const state = {
    appState: AppState.PENDING,
    errors: {},
  };

  describe(`State: `, () => {
    it(`Reducer without additional parameters should return initial state`, () => {
      expect(mainReducer(void 0, {}))
        .toEqual(state);
    });
  });

  describe(`Action creators: `, () => {
    it(`Reducer should set app state ready`, () => {
      expect(mainReducer(state, ActionCreator.setAppStateReady()))
        .toEqual(extend(state, {appState: AppState.READY}));
    });
    it(`Reducer should set app state pending`, () => {
      expect(mainReducer(state, ActionCreator.setAppStatePending()))
        .toEqual(extend(state, {appState: AppState.PENDING}));
    });
    it(`Reducer should set app state loading`, () => {
      expect(mainReducer(state, ActionCreator.setAppStateLoading()))
        .toEqual(extend(state, {appState: AppState.LOADING}));
    });
    it(`Reducer should set app state sent`, () => {
      expect(mainReducer(state, ActionCreator.setAppStateSent()))
        .toEqual(extend(state, {appState: AppState.SENT}));
    });
    it(`Reducer should set errors`, () => {
      expect(mainReducer(state, ActionCreator.setErrorMessage(ErrorType.FAVORITE, `error`)))
        .toEqual(extend(state, {errors: {
          [ErrorType.FAVORITE]: `error`,
        }}));
    });
  });
});
