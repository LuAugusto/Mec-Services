import React,{useEffect, useState} from 'react';
import {Form,Input} from '@rocketseat/unform';
import {toast} from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import {TiPencil} from 'react-icons/ti';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';

const schema = Yup.object().shape({
  tipo_servico:Yup.string().required('Campo obrigatório'),
  tempo_estimado:Yup.string().required('Campo obrigatório'),
});

function CadastrarServico() {

  const token = useSelector(state => state.auth.token);
  const [services,setServices] = useState([]);

  useEffect(() => {
    async function buscarServicosCadastrados(){
      try{
        const responses = await axios.get(`http://localhost:3000/pesquisarServicos`, 
        { headers: {"Authorization" : `Bearer ${token}`}});
        toast.success('Serviços criados ou cadastrar serviços!')
        setServices(responses.data)
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    buscarServicosCadastrados()
  },[])

  function handleSubmit(data){
    
    async function createService(){
      try{
        const responses = await axios.post(`http://localhost:3000/cadastrarServico`, 
        data,
        { headers: {"Authorization" : `Bearer ${token}`}});
        toast.success('Serviço criado com sucesso!')
        window.location.reload();
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    createService()
    
  }

  return (
   <Container>
     <h1>Cadastrar serviço:</h1>
     <Form schema={schema} onSubmit={handleSubmit}>
       <Input name="tipo_servico" type="text" placeholder="Tipo serviço"/>
       <Input name="tempo_estimado" type="text" placeholder="Tempo estimado"/>
       <button type="submit">Cadastrar serviço</button>
     </Form>
     <h1 className="servicosCadastrados">Serviços cadastrados:</h1>
      <Scrollbars style={{ width: '100%', height: 300 }}>
      {services.map(service => {
                return(
                <tr key={service.id}>
                  <td>{service.tipo_servico}</td>
                  <td className="edit">
                    <Link to={`/editarServico/${service.id}`}>
                      <TiPencil className="pen" color="black"/><br/>
                      <span>Editar</span>
                    </Link>
                  </td>
                </tr>
                );
              })}
      </Scrollbars>
   </Container>
  );
}

export default CadastrarServico;