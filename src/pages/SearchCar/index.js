import React, {useEffect, useState} from 'react';

import { Container } from './styles';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {AiFillCar} from 'react-icons/ai';
import {TiPencil} from 'react-icons/ti';
import {FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';

function SearchCar(){

  const [cars, setCars] = useState([]);

  const token = useSelector(state => state.auth.token);
  
  useEffect(() => {
    async function searchCarsUsers(){
      try{
        const responses = await axios.get('http://localhost:3000/meusVeiculos', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        setCars(responses.data);
        toast.success('Aqui você pode conferir seus veículos cadastrados')
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchCarsUsers();
  }, [])

  //const ref = `/editar`
  return (
      <Container>
        <h1>Meus veículos</h1>
        <table className="table">
          <tbody>
             <tr class="thead">
                 <td>Placa</td>
                 <td>Modelo</td>
                 <td>Ano</td>
                 <td>Marca</td>
                 <td>Motor</td>
              </tr>
            {cars.map(car => {
              return(
               <tr key={car.id}>
                 <td>{car.placa}</td>
                 <td>{car.modelo}</td>
                 <td>{car.ano}</td>
                 <td>{car.marca}</td>
                 <td>{car.motor}</td>
                
                 <td className="edit">
                   <Link to={`/editarVeiculo/${car.id}`}>
                    <TiPencil className="pen" color="black"/><br/>
                    Editar
                   </Link>
                 </td>
               </tr>
              );
            })}
          </tbody>
        </table>
    </Container>
  );
}

export default SearchCar;