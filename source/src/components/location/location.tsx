import * as React from 'react';

const ACTIVE_CITY_CLASS = ` tabs__item tabs__item--active`;

type Props = {
  currentCity: string;
  onLocationClick: (evt: React.MouseEvent<HTMLUListElement>) => void;
  cities: Array<string>;
}

export const Location: React.FC<Props> = (props: Props) => {
  const {currentCity, onLocationClick, cities} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul
          className={`locations__list tabs__list`}
          onClick={(evt) => {
            evt.preventDefault();
            onLocationClick(evt);
          }}
        >
          {cities.map((city) => {
            return (
              <li
                className="locations__item"
                key={(+new Date() * Math.random())}
              >
                <a
                  className={`locations__item-link tabs__item${city === currentCity ? ACTIVE_CITY_CLASS : ``}`}
                  href={`/city/${city}`}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
