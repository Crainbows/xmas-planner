import { INCREMENT_YEAR, DECREMENT_YEAR } from "../actions/year";

interface Year {
  type: string;
}

export default (state: number = new Date().getFullYear(), payload: Year) => {
  switch (payload.type) {
    case INCREMENT_YEAR:
      return state + 1;
    case DECREMENT_YEAR:
      return state - 1;
    default:
      return state;
  }
};
