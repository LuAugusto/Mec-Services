import React,{useState,useEffect} from 'react';
import {Form,Input} from '@rocketseat/unform';
import {toast} from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { Container } from './styles';

const schema = Yup.object().shape({
  hour:Yup.string().required('Campo obrigatório'),
});

function CadastrarDisponibilidade() {

  const token = useSelector(state => state.auth.token);
  const [date, setDate] = useState(new Date());
  const [listDate, setListDate] = useState([]);

  useEffect(() => {
    async function listDisponibilidades(){
      try{
        const responses = await axios.get(`http://localhost:3000/disponibilidades`, 
        { headers: {"Authorization" : `Bearer ${token}`}});
        let disponibilidadePast = responses.data.filter(item => item.past === false)
        setListDate(disponibilidadePast)
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    listDisponibilidades()
  },[])
  
  
  const onChange = date => {
    setDate(date)
  }

  function dateFormat(data){
    let {hour} = data;

    
    let dateValue = date.getDate();
    let monthValue = date.getMonth() + 1;
    let yearValue = date.getFullYear();
    
    const fullFormat = `${yearValue}-${monthValue <= 9 ? `0${monthValue}` : monthValue}-${dateValue <= 9 ? `0${dateValue}` : dateValue}T${hour <= 9 ? `0${hour}` : hour}:00`;
    return fullFormat
  }
  function handleSubmit(data){
    const date = dateFormat(data)
    
    async function createDisponibilidade(){
      try{
        const responses = await axios.post(`http://localhost:3000/cadastrarDisponibilidade`, 
        {date},
        { headers: {"Authorization" : `Bearer ${token}`}});
        toast.success('Disponibilidade criada com sucesso!')
        window.location.reload();
      }catch(error){
        const err = error.response.data
        toast.error(err.error)
      }
    }
    createDisponibilidade()
  }

  return (
    <Container>
      <Calendar className="calendario"
        onChange={onChange}
        value={date}
      />
     <div className="leftForm">
      <Form schema={schema} onSubmit={handleSubmit}>
          <label className="hourText">Horário:</label>
          <Input name="hour" type="number" placeholder="Formato hora: 00 "/>
          <button type="submit">Cadastrar Disponibilidade</button>
        </Form>
        <label className="hourTextTwo">Horários disponíveis:</label>
        <select className="listDate">
          {listDate.map(date => {
            return(
              <option key={date.id}>{date.display_date}</option>
            )
          })}
        </select>
     </div>
    </Container>
  );
}

export default CadastrarDisponibilidade;