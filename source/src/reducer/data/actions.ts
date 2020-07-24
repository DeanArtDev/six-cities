import {
  changeNeighbourOffers,
  changeOffers,
  getCitiesByOffers,
  getDetailOfferById,
  isSameCity
} from '@root/reducer/data/selectors';

export enum ActionType {
  SET_OFFERS = `SET_OFFERS`,
  SET_DETAIL_OFFER_BY_ID = `SET_DETAIL_OFFER_BY_ID`,
  SET_DETAIL_OFFER_ID = `SET_DETAIL_OFFER_ID`,
  SET_CITIES = `SET_CITIES`,
  SET_INITIAL_CURRENT_CITY = `SET_INITIAL_CURRENT_CITY`,
  CHANGE_CURRENT_CITY = `CHANGE_CURRENT_CITY`,
  SET_COMMENTS_DETAIL_OFFER = `SET_COMMENTS_DETAIL_OFFER`,
  SET_NEIGHBOUR_OFFERS = `SET_NEIGHBOUR_OFFERS`,
}

export const ActionCreator = {
  setOffers: (loadedOffers) => ({
    type: ActionType.SET_OFFERS,
    payload: loadedOffers,
  }),
  changeOffers: (state, offer) => ({
    type: ActionType.SET_OFFERS,
    payload: changeOffers(state, offer),
  }),
  setDetailOfferById: (id, offers) => ({
    type: ActionType.SET_DETAIL_OFFER_BY_ID,
    payload: getDetailOfferById({id, offers}),
  }),
  setDetailOfferId: (id) => ({
    type: ActionType.SET_DETAIL_OFFER_ID,
    payload: id,
  }),
  setCities: (offers) => ({
    type: ActionType.SET_CITIES,
    payload: getCitiesByOffers(offers),
  }),
  setCurrentCity: (offers) => ({
    type: ActionType.SET_INITIAL_CURRENT_CITY,
    payload: getCitiesByOffers(offers)[0],
  }),
  changeCurrentCity: (city, oldCity) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: isSameCity(city, oldCity),
  }),
  setCommentsDetailOffer: (comments) => ({
    type: ActionType.SET_COMMENTS_DETAIL_OFFER,
    payload: comments,
  }),
  setNeighbourOffers: (offers) => ({
    type: ActionType.SET_NEIGHBOUR_OFFERS,
    payload: offers,
  }),
  changeNeighbourOffers: (state, offer) => ({
    type: ActionType.SET_NEIGHBOUR_OFFERS,
    payload: changeNeighbourOffers(state, offer),
  }),
};
