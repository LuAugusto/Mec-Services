import React from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import {createCarRequest} from '../../../store/modules/car/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
  placa:Yup.string().required('Placa do veículo'),
  marca:Yup.string().required('Marca'),
  modelo:Yup.string().required('Modelo'),
  ano:Yup.string().required('Ano'),
  motor:Yup.string().required('Motor'),
});

function CadastrarVeiculo(){

  
  //const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.profile.id);
  
  const dispatch = useDispatch();

  function handleSubmit({placa,marca,modelo,ano,motor}){
    dispatch(createCarRequest(placa,marca,modelo,ano,motor,user));
  }

  return(
    <Container>
    <h1>Cadastrar Veículo</h1>
     <Form schema={schema} onSubmit={handleSubmit}>
       <label>Placa:</label>
       <Input name="placa" placeholder="Placa do veículo"/>
       <label>Marca:</label>
       <Input name="marca" type="text" placeholder="Marca do veículo"/>
       <label>Modelo:</label>
       <Input name="modelo" type="text" id="telefone" placeholder="Modelo do veículo"/>
       <label>Ano:</label>
       <Input name="ano" type="text" id="telefone" placeholder="Ano do veículo"/>
       <label>Motor:</label>
       <Input name="motor" type="text" id="telefone" placeholder="Motor do veículo"/>
      <hr/>
      <button type="submit">Cadastrar veículo</button>
     </Form>
   </Container>
  );
}

export default CadastrarVeiculo;