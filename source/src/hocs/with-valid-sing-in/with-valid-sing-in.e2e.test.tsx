import withValidSingIn from './with-valid-sing-in';
import {mount} from 'enzyme';
import {TestMock} from '@root/test-mock/test-mock';
import * as React from 'react';
import {noop} from "@root/utils/utils";

type Props = {
  onEmailChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
}

const mockComponent = (props: Props) => {
  const {onEmailChange, onPasswordChange, onSubmitForm} = props;

  return (
    <React.Fragment>
      <input
        className={`email`}
        name={`email`}
        value={``}
        onChange={onEmailChange}
      />
      <input
        className={`password`}
        name={`password`}
        value={``}
        onChange={onPasswordChange}
      />
      <button
        className={`test`}
        type={`submit`}
        onSubmit={onSubmitForm}
      />
    </React.Fragment>
  );
};

describe(`<withValidSingIn/> events: `, () => {

  let initialState;
  const MockWrapper = withValidSingIn(mockComponent);
  const onSubmit = jest.fn((authInfo) => authInfo);

  const wrapper = mount(
      <MockWrapper
        authStatus={TestMock.authorizationStatus.NOT_AUTH}
        onSubmit={onSubmit}
        checkAuth={noop}
        emailValue={`fs43df`}
        errors={null}
        onFieldChange={noop}
        onSubmitForm={noop}
        passwordValue={`fsd`}
      />
  );

  beforeEach(() => {
    initialState = {
      email: `mail@mail.ru`,
      password: `654321`,
      isEmailValid: true,
      isPasswordValid: true,
    };
  });

  it(`HOC should return and set state email`, () => {
    wrapper
      .setState(initialState)
      .find(`input.email`)
      .simulate(`change`, {
        target: {
          name: `email`,
          value: `email@email.com`
        }
      });

    expect(wrapper.state().email).toEqual(`email@email.com`);
  });

  it(`HOC should return and set state password`, () => {
    wrapper
      .setState(initialState)
      .find(`input.password`)
      .simulate(`change`, {
        target: {
          name: `password`,
          value: `123456`
        }
      });

    expect(wrapper.state().password).toEqual(`123456`);
  });

  it(`HOC should submit user data`, () => {
    wrapper
      .setState(initialState)
      .find(`button`)
      .simulate(`submit`);

    expect(onSubmit.mock.results[0].value).toEqual({
      email: `mail@mail.ru`,
      password: `654321`,
    });
  });
});
