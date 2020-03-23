const INCREMENT_YEAR = "INCREMENT_YEAR";
const DECREMENT_YEAR = "DECREMENT_YEAR";

const incrementYear = () => {
  return {
    type: INCREMENT_YEAR,
  };
};

const decrementYear = () => {
  return {
    type: DECREMENT_YEAR,
  };
};

export { INCREMENT_YEAR, DECREMENT_YEAR, incrementYear, decrementYear };
