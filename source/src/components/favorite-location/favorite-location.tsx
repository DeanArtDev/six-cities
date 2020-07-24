import {FavoritePlaceCard} from '@components/favorite-place-card/favorite-place-card';
import * as React from 'react';
import {Offer} from "@root/types";

type Props = {
  offers: Array<Offer>;
  city: string;
  onChangeFavorite: (id: number) => void;
  onTitleClick: (id: number) => void;
}

export const FavoriteLocation: React.FC<Props> = (props: Props) => {
  const {offers, city, onChangeFavorite, onTitleClick} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href={`/${city}.html`}>
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => (
          <FavoritePlaceCard
            offer={offer}
            onChangeFavorite={onChangeFavorite}
            onTitleClick={onTitleClick}
            key={(+new Date() * Math.random())}
          />
        ))}
      </div>
    </li>
  );
};
