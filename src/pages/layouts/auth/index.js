import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content} from './styles';

import Header from './Header';

function AuthLayout({children}){
  return (
    <>
      <Header/>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AuthLayout;