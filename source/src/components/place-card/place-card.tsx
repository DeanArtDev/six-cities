import {getRatingStars} from '@root/utils/utils';
import * as React from 'react';
import {Offer} from '@root/types';
import {PlacesClass} from '@root/types';

const ACTIVE_FAVORITE_CLASS = ` place-card__bookmark-button--active`;

type Props = {
  offer: Offer;
  onChangerOfferCoordinate: (coordinates: Array<number> | null) => void;
  onChangeDetailOfferId: (id: number | null) => void;
  onTitleClick: () => void;
  onChangeFavorite: (id: number, isFavorite: boolean, isNear: boolean) => void;
  isNear: boolean;
}

const PlaceCard: React.FC<Props> = (props: Props) => {
  const {offer, onChangerOfferCoordinate, onChangeDetailOfferId, onTitleClick, onChangeFavorite, isNear} = props;
  const {title, price, typeHousing, prevImage, isPremium, rating, isFavorite, id} = offer;

  return (
    <article
      className={`${isNear ? PlacesClass.NEAR_CARD : PlacesClass.CITIES_CARD } place-card`}
      onMouseEnter={() => {
        onChangeDetailOfferId(offer.id);
        onChangerOfferCoordinate(offer.location.coordinates);
      }}
      onMouseLeave={() => {
        onChangeDetailOfferId(null);
        onChangerOfferCoordinate(null);
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}

      <div className={`${isNear ? PlacesClass.NEAR_WRAPPER : PlacesClass.CITIES_WRAPPER} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={prevImage}
            width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b
              className="place-card__price-value">
              &euro;{price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button button${isFavorite ? ACTIVE_FAVORITE_CLASS : ``}`}
            type="button"
            onClick={(evt) => {
              evt.preventDefault();
              onChangeFavorite(id, isFavorite, isNear);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={`#icon-bookmark`} />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingStars(rating)}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
          onClick={(evt) => {
            evt.preventDefault();
            onTitleClick();
          }}
        >
          <a href={`/detail.html`}>
            {title}
          </a>
        </h2>
        <p
          className="place-card__type">
          {typeHousing}
        </p>
      </div>
    </article>
  );
};

export default PlaceCard;
