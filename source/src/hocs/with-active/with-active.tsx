import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  onChangeActive: () => void;
}

interface State {
  isActive: boolean;
}

const withActive = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  type P = Subtract<T, InjectingProps>;

  return class WithActive extends React.PureComponent<P, State> {
    props: T;
    state: State;

    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.handleChangeActive = this.handleChangeActive.bind(this);
    }

    handleChangeActive() {
      this.setState({isActive: !this.state.isActive});
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onChangeActive={this.handleChangeActive}
        />
      );
    }
  };
};

export default withActive;
