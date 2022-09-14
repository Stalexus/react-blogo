import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/articlesSlice";
import blogsReducer from "./features/newsSlice";
import userReducer from "./features/userSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    blogs: blogsReducer,
    users: userReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
