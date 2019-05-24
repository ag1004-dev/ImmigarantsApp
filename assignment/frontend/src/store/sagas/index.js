import { all, takeLatest } from "redux-saga/effects";
import { addImmigrant } from "./immigrants";
import { Types as ImmigrantTypes } from "../ducks/immigrants";

export default function* rootSaga() {
  yield all([takeLatest(ImmigrantTypes.ADD_REQUEST, addImmigrant)]);
}
