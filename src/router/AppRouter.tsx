import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content, Home, NotFound, Serach, SignIn } from '../pages'
import { route } from './routes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={route.HOME} element={<Home />} />
            <Route path={route.SEARCH} element={<Serach />} />
            <Route path={route.CONTENT} element={<Content />} />
            <Route path={route.SIGN_IN} element={<SignIn />} />
            <Route path={route.NOT_FOUND} element={<NotFound />} />
        </Routes>
    )
}