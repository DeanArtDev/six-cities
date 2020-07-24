import {FavoriteLocation} from '@components/favorite-location/favorite-location';
import * as React from 'react';
import {FavoriteOffers} from '@root/types';

type Props = {
  favoriteOffers: FavoriteOffers;
  onChangeFavorite: (id: number) => void;
  onTitleClick: (id: number) => void;
}

export const FavoriteOffersList: React.FC<Props> = (props: Props) => {
  const {favoriteOffers, onChangeFavorite, onTitleClick} = props;

  return (
    <ul className="favorites__list">
      {Object.keys(favoriteOffers).map((city) => (
        <FavoriteLocation
          offers={favoriteOffers[city]}
          city={city}
          onChangeFavorite={onChangeFavorite}
          onTitleClick={onTitleClick}
          key={(+new Date() * Math.random())}
        />
      ))}
    </ul>
  );
};
