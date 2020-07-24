import * as React from 'react';
import DetailPlaceCard from '@components/detail-place-card/detail-place-card-connect';
import Main from '@components/main/main';
import {MainEmpty} from '@components/main-empty/main-empty';
import {WrapperComponent as SingIn} from '@components/sing-in/sing-in';

import withActiveCoordinate from '@root/hocs/with-active-coordinate/with-active-coordinate';
import withValidSingIn from '@root/hocs/with-valid-sing-in/with-valid-sing-in';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {AppRoute} from '@root/consts/consts';
import {AppState, ErrorType, Offer, Errors, AuthInfo} from '@root/types';
import history from '@root/history';
import Favorites from '@components/favorites/favorites-connect';
import PrivateRoute from '@components/private-route/private-route-connect';

const DetailPlaceCardWithActiveCoordinate = withActiveCoordinate(DetailPlaceCard);
const SingInWithValidForm = withValidSingIn(SingIn);

interface Props {
  offers: Array<Offer>;
  checkAuth: () => void;
  onChangeFavorite: (id: number, isFavorite: boolean, isNear: boolean) => void;
  login: () => void;
  onTitleClick: (id: number) => void;
  onLocationClick: () => void;
  initStore: (id: number) => void;
  appState: string;
  currentCity: string;
  authorizationStatus: string;
  cities: Array<string>;
  errors: Errors;
  authInfo: AuthInfo;
}

export class App extends React.PureComponent<Props, {}> {
  props: Props;
  state: {};

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {checkAuth, initStore, appState} = this.props;
    if (appState === AppState.PENDING) {
      const id: number = parseInt(history.location.pathname.replace(/\D+/g, ``), 10);
      checkAuth();
      initStore(id);
    }
  }

  render() {
    const {
      offers,
      onTitleClick,
      onLocationClick,
      cities,
      currentCity,
      appState,
      authorizationStatus,
      authInfo,
      login,
      checkAuth,
      errors,
      onChangeFavorite,
    } = this.props;

    switch (appState) {
      case AppState.PENDING:
        return <MainEmpty/>;

      default:
        return (
          <Router basename="/6-cities">
            <Switch>
              <Route exact path={AppRoute.ROOT}>
                <Main
                  cities={cities}
                  currentCity={currentCity}
                  offers={offers}
                  onTitleClick={onTitleClick}
                  onLocationClick={onLocationClick}
                />
              </Route>
              <Route exact path={AppRoute.DETAIL}>
                <DetailPlaceCardWithActiveCoordinate
                  onTitleClick={onTitleClick}
                  authStatus={authorizationStatus}
                  authInfo={authInfo}
                  appState={appState}
                  errors={errors[ErrorType.UPLOAD_COMMENT]}
                  onChangeFavorite={onChangeFavorite}
                />
              </Route>
              <PrivateRoute
                exact
                path={AppRoute.FAVORITES}
                render={() => <Favorites/>}
              />
              <Route exact path={AppRoute.SING_IN}>
                <SingInWithValidForm
                  currentCity={currentCity}
                  authStatus={authorizationStatus}
                  onSubmit={login}
                  checkAuth={checkAuth}
                  appState={appState}
                  errors={errors[ErrorType.SING_IN]}
                />
              </Route>
            </Switch>
          </Router>
        );
    }
  }
}

export default App;
