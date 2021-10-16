import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineRollback} from 'react-icons/ai';
import {GiMechanicGarage} from 'react-icons/gi';
import {FcDataProtection} from 'react-icons/fc';
import {FaClipboardList} from 'react-icons/fa';
import {HiOutlineViewList} from 'react-icons/hi';
import {BiTime} from 'react-icons/bi';
import {signOut} from '../../store/modules/auth/actions';
import {Modal} from '../Modals/EditarEmpresa/index';
import {ModalDisp} from '../Modals/Disponibilidade/index';
import {ModalRelatorioCanceled} from '../Modals/Relatorios/Cancelados';
import {ModalRelatorioDay} from '../Modals/Relatorios/diarios';
import {ModalRelatorioConcluidos} from '../Modals/Relatorios/Concluidos';

import AgendamentosRecebidos from '../Empresa/AgendamentosRecebidos/index';

function Menu() {

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(signOut())
  }

  const [showModal, setShowModal] = useState(false);
  const [showModalDisp, setShowModalDisp] = useState(false);
  const [showModalCanceled, setShowModalCanceled] = useState(false);
  const [showModalDay, setShowModalDay] = useState(false);
  const [showModalConcluidos, setShowModalConcluidos] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const openModalDisp = () => {
    setShowModalDisp(prev => !prev);
  };
  const openModalRelatorioCanceled = () => {
    setShowModalCanceled(prev => !prev);
  };
  const openModalRelatorioDay = () => {
    setShowModalDay(prev => !prev);
  };
  const openModalRelatorioConcluidos = () => {
    setShowModalConcluidos(prev => !prev);
  };

  return (
  <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ModalDisp showModalDisp={showModalDisp} setShowModalDisp={setShowModalDisp} />
      <ModalRelatorioCanceled showModalCanceled={showModalCanceled} setShowModalCanceled={setShowModalCanceled} />
      <ModalRelatorioDay showModalDay={showModalDay} setShowModalDay={setShowModalDay} />
      <ModalRelatorioConcluidos showModalConcluidos={showModalConcluidos} setShowModalConcluidos={setShowModalConcluidos} />
      <input type="checkbox" name="" id="sidebar-toggle"/>
      <div className="sidebar">
        <div className="sidebar-header">
            <h3 className="brand">
              <span>
                <GiMechanicGarage size={20}/>
              </span>
              <span>MEC Serviços</span>
            </h3> 
            <label for="sidebar-toggle" className="ti-menu-alt">
              <HiOutlineViewList/>
            </label>
        </div>
        <div className="sidebar-menu">
            <ul>
              <li>
                <Link>
                  <span>
                    <AiOutlineHome/>
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link onClick={openModalDisp}>
                  <span>
                    <BiTime/>
                  </span>
                  <span>Disponibilidades</span>
                </Link>
              </li>
              <li>
                <Link onClick={openModal}>
                  <span>
                    <FcDataProtection/>
                  </span>
                  <span>Alterar dados</span>
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
            </ul>
        </div>
      </div>
      <div className="main-content"> 
         <header>
           <div className="search-wrapper">
             <span className="ti-search"></span>
           </div>
           <div className="social-icons"> 
              <span className="ti-bell"></span>
              <span className="ti-comment"></span>
              <div></div>
           </div>
         </header>

        <main>
            <h2 className="dash-title">Dados sobre agendamentos</h2>

            <div className="dashboard-cards">

                <div className="card-single">
                  <div className="card-body">
                    <span className="ti-briefcase"></span>
                    <div>
                      <h5>Agendamentos do dia</h5>
                      <h4>Lista de agendamentos do dia</h4>
                    </div>
                  </div>
                  <div className="card-footer" onClick={openModalRelatorioDay}>
                    <a>Lista completa</a>
                  </div>
                </div>

                <div className="card-single">
                  <div className="card-body">
                    <span className="ti-briefcase"></span>
                    <div>
                      <h5>Todos Agendamentos concluídos</h5>
                      <h4>Lista de agendamentos concluídos</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a onClick={openModalRelatorioConcluidos}>Lista completa</a>
                  </div>
                </div>

                <div className="card-single">
                  <div className="card-body">
                    <span className="ti-check-box"></span>
                    <div>
                      <h5>Agendamentos cancelados</h5>
                      <h4>Últimos agendamentos cancelados</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a onClick={openModalRelatorioCanceled}>Lista completa</a>
                  </div>
                </div>
            </div>

            <AgendamentosRecebidos/>

        </main>
      </div>

  </div>
  );
}

export default Menu;