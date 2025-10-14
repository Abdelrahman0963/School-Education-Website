import { Outlet } from "react-router-dom"
import React from "react"
const Header = React.lazy(() => import("../components/Header"))
const Footer = React.lazy(() => import("../components/Footer"))

const LayoutProvider: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutProvider
