import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DetailPlaceCard from './detail-place-card';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {AppState} from '@root/types';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<DetailPlaceCard/>: `, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: TestMock.authInfo,
    }
  });

  describe(`Authorization: `, () => {
    it(`should render AUTH correctly`, () => {
      const tree = renderer
       .create(
           <Provider store={store}>
             <Router
               history={history}
             >
               <DetailPlaceCard
                 detailOffer={TestMock.adaptedOffers[0]}
                 neighbourOffers={TestMock.adaptedOffers}
                 comments={TestMock.adaptedComments}
                 authStatus={TestMock.authorizationStatus.AUTH}
                 activeCoordinate={TestMock.coordinates[0]}
                 appState={AppState.READY}
                 errors={null}
                 onChangerOfferCoordinate={noop}
                 onTitleClick={noop}
                 uploadComment={noop}
                 onChangeFavorite={noop}
               />
             </Router>
           </Provider>,
           {createNodeMock: () => document.createElement(`section`)}
       ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it(`should render NOT AUTH correctly`, () => {
      const tree = renderer
       .create(
           <Provider store={store}>
             <Router
               history={history}
             >
               <DetailPlaceCard
                 detailOffer={TestMock.adaptedOffers[0]}
                 neighbourOffers={TestMock.adaptedOffers}
                 comments={TestMock.adaptedComments}
                 authStatus={TestMock.authorizationStatus.NOT_AUTH}
                 activeCoordinate={TestMock.coordinates[0]}
                 appState={AppState.READY}
                 errors={null}
                 onChangerOfferCoordinate={noop}
                 onTitleClick={noop}
                 uploadComment={noop}
                 onChangeFavorite={noop}
               />
             </Router>
           </Provider>,
           {createNodeMock: () => document.createElement(`section`)}
       ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`App Store: `, () => {
    it(`should render LOADING correctly`, () => {
      const tree = renderer
        .create(
            <Provider store={store}>
              <Router
                history={history}
              >
                <DetailPlaceCard
                  detailOffer={TestMock.adaptedOffers[0]}
                  neighbourOffers={TestMock.adaptedOffers}
                  comments={TestMock.adaptedComments}
                  authStatus={TestMock.authorizationStatus.AUTH}
                  activeCoordinate={TestMock.coordinates[0]}
                  appState={AppState.LOADING}
                  errors={null}
                  onChangerOfferCoordinate={noop}
                  onTitleClick={noop}
                  uploadComment={noop}
                  onChangeFavorite={noop}
                />
              </Router>
            </Provider>,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it(`should render SENT correctly`, () => {
      const tree = renderer
        .create(
            <Provider store={store}>
              <Router
                history={history}
              >
                <DetailPlaceCard
                  detailOffer={TestMock.adaptedOffers[0]}
                  neighbourOffers={TestMock.adaptedOffers}
                  comments={TestMock.adaptedComments}
                  authStatus={TestMock.authorizationStatus.AUTH}
                  activeCoordinate={TestMock.coordinates[0]}
                  appState={AppState.SENT}
                  errors={null}
                  onChangerOfferCoordinate={noop}
                  onTitleClick={noop}
                  uploadComment={noop}
                  onChangeFavorite={noop}
                />
              </Router>
            </Provider>,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`Errors: `, () => {
    it(`should render Error correctly`, () => {
      const tree = renderer
        .create(
            <Provider store={store}>
              <Router
                history={history}
              >
                <DetailPlaceCard
                  detailOffer={TestMock.adaptedOffers[0]}
                  neighbourOffers={TestMock.adaptedOffers}
                  comments={TestMock.adaptedComments}
                  authStatus={TestMock.authorizationStatus.AUTH}
                  activeCoordinate={TestMock.coordinates[0]}
                  appState={AppState.READY}
                  errors={`Error`}
                  onChangerOfferCoordinate={noop}
                  onTitleClick={noop}
                  uploadComment={noop}
                  onChangeFavorite={noop}
                />
              </Router>
            </Provider>,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
