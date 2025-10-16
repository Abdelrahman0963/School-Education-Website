import { NavLink } from "react-router-dom"
import React from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = React.lazy(() => import("./Navbar"))

const Header: React.FC = () => {
    const [active, setActive] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

    const navbarLink = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Academics", path: "/academics" },
        { name: "Admission", path: "/admission" },
        { name: "Student Life", path: "/student-life" },
        { name: "Contact", path: "/contact", color: "bg-[var(--tertiary-color)]" }
    ]
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) setIsOpen(false) // close menu on desktop
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className="!p-4 w-full flex flex-col gap-2 items-center justify-center relative">
            <Navbar />
            <div className="bg-white w-full h-16 rounded-md border-2 border-black flex items-center justify-between relative overflow-hidden">
                <picture className="!py-4 !px-6 h-full flex gap-2 items-center justify-center bg-[var(--secondary-color)] border-r-2 border-black">
                    <img className="w-7" src="/logo/shape-14.png" alt="logo" loading="eager" />
                    <img className="w-28" src="/logo/Text Button.png" alt="Little Learners" loading="eager" />
                </picture>
                <nav className="h-full hidden md:flex items-center justify-center ">
                    <ul className="h-full flex md:flex-row flex-col  items-center">
                        {navbarLink.map((item, index) => (
                            <NavLink
                                key={index}
                                className={`h-full !px-6 border-l-2 border-black flex items-center cursor-pointer ${item.color} ${index === active ? " bg-[var(--primary-color)]" : ""}`}
                                onClick={() => setActive(index)}
                                to={item.path}
                            >
                                <li>{item.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden transition-transform duration-300 bg-[var(--primary-color)] !py-4 !px-7 h-full flex items-center justify-center border-l-2 border-black"
                >
                    <HiOutlineMenuAlt3 size={30} />
                </button>

            </div>

            {isMobile && isOpen && (
                <nav className="md:hidden absolute top-[135px] left-0 w-full flex items-center justify-center z-50 shadow-lg">
                    <ul className=" w-[calc(100%-32px)] bg-white flex flex-col  items-start">
                        {navbarLink.map((item, index) => (
                            <NavLink
                                key={index}
                                className={`w-full !px-6 !py-4 hover:bg-[var(--secondary-color)] border-b-2 border-black flex items-center cursor-pointer ${item.color} ${index === active ? " bg-[var(--primary-color)]" : ""}`}
                                onClick={() => {
                                    setActive(index)
                                    setIsOpen(false)
                                }}
                                to={item.path}
                            >
                                <li>{item.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
