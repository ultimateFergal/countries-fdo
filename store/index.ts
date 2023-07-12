import { configureStore } from "@reduxjs/toolkit";

// reducer
import countries from "./slices/countries";

export const store = configureStore({
  reducer: {
    countries,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
