import * as TYPES from '../actions/actionTypes';

const initialState = {
  offers: [],
  loading: false
};

/**
 * Reducer for the offers
 * @param {object} state - State for the offers reducer
 * @param {object} action - Dispatched action object
 * @return {object} reducer state
 */
function offersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOADING_OFFERS:
      return {...state, ...action.payload};
    case TYPES.LOAD_OFFERS_SUCCESS:
      return {...state, ...action.payload};
    case TYPES.LOAD_OFFERS_FAILED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default offersReducer;