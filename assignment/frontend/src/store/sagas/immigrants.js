import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as ImmigrantActions } from "../ducks/immigrants";

export function* searchImmigrantByName(action) {
  try {
    const { data } = yield call(api.get, `/immigrants/${action.payload.imm}`);
    if (data.length === 0) {
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

export function* searchImmigrantByNC(action) {
  try {
    const { data } = yield call(
      api.get,
      `/immigrants/${action.payload.name}/${action.payload.country}`
    );
    if (data.length === 0) {
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

export function* searchImmigrantByCountry(action) {
  try {
    const { data } = yield call(api.get, `/pais/${action.payload.country}`);
    if (data.length === 0) {
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

export function* searchImmigrantByPK(action) {
  try {
    const { data } = yield call(api.get, `/pass/${action.payload.passport}`);
    if (data.length === 0) {
      const error = "Sem resultados!";
      throw error;
    }
    toast.success("Sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
    var arrData = [];
    arrData.push(data);
    yield put(ImmigrantActions.searchImmigrantSuccess(arrData));
  } catch (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
    yield put(ImmigrantActions.searchImmigrantFailure(error));
  }
}

export function* getAllImmigrants() {
  try {
    const { data } = yield call(api.get, `/immigrants`);
    yield put(ImmigrantActions.searchImmigrantSuccess(data));
  } catch (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
    yield put(ImmigrantActions.searchImmigrantFailure(error));
  }
}

export function* searchImmigrantsByEntrance(action) {
  try {
    const { data } = yield call(api.get, `/dataent/${action.payload.entrance}`);
    if (data.length === 0) {
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

export function* searchImmigrantsByExit(action) {
  try {
    const { data } = yield call(api.get, `/datasai/${action.payload.exit}`);
    if (data.length === 0) {
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
