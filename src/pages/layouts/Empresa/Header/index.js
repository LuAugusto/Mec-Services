import React from 'react';
import {Link} from 'react-router-dom';
import { MdExitToApp } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { GiGears } from "react-icons/gi";
import {useDispatch} from 'react-redux';
import {signOut} from '../../../../store/modules/auth/actions';
import './styles.css';

function Header() {

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(signOut());
  }

  return(
      <header>
        <Link class="logo" to="/areaempresa">MEC Serviços<GiGears/></Link>
        <div class="toggle"></div>
        <ul class="navigation">
          <li className="boxSair">
            <Link>
            <button className="buttonHeader" onClick={handleSignOut}> 
              <MdExitToApp/>
              Sair
            </button>
            </Link>
          </li>
          <li className="boxSair">
            <Link to="/areaempresa">
            <button className="buttonHeader"> 
              <IoMdArrowBack/>
              Voltar
            </button>
            </Link>
          </li>
        </ul>
      </header>
  );
}

export default Header;