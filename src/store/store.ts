import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./slices/typingSlice";

export const store = configureStore({
  reducer: typingSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
