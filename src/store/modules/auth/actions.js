export function signInRequest(email,password){
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(token, user){
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token,user},
  };
}

export function signUpRequest(name,email,password,telefone){
  return{
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name,email,password,telefone}
  }
}

export function signFailure(){
  return{
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut(){
  return{
    type: '@auth/SIGN_OUT',
  }
}

//Empresa

export function signInEmpresa(email,password){
  return {
    type: '@auth/SIGN_IN_EMPRESA',
    payload: {email, password},
  };
}

export function signInEmpresaSuccess(token, empresa){
  return {
    type: '@auth/SIGN_IN_EMPRESA_SUCCESS',
    payload: {token,empresa},
  };
}
