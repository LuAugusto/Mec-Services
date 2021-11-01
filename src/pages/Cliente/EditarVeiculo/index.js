import React, { useEffect, useState } from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import {updateCarRequest} from '../../../store/modules/car/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
  placa:Yup.string().required('Placa do veículo'),
  marca:Yup.string().required('Marca'),
  modelo:Yup.string().required('Modelo'),
  ano:Yup.string().required('Ano'),
  motor:Yup.string().required('Motor'),
});

function EditarVeiculo(){

  const [car, setCar] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.profile.id);
  
  const dispatch = useDispatch();

  function handleSubmit({placa,marca,modelo,ano,motor}){

    const idcar = car.filter((car) => car.placa === placa);

    const id = idcar[0].id
    console.log(id)
    dispatch(updateCarRequest(placa,marca,modelo,ano,motor,user,id));
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
        console.log(error)
        toast.error("Falha no sistema");
      }
    }
    searchCar();
  },[]);

  return(
    <Container>
      <h2>Meus veículos cadastrados:</h2>
      <hr/>
      <select>
        {car.map((car) => {
          return(
            <option>{car.placa}</option>
          )
        })}
      </select>
      <hr/>
      <h2>Editar veículo</h2>
      <Form schema={schema} onSubmit={handleSubmit}>
       <label>Placa:</label>
       <Input name="placa" placeholder="Placa do veículo"/>
       <label>Marca:</label>
       <Input name="marca" type="text" placeholder="Marca do veículo"/>
       <label>Modelo:</label>
       <Input name="modelo" type="text" id="modelo" placeholder="Modelo do veículo"/>
       <label>Ano:</label>
       <Input name="ano" type="text" id="ano" placeholder="Ano do veículo"/>
       <label>Motor:</label>
       <Input name="motor" type="text" id="motor" placeholder="Motor do veículo"/>
      <hr/>
      <button type="submit">Editar veículo</button>
     </Form>
   </Container>
  );
}

export default EditarVeiculo;