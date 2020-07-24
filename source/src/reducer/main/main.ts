import {ActionType} from './actions';
import {AppState} from '@root/types';
import {extend} from '@root/utils/utils';

const initialState = {
  appState: AppState.PENDING,
  errors: {}
};

/**
 * Sets to the state new values
 *
 * @param {object} state
 * @param {object} action
 *
 * @return {object} new state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APP_STATE_PENDING:
      return extend(state, {appState: AppState.PENDING});

    case ActionType.SET_APP_STATE_READY:
      return extend(state, {appState: AppState.READY});

    case ActionType.SET_APP_STATE_LOADING:
      return extend(state, {appState: AppState.LOADING});

    case ActionType.SET_APP_STATE_SENT:
      return extend(state, {appState: AppState.SENT});

    case ActionType.SET_ERROR_MESSAGE:
      return extend(state, {errors: action.payload});

    default:
      return state;
  }
};
