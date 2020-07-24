import {extend} from '@root/utils/utils';
import {ActionType} from './actions';

const initialState = {
  offers: [],
  detailOfferId: null,
  detailOffer: {},
  cities: [],
  currentCity: ``,
  commentsDetailOffer: [],
  neighbourOffers: [],
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
    case ActionType.SET_OFFERS:
      return extend(state, {offers: action.payload});

    case ActionType.SET_DETAIL_OFFER_ID:
      return extend(state, {detailOfferId: action.payload});

    case ActionType.SET_DETAIL_OFFER_BY_ID:
      return extend(state, {detailOffer: action.payload});

    case ActionType.SET_CITIES:
      return extend(state, {cities: action.payload});

    case ActionType.SET_INITIAL_CURRENT_CITY:
      return extend(state, {currentCity: action.payload});

    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {currentCity: action.payload});

    case ActionType.SET_COMMENTS_DETAIL_OFFER:
      return extend(state, {commentsDetailOffer: action.payload});

    case ActionType.SET_NEIGHBOUR_OFFERS:
      return extend(state, {neighbourOffers: action.payload});

    default:
      return state;
  }
};
