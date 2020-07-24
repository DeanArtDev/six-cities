import {PrivateRoute} from './privete-route';
import {getAuthorizationStatus} from '@root/reducer/user/selects';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),

});

export default connect(mapStateToProps)(PrivateRoute);

