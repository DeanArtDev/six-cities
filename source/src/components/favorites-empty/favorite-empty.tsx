import * as React from 'react';
import {AppState} from '@root/types';

type Props = {
  appState: string;
}
export const FavoritesEmpty: React.FC<Props> = (props: Props) => {
  const {appState} = props;

  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            {appState === AppState.LOADING ?
              <b className="favorites__status">Loading...</b>
              :
              <React.Fragment>
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                  trips.</p>
              </React.Fragment>
            }
          </div>
        </section>
      </div>
    </main>
  );
};

