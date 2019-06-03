import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ImmigrantActions } from "../ducks/immigrants";

export function* addImmigrant(action) {
  try {
    // /${action.payload.imm}
    console.tron.log(action.payload);

    const { data } = yield call(api.get, '/immigrants');

    console.tron.log(data);

    const immData = {
      id: data.content.id,
      name: data.content.name,
      passport: data.content.passport,
      date: data.content.data
    };

    yield put(ImmigrantActions.addImmigrantSuccess(data.content));
  } catch (error) {
    yield put(ImmigrantActions.addImmigrantFailure(error));
  }
}
