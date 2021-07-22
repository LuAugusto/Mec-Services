import React from 'react';
import {Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GiGears } from "react-icons/gi";

import './styles.css';
import './assets/menu.png';

function Header() {
  

  return(
      <header>
        <Link class="logo" to="/home">MEC Serviços<GiGears/></Link>
        <div class="toggle"></div>
        <ul class="navigation">
          <li><Link to="/home" class="active">Home<AiOutlineHome/></Link></li>
          <li><Link to="/cadastrarVeiculo">Cadastrar veículo</Link></li>
          <li><Link to="/profile">Ver perfil<CgProfile/></Link></li>
          <li><Link to="/meusVeiculos">Meus veículos</Link></li>
          <li><Link to="/pesquisarAgendamento">Meus agendamentos</Link></li>
        </ul>
      </header>
  );
}

export default Header;