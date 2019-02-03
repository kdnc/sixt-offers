import offersReducer from '../../reducers/offersReducer';
import {
  LOAD_OFFERS_FAILED, LOADING_OFFERS,
  LOAD_OFFERS_SUCCESS
} from '../../actions/actionTypes';

describe('Offers Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      offers: [],
      loading: false
    };
    expect(offersReducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle LOADING_OFFERS', () => {
    const expectedState = {
      offers: [],
      loading: true
    };
    const currentState = {
      offers: [],
      loading: false
    };
    const action = {
      type: LOADING_OFFERS,
      payload: {
        loading: true
      }
    };
    expect(offersReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_OFFERS_SUCCESS', () => {
    const offersData = {
      offers: [
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
      ],
    };
    const expectedState = {
      ...offersData,
      loading: false
    };
    const currentState = {
      offers: [],
      loading: true
    };
    const action = {
      type: LOAD_OFFERS_SUCCESS,
      payload: {
        ...offersData,
        loading: false
      }
    };
    expect(offersReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_OFFERS_FAILED', () => {
    const expectedState = {
      offers: [],
      loading: false
    };
    const currentState = {
      offers: [],
      loading: true
    };
    const action = {
      type: LOAD_OFFERS_FAILED,
      payload: {
        loading: false
      }
    };
    expect(offersReducer(currentState, action)).toEqual(expectedState);
  });
});