import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import car from './car/reducer';
import agendamento from './agendamento/reducer';

export default combineReducers({
  auth,
  user,
  car,
  agendamento,
})