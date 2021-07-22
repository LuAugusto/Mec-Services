export function createCarRequest(placa,marca,modelo,ano,motor,user){
  return {
    type: '@car/CREATE_CAR_REQUEST',
    payload: {placa,marca,modelo,ano,motor,user}
  };
}
export function createCarSuccess(car){
  return {
    type: '@car/CREATE_CAR_SUCCESS',
    payload: {car}
  };
}
export function createCarFailure(){
  return {
    type: '@car/CREATE_CAR_FAILURE',
  };
}

//Update Car 

export function updateCarRequest(data){
  return {
    type: '@car/UPDATE_CAR_REQUEST',
    payload: {data},
  };
}
export function updateCarSuccess(car){
  return {
    type: '@car/UPDATE_CAR_SUCCESS',
    payload: {car},
  };
}
export function updateCarFailure(){
  return {
    type: '@car/UPDATE_CAR_FAILURE',
  };
}