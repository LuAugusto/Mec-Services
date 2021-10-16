import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import {Modal} from '../../Modals/EditarEmpresa/index';
import './style.css';

function RelatorioCancelados() {

  const token = useSelector((state) => state.auth.token);
  const [diarios, setDiarios] = useState([])

  useEffect(() => {
    async function findDay() {
      try {
        const responses = await axios.get(
          "http://localhost:3000/agendamentosDoDia",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(responses.data)
        setDiarios(responses.data);
        toast.success("Aqui você pode conferir os agendamentos efetuados no dia");
      } catch (error) {
        toast.error("Falha no sistema");
      }
    }
    findDay();
  }, []);

  return (
    <div>
      <table className="table-responsive">
          <thead> 
              <tr>
                <th>Id Agend.</th>
                <th>Data e Hora</th>
                <th className="totalDay">Total:{diarios.length}</th>
              </tr>
          </thead>
          <tbody>
                  {diarios.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.display_date}</td>
                      </tr>
                    );
                  })}
          </tbody>
      </table>
    </div>
  );
}

export default RelatorioCancelados;