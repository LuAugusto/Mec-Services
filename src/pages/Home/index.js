import React, {useState, useMemo, useEffect} from 'react';

import { Link } from 'react-router-dom';
import './styles.css';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {FiHelpCircle} from 'react-icons/fi';
import {FcAbout} from 'react-icons/fc';

function Menu() {
  /*
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }
  */

  return (
    <section>
      <img class="mosque"></img>
      <div class="content">
        <div class="textBox">
          <h2>Relize seu agendamento de forma rápida e eficiente!</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
          </p>
          <Link to="/realizarAgendamento" className="btn">
            <span className="btn-span">Realizar um agendamento</span>
          </Link>
        </div>
      </div>

      <ul class="sci">
        <li><Link to="/home"><HiOutlineDocumentText size={30} color="white"/></Link></li>
        <li><Link to="/home"><FiHelpCircle size={30} color="white"/></Link></li>
        <li><Link to="/home"><FcAbout size={30} color="white"/></Link></li>
      </ul>

    </section>
  );
}

export default Menu;