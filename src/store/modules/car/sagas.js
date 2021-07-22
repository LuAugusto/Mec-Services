import {takeLatest, call, all, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';

import {createCarSuccess, createCarFailure, updateCarSuccess,updateCarFailure} from './actions';

export function* createCar({payload}){
  try{
    const {placa,marca,modelo,ano,motor,user} = payload;

    const response = yield call(api.post, 'cadastrarVeiculo',
    {placa,marca,modelo,ano,motor,user}
    )
    
    toast.info('Cadastro efetuado com sucesso!');
    window.location.reload();
    yield put(createCarSuccess(response));
    

  }catch(err){
    console.log(err)
    toast.error('Erro ao cadastrar o veículo, confira os dados!');
    yield put(createCarFailure());
  }
}
export function* updateCar({payload}){
  try{
    const {placa,marca,modelo,ano,motor} = payload.data.data;

    const response = yield call(api.put, `atualizarVeiculo/${payload.data.id}`,
    {placa,marca,modelo,ano,motor}
    )
    
    toast.info('Atualização efetuada com sucesso!');
    window.location.reload();
    yield put(updateCarSuccess(response));
    

  }catch(err){
    console.log(err)
    toast.error('Erro ao atualizar o veículo, confira os dados!');
    yield put(updateCarFailure());
  }
}

export default all([
  takeLatest('@car/CREATE_CAR_REQUEST', createCar),
  takeLatest('@car/UPDATE_CAR_REQUEST', updateCar),
]);