import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Agendamentos from '../pages/Agendamentos';
import Profile from '../pages/Profile';
import Car from '../pages/Car';
import SearchCar from '../pages/SearchCar';
import SearchAgendamento from '../pages/searchAgendamento';
import EditCar from '../pages/EditCar/index.js';
import Empresa from '../pages/Empresa/index';
import Cadastros from '../pages/Empresa/Cadastros/index.js';
import AgendamentosRecebidos from '../pages/Empresa/AgendamentosRecebidos/index.js';
import ProfileEmpresa from '../pages/Empresa/ProfileEmpresa/index.js';
import CadastrarServico from '../pages/Empresa/CadastrarServico/index.js';
import CadastrarDisponibilidade from '../pages/Empresa/CadastrarDisponibilidade/index.js';
import EditarServico from '../pages/Empresa/EditarServico/index.js';
import Home from '../pages/Home';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      
      <Route path="/home" exact component={Home} isPrivate/>
      <Route path="/profile" exact component={Profile} isPrivate/>
      <Route path="/realizarAgendamento"exact component={Agendamentos} isPrivate/>
      <Route path="/cadastrarVeiculo"exact component={Car} isPrivate/>
      <Route path="/meusVeiculos"exact component={SearchCar} isPrivate/>
      <Route path="/pesquisarAgendamento"exact component={SearchAgendamento} isPrivate/>
      <Route path="/editarVeiculo/:id"exact component={EditCar} isPrivate/>
      <Route path="/empresa"exact component={Empresa}/>
      <Route path="/areaempresa"exact component={Cadastros} isPrivate/>
      <Route path="/agendamentosRecebidos"exact component={AgendamentosRecebidos} isPrivate/>
      <Route path="/atualizarEmpresa"exact component={ProfileEmpresa} isPrivate/>
      <Route path="/cadastrarServico"exact component={CadastrarServico} isPrivate/>
      <Route path="/cadastrarDisponibilidade"exact component={CadastrarDisponibilidade} isPrivate/>
      <Route path="/editarServico/:id"exact component={EditarServico} isPrivate/>
    </Switch>
  );
}