import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Nav } from '../Nav'

export const MainTemplate = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
