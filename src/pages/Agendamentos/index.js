import React, { useEffect, useState } from 'react';

import { Container } from './styles'
import {Form,Input, Select} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';

import * as Yup from 'yup';

import {toast} from 'react-toastify';
import axios from 'axios';

const schema = Yup.object().shape({
  email:Yup.string().required().email(),
  name:Yup.string().required(),
  telefone:Yup.string().required(),
  oldpassword:Yup.string().required(),
  password:Yup.string(),
  confirmPassword:Yup.string().when('password',(password,field) => 
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

function Agendamentos() {
  const dispatch = useDispatch();

  const [cars, setCars] = useState([]);
  const [services, setServices] = useState([]);

  const profile = useSelector(state => state.user.profile);
  const token = useSelector(state => state.auth.token);
  
  useEffect(() => {
    async function searchCarsUsers(){
      try{
        const responses = await axios.get('http://localhost:3000/meusVeiculos', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        setCars(responses.data);
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchCarsUsers();

    async function searchServices(){
      try{
        const responses = await axios.get('http://localhost:3000/pesquisarServicos', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        setServices(responses.data);
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchServices();
  },[])

  function handleSubmit(data){
    alert('oi')
    console.log(data)
    //dispatch(({veiculo,disponibilidade,servico}));
  }

  return (
   <Container>
     <h1>Realizar um agendamento:</h1>
     <Form schema={schema} onSubmit={handleSubmit}>
       <label>Selecione o veículo</label>
       <select name="veiculo">
         {
           cars.map(car => {
             return(
              <option key={car.id}>{car.placa}</option>
             )
           })
         }
       </select>

       <label>Selecione o dia e horário para o atendimento</label>
       <Input name="disponibilidade" type="email" placeholder="Seu E-mail"/>
       
       <label>Selecione o serviço</label>
       <select name="servico">
         {
           services.map(service => {
             return(
              <option key={service.id}>{service.tipo_servico} | {service.tempo_estimado}</option>
             )
           })
         }
       </select>
      <button type="submit">Atualizar perfil</button>
     </Form>
   </Container>
  );
}

export default Agendamentos;