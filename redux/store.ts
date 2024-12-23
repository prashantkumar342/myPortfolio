/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";

import globalSliceReducer from "./slices/globalVar";

export const reduxStore = configureStore({
  reducer: {
    globalVar: globalSliceReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof reduxStore.getState>;
