import {takeLatest, call, all, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import {createAppointmentSuccess, createAppointmentFailure} from './actions';

export function* createAppointment({payload}){
  try{
    console.log(payload.data)
    const {user,veiculo,disponibilidade,empresa,servico,status_agendamento} = payload.data;
    
    const appointment = Object.assign(
      {user,veiculo,disponibilidade,empresa,servico,status_agendamento}
    );

    console.log(appointment)
     
    const response = yield call(api.post, 'cadastrarAgendamento',
    appointment
    )
    
    toast.info('Agendamento efetuado com sucesso!');
    history.push('/pesquisarAgendamento');
    yield put(createAppointmentSuccess(response.data));
  }catch(err){
    toast.error('Erro ao cadastrar agendamento!');
    yield put(createAppointmentFailure());
  }
}

export default all([
  takeLatest('@agendamento/CREATE_APPOINTMENT_REQUEST', createAppointment),
]);