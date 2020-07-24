import * as React from 'react';
import {OffersSortTypes} from '@root/types';

const sortTypes = Object.values(OffersSortTypes);

type Props = {
  onTypeSort: (sortType: string) => void;
  typeSort: string;
  isShow: boolean;
}

export const PlacesOption: React.FC<Props> = (props: Props) => {
  const {onTypeSort, typeSort = sortTypes[0], isShow = false} = props;

  return (
    <ul
      className={`places__options places__options--custom${isShow ? ` places__options--opened` : ``}`}
      onClick={(evt: React.MouseEvent) => {
        const target = evt.target as HTMLElement;
        if (target.tagName === `LI`) {
          onTypeSort(target.dataset.sort);
        }
      }}
    >
      {sortTypes.map((type) => {
        return (
          <li
            className={`places__option${typeSort === type ? ` places__option--active` : ``}`}
            data-sort={type}
            key={(+new Date() * Math.random())}
            tabIndex={0}
          >
            {type}
          </li>
        );
      })}
    </ul>
  );
};
