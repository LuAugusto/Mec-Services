import React from 'react';
import {Form,Input} from '@rocketseat/unform';
import { Container } from './styles';
import {toast} from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

const schema = Yup.object().shape({
  tipo_servico:Yup.string().required('Campo obrigatório'),
  tempo_estimado:Yup.string().required('Campo obrigatório'),
});

function EditarServico() {

  const token = useSelector(state => state.auth.token);
  const {id} = useParams();

  function handleSubmit(data){
    
    async function editService(){
      try{
        const responses = await axios.put(`http://localhost:3000/atualizarServico/${id}`, 
        data,
        { headers: {"Authorization" : `Bearer ${token}`}});
        toast.success('Serviço editado com sucesso!')
        window.location.reload();
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    editService()
    
  }

  return (
    <Container>
     <h1>Editar serviço:</h1>
     <Form schema={schema} onSubmit={handleSubmit}>
       <Input name="tipo_servico" type="text" placeholder="Tipo serviço"/>
       <Input name="tempo_estimado" type="text" placeholder="Tempo estimado"/>
       <button type="submit">Editar serviço</button>
     </Form>
    </Container>
  );
}

export default EditarServico;