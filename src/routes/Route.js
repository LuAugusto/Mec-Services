import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';

import AuthLayout from '../pages/layouts/auth';

import Home from '../pages/Home';

import {store} from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}){
  const {signed, empresa} = store.getState().auth;

  if(!signed && isPrivate){
    return <Redirect to="/"/>
  }

  if(signed && empresa && !isPrivate){
    return <Redirect to="/areaempresa"/>
  }

  if(signed && !isPrivate){
    return <Redirect to="/home"/>
  }

  const Layout = signed ? Home : AuthLayout;
  

  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}
    
    />
  )
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component:PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}