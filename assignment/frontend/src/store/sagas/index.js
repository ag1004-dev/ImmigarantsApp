import { all, takeLatest } from "redux-saga/effects";
import { searchImmigrantByName } from "./immigrants";
import { Types as ImmigrantTypes } from "../ducks/immigrants";

export default function* rootSaga() {
  yield all([takeLatest(ImmigrantTypes.SEARCHNAME_REQUEST, searchImmigrantByName)]);
}
