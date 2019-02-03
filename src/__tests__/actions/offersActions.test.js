import * as actions from '../../actions/offersActions';
import * as types from '../../actions/actionTypes';

describe('Offers Actions', () => {
  it('should create an action to load offers', () => {
    const expectedAction = {
      type: types.LOAD_OFFERS,
    };
    expect(actions.loadOffers()).toEqual(expectedAction);
  });

  it('should create an action to mark offers are loading', () => {
    const expectedAction = {
      type: types.LOADING_OFFERS,
      payload: {loading: true}
    };
    expect(actions.loadingOffers()).toEqual(expectedAction);
  });

  it('should create an action to mark offers are loaded', () => {
    const offers = [
      {
        id: 'A0132ACY:A0132AD0-CLMR',
        carGroupInfo: {
          modelExample: {
            name: 'BMW 1er Series',
            imageUrl: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/5dd09a1b4481b1d3eba6dc96c3fb28e473553023.jpg'
          }
        },
        prices: {
          totalPrice: {
            amount: {
              value: 99.75,
              currency: 'USD'
            }
          }
        }
      }
    ];
    const offersData = {
      offers
    };
    const expectedAction = {
      type: types.LOAD_OFFERS_SUCCESS,
      payload: {...offersData, loading: false}
    };
    expect(actions.loadOffersSuccess(offers)).toEqual(expectedAction);
  });

  it('should create an action to mark offers loading is failed', () => {
    const expectedAction = {
      type: types.LOAD_OFFERS_FAILED,
      payload: {loading: false}
    };
    expect(actions.loadOffersFailed()).toEqual(expectedAction);
  });

  it('should create an action to load sorted offers', () => {
    const sortValue = 'name';
    const expectedAction = {
      type: types.LOAD_SORTED_OFFERS,
      payload: {sortValue}
    };
    expect(actions.loadSortedOffers(sortValue)).toEqual(expectedAction);
  });

});