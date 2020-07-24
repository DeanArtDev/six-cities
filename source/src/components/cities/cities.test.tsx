import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Cities from './cities';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<Cities/>: `, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: TestMock.authInfo,
    }
  });

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <Cities
                offers={TestMock.adaptedOffers}
                currentCity={`Paris`}
                activeCoordinate={TestMock.coordinates[0]}
                onChangerOfferCoordinate={noop}
                onTitleClick={noop}
                coordinates={TestMock.coordinates}
                settingMap={TestMock.settingMap}
                onChangeActive={noop}
                onTypeSort={noop}
                isActive={true}
                typeSort={`test`}
              />
            </Router>
          </Provider>,
          {createNodeMock: () => document.createElement(`section`)}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
