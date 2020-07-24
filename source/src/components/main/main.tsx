import Cities from '@components/cities/cities';
import {CitiesEmpty} from '@components/cities-empty/cities-empty';
import {Location} from '@components/location/location';
import Header from '@components/header/header-connect';

import withActiveCoordinate from '@root/hocs/with-active-coordinate/with-active-coordinate';
import withActive from '@root/hocs/with-active/with-active';
import withTypeSort from '@root/hocs/with-type-sort/with-type-sort';
import * as React from 'react';
import {Offer} from '@root/types';

const CitiesWithCoordinateTypeSortActive = withActive(withTypeSort(withActiveCoordinate(Cities)));

const MAIN_EMPTY_CLASS = ` page__main--index-empty`;

interface Props {
  onLocationClick: (newCity: string, oldCity: string) => void;
  onTitleClick: (id: number) => void;
  currentCity: string;
  cities: Array<string>;
  offers: Array<Offer>;
}

export default class Main extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleLocateClick = this._handleLocateClick.bind(this);
  }

  _handleLocateClick(evt) {
    const {onLocationClick} = this.props;
    if (evt.target.tagName !== `A` && evt.target.tagName !== `SPAN`) {
      return;
    }

    const newCity = evt.target.textContent;
    onLocationClick(newCity, this.props.currentCity);
  }

  render() {
    const {onTitleClick, currentCity, cities} = this.props;
    const isOfferLength = this.props.offers.length <= 0;
    let offers;
    let coordinates;
    let settingMap;

    if (!isOfferLength) {
      offers = this.props.offers;
      settingMap = {
        zoom: offers[0].city.zoom,
        cityCoordinates: offers[0].city.coordinates,
      };
      coordinates = new Array(...offers.map((offer) => offer.location.coordinates));
    }

    return (
      <div className="page page--gray page--main">

        <Header/>

        <main className={`page__main page__main--index${isOfferLength ? MAIN_EMPTY_CLASS : ``}`}>
          <h1 className="visually-hidden">Cities</h1>

          <Location
            currentCity={currentCity}
            cities={cities}
            onLocationClick={this._handleLocateClick}
          />

          {isOfferLength ?
            <CitiesEmpty/>
            :
            <CitiesWithCoordinateTypeSortActive
              settingMap={settingMap}
              coordinates={coordinates}
              offers={offers}
              currentCity={currentCity}
              onTitleClick={onTitleClick}
            />
          }

        </main>
      </div>
    );
  }
}
