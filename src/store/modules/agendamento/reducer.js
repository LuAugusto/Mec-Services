import produce from 'immer';

const INITIAL_STATE = {
  agendamento: null,
};

export default function agendamento(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {

      case '@agendamento/CREATE_APPOINTMENT_SUCCESS': {
        draft.agendamento = action.payload.agendamento;
        break;
      }

      default:
    }
  });
}
