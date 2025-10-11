import React from "react"
import { IoArrowForwardOutline } from "react-icons/io5"

const Navbar = React.memo(() => {
    return (
        <div className='w-full'>
            <div className="bg-[var(--primary-color)] !p-2 w-full rounded-md border-2 border-black flex justify-center items-center overflow-hidden relative">
                <div className="absolute top-0 left-0 h-8 w-24 rounded-ee-full bg-[var(--tertiary-color)]"></div>
                <div className="absolute top-0 right-0 h-8 w-24 rounded-es-full bg-[var(--tertiary-color)]"></div>
                <div className="absolute top-0 h-8 w-[calc(100%-200px)] rounded-b-full bg-gradient-to-r from-[var(--tertiary-color)] via-[var(--quaternary-color)] to-[var(--tertiary-color)]"></div>
                <img className="absolute top-0 left-0 md:left-96 w-11" src="/icons/AbstractDesign.png" alt="icon" loading="lazy" />
                <img className="absolute bottom-0 right-0 md:right-[26rem] w-8 z-20" src="/icons/Group.png" alt="icon" loading="lazy" />
                <div className="absolute bottom-0 h-3 w-[calc(100%-200px)] rounded-t-full bg-gradient-to-r from-[var(--tertiary-color)] via-[var(--quaternary-color)] to-[var(--tertiary-color)]"></div>
                <nav className="relative w-full flex justify-center items-center gap-2">
                    <h1>Admission is Open, Grab your seat now</h1>
                    <IoArrowForwardOutline className="!mt-1" />
                </nav>
            </div>
        </div>
    )
})

export default Navbar
