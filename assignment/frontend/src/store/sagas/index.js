import { all, takeLatest } from "redux-saga/effects";
import {
  searchImmigrantByName,
  searchImmigrantByNC,
  getAllImmigrants
} from "./immigrants";
import { Types as ImmigrantTypes } from "../ducks/immigrants";

export default function* rootSaga() {
  yield all([
    takeLatest(ImmigrantTypes.SEARCHNAME_REQUEST, searchImmigrantByName),
    takeLatest(ImmigrantTypes.SEARCHNAMECOUNTRY_REQUEST, searchImmigrantByNC),
    takeLatest(ImmigrantTypes.FETCHALL_REQUEST, getAllImmigrants)
  ]);
}
