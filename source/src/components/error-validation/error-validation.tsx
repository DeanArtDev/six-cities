import * as React from 'react';

type Props = {
  errorContent: string;
}

export const ErrorValidation: React.FC<Props> = (props: Props) => {
  const {errorContent} = props;

  return (
    <section className={`error-validation`}>
      <h3 className={`visually-hidden`}>The error of login or password</h3>
      <p>{errorContent}</p>
    </section>
  );
};
