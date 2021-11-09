import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import {Modal} from '../../Modals/EditarEmpresa/index';
import './style.css';

function RelatorioConcluidos() {

  const token = useSelector((state) => state.auth.token);
  const [concluidos, setConcluidos] = useState([])

  useEffect(() => {
    async function find() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/agendamentosConcluidos",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setConcluidos(responses.data);
        toast.success("Aqui você pode conferir os agendamentos concluídos!");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    find();
  }, []);

  return (
    <div>
      <table className="table-responsive">
          <thead> 
              <tr>
                <th>Id Agend.</th>
                <th>Data e Hora</th>
                <th>Status</th>
                <th>Serviço</th>
                <th>Veículo</th>
                <th className="totalDay">Total:{concluidos.length}</th>
              </tr>
          </thead>
          <tbody>
            {concluidos.map((item) => {
              return (
                  <tr key={item.referenciaId}>
                    <td>{item.referenciaId}</td>
                    <td>{item.disponibilidade}</td>
                    <td>{item.status}</td>
                    <td>{item.servico}</td>
                    <td>{item.veiculo}</td>
                  </tr>
              );
            })} 
          </tbody>
      </table>
    </div>
  );
}

export default RelatorioConcluidos;