import * as React from 'react';
import {Subtract} from 'utility-types';

type Coordinate = Array<number> | null;

interface InjectingProps {
  activeCoordinate: Coordinate;
  onChangerOfferCoordinate: (coordinates: Coordinate) => void;
}

interface State {
  activeCoordinate: Coordinate;
}

const withActiveCoordinate = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  type P = Subtract<T, InjectingProps>;

  return class WithActiveCoordinate extends React.PureComponent<P, State> {
    props: T;
    state: State;

    constructor(props) {
      super(props);

      this.state = {
        activeCoordinate: null
      };

      this.handleChangeActiveCoordinate = this.handleChangeActiveCoordinate.bind(this);
    }

    handleChangeActiveCoordinate(coordinate) {
      this.setState({activeCoordinate: coordinate});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeCoordinate={this.state.activeCoordinate}
          onChangerOfferCoordinate={this.handleChangeActiveCoordinate}
        />
      );
    }
  };
};

export default withActiveCoordinate;
