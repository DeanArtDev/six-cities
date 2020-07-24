/**
 * Adapts response user data from server to Dev user data
 *
 * @constructor
 * @method adaptAuthInfo
 * @param {object} authInfo
 * @return {object} AuthInfoAdapter
 * */
export default class AuthInfoAdapter {
  constructor(authInfo) {
    this.id = authInfo.id;
    this.email = authInfo.email;
    this.name = authInfo.name;
    this.avatarUrl = authInfo.avatar_url;
    this.isPro = authInfo.is_pro;
  }

  static adaptAuthInfo(authInfo) {
    return new AuthInfoAdapter(authInfo);
  }
}
