import { Route, Routes } from 'react-router-dom'
import { MainTemplate } from '../components/MainTemlate'
import { Content, Home, NotFound, Search, SignIn } from '../pages'
import { SignUp } from '../pages/SignUp'
import { ROUTE } from './routes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<MainTemplate />}>
                <Route index element={<Home />} />
                <Route path={ROUTE.SEARCH} element={<Search />} />
                <Route path={ROUTE.CONTENT} element={<Content />} />
                <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
                <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
                <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    )
}