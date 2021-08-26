import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FaCogs } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import {FaUserLock} from 'react-icons/fa';
import {signInEmpresa} from '../../store/modules/auth/actions';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email:Yup.string().email().required('Email inválido'),
  password: Yup.string().required().required('A senha é obrigatória'),
})

function Login() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({email,password}){
    dispatch(signInEmpresa(email,password));
  }
  
  return (
    <>
      <FaUserLock size={60}/>
  
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua senha"/>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}

export default Login;