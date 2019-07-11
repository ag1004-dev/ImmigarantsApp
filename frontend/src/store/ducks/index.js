import { combineReducers } from "redux";

import immigrants from "../ducks/immigrants";
import modal from "../ducks/modal";

export default combineReducers({
  immigrants,
  modal
});
