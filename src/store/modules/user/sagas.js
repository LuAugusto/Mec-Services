import {takeLatest, call, all, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}){
  try{
    const {name,email,telefone,oldpassword, ...rest} = payload.data;
    
    const profile = Object.assign(
      {name,email,telefone,oldpassword},
      rest.password ? rest : {}
    );

    console.log(profile)
     
    const response = yield call(api.put, 'atualizarCadastro',
      profile
    )
    
    toast.info('Perfil atualizado com sucesso!');
    window.location.reload();
    yield put(updateProfileSuccess(response.data));
  }catch(err){
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);