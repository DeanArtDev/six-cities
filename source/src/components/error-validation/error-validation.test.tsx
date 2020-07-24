import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {ErrorValidation} from './error-validation';

describe(`<ErrorValidation/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <ErrorValidation
            errorContent={`error`}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
