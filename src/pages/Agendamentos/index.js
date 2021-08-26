import React, { useEffect, useState } from 'react';

import { Container } from './styles'
import {Form} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import axios from 'axios';

import {createAppointmentRequest} from '../../store/modules/agendamento/actions';

function Agendamentos() {
  const dispatch = useDispatch();

  const [cars, setCars] = useState([]);
  const [services, setServices] = useState([]);
  const [dispo, setDispo] = useState([]);

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

    async function searchDisponibilidades(){
      try{
        const responses = await axios.get('http://localhost:3000/disponibilidades', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        console.log(responses.data)
        let disponibilidadePast = responses.data.filter(item => item.past === false)
        console.log(disponibilidadePast)
        setDispo(disponibilidadePast);
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchDisponibilidades();
  },[])

  function handleSubmit(){
    let car = document.getElementById("car").value
    let service = document.getElementById("service").value
    let disponivel = document.getElementById("disponibilidade").value
    
    let carId = cars.filter(item => item.placa == car)
    let serviceID = services.filter(item => item.tipo_servico == service)
    let disponibilidadeId = dispo.filter(item => item.display_date == disponivel )

    let user = profile.id
    let servico = serviceID[0].id
    let disponibilidade = disponibilidadeId[0].id
    let veiculo = carId[0].id
    let empresa = 1
    let status_agendamento = false
    
    dispatch(createAppointmentRequest({user,veiculo,disponibilidade,servico,empresa,status_agendamento}));
  }

  return (
   <Container>
     <h1>Realizar um agendamento:</h1>
     <Form  onSubmit={handleSubmit}>
       <label>Selecione o veículo</label>
       <select id="car" name="veiculo">
         {
           cars.map(car => {
             return(
              <option key={car.id}>{car.placa}</option>
             )
           })
         }
       </select>

       <label>Selecione a disponibilidade de atendimento</label>
       <select id="disponibilidade" name="disponibilidade">
         {
           dispo.map(disp => {
             return(
              <option key={disp.id}>{disp.display_date}</option>
             )
           })
         }
       </select>
       
       <label>Selecione o serviço</label>
       <select id="service" name="servico">
         {
           services.map(service => {
             return(
              <option key={service.id}>{service.tipo_servico}</option>
             )
           })
         }
       </select>
      <button type="submit">Cadastrar Agendamento</button>
     </Form>
   </Container>
  );
}

export default Agendamentos;