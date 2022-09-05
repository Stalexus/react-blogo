import { configureStore } from "@reduxjs/toolkit"
import articlesReducer from './features/articlesSlice'
import blogsReducer from './features/newsSlice'

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        blogs: blogsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;