import {NameSpace} from '@root/types';
import {createSelector} from "reselect";
import OfferAdapter from '@root/adapters/offer-adapter';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
export const getAdaptedFavoriteOffers = (state) => OfferAdapter.adaptOffers(state[NameSpace.USER].favoriteOffers);
export const getFavoriteOffers = createSelector(
    getAdaptedFavoriteOffers,
    (offers) => {
      const cities = [...new Set(offers.map((offer) => offer.city.name))];
      return cities.reduce((acc, city: string) => {
        acc[city] = offers.filter((offer) => offer.city.name === city);
        return acc;
      }, {});
    }
);
export const removeFromFavorite = (state, offer) => {
  const offers = state[NameSpace.USER].favoriteOffers;
  const index = offers.findIndex(((item) => item.id === offer.id));
  return [].concat(offers.slice(0, index), offers.slice(index + 1));
};


