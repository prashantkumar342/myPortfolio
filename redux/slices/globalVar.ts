/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types";

interface GlobalState {
  isAuthenticated: boolean;
  user: User | null; // Allow user to be null
}

const initialState: GlobalState = {
  isAuthenticated: false,
  user: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuthStatus(state, actions: PayloadAction<boolean>) {
      state.isAuthenticated = actions.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const { setAuthStatus, setUser } = globalSlice.actions;
export default globalSlice.reducer;
