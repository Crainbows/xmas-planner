import { TOGGLE_DARK_MODE } from "../actions/darkmode";

interface DarkMode {
  type: string;
}

export default (state: boolean = true, payload: DarkMode) => {
  switch (payload.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};
