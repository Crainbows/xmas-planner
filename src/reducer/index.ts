import recipients from "./recipient";
import gifts from "./gift";
import darkmode from "./darkmode";
import year from "./year";
import giftDrawer from "./giftDrawer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  giftDrawer,
  darkmode,
  recipients,
  gifts,
  year,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
