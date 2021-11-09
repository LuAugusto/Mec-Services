import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as Yup from 'yup';
import {Form,Input, Select} from '@rocketseat/unform';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import { Container } from "./styles.js";
import {createAppointmentRequest} from '../../../store/modules/agendamento/actions';

function RealizarAgendamento(){

  const user = useSelector((state) => state.user.profile.id);
  const token = useSelector((state) => state.auth.token);
  const [car,setCar] = useState([]);
  const [listDate,setListDate] = useState([]);

  const [placa,setPlaca] = useState([]);
  const [data,setData] = useState([]);
  const [service,setService] = useState([]);

  const dispatch = useDispatch();

  function handleSubmit(){
    const carPlaca = document.getElementById('car').value;
    const data = document.getElementById('date').value;
    const service = document.getElementById('service').value;

    let idData = 0;
    let idCarro = 0;

    const idDa = listDate.filter((idDate) => {
      if(idDate.display_date === data){
        idData = idDate.id
      }
    });
    
    const idCa = car.filter((idCar) => {
      if(idCar.placa === carPlaca){
        idCarro = idCar.id
      }
    });
   
    dispatch(createAppointmentRequest({user,car:idCarro,disponibilidade:idData,empresa:1,servico:service,status_agendamento:true}));
  }

  useEffect(() => {
    async function searchCar() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/meusVeiculos",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCar(responses.data);
        toast.success("Aqui você pode conferir seus veículos");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }

    async function listDisponibilidades(){
      try{
        const responses = await axios.get(`http://localhost:3000/disponibilidades`, 
        { headers: {"Authorization" : `Bearer ${token}`}});
        let disponibilidadePast = responses.data.filter(item => item.past === false)
        setListDate(disponibilidadePast)
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }

    listDisponibilidades()
    searchCar();
  },[]);

  return(
    <Container>
      <h1>Agendamento de serviço!</h1>
      <Form onSubmit={handleSubmit}>
        <h2>Selecione seu veículo:</h2>
       <select id="car" name="car">
         {car.map((car) => {
           return(
           <option key={car.id}>{car.placa}</option>
           )
          })}
       </select>
       <h2>Selecione o melhor dia e horário:</h2>
       <select id="date" name="date">
         {listDate.map((date) => {
           return(
           <option key={date.id}>{date.display_date}</option>
           )
          })}
       </select>
       <h2>Selecione o serviço que deseja:</h2>
       <select id="service" name="service">
         <option>Troca de Embreagem</option>
         <option>Troca de Pneu</option>
         <option>Pintura</option>
       </select>
      <hr/>
      <button type="submit">Agendar</button>
     </Form>
    </Container>
  );
}

export default RealizarAgendamento;