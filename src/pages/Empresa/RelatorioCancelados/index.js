import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import {Modal} from '../../Modals/EditarEmpresa/index';
import './style.css';

function RelatorioCancelados() {

  const token = useSelector((state) => state.auth.token);
  const [cancelados, setCancelados] = useState([])

  useEffect(() => {
    async function findCanceled() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/agendamentosCancelados",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCancelados(responses.data);
        toast.success("Aqui você pode conferir seus agendamentos efetuados");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    findCanceled();
  }, []);

  return (
    <div>
      <table className="table-responsive">
          <thead> 
              <tr>
                <th>Id Agend.</th>
                <th>Status Agendamento</th>
                <th>Data cancelamento</th>
                <th>Data criação</th>
                <th>id usuário</th>
                <th className="totalCancelados">Total:{cancelados.length}</th>
              </tr>
          </thead>
          <tbody>
                  {cancelados.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {item.status_agendamento === false ? 'Inativo/Cancelado' : ''}
                        </td>
                        <td>{item.canceled_at}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.user}</td>
                      </tr>
                    );
                  })}
          </tbody>
      </table>
    </div>
  );
}

export default RelatorioCancelados;