import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import {Modal} from '../../Modals/EditarEmpresa/index';
import { Container } from "./styles.js";

function AgendamentosRecebidos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [andamento, setAndamento] = useState([]);
  const [recebido, setRecebido] = useState([]);
  const [concluido, setConcluido] = useState([]);

  const token = useSelector((state) => state.auth.token);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    async function searchAgendamentoCar() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/pesquisarAgendamentos",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAgendamentos(responses.data);
        let countA = 0
        let countB = 0
        let countC = 0
        for(let x = 0; x < responses.data.length; x++){
          if(responses.data[x].status === 'Em andamento'){
            countA += 1
            setAndamento(countA)
          }
          if(responses.data[x].status === 'Recebido'){
            countB += 1
            setRecebido(countB)
          }
          if(responses.data[x].status === 'Concluído'){
            countC += 1
            setConcluido(countC)
          }
        }
      
        toast.success("Aqui você pode conferir seus agendamentos efetuados");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    searchAgendamentoCar();
  }, []);

  function handle(status, id) {
    async function atualizarAgendamento() {
      try {
        const responses = await axios.put(
          `http://localhost:3000/atualizarAgendamento/${id}`,
          { status },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Agendamento atualizado");
        window.location.reload();
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    atualizarAgendamento();
  }
  return (
    <Container>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="recent">
        <div className="activity-grid">
          <div className="activity-card">
            <h3>Agendamentos recebidos</h3>
            <div class="table-responsive">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>Data e hora</th>
                    <th>Endereço</th>
                    <th>Serviço contratado</th>
                    <th>Telefone cliente</th>
                    <th>Nome cliente</th>
                    <th>Veículo cliente</th>
                    <th>Atualizar Status</th>
                    <th>Status atual</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentos.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.disponibilidade}</td>
                        <td>{item.endereco}</td>
                        <td>{item.servico}</td>
                        <td>{item.telefone}</td>
                        <td>{item.nome}</td>
                        <td>{item.veiculo}</td>
                        <td>
                          <select
                            className="selectClass"
                            onChange={(e) =>
                              handle(e.target.value, item.referenciaId)
                            }
                          >
                            <option defaultValue>Selecionar status</option>
                            <option>Recebido</option>
                            <option>Em andamento</option>
                            <option>Concluído</option>
                          </select>
                        </td>
                        <td>
                          {item.status != "Em andamento" ? (
                            <span className="badge success">{item.status}</span>
                          ) : (
                            <span className="badge warning">{item.status}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div class="summary">
            <div class="summary-card">
              <div class="summary-single">
                <span class="ti-id-badge"></span>
                <div>
                  <h5>{andamento}</h5>
                  <small>Em andamento</small>
                </div>
              </div>

              <div class="summary-single">
                <span class="ti-calendar"></span>
                <div>
                  <h5>{concluido}</h5>
                  <small>Concluído</small>
                </div>
              </div>

              <div class="summary-single">
                <span class="ti-face-smile"></span>
                <div>
                  <h5>{recebido}</h5>
                  <small>Recebido/Em espera</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AgendamentosRecebidos;
