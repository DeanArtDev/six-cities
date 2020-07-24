import Header from '@components/header/header-connect';
import {FavoriteOffersList} from '@components/favorite-offers-list/favorite-offers-list';
import {FavoritesEmpty} from '@components/favorites-empty/favorite-empty';
import {AppState, FavoriteOffers} from '@root/types';
import * as React from 'react';

const EMPTY_CLASS = `page--favorites-empty`;

interface Props {
  favoriteOffers: FavoriteOffers;
  appState: string;
  onChangeFavorite: (id: number) => void;
  onTitleClick: (id: number) => void;
  loadFavoriteOffers: () => void;
}

export default class Favorites extends React.PureComponent<Props, {}> {
  props: Props;
  state: {};

  constructor(props) {
    super(props);

    this.props.loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers, appState, onChangeFavorite, onTitleClick} = this.props;
    const cities = Object.keys(favoriteOffers);
    const isExist = cities.length > 0 && appState !== AppState.LOADING;
    return (
      <div className={`page ${cities.length > 0 ? `` : EMPTY_CLASS}`}>

        <Header/>

        {isExist ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">

              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteOffersList
                  favoriteOffers={favoriteOffers}
                  onChangeFavorite={onChangeFavorite}
                  onTitleClick={onTitleClick}
                />
              </section>

            </div>
          </main>
          :
          <FavoritesEmpty
            appState={appState}
          />
        }

        <footer className="footer container">
          <a className="footer__logo-link" href={`/main.html`}>
            <img className="footer__logo" src={`./img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}
