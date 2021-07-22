import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';

import AuthLayout from '../pages/layouts/auth';
import DefaultLayout from '../pages/layouts/default';
import Home from '../pages/Home';

import {store} from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}){
  const {signed} = store.getState().auth;

  if(!signed && isPrivate){
    return <Redirect to="/"/>
  }

  if(signed && !isPrivate){
    return <Redirect to="/home"/>
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  
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