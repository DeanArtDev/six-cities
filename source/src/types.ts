export enum AppState {
  PENDING = `pending`,
  READY = `ready`,
  LOADING = `loading`,
  SENT = `sent`,
}
export enum ErrorType {
  FAVORITE = `favorite`,
  UPLOAD_COMMENT = `uploadComment`,
  SING_IN = `singIn`,
}
export enum Authorization {
  AUTH = `AUTH`,
  NOT_AUTH = `NOT_AUTH`,
}
export enum PlacesClass {
  CITIES_LIST = `cities__places-list`,
  NEAR_LIST = `near-places__list`,
  CITIES_CARD = `cities__place-card`,
  CITIES_WRAPPER = `cities__image-wrapper`,
  NEAR_CARD = `near-places__card`,
  NEAR_WRAPPER = `near-places__image-wrapper`,
}
export enum OffersSortTypes {
  POPULAR = `Popular`,
  LOW_TO_HIGH = `Price: low to high`,
  HIGH_TO_LOW = `Price: high to low`,
  RATED_FIRST = `Top rated first`,
}
export enum NameSpace {
  MAIN = `MAIN`,
  USER = `USER`,
  DATA = `DATA`,
}
export enum FavoriteStatus {
  ON = `1`,
  OFF = `0`,
}
export enum ICON_SIZE {
  WIDTH = 30,
  HEIGHT = 40
}

export type Offer = {
  id: number,
  title: string,
  typeHousing: string,
  price: number,
  isPremium: boolean,
  features: Array<string>,
  maxAdults: number,
  bedrooms: number,
  isFavorite: boolean,
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
  city: {
    coordinates: Array<number>,
    zoom: number,
    name: string,
  },
  location: {
    coordinates: Array<number>,
    zoom: number,
  },
  description: string,
  rating: number,
  images: Array<string>,
  prevImage: string,
  isProStatus: boolean,
}
export type Errors = {
  [key: string]: string | null,
}
export type AuthInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  isProp: boolean,
}
export type SettingMap = {
  cityCoordinates: Array<number>,
  zoom: number,
}
export type CommentType = {
  id: number,
  rating: number,
  date: string,
  comment: string,
  user: {
    avatarUrl: string,
    name: string,
    id: number,
    isPro: boolean,
  },
}
export type FavoriteOffers = {
  [key: string]: Array<Offer>,
}
export type Id = number | null
