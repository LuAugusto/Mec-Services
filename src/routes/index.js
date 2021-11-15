import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Cliente/Profile';
import Empresa from '../pages/Empresa/index';
import Home from '../pages/Empresa/Home';
import AreaCliente from '../pages/Cliente/AreaCliente';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      
      <Route path="/profile" exact component={Profile} isPrivate/>
      <Route path="/empresa"exact component={Empresa}/>
      <Route path="/areaempresa"exact component={Home} isPrivate/>
      <Route path="/inicio"exact component={AreaCliente} isPrivate/>
    </Switch>
  );
}