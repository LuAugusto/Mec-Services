import React from 'react';

import { Link } from 'react-router-dom';
import './styles.css';
import {SiReact} from 'react-icons/si';

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
      <SiReact size={500} className="imageHome"/>
      <div className="content">
        <div className="textBox">
          <h2>Relize seu agendamento de forma rápida e eficiente!</h2>
          <p>
            Nossa plataforma foi criada para te atender de forma
            mais organizada e eficiente, você pode cadastrar um veículo e realizar
            um agendamento em nossa oficina de acordo com o melhor horário disponível para você.
          </p>
          <Link to="/realizarAgendamento" className="btn">
            <span className="btn-span">Realizar um agendamento</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Menu;