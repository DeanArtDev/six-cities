export enum ActionType {
  SET_APP_STATE_READY = `SET_APP_STATE_READY`,
  SET_APP_STATE_PENDING = `SET_APP_STATE_PENDING`,
  SET_APP_STATE_LOADING = `SET_APP_STATE_LOADING`,
  SET_ERROR_MESSAGE = `SET_ERROR_MESSAGE`,
  SET_APP_STATE_SENT = `SET_APP_STATE_SENT`,
}

export const ActionCreator = {
  setAppStateReady: () => ({
    type: ActionType.SET_APP_STATE_READY
  }),
  setAppStatePending: () => ({
    type: ActionType.SET_APP_STATE_PENDING
  }),
  setAppStateLoading: () => ({
    type: ActionType.SET_APP_STATE_LOADING
  }),
  setAppStateSent: () => ({
    type: ActionType.SET_APP_STATE_SENT
  }),
  setErrorMessage: (dataOwnership, err) => ({
    type: ActionType.SET_ERROR_MESSAGE,
    payload: {
      [dataOwnership]: err,
    }
  }),
};
