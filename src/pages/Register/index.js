import React,{ useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FaCogs, FaMarkdown } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';

import {signUpRequest} from '../../store/modules/auth/actions';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email:Yup.string().email().required('Email inválido'),
  name:Yup.string().required('Nome inválido'),
  telefone:Yup.string().required('Telefone inválido'),
  password: Yup.string().required('A senha é obrigatória'),
})

function Register() {
  
  const [tel, setTel] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({name,email,password,telefone}){
    dispatch(signUpRequest(name,email,password,telefone));
  }

  useEffect(() => {
    
      function Mask(){
        
        let campo = document.getElementById('telefone');
        
        if(campo.value.length == 1){
          campo.value = '(' + tel
          setTel(campo.value);
        }
    
        if(campo.value.length == 3){
          campo.value = tel + ')'
          setTel(campo.value);
        }

        if(campo.value.length == 9){
          campo.value = tel + '-';
          setTel(campo.value);
        }
      }
      Mask();
   
  }, [tel]);

  return (
    <>
      <FaCogs size={60}/>
  
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome"/>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua senha"/>
        
        <Input type="text" name="telefone" id="telefone" 
        value={tel} onChange={e => setTel(e.target.value)}
        placeholder="telefone: (xx) xxxxx-xxxx" maxLength="14" />

        <button type="submit">{loading ? 'Carregando...' : 'Registrar'}</button>
        <Link to="/">Possui uma conta?</Link>
      </Form>
    </>
  );
}

export default Register;