import React, {useEffect} from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import * as Yup from 'yup';
import {updateCarRequest} from '../../store/modules/car/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
  placa:Yup.string().required('Favor inserir placa do veículo').max(9),
  marca:Yup.string().required('Favor inserir marca do veículo'),
  modelo:Yup.string().required('Favor inserir modelo do veículo'),
  ano:Yup.number().required('Favor inserir ano do veículo'),
  motor:Yup.string().required('Favor inserir motor do veículo'),
});

function EditCar() {

  const {id} = useParams();

  const dispatch = useDispatch();

  function handleSubmit(data){

    dispatch(updateCarRequest({data,id}));
  }

  return (
   <Container>
     <h1>Editar veículo</h1>
     <Form schema={schema} onSubmit={handleSubmit}>
       <Input name="placa" type="text" placeholder="Placa"/>
       <Input name="marca" type="text" placeholder="Marca"/>
       <Input name="modelo" type="text" placeholder="Modelo"/>
       <Input name="ano" type="number" placeholder="Ano"/>
       <Input name="motor" type="text" placeholder="Motor"/>
       <button type="submit">Editar Veículo</button>
     </Form>
   </Container>
  );
}

export default EditCar;