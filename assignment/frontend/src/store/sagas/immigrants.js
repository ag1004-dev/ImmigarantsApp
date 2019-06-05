import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as ImmigrantActions } from "../ducks/immigrants";

export function* searchImmigrantByName(action) {
  try {
    const { data } = yield call(api.get, `/immigrants/${action.payload.imm}`);
    if(data.length === 0) {
      const error = "Sem resultados!";
      throw error;
    }
    toast.success("Sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
    yield put(ImmigrantActions.searchImmigrantSuccess(data));
  } catch (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
    yield put(ImmigrantActions.searchImmigrantFailure(error));
  }
}
