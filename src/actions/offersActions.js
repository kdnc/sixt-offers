import {
  LOAD_OFFERS, LOAD_OFFERS_FAILED, LOADING_OFFERS,
  LOAD_OFFERS_SUCCESS, LOAD_SORTED_OFFERS
} from './actionTypes';

/**
 * Action creator for loading offers
 * @return {object} action object
 */
export function loadOffers() {
  return {
    type: LOAD_OFFERS,
  }
}

/**
 * Action creator for marking offers are loading
 * @return {object} action object
 */
export function loadingOffers() {
  return {
    type: LOADING_OFFERS,
    payload: {
      loading: true
    }
  }
}

/**
 * Action creator for marking offers are loaded
 * @param {object} offers - loaded offers
 * @return {object} action object
 */
export function loadOffersSuccess(offers) {
  return {
    type: LOAD_OFFERS_SUCCESS,
    payload: {
      offers,
      loading: false
    }
  }
}

/**
 * Action creator for marking offers loading failed
 * @return {object} action object
 */
export function loadOffersFailed() {
  return {
    type: LOAD_OFFERS_FAILED,
    payload: {
      loading: false
    }
  }
}

/**
 * Action creator to load sorted offers
 * @param {string} sortValue - Value to be sorted on
 * @return {object} action object
 */
export function loadSortedOffers(sortValue) {
  return {
    type: LOAD_SORTED_OFFERS,
    payload: {
      sortValue
    }
  }
}