import {OffersSortTypes} from '@root/types';

const sortOffers = (typeSort, offers) => {
  switch (typeSort) {
    case OffersSortTypes.LOW_TO_HIGH:
      return offers
        .slice()
        .sort((max, min) => max.price - min.price);

    case OffersSortTypes.HIGH_TO_LOW:
      return offers
        .slice()
        .sort((max, min) => min.price - max.price);

    case OffersSortTypes.RATED_FIRST:
      return offers
        .slice()
        .sort((max, min) => min.rating - max.rating);

    default:
      return offers;
  }
};

export default sortOffers;
