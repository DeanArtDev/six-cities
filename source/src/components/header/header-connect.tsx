import {WrapperComponent as Header} from './header';
import {connect} from 'react-redux';
import {getAuthInfo, getAuthorizationStatus} from '@root/reducer/user/selects';

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authInfo: getAuthInfo(state),
});

export default connect(mapStateToProps)(Header);

