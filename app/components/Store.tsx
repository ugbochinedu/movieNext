import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./MovieSlice";
// import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    // darkTheme: themeReducer, 
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;