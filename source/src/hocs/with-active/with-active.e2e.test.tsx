import withActive from './with-active';
import * as React from 'react';
import {mount} from 'enzyme';

type Props = {
  onChangeActive: () => void;
  isActive: boolean;
}

const mockComponent = (props: Props) => {
  const {onChangeActive, isActive} = props;

  return (
    <input
      onClick={onChangeActive}
      disabled={isActive}
    />
  );
};

describe(`<withActive/> state: `, () => {

  let initialState;
  const MockWrapper = withActive(mockComponent);

  const wrapper = mount(
      <MockWrapper/>
  );

  beforeEach(() => {
    initialState = {
      isActive: false,
    };
  });

  it(`HOC should return a changed state isActive = true`, () => {
    wrapper
      .setState(initialState)
      .simulate(`click`);

    expect(wrapper.state().isActive).toEqual(true);
  });

  it(`HOC should return a change isActive`, () => {
    wrapper
      .setState(initialState)
      .simulate(`click`);

    expect(wrapper.props(`disabled`)).toBeTruthy();
  });
});
