import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import car from './car/reducer';

export default combineReducers({
  auth,
  user,
  car,
})