import {ActionCreator as DataActionCreator} from './actions';
import {ActionCreator as MainActionCreator} from '@root/reducer/main/actions';
import {AppRoute} from '@root/consts/consts';
import {ErrorType} from '@root/types';
import history from '@root/history';
import {NameSpace} from '@root/types';

/**
 * Manages the actions of data reducer,
 * the object is passed to the middleware
 *
 * @return {object}
 */
export const Operation = {
  /**
   * Loads offers from the server and
   * sets initial state
   *
   * @param {number} id
   *
   * @return {function(*, *, *): *} offers
   **/
  setInitialStore: (id?) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStatePending());

    return api.loadOffers()
      .then((data) => {
        dispatch(DataActionCreator.setOffers(data));
        dispatch(DataActionCreator.setCities(data));
        dispatch(DataActionCreator.setCurrentCity(data));

        if (id) {
          dispatch(DataActionCreator.setDetailOfferId(id));
          dispatch(DataActionCreator.setDetailOfferById(id, data));

          Promise.all([
            api.loadNeighbourOffers(id),
            api.loadComments(id),
          ])
            .then((detailData) => {
              dispatch(DataActionCreator.setNeighbourOffers(detailData[0]));
              dispatch(DataActionCreator.setCommentsDetailOffer(detailData[1]));
            });
        }
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
  setDetailState: (id) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStatePending());
    const offers = getState()[NameSpace.DATA].offers;

    dispatch(DataActionCreator.setDetailOfferId(id));
    dispatch(DataActionCreator.setDetailOfferById(id, offers));

    Promise.all([
      api.loadNeighbourOffers(id),
      api.loadComments(id),
    ])
      .then((data) => {
        dispatch(DataActionCreator.setNeighbourOffers(data[0]));
        dispatch(DataActionCreator.setCommentsDetailOffer(data[1]));
        history.push(AppRoute.setDetailWay(id));

        dispatch(MainActionCreator.setAppStateReady());
      });
  },
  /**
   * Uploads comment from a user to the server
   *
   * @param {string} id
   * @param {object} review
   * @return {function(*, *, *): *} comments
   **/
  uploadCommentForDetail: (id, review) => (dispatch, getState, api) => {
    dispatch(MainActionCreator.setAppStateLoading());

    return api.uploadComment(id, review)
      .then((updatedComments) => {
        dispatch(DataActionCreator.setCommentsDetailOffer(updatedComments));
        dispatch(MainActionCreator.setAppStateSent());
        dispatch(MainActionCreator.setAppStateReady());
      })
      .catch((err) => {
        dispatch(MainActionCreator.setErrorMessage(ErrorType.UPLOAD_COMMENT, err.response.data.error));
        dispatch(MainActionCreator.setAppStateReady());
      });
  },
};
