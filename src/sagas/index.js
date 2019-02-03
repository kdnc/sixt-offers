import {loadOffersSaga, sortOffersSaga} from './OffersSaga';
import { all } from 'redux-saga/effects';

/**
 * Root saga registered for the application
 */
export default function* rootSaga() {
  yield all([
    loadOffersSaga(),
    sortOffersSaga()
  ])
}