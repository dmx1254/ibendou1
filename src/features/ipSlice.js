import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ipAddr: "Morocco",
};

export const ipAddrSlice = createSlice({
  name: "ipAddr",
  initialState,
  reducers: {
    addNewIp: (state, action) => {
      state.ipAddr = action.payload;
    },
  },
});

export const { addNewIp } = ipAddrSlice.actions;

export default ipAddrSlice.reducer;
