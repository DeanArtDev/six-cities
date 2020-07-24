import {PlacesList} from './places-list';
import {TestMock} from '@root/test-mock/test-mock';
import {mount} from 'enzyme';
import history from '@root/history';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as React from 'react';
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<PlacesList/>: `, () => {

  const store = mockStore({});

  it(`should render PlacesClass.NEAR correctly`, () => {
    const nearClassTree = mount(
        <Provider store={store}>
          <Router
            history={history}
          >
            <PlacesList
              offers={TestMock.adaptedOffers}
              onTitleClick={noop}
              onChangerOfferCoordinate={noop}
              onChangeDetailOfferId={noop}
              isNear={true}
              onChangeFavorite={noop}
            />
          </Router>
        </Provider>
    );

    expect(nearClassTree).toMatchSnapshot();
  });

  it(`should render PlacesClass.CITIES correctly`, () => {
    const citiesClassTree = mount(
        <Provider store={store}>
          <Router
            history={history}
          >
            <PlacesList
              offers={TestMock.adaptedOffers}
              onTitleClick={noop}
              onChangerOfferCoordinate={noop}
              onChangeDetailOfferId={noop}
              isNear={false}
              onChangeFavorite={noop}
            />
          </Router>
        </Provider>
    );

    expect(citiesClassTree).toMatchSnapshot();
  });
});
