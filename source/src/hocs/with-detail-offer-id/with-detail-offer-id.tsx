import * as React from 'react';
import {Subtract} from 'utility-types';
import {Id} from '@root/types';

interface InjectingProps {
  onChangeDetailOfferId: (id: Id) => void;
  onTitleClick: (id: Id) => void;
}

interface State {
  detailOfferId: Id;
}

const withDetailOfferId = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  type P = Subtract<T, InjectingProps>;

  return class WithDetailOfferId extends React.PureComponent<P, State> {
    props: P;
    state: State;

    constructor(props) {
      super(props);

      this.state = {
        detailOfferId: null
      };

      this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange(id) {
      this.setState({detailOfferId: id});
    }

    render() {
      const {onTitleClick} = this.props;

      return (
        <Component
          {...this.props}
          onChangeDetailOfferId={this.handleStateChange}
          onTitleClick={() => onTitleClick(this.state.detailOfferId)}
        />
      );
    }
  };
};

export default withDetailOfferId;
