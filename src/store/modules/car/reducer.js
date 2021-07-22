import produce from 'immer';

const INITIAL_STATE = {
  car: null,
};

export default function car(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@car/CREATE_CAR_SUCCESS': {
        draft.car = action.payload.car;  
        
        break;
      }
      case '@user/UPDATE_CAR_SUCCESS': {
        draft.car = action.payload.car;
       
        break;
      }
      default:
    }
  });
}
