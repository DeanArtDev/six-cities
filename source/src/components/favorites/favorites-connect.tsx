import Favorites from './favorites';
import {connect} from 'react-redux';
import {getFavoriteOffers} from '@root/reducer/user/selects';
import {Operation as UserOperation} from '@root/reducer/user/operations';
import {getAppState} from '@root/reducer/main/selectios';
import {Operation as DataOperation} from '@root/reducer/data/operations';

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  appState: getAppState(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(UserOperation.loadFavoriteOffers());
  },
  onChangeFavorite(id) {
    dispatch(UserOperation.changeFavoriteList(id));
  },
  onTitleClick(id) {
    dispatch(DataOperation.setDetailState(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
