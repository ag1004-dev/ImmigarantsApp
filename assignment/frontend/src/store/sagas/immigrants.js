import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ImmigrantActions } from "../ducks/immigrants";

export function* addImmigrant(action) {
  try {
    const { data } = yield call(api.get, `/immigrants/${action.payload.imm}`);

    const immData = {
      id: data.content.id,
      name: data.content.name,
      passport: data.content.passport,
    };

    yield put(ImmigrantActions.addImmigrantSuccess(immData));
  } catch (error) {
    yield put(ImmigrantActions.addImmigrantFailure("Search Failed"));
  }
}
