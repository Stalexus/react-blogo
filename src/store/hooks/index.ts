import { configureStore } from "@reduxjs/toolkit"
import articlesReducer from '../feautures/articlesSlice'
import blogsReducer from '../feautures/newsSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        blogs: blogsReducer,
    }
})

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;