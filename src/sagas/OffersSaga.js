import _ from 'lodash';
import {call, put, takeLatest, select } from 'redux-saga/effects'
import {LOAD_OFFERS, LOAD_SORTED_OFFERS} from './../actions/actionTypes'
import {
  loadingOffers, loadOffersFailed,
  loadOffersSuccess
} from '../actions/offersActions';
import {loadOffers} from '../services/OffersApi';
import {offersSortOptions, NAME} from "../utils/OffersSortOptions";

/**
 * Run the saga to load offers
 * @param {object} action - Dispatched action
 */
export function* loadOffersData(action) {
  try {
    yield put(loadingOffers());
    const offerData = yield call(loadOffers);
    yield put(loadOffersSuccess(offerData.offers));
  } catch (error) {
    yield put(loadOffersFailed());
  }
}

/**
 * Run the saga to sort offers
 * @param {object} action - Dispatched action
 */
export function* loadSortedOffers(action) {
  const offers = yield select(getOffers);
  let sortOption = offersSortOptions.find(
    sortOption => sortOption.value === action.payload.sortValue
  );
  const sortProperty = (sortOption && sortOption.value) || NAME.value;
  const sortedOffers = offers.sort((firstOffer, nextOffer) => {
    return (firstOffer.sortIndexes[sortProperty] - nextOffer.sortIndexes[sortProperty]);
  });
  yield put(loadOffersSuccess(sortedOffers));
}

/**
 * Get cloned offers from the state
 */
export const getOffers = (state) => {
  return _.map(state.offerData.offers, _.clone);
}

/**
 * Watch for LOAD_OFFERS action to run the saga
 */
export function* loadOffersSaga() {
  yield takeLatest(LOAD_OFFERS, loadOffersData);
}

/**
 * Watch for LOAD_SORTED_OFFERS action to run the saga
 */
export function* sortOffersSaga() {
  yield takeLatest(LOAD_SORTED_OFFERS, loadSortedOffers);
}