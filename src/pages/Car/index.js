import React from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';

import * as Yup from 'yup';
import {createCarRequest} from '../../store/modules/car/actions';
import {Link} from 'react-router-dom';
import { Container } from './styles';

const schema = Yup.object().shape({
  placa:Yup.string().required('Favor inserir placa do veículo').max(9),
  marca:Yup.string().required('Favor inserir marca do veículo'),
  modelo:Yup.string().required('Favor inserir modelo do veículo'),
  ano:Yup.number().required('Favor inserir ano do veículo'),
  motor:Yup.string().required('Favor inserir motor do veículo'),
});

function Car() {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile.id);

  function handleSubmit({placa,marca,modelo,ano,motor}){
    let user = profile;

    dispatch(createCarRequest(placa,marca,modelo,ano,motor,user));
  }

  return (
   <Container>
     <Form schema={schema} onSubmit={handleSubmit}>
       <Input name="placa" type="text" placeholder="Placa"/>
       <Input name="marca" type="text" placeholder="Marca"/>
       <Input name="modelo" type="text" placeholder="Modelo"/>
       <Input name="ano" type="number" placeholder="Ano"/>
       <Input name="motor" type="text" placeholder="Motor"/>
       <button type="submit">Cadastrar Veículo</button>
     </Form>
   </Container>
  );
}

export default Car;