import PlaceCard from './place-card';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';
import {shallow} from 'enzyme';

const mockStore = configureStore([]);

describe(`<PlaceCard/>: `, () => {

  const store = mockStore({});

  it(`should render PlacesClass.NEAR correctly`, () => {
    const tree = shallow(
        <Provider store={store}>
          <Router
            history={history}
          >
            <PlaceCard
              offer={TestMock.adaptedOffers[0]}
              onChangerOfferCoordinate={noop}
              onChangeDetailOfferId={noop}
              onChangeFavorite={noop}
              onTitleClick={noop}
              isNear={true}
              key={(+new Date() * Math.random())}
            />
          </Router>
        </Provider>
    );

    expect(tree).toMatchSnapshot();
  });

  it(`should render PlacesClass.CITIES correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}
          >
            <PlaceCard
              offer={TestMock.adaptedOffers[0]}
              onChangerOfferCoordinate={noop}
              onChangeDetailOfferId={noop}
              onChangeFavorite={noop}
              onTitleClick={noop}
              isNear={false}
              key={(+new Date() * Math.random())}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

