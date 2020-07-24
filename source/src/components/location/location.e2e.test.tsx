import {Location} from './location';
import * as React from 'react';
import {shallow} from 'enzyme';
import {TestMock} from '@root/test-mock/test-mock';
import {noop} from "@root/utils/utils";

describe(`<Location/> events: `, () => {

  it(`CLICK should return currentCity`, () => {
    const onClick = jest.fn((evt) => evt.target.textContent);

    const location = shallow(
        <Location
          onLocationClick={onClick}
          currentCity={`Paris`}
          cities={TestMock.cities}
        />
    );

    location.find(`ul.locations__list`).simulate(`click`, {
      preventDefault: noop,
      target: {
        textContent: `Moscow`
      },
    });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.results[0].value).toEqual(`Moscow`);
  });
});
