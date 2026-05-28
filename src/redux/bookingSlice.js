import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    flight: {},
    passenger: {},
  },
  reducers: {
    setFlight(state, action) {
      state.flight = action.payload;
    },
    setPassenger(state, action) {
      state.passenger = action.payload;
    },
  },
});

export const { setFlight, setPassenger } = bookingSlice.actions;

export default bookingSlice.reducer;