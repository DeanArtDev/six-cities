import {OffersSortTypes} from '@root/types';
import * as React from 'react';

interface Props {
  typeSort: string;
  onTypeSort: (typeSort: string) => void;
}

interface State {
  typeSort: string;
}

const withTypeSort = (Component) => {
  return class WithTypeSort extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

    constructor(props) {
      super(props);

      this.state = {
        typeSort: OffersSortTypes.POPULAR,
      };

      this.handleChangeTypeSort = this.handleChangeTypeSort.bind(this);
    }

    handleChangeTypeSort(typeSort) {
      this.setState({typeSort});
    }

    render() {
      return (
        <Component
          {...this.props}
          typeSort={this.state.typeSort}
          onTypeSort={this.handleChangeTypeSort}
        />
      );
    }
  };
};

export default withTypeSort;
