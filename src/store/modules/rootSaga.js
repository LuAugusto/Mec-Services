import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import car from './car/sagas';
import agendamento from './agendamento/sagas';

export default function* rootSaga(){
  return yield all([auth, user, car, agendamento]);
}