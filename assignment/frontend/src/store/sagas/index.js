import { all, takeLatest } from "redux-saga/effects";
import {
  searchImmigrantByName,
  searchImmigrantByNC,
  getAllImmigrants,
  searchImmigrantByPK,
  searchImmigrantsByEntrance,
  searchImmigrantsByExit,
  searchImmigrantByCountry
} from "./immigrants";
import { Types as ImmigrantTypes } from "../ducks/immigrants";

export default function* rootSaga() {
  yield all([
    takeLatest(ImmigrantTypes.SEARCHNAME_REQUEST, searchImmigrantByName),
    takeLatest(ImmigrantTypes.SEARCHNAMECOUNTRY_REQUEST, searchImmigrantByNC),
    takeLatest(ImmigrantTypes.SEARCHCOUNTRY_REQUEST, searchImmigrantByCountry),
    takeLatest(ImmigrantTypes.FETCHALL_REQUEST, getAllImmigrants),
    takeLatest(ImmigrantTypes.SEARCHBYPK_REQUEST, searchImmigrantByPK),
    takeLatest(
      ImmigrantTypes.SEARCHBYENTRANCE_REQUEST,
      searchImmigrantsByEntrance
    ),
    takeLatest(ImmigrantTypes.SEARCHBYEXIT_REQUEST, searchImmigrantsByExit)
  ]);
}
