const initialState = {
  source: "",
  destination: "",
  date: "",
  flight: null,
  user: {}
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, ...action.payload };

    case "SET_FLIGHT":
      return { ...state, flight: action.payload };

    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default bookingReducer;