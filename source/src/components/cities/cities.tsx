import * as React from 'react';
import {PlacesList} from '@components/places-list/places-list';
import {WrappedComponent as CitiesMapContainer} from '@components/cities-map-container/cities-map-container';

import withDetailOfferId from '@root/hocs/with-detail-offer-id/with-detail-offer-id';
import withMap from '@root/hocs/with-map/with-map';
import {PlacesOption} from '@components/places-option/places-option';

import {sortOffers} from '@root/utils/utils';
import {Offer, SettingMap} from "@root/types";

const Map = withMap(CitiesMapContainer);
const PlacesListWithDetailOfferId = withDetailOfferId(PlacesList);

interface Props {
  offers: Array<Offer>;
  currentCity: string;
  activeCoordinate: Array<number>;
  onTitleClick: (id: number) => void;
  onChangerOfferCoordinate: () => void;
  onChangeActive: () => void;
  onTypeSort: () => void;
  coordinates: Array<Array<number>>;
  settingMap: SettingMap;
  isActive: boolean;
  typeSort: string;
}

export default class Cities extends React.PureComponent<Props, {}> {
  props: Props;
  state: {};

  constructor(props) {
    super(props);
  }

  render() {
    const {
      offers,
      currentCity,
      activeCoordinate,
      onTitleClick,
      coordinates,
      settingMap,
      onChangerOfferCoordinate,
      onChangeActive,
      onTypeSort,
      isActive,
      typeSort,
    } = this.props;
    const sortedOffers = sortOffers(typeSort, offers);

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>

            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by </span>
              <span
                className="places__sorting-type"
                tabIndex={0}
                onClick={onChangeActive}
              >
                {typeSort}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>

              <PlacesOption
                isShow={isActive}
                typeSort={typeSort}
                onTypeSort={onTypeSort}
              />

            </form>

            <PlacesListWithDetailOfferId
              offers={sortedOffers}
              onTitleClick={onTitleClick}
              onChangerOfferCoordinate={onChangerOfferCoordinate}
            />
          </section>

          <div className="cities__right-section">
            <Map
              activeCoordinate={activeCoordinate}
              settingMap={settingMap}
              coordinates={coordinates}
            />
          </div>
        </div>
      </div>
    );
  }

}

