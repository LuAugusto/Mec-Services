import React from 'react';
import {RiToolsFill} from 'react-icons/ri';
import {BiTime} from 'react-icons/bi';
import {BiSearchAlt} from 'react-icons/bi';
import {FaUserEdit} from 'react-icons/fa';
import { Container } from './style';

import {Link} from 'react-router-dom';

function Cadastros() {
  return (
    <Container>
      <Link to="/cadastrarServico">
        <div class="card">
          <RiToolsFill size={100}/>
          <div class="contain">
            <h4><b>Cadastrar ou editar serviço.</b></h4>
          </div>
        </div>
      </Link>
      <Link to="/cadastrarDisponibilidade">
        <div class="card">
          <BiTime size={100}/>
          <div class="contain">
            <h4><b>Cadastrar disponibilidade.</b></h4>
          </div>
        </div>
      </Link>
      <Link to="/agendamentosRecebidos">
        <div class="card">
          <BiSearchAlt size={100}/>
          <div class="contain">
            <h4><b>Pesquisar agendamento.</b></h4>
          </div>
        </div>
      </Link>
      <Link to="/atualizarEmpresa">
        <div class="card">
          <FaUserEdit size={100}/>
          <div class="contain">
            <h4><b>Atualizar empresa.</b></h4>
          </div>
        </div>
      </Link>
    </Container>
  );
}

export default Cadastros;