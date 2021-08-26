export function createAppointmentRequest(data){
  return {
    type: '@agendamento/CREATE_APPOINTMENT_REQUEST',
    payload: {data},
  };
}
export function createAppointmentSuccess(appointment){
  return {
    type: '@agendamento/CREATE_APPOINTMENT_SUCCESS',
    payload: {appointment}
  };
}
export function createAppointmentFailure(){
  return {
    type: '@agendamento/CREATE_APPOINTMENT_FAILURE',
  };
}