import { configureStore } from "@reduxjs/toolkit"
import articlesReducer from '../feautures/articlesSlise'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
    }
})

export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;