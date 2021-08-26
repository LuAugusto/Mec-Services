import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from './styles';

import Header from './Header';
function DefaultLayout({children}){
  return (
    <Wrapper>
      <Header/>
      {children}
    </Wrapper>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout;