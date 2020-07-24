import {NameSpace} from '@root/types';
import OfferAdapter from '@root/adapters/offer-adapter';
import CommentAdapter from '@root/adapters/comment-adapter';
import {createSelector} from 'reselect';

const QTY_REVIEWS = 10;

/**
 * Selectors for mapStateToProps
 **/

export const getDetailOfferId = (state) => state[NameSpace.DATA].detailOfferId;
export const getCommentsDetailOffer = (state) => {
  const comments = state[NameSpace.DATA].commentsDetailOffer;
  return CommentAdapter.adaptComments(comments);
};
export const getNeighbourOffers = (state) => OfferAdapter.adaptOffers(state[NameSpace.DATA].neighbourOffers);
export const getDetailOffer = (state) => state[NameSpace.DATA].detailOffer;
export const getCities = (state) => state[NameSpace.DATA].cities;
export const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;
export const getAdaptedOffers = (state) => OfferAdapter.adaptOffers(state[NameSpace.DATA].offers);
export const getOffersInCurrentCity = (state) => getAdaptedOffers(state)
  .filter((offer) => {
    return offer.city.name === state[NameSpace.DATA].currentCity;
  });
export const getSortedCommentUpToDate = createSelector(
    getCommentsDetailOffer,
    (comments) => {
      const updateComments = (comments.length > QTY_REVIEWS) ? comments.slice(-QTY_REVIEWS) : comments;
      return updateComments
      .slice()
      .sort((min, max) => Date.parse(max.date) - Date.parse(min.date));
    }
);

/**
 * Selectors for actions
 **/

export const getDetailOfferById = createSelector(
    ({id, offers}) => ({
      offers: OfferAdapter.adaptOffers(offers),
      id
    }),
    ({id, offers}) => {
      return offers.filter((offer) => offer.id === id).shift();
    }
);
export const getCitiesByOffers = createSelector(
    (offers) => OfferAdapter.adaptOffers(offers),
    (adaptedOffers) => [...new Set(adaptedOffers.map((offer) => offer.city.name))]
);
export const isSameCity = (city, oldCity) => {
  return city === oldCity ? oldCity : city;
};
export const changeOffers = (state, offer) => {
  const offers = state[NameSpace.DATA].offers;
  const index = offers.findIndex(((item) => item.id === offer.id));
  return [].concat(offers.slice(0, index), offer, offers.slice(index + 1));
};
export const changeNeighbourOffers = (state, offer) => {
  const offers = state[NameSpace.DATA].neighbourOffers;
  const index = offers.findIndex(((item) => item.id === offer.id));
  return [].concat(offers.slice(0, index), offer, offers.slice(index + 1));
};
