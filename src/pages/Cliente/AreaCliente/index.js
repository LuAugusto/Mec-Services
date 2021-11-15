import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { Container } from './styles';
import {signOut} from '../../../store/modules/auth/actions';
import {useDispatch} from 'react-redux';
import {FaCarAlt} from 'react-icons/fa';
import {AiOutlineIdcard} from 'react-icons/ai';
import {AiOutlineRollback} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';
import AgendamentosRealizados from '../AgendamentosRealizados/index';
import {Modal} from '../../Modals/EditarUsuario/index';
import {ModalCar} from '../../Modals/Car/index';
import {ModalAgendamento} from '../../Modals/Agendamento/index';
import {ModalEditCar} from '../../Modals/EditCar/index';
function AreaCliente() {

  const [showModal, setShowModal] = useState(false);
  const [showModalCar, setShowModalCar] = useState(false);
  const [showModalAgendamento, setShowModalAgendamento] = useState(false);
  const [showModalEditCar, setShowModalEditCar] = useState(false);

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(signOut())
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const openModalCar = () => {
    setShowModalCar(prev => !prev);
  };

  const openModalAgendamento = () => {
    setShowModalAgendamento(prev => !prev);
  };

  const openModalEditCar = () => {
    setShowModalEditCar(prev => !prev);
  };

  return(
   <Container>
     <Modal showModal={showModal} setShowModal={setShowModal} />
     <ModalCar showModalCar={showModalCar} setShowModalCar={setShowModalCar} />
     <ModalAgendamento showModalAgendamento={showModalAgendamento} setShowModalAgendamento={setShowModalAgendamento} />
     <ModalEditCar showModalEditCar={showModalEditCar} setShowModalEditCar={setShowModalEditCar} />
      <div>
        <input type="checkbox" name="" id="sidebar-toggle"/>
        <div className="sidebar">
          <div className="sidebar-header">
              <h3 className="brand">
                <span>
                  
                </span>
                <span>MEC Serviços</span>
              </h3> 
              <label for="sidebar-toggle" className="ti-menu-alt">
                
              </label>
          </div>
          <div className="sidebar-menu">
              <ul>
                <li>
                  <Link onClick={openModalCar}>
                    <span>
                      <FaCarAlt/>
                    </span>
                    <span>Cadastrar veículo</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={openModal}>
                    <span>
                      <AiOutlineIdcard/>
                    </span>
                    <span>Alterar dados</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={openModalEditCar}>
                    <span>
                      <AiFillEdit/>
                    </span>
                    <span>Editar Veículo</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleSignOut}>
                    <span>
                    <AiOutlineRollback/>
                    </span>
                    <span>Sair</span>
                  </Link>
                </li>
                <li>
                    <span>
                      <h3>Comunicação:</h3>
                    </span>
                    <span>atendimentoo@gmail.com</span><br/><br/>
                    <span>(31)3212-3133</span><br/><br/>
                </li>
              </ul>
          </div>
        </div>
        <div className="main-content"> 
          <header>
            <div className="search-wrapper">
              <span className="ti-search">Área Cliente</span>
              <AiOutlineIdcard size={25}/>
            </div>
            <div className="social-icons"> 
                <span className="ti-bell"></span>
                <span className="ti-comment"></span>
                <div></div>
            </div>
          </header>

          <main>
              <h2 className="dash-title">Realize um agendamento na oficina</h2>

              <div className="dashboard-cards">
                  <div>
                    <div className="card-body">
                      <span className="ti-check-box"></span>
                      <div>
                        <h5>Realizar agendamento na oficia.</h5>
                        <h4>Escolha o melhor dia e horário.</h4>
                      </div>
                    </div>
                    <Link onClick={openModalAgendamento}>
                      <div className="card-footer">
                        <a>Realizar Agendamento</a>
                      </div>
                    </Link>
                  </div>
              </div>

             <AgendamentosRealizados/>

          </main>
        </div>

    </div>
   </Container>
  );
}

export default AreaCliente;