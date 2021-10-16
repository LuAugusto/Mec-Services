import React from 'react';
import {Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiTwotoneLock } from "react-icons/ai";
import { GiGears } from "react-icons/gi";
import './header.css';
import {HeaderCSS} from './styledHeader';

function Header() {

  return(
      <HeaderCSS className="headerCss">
        <Link class="logo" to="/">MEC Serviços<GiGears/></Link>
        <div class="toggle"></div>
        <ul class="navigation">
          <li>
            <Link to="/empresa">
             <AiTwotoneLock/>
              Empresa
            </Link>
          </li>
        </ul>
      </HeaderCSS>
  );
}

export default Header;