import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import {toast} from 'react-toastify';

import { Container } from './styles.js';


function AgendamentosRecebidos() {

  const [agendamentos, setAgendamentos] = useState([]);

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    async function searchAgendamentoCar(){
      try{
        const responses = await axios.get('http://localhost:3000/pesquisarAgendamentos', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        console.log(responses)
        setAgendamentos(responses.data);
        toast.success('Aqui você pode conferir seus agendamentos efetuados')
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchAgendamentoCar();
  }, []);

  return (
  <Container>
    <h1>Agendamentos recebidos</h1>
    <table className="table">
      <tbody>
         <tr class="thead">
             <td>Data e hora</td>
             <td>Email do cliente</td>
             <td>Endereco do atendimento</td>
             <td>Serviço contratado</td>
             <td>Placa do veículo</td>
          </tr>
        {agendamentos.map(item => {
          return(
           <tr key={item._id}>
             <td>{item.disponibilidade}</td>
             <td>{item.email}</td>
             <td>{item.endereco}</td>
             <td>{item.servico}</td>
             <td>{item.veiculo}</td>
           </tr>
          );
        })}
      </tbody>
    </table>
  </Container>
  )
}

export default AgendamentosRecebidos;