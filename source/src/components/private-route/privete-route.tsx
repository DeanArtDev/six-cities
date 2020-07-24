import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppRoute} from '@root/consts/consts';
import {Authorization} from '@root/types';
import * as React from 'react';

type Props = RouteProps & {
  authorizationStatus: string;
  render: () => React.ReactNode;
}

export const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {path, exact, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authorizationStatus === Authorization.AUTH ?
            render() : <Redirect to={AppRoute.SING_IN}/>
        );
      }}
    />
  );
};
