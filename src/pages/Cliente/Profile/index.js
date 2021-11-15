import React from 'react';
import {Form,Input} from '@rocketseat/unform';
import {useSelector,useDispatch} from 'react-redux';

import * as Yup from 'yup';

import {signOut} from '../../../store/modules/auth/actions';

import {updateProfileRequest} from '../../../store/modules/user/actions';

import { Container,But } from './styles';

const schema = Yup.object().shape({
  email:Yup.string().required().email(),
  name:Yup.string().required(),
  telefone:Yup.string().required(),
  oldpassword:Yup.string().required('Informe sua senha'),
  password:Yup.string(),
  confirmPassword:Yup.string().when('password',(password,field) => 
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

function Profile() {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut(){
    dispatch(signOut());
  }

  return (
   <Container>
     <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
       <Input name="name" placeholder="Nome completo"/>
       <Input name="email" type="email" placeholder="Seu E-mail"/>
       <Input name="telefone" type="text" id="telefone" placeholder="Seu telefone"/>

      <hr/>
      <Input name="oldpassword" type="password" placeholder="Sua senha"/>
      <Input name="password" type="password" placeholder="Nova senha"/>
      <Input name="confirmPassword" type="password" placeholder="Confirmar nova senha"/>
      <button type="submit">Atualizar perfil</button>
     </Form>
     <But type="button" onClick={handleSignOut}>
        Sair do Mec Serviços
     </But>
   </Container>
  );
}

export default Profile;