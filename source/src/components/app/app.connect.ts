import App from './app';
import {ActionCreator as DataActionCreator} from '@root/reducer/data/actions';
import {getAppState, getErrors} from '@root/reducer/main/selectios';
import {getAuthorizationStatus, getAuthInfo} from '@root/reducer/user/selects';
import {
  getDetailOfferId,
  getCurrentCity,
  getOffersInCurrentCity,
  getCities,
} from '@root/reducer/data/selectors';

import {Operation as DataOperation} from '@root/reducer/data/operations';
import {Operation as UserOperation} from '@root/reducer/user/operations';
import {connect} from 'react-redux';

export const mapStateToProps = (state) => ({
  offers: getOffersInCurrentCity(state),
  appState: getAppState(state),
  authInfo: getAuthInfo(state),
  currentCity: getCurrentCity(state),
  detailOfferId: getDetailOfferId(state),
  cities: getCities(state),
  authorizationStatus: getAuthorizationStatus(state),
  errors: getErrors(state),
});

export const mapDispatchToProps = (dispatch) => ({
  initStore(id) {
    dispatch(DataOperation.setInitialStore(id));
  },
  onTitleClick(id) {
    dispatch(DataOperation.setDetailState(id));
  },
  onLocationClick(city, oldCity) {
    dispatch(DataActionCreator.changeCurrentCity(city, oldCity));
  },
  login(authInfo) {
    dispatch(UserOperation.login(authInfo));
  },
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  },
  uploadComment(id, review) {
    dispatch(DataOperation.uploadCommentForDetail(id, review));
  },
  onChangeFavorite(id, isFavorite, isNear) {
    dispatch(UserOperation.changeFavorite(id, isFavorite, isNear));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
