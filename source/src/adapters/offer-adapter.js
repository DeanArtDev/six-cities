/**
 * Adapts from server data to Dev data
 *
 * @constructor
 * @method adaptOffer
 * @method adaptOffers
 * @param {object} offer
 * @return {object} OfferAdapter
 * */
export default class OfferAdapter {
  constructor(offer) {
    this.prevImage = offer.preview_image;
    this.city = {
      coordinates: [offer.city.location.latitude, offer.city.location.longitude],
      zoom: offer.city.location.zoom,
      name: offer.city.name,
    };
    this.location = {
      coordinates: [offer.location.latitude, offer.location.longitude],
      zoom: offer.location.zoom,
    };
    this.features = offer.goods;
    this.bedrooms = offer.bedrooms;
    this.maxAdults = offer.max_adults;
    this.rating = offer.rating;
    this.isPremium = offer.is_premium;
    this.title = offer.title;
    this.price = offer.price;
    this.typeHousing = offer.type;
    this.images = offer.images;
    this.description = offer.description;
    this.id = offer.id;
    this.isFavorite = offer.is_favorite;
    this.host = {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name
    };
  }

  static adaptOffer(offer) {
    return new OfferAdapter(offer);
  }
  static adaptOffers(offers) {
    return offers.map((offer) => OfferAdapter.adaptOffer(offer));
  }
}
