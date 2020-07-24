import PlaceCard from '@components/place-card/place-card';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '@root/reducer/user/operations';

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
  onChangeFavorite(id, isFavorite, isNear) {
    dispatch(UserOperation.changeFavorite(id, isFavorite, isNear));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
