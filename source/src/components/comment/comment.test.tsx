import {TestMock} from '@root/test-mock/test-mock';
import {Comment} from './comment';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe(`<Comment/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <Comment
            comment={TestMock.adaptedComments[0]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
