import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, BASE_URL} from '@root/consts/consts';
import {AuthInfo, Authorization} from '@root/types';

type Props = {
  authorizationStatus: string;
  authInfo: AuthInfo;
}

export const WrapperComponent = React.memo<Props>(
    function Header(props: Props) {
      const {authorizationStatus, authInfo} = props;
      const isAuth = authorizationStatus === Authorization.AUTH;
      const isAvatar = authInfo ? {backgroundImage: `url(${BASE_URL}${authInfo.avatarUrl})`} : {};

      return (
        <header className="header">
          <div className="container">
            <div className="header__wrapper">

              <div className="header__left">
                <Link
                  className="header__logo-link header__logo-link--active"
                  to={AppRoute.ROOT}
                >
                  <img className="header__logo" src={`./img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>

              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">

                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={isAuth ? AppRoute.FAVORITES : AppRoute.SING_IN}
                    >
                      {isAuth
                        ?
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={isAvatar}/>
                        :
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                      }
                      <span className="header__user-name user__name">{authInfo ? authInfo.email : `Sing in`}</span>
                    </Link>

                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    });
