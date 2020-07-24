import axios from 'axios';
import {BASE_URL} from '@root/consts/consts';

const TIMOUT = 5000;

/**
 * API for calls to the server
 *
 * @return {object} api
 * */
export default class API {
  constructor() {
    this._api = this._createAPI();

    this._onSuccess = this._onSuccess.bind(this);
    this._interceptors();
  }

  loadOffers() {
    return this._api.get(`/hotels`)
      .then((response) => response.data);
  }
  loadComments(id) {
    return this._api.get(`/comments/${id}`)
      .then((response) => response.data);
  }
  uploadComment(id, review) {
    return this._api.post(`/comments/${id}`, {
      comment: review.comment,
      rating: review.rating,
    })
      .then((response) => response.data);
  }
  changeFavoriteStatus(id, status) {
    return this._api.post(`/favorite/${id}/${status}`)
      .then((response) => response.data);
  }
  loadFavoriteOffers() {
    return this._api.get(`/favorite`)
      .then((response) => response.data);
  }
  loadNeighbourOffers(id) {
    return this._api.get(`/hotels/${id}/nearby`)
      .then((response) => response.data);
  }
  checkAuth() {
    return this._api.get(`/login`);
  }
  login(authData) {
    return this._api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    });
  }

  _onSuccess(response) {
    return response;
  }
  _onFail(err) {
    const {status} = err.response;
    if (status === 404) {
      throw err;
    }
    throw err;
  }
  _interceptors() {
    this._api.interceptors.response.use(this._onSuccess, this._onFail);
  }
  _createAPI() {
    return axios.create({
      baseURL: BASE_URL,
      timeout: TIMOUT,
      withCredentials: true,
    });
  }
}
