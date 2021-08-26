import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import {isBefore} from 'date-fns';
import {toast} from 'react-toastify';

import {GiCancel} from 'react-icons/gi';
import {FaCheckCircle} from 'react-icons/fa';

import { Container,Modal } from './styles.js';


function SearchAgendamento() {

  const [agendamentos, setAgendamentos] = useState([]);
  const [visible,setVisible] = useState([]);
  const [item,setItem] = useState([]);

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    setVisible(false)
    async function searchAgendamentoCar(){
      try{
        const responses = await axios.get('http://localhost:3000/pesquisarAgendamento', 
        { headers: {"Authorization" : `Bearer ${token}`} });
        setAgendamentos(responses.data);
        toast.success('Aqui você pode conferir seus agendamentos efetuados')
      }catch(error){
        toast.error('Falha no sistema')
      }
    }
    searchAgendamentoCar();
  }, []);

  function cancel(){
    setVisible(false);
  }
  function activeModal(item){
    setItem(item);
    setVisible(true);
  }
  function cancelAppointment(){
    async function cancelAppointmentRequest(){
      try{
        const responses = await axios.delete(`http://localhost:3000/cancelarAgendamento/${item}`, 
        { headers: {"Authorization" : `Bearer ${token}`} });
        toast.success('Agendamento cancelado')
        setVisible(false)
        window.location.reload();
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    cancelAppointmentRequest()
  }

  return (
  <Container>
    {
      visible == true ? 
    <Modal>
      <div className="textModal">
        <div>Deseja cancelar o agendamento?</div>
      </div>
      <div className="buttons">
        <button onClick={cancel}>
          <GiCancel color="red" size={40} className="bt1"/>
        </button>
        <button onClick={cancelAppointment}>
          <FaCheckCircle color="green" size={40}  className="bt2"/>
        </button>
       
      </div>
    </Modal>
    :
    <></>
    }
    <h1>Meus agendamentos</h1>
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
             <td className="cancel">
               <button onClick={() => activeModal(item.referenciaId)}>
                <GiCancel size={25} color="red"/>
                Cancelar
               </button>
             </td>
           </tr>
          );
        })}
      </tbody>
    </table>
  </Container>
  )
}

export default SearchAgendamento;