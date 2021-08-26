import React from 'react';
import {Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiTwotoneLock } from "react-icons/ai";
import { GiGears } from "react-icons/gi";

function Header() {

  return(
      <header>
        <Link class="logo" to="/home">MEC Serviços<GiGears/></Link>
        <div class="toggle"></div>
        <ul class="navigation">
          <li>
            <Link to="/empresa">
             <AiTwotoneLock/>
              Empresa
            </Link>
          </li>
        </ul>
      </header>
  );
}

export default Header;