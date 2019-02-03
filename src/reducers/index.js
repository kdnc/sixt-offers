import { connectRouter } from 'connected-react-router';
import offersReducer from './offersReducer';
import { combineReducers } from 'redux';

/**
 * Root reducer for the application
 * @param {object} history - History object to be used for the router
 */
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  offerData: offersReducer,
});

export default rootReducer;