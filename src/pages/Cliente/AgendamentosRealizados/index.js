import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import {Modal} from '../../Modals/EditarEmpresa/index';
import { Container } from "./styles.js";

function AgendamentosRealizados() {
  const [agendamentos, setAgendamentos] = useState([]);

  const token = useSelector((state) => state.auth.token);

  const [showModal, setShowModal] = useState(false);

  
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    async function searchAgendamentoCar() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/pesquisarAgendamento",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAgendamentos(responses.data);
        toast.success("Aqui você pode conferir seus agendamentos efetuados");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    searchAgendamentoCar();
  }, []);

  function cancelarAgendamento(id){
    async function cancelarServico() {
      try {
        const responses = await axios.delete(
          `http://localhost:3000/cancelarAgendamento/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Agendamento cancelado com sucesso!");
        window.location.reload();
      } catch (error) {
        toast.error("Agendamento não pode ser cancelado!");
      }
    }
    cancelarServico();
  }

  return (
    <Container>
      <section className="recent">
        <div className="activity-grid">
          <div className="activity-card">
            <h3>Meus agendamentos</h3>
            <div class="table-responsive">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>Data e hora</th>
                    <th>Endereço</th>
                    <th>Serviço contratado</th>
                    <th>Placa veículo</th>
                    <th>Andamento</th>
                    <th>Cancelar Serviço</th>
                  </tr>
                </thead>
               <tbody>
               {agendamentos.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.disponibilidade}</td>
                        <td>{item.endereco}</td>
                        <td>{item.servico}</td>
                        <td>{item.veiculo}</td>
                        <td>
                          {item.status != "Em andamento" ? (
                            <span className="badge success">{item.status}</span>
                          ) : (
                            <span className="badge warning">{item.status}</span>
                          )}
                        </td>
                        <td>
                          <button onClick={() => cancelarAgendamento(item.referenciaId)} className="btn-cancelar">Cancelar</button>
                        </td>
                      </tr>
                    );
                  })}
               </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AgendamentosRealizados;
