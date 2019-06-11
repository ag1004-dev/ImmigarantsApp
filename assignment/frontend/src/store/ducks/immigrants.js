//ACTION TYPES

export const Types = {
  SEARCHNAME_REQUEST: "immigrant/SEARCHNAME_REQUEST",
  FETCHALL_REQUEST: "immigrant/FETCHALL_REQUEST",
  SEARCHNAMECOUNTRY_REQUEST: "immigrant/SEARCHNAMECOUNTRY_REQUEST",
  SEARCHCOUNTRY_REQUEST: "immigrant/SEARCHCOUNTRY_REQUEST",
  SEARCHBYPK_REQUEST: "immigrant/SEARCHBYPK_REQUEST",
  SEARCHBYENTRANCE_REQUEST: "immigrant/SEARCHBYENTRANCE_REQUEST",
  SEARCHBYEXIT_REQUEST: "immigrant/SEARCHBYEXIT_REQUEST",
  SEARCHBYGENDER_REQUEST: "immigrant/SEARCHBYGENDER_REQUEST",
  SEARCHBYBIRTH_REQUEST: "immigrant/SEARCHBYBIRTH_REQUEST",
  ADD_SUCCESS: "immigrant/ADD_SUCCESS",
  ADD_FAILURE: "immigrant/ADD_FAILURE",
  CLEAR_DATA: "immigrant/CLEAR_DATA"
};

//REDUCER

const INITIAL_STATE = {
  error: "",
  data: []
};

export default function immigrants(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;

    case Types.SEARCHNAME_REQUEST:
      return { ...state };

    case Types.SEARCHNAMECOUNTRY_REQUEST:
      return { ...state };

    case Types.FETCHALL_REQUEST:
      return { ...state };

    case Types.SEARCHBYPK_REQUEST:
      return { ...state };

    case Types.SEARCHBYENTRANCE_REQUEST:
      return { ...state };

    case Types.SEARCHBYEXIT_REQUEST:
      return { ...state };

    case Types.SEARCHBYGENDER_REQUEST:
      return{ ...state};
    
    case Types.SEARCHBYBIRTH_REQUEST:
      return{ ...state};

    case Types.ADD_SUCCESS:
      return { ...state, error: null, data: [action.payload.data] };

    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error };

    case Types.CLEAR_DATA:
      return { ...state, data: [] };
  }
}

//ACTIONS

export const Creators = {
  searchImmigrantByNameRequest: imm => ({
    type: Types.SEARCHNAME_REQUEST,
    payload: { imm }
  }),

  searchNameCountryRequest: (name, country) => ({
    type: Types.SEARCHNAMECOUNTRY_REQUEST,
    payload: { name, country }
  }),

  searchByPk: passport => ({
    type: Types.SEARCHBYPK_REQUEST,
    payload: { passport }
  }),

  searchByCountryRequest: country => ({
    type: Types.SEARCHCOUNTRY_REQUEST,
    payload: { country }
  }),

  searchByEntranceRequest: entrance => ({
    type: Types.SEARCHBYENTRANCE_REQUEST,
    payload: { entrance }
  }),

  searchByExitRequest: exit => ({
    type: Types.SEARCHBYEXIT_REQUEST,
    payload: { exit }
  }),

  searchByGenderRequest: gender => ({
    type: Types.SEARCHBYBIRTH_REQUEST,
    payload: { gender }
  }),

  searchByBirthRequest: birth => ({
    type: Types.SEARCHBYBIRTH_REQUEST,
    payload: { birth }
  }),

  getImmigrants: () => ({
    type: Types.FETCHALL_REQUEST
  }),

  searchImmigrantSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  searchImmigrantFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  clearImmigrantData: () => ({
    type: Types.CLEAR_DATA
  })
};
