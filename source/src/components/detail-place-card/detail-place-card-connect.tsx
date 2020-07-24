import DetailPlaceCard from '@components/detail-place-card/detail-place-card';
import {connect} from 'react-redux';
import {getSortedCommentUpToDate, getDetailOffer, getNeighbourOffers} from '@root/reducer/data/selectors';
import {Operation as DataOperation} from '@root/reducer/data/operations';

const mapStateToProps = (state) => ({
  neighbourOffers: getNeighbourOffers(state),
  detailOffer: getDetailOffer(state),
  comments: getSortedCommentUpToDate(state),
});
export const mapDispatchToProps = (dispatch) => ({
  uploadComment(id, review) {
    dispatch(DataOperation.uploadCommentForDetail(id, review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlaceCard);

