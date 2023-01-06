import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/news";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
