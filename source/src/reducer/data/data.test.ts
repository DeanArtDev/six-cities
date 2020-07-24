import {reducer as dataReducer} from './data';
import {ActionCreator} from './actions';
import {Operation} from './operations';
import {ActionType as MainActionType} from '@root/reducer/main/actions';
import API from '@root/api';
import MockAdapter from 'axios-mock-adapter';
import {TestMock} from '@root/test-mock/test-mock';
import OfferAdapter from '@root/adapters/offer-adapter';
import {extend} from '@root/utils/utils';

describe(`DataReducer: `, () => {

  const initialState = {
    offers: [],
    detailOfferId: null,
    detailOffer: {},
    cities: [],
    currentCity: ``,
    commentsDetailOffer: [],
    neighbourOffers: [],
  };

  describe(`Reducer should return initialState: `, () => {

    it(`Reducer without additional parameters should return initial state`, () => {
      expect(dataReducer(void 0, {}))
      .toEqual(initialState);
    });
  });

  describe(`Action creators: `, () => {

    let nextState;
    beforeEach(() => {
      nextState = {
        DATA: {
          offers: TestMock.offers,
          detailOfferId: 33,
          neighbourOffers: TestMock.adaptedOffers,
        }
      };
    });

    it(`Action creator for set offers`, () => {
      expect(dataReducer(nextState, ActionCreator.setOffers([1, 2, 3])))
        .toEqual(extend(nextState,{offers: [1, 2, 3]}));
    });
    it(`Action creator for change offers`, () => {
      expect(dataReducer(nextState, ActionCreator.changeOffers(nextState, TestMock.offers[0])))
        .toEqual(extend(nextState,{offers: TestMock.offers}));
    });
    it(`Action creator for set detail offer by ID`, () => {
      expect(dataReducer(nextState, ActionCreator.setDetailOfferById(33, TestMock.offers)))
        .toEqual(
            extend(nextState, extend(nextState,{detailOffer: OfferAdapter.adaptOffer(TestMock.offers[0])}))
        );
    });
    it(`Action creator for set detail offer ID`, () => {
      expect(dataReducer(initialState, ActionCreator.setDetailOfferId(33)))
        .toEqual(extend(initialState,{detailOfferId: 33}));
    });
    it(`Action creator for set cities`, () => {
      expect(dataReducer(nextState, ActionCreator.setCities(TestMock.offers)))
        .toEqual(extend(nextState, {cities: [`Brussels`, `Paris`]}));
    });
    it(`Action creator for set current cities`, () => {
      expect(dataReducer(nextState, ActionCreator.setCurrentCity(TestMock.offers)))
        .toEqual(extend(nextState, {currentCity: `Brussels`}));
    });
    it(`Action creator for set location city`, () => {
      expect(dataReducer(nextState, ActionCreator.changeCurrentCity(`Paris`, `Amsterdam`)))
        .toEqual(extend(nextState, {currentCity: `Paris`}));
    });
    it(`Action creator for set comments detail offer`, () => {
      expect(dataReducer(nextState, ActionCreator.setCommentsDetailOffer(TestMock.adaptedComments[0])))
        .toEqual(extend(nextState, {commentsDetailOffer: TestMock.adaptedComments[0]}));
    });
    it(`Action creator for set neighbour offers`, () => {
      expect(dataReducer(nextState, ActionCreator.setNeighbourOffers(TestMock.adaptedOffers)))
        .toEqual(extend(nextState, {neighbourOffers: TestMock.adaptedOffers}));
    });
    it(`Action creator for change neighbour offers`, () => {
      expect(dataReducer(nextState, ActionCreator.changeNeighbourOffers(nextState, TestMock.adaptedOffers[0])))
        .toEqual(extend(nextState, {neighbourOffers: TestMock.adaptedOffers}));
    });
  });

  describe(`Operations should work correctly`, () => {

    const api = new API(() => {});
    const adapterAPI = new MockAdapter(api._api);

    it(`Should make a correct API call to /hotels`, () => {
      const setInitialStore = Operation.setInitialStore();
      const dispatch = jest.fn();

      adapterAPI
        .onGet(`/hotels`)
        .reply(200, TestMock.offers);

      return setInitialStore(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(5);
          expect(dispatch).toHaveBeenNthCalledWith(5, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
    it(`Should make a correct API call to /comments/:hotel_id`, () => {
      const operation = Operation.uploadCommentForDetail(`33`, TestMock.commentPost);
      const dispatch = jest.fn();

      adapterAPI
        .onPost(`/comments/33`)
        .reply(200, [{fake: true}]);

      return operation(dispatch, jest.fn(), api)
        // eslint-disable-next-line max-nested-callbacks
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(4);
          expect(dispatch).toHaveBeenNthCalledWith(4, {
            type: MainActionType.SET_APP_STATE_READY,
          });
        });

    });
  });
});


