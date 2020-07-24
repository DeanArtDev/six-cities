import PlaceCard from '@components/place-card/place-card-connect';
import * as React from 'react';
import {Offer, PlacesClass} from '@root/types';

type Props = {
  offers: Array<Offer>;
  onChangerOfferCoordinate: (coordinates: Array<number> | null) => void;
  onChangeDetailOfferId: (id: number | null) => void;
  onTitleClick: () => void;
  onChangeFavorite: (id: number, isFavorite: boolean, isNear: boolean) => void;
  isNear: boolean;
}

export const PlacesList: React.FC<Props> = (props: Props) => {
  const {offers, onChangerOfferCoordinate, onTitleClick, onChangeDetailOfferId, onChangeFavorite, isNear} = props;

  return (
    <div className={`${isNear ? PlacesClass.NEAR_LIST : PlacesClass.CITIES_LIST} places__list tabs__content`}>
      {offers.map((offer) => {
        return <PlaceCard
          offer={offer}
          onChangerOfferCoordinate={onChangerOfferCoordinate}
          isNear={isNear}
          onChangeDetailOfferId={onChangeDetailOfferId}
          onChangeFavorite={onChangeFavorite}
          onTitleClick={onTitleClick}
          key={(+new Date() * Math.random())}
        />;
      })}
    </div>
  );
};
