//ACTION TYPES

export const Types = {
  ADD_REQUEST: 'immigrant/ADD_REQUEST',
  ADD_SUCCESS: 'immigrant/ADD_SUCCESS',
  ADD_FAILURE: 'immigrant/ADD_FAILURE',
};  

//REDUCER

const INITIAL_STATE = {
  error: '',
  data: [],
};

export default function immigrants(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;

    case Types.ADD_REQUEST:
      return { ...state, };

    case Types.ADD_SUCCESS:
      return { ...state, error: null, data: [ action.payload.data] };

    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error };
  }
}

//ACTIONS

export const Creators = {
  addImmigrantRequest: imm => ({
    type: Types.ADD_REQUEST,
    payload: { imm },
  }),

  addImmigrantSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addImmigrantFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  })
};
