import React, { useEffect, useState } from 'react';
import {Form,Input} from '@rocketseat/unform';
import {toast} from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Container } from './styles';

const schema = Yup.object().shape({
  email:Yup.string().required().email(),
  name:Yup.string().required(),
  cnpj: Yup.string().required(),
  telefone:Yup.string().required(),
  endereco:Yup.string().required(),
  oldpassword:Yup.string().required('Favor inserir senha'),
  password:Yup.string(),
  confirmPassword:Yup.string().when('password',(password,field) => 
    password ? field.required('Favor inserir nova senha').oneOf([Yup.ref('password')]) : field
  ),
});

function ProfileEmpresa() {

  const [data,setData] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    async function dadosEmpresa(){
      try{
        const responses = await axios.get(`http://localhost:3000/dadosEmpresa`, 
        { headers: {"Authorization" : `Bearer ${token}`}});
        setData(responses.data)
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    dadosEmpresa()
  },[]);

  function handleSubmit(dados){

    const {name,email,telefone,endereco,cnpj,oldpassword, ...rest} = dados;

    const data = Object.assign(
      {name,email,telefone,endereco,cnpj,oldpassword},
      rest.password ? rest : {}
    );

    async function updateEmpresa(){
      try{
        const responses = await axios.put(`http://localhost:3000/atualizarCadastroEmpresa`, 
        data,
        { headers: {"Authorization" : `Bearer ${token}`}});
        toast.success('Perfil atualizado')
        window.location.reload();
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    updateEmpresa()
  }

  return (
   <Container>
     <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
       <Input name="name" placeholder="Nome completo"/>
       <Input name="email" type="email" placeholder="Seu E-mail"/>
       <Input name="telefone" type="text" id="telefone" placeholder="Seu telefone"/>
       <Input name="endereco" type="text" id="endereco" placeholder="Seu endereco"/>
       <Input name="cnpj" type="text" id="cnpj" placeholder="Seu CNPJ"/>

      <hr/>
      <Input name="oldpassword" type="password" placeholder="Sua senha"/>
      <Input name="password" type="password" placeholder="Nova senha"/>
      <Input name="confirmPassword" type="password" placeholder="Confirmar nova senha"/>
      <button type="submit">Atualizar perfil</button>
     </Form>
   </Container>
  );
}

export default ProfileEmpresa;