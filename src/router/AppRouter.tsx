import { Route, Routes } from 'react-router-dom'
import { MainTemplate } from '../components/MainTemlate'
import { Content, Home, NotFound, Serach, SignIn } from '../pages'
import { ROUTE } from './routes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<MainTemplate />}>
                <Route index element={<Home />} />
                <Route path={ROUTE.SEARCH} element={<Serach />} />
                <Route path={ROUTE.CONTENT} element={<Content />} />
                <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
                <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    )
}