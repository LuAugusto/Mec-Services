import React, { useEffect, useState } from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import {updateCarRequest} from '../../../store/modules/car/actions';
import { Container } from './styles';
import {Link} from 'react-router-dom';
import {Scrollbars} from 'react-custom-scrollbars';

const schema = Yup.object().shape({
  placa:Yup.string().required('Placa do veículo'),
  marca:Yup.string().required('Marca'),
  modelo:Yup.string().required('Modelo'),
  ano:Yup.string().required('Ano'),
  motor:Yup.string().required('Motor'),
});

function EditarVeiculo(){

  const [car, setCar] = useState([]);
  const [carFormData, setCarFormData] = useState('Clique em editar em algum veículo!');
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.profile.id);
  
  const dispatch = useDispatch();

  function handleSubmit({placa,marca,modelo,ano,motor}){

    const id = carFormData.id

    dispatch(updateCarRequest(placa,marca,modelo,ano,motor,user,id));
  }

  function setValueForm(carData){
    setCarFormData(carData)
  }

  useEffect(() => {
    async function searchCar() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/meusVeiculos",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCar(responses.data);
        toast.success("Aqui você pode conferir e editar seus veículos");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    searchCar();
  },[]);

  return(
    <Container>
      <h2>Meus veículos:</h2>
      <Scrollbars style={{ width: 600, height: 140 }}>
        <table className="table-responsive">
            <thead> 
                <tr>
                  <th>Id Car</th>
                  <th>Placa</th>
                  <th>Modelo</th>
                  <th>Marca</th>
                  <th>Ano</th>
                  <th>Motor</th>
                </tr>
            </thead>
            <tbody>
              {car.map((item) => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.placa}</td>
                  <td>{item.modelo}</td>
                  <td>{item.marca}</td>
                  <td>{item.ano}</td>
                  <td>{item.motor}</td>
                  <td>
                    <Link onClick={() => setValueForm(item)}>
                      Editar
                    </Link>
                  </td>
                </tr>
              )
              })}
            </tbody>
        </table>
      </Scrollbars>
      <hr/>
      <h2>Editar veículo</h2>
      <Form schema={schema} onSubmit={handleSubmit} value={carFormData}>
       <label>Placa:</label>
       <Input name="placa" placeholder="Placa do veículo" value={carFormData.placa}/>
       <label>Marca:</label>
       <Input name="marca" type="text" placeholder="Marca do veículo"/>
       <label>Modelo:</label>
       <Input name="modelo" type="text" id="modelo" placeholder="Modelo do veículo"/>
       <label>Ano:</label>
       <Input name="ano" type="number" id="ano" placeholder="Ano do veículo"/>
       <label>Motor:</label>
       <Input name="motor" type="text" id="motor" placeholder="Motor do veículo"/>
      <hr/>
      <button type="submit">Editar veículo</button>
     </Form>
   </Container>
  );
}

export default EditarVeiculo;