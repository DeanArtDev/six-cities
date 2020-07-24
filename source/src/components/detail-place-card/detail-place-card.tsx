import {WrapperComponent as Reviews} from '@components/reviews/reviews';
import {PlacesList} from '@components/places-list/places-list';
import {WrappedComponent as DetailMapContainer} from '@components/detail-map-container/detail-map-container';
import Header from '@components/header/header-connect';

import withMap from '@root/hocs/with-map/with-map';
import withDetailOfferId from '@root/hocs/with-detail-offer-id/with-detail-offer-id';
import withSendReview from '@root/hocs/with-send-review/with-send-review';

import {getRatingStars} from '@root/utils/utils';
import {MAX_SHOW_IMG, LIMIT_NEIGHBOURHOOD_OFFERS} from '@root/consts/consts';
import * as React from 'react';
import {AppState, CommentType, Offer, SettingMap} from '@root/types';

const PRO_STATUS_CLASS = ` property__avatar-wrapper--pro`;
const ACTIVE_FAVORITE_CLASS = ` property__bookmark-button--active`;
const DetailMapContainerWithMap = withMap(DetailMapContainer);
const PlacesListWithDetailOfferId = withDetailOfferId(PlacesList);
const ReviewsWithSend = withSendReview(Reviews);

interface Props {
  comments: Array<CommentType>;
  detailOffer: Offer;
  onTitleClick: (id: number) => void;
  onChangerOfferCoordinate: () => void;
  onChangeFavorite: (id: number, isFavorite: boolean) => void;
  uploadComment: () => void;
  neighbourOffers: Array<Offer>;
  activeCoordinate: Array<number>;
  authStatus: string;
  appState: string;
  errors: string;
}

export default class DetailPlaceCard extends React.PureComponent<Props, {}> {
  props: Props;
  state: {};
  private _settingMap: SettingMap;
  private _nearCoordinate: Array<Array<number>>;

  constructor(props) {
    super(props);

    this._settingMap = null;
    this._configMap();
  }

  componentDidUpdate() {
    this._configMap();
  }
  /**
   * Creates the config for map
   * */
  private _configMap() {
    this._settingMap = {
      zoom: this.props.detailOffer.city.zoom,
      cityCoordinates: this.props.detailOffer.city.coordinates,
    };
    this._nearCoordinate = new Array(...this.props.neighbourOffers
      .map((offer) => offer.location.coordinates));
  }

  render() {
    const {
      title,
      features,
      price,
      bedrooms,
      isFavorite,
      maxAdults,
      typeHousing,
      images,
      isPremium,
      rating,
      host,
      description,
      location,
      id,
    } = this.props.detailOffer;
    const {
      onTitleClick,
      comments,
      neighbourOffers,
      activeCoordinate,
      onChangerOfferCoordinate,
      authStatus,
      uploadComment,
      appState,
      errors,
      onChangeFavorite,
    } = this.props;

    return (
      <div className="page">

        <Header/>

        <main className="page__main page__main--property">
          <section className="property">

            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images
                  .slice(0, MAX_SHOW_IMG)
                  .map((img) => {
                    return (
                      <div
                        className="property__image-wrapper"
                        key={(+new Date() * Math.random())}
                      >
                        <img
                          className="property__image"
                          src={img}
                          alt="Photo studio"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ||
                <div className="property__mark"><span>Premium</span></div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button
                    className={`property__bookmark-button button${isFavorite ? ACTIVE_FAVORITE_CLASS : ``}`}
                    type="button"
                    disabled={appState === AppState.LOADING}
                    onClick={(evt) => {
                      evt.preventDefault();
                      onChangeFavorite(id, isFavorite);
                    }}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getRatingStars(rating)}%`}}> </span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{Math.ceil(rating)}</span>
                </div>

                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {typeHousing}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${maxAdults} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>

                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features.map((feature) => {
                      return (
                        <li
                          className="property__inside-item"
                          key={(+new Date() * Math.random())}
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? PRO_STATUS_CLASS : ``}`}>
                      <img className="property__avatar user__avatar" src={`./img/avatar-angelina.jpg`} width="74"
                        height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                    Angelina
                    </span>
                    {host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>

                <ReviewsWithSend
                  comments={comments}
                  authStatus={authStatus}
                  onFormSubmit={uploadComment}
                  detailId={id}
                  appState={appState}
                  errors={errors}
                />

              </div>
            </div>

            <DetailMapContainerWithMap
              settingMap={this._settingMap}
              coordinates={[...this._nearCoordinate, location.coordinates]}
              activeCoordinate={activeCoordinate || location.coordinates}
            />

          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <PlacesListWithDetailOfferId
                isNear={true}
                offers={neighbourOffers.slice(0, LIMIT_NEIGHBOURHOOD_OFFERS)}
                onTitleClick={onTitleClick}
                onChangerOfferCoordinate={onChangerOfferCoordinate}
              />

            </section>
          </div>
        </main>
      </div>
    );
  }
}

