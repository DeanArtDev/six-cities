import {PlacesOption} from './places-option';
import {mount} from 'enzyme';
import * as React from 'react';

describe(`<PlacesOption/> event: `, () => {
  const mockFn = jest.fn((type) => type);
  const wrapper = mount(
      <PlacesOption
        typeSort={``}
        onTypeSort={mockFn}
        isShow={true}/>
  );

  it(`CLICK should return sorting type`, () => {

    wrapper.simulate(`click`, {
      target: {
        dataset: {
          sort: `sorting type`
        },
        tagName: `LI`,
      }
    });
    expect(mockFn.mock.results[0].value).toEqual(`sorting type`);
  });
});

