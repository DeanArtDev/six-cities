import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {CommentsList} from './comments-list';
import {TestMock} from '@root/test-mock/test-mock';

describe(`<CommentList/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <CommentsList
            comments={TestMock.adaptedComments}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
