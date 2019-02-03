import {LOAD_OFFERS_URL} from './Constants';
import {invokeJsonGet} from './Api';

/**
 * Load offers API request
 * @return {Promise} Promise of the API invocation
 */
export function loadOffers() {
  return invokeJsonGet(`${LOAD_OFFERS_URL}`);
}