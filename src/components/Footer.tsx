import React from "react";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const FooterNav = React.lazy(() => import("./FooterNav"))

const Footer: React.FC = () => {
    interface contactProps {
        text: string,
        icon: React.ReactNode
    }
    const contactData: contactProps[] = [
        {
            text: "hello@littlelearners.com",
            icon: <GrMail size={20} className="inline-block" />
        }, {
            text: "+91 91813 23 2309",
            icon: <BsFillTelephoneFill size={20} className="inline-block" />
        }, {
            text: "Somewhere in the World",
            icon: <FaLocationDot size={20} className="inline-block" />
        }
    ]
    return (
        <footer className="!p-4  w-full md:min-h-[calc(100vh-10rem)] flex  items-center justify-center ">
            <div className="bg-white md:!p-12 !p-4 w-full border-2 flex flex-col items-start md:items-center  justify-center border-black  rounded-md shadow-[7px_8px_6px_#000]">
                <div className="flex md:flex-row flex-col items-start md:items-center md:justify-between gap-8">
                    <div className="flex flex-col md:items-start items-center gap-4 md:!mr-20 !p-4">
                        <nav className="flex items-center gap-2 md:mb-0 mb-4">
                            <img className="w-10" src="/logo/shape-14.png" alt="logo" />
                            <img className="w-32" src="/logo/Text Button.png" alt="Little Learners" />
                        </nav>
                        <p className="text-[#333] text-[1rem]">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        <div className="flex flex-col items-start w-full gap-4 md:gap-6">
                            {contactData.map((item, index) => (
                                <nav key={index} className="flex items-center gap-2">
                                    <span className="bg-[var(--tertiary-color)] !p-2 rounded-md flex items-center justify-center">
                                        {item.icon}
                                    </span>
                                    <p className="font-semibold">{item.text}</p>
                                </nav>
                            ))}
                        </div>
                    </div>
                    <FooterNav />
                </div>
                <div className="w-full !p-4  border-t-2 border-black !mt-6 flex md:flex-row  md:items-center items-start md:justify-between gap-4 ">
                    <nav className="flex md:flex-row flex-col md:items-center items-start gap-4 w-full">
                        <p className="text-center text-[1rem] !p-2">Terms of Service</p>
                        <p className="text-center text-[1rem] md:border-l-2 md:border-black !p-2">Privacy Policy</p>
                        <p className="text-center text-[1rem] md:border-l-2 md:border-black !p-2">Cookie Policy</p>
                    </nav>
                    <nav className="flex flex-col  md:flex-row justify-end  md:items-start  gap-4 w-full">
                        <span className="bg-[var(--tertiary-color)] hover:bg-[var(--secondary-color)] cursor-pointer !p-3 rounded-md flex items-center justify-center border-2 border-black"><FaFacebook size={20} /></span>
                        <span className="bg-[var(--tertiary-color)] hover:bg-[var(--secondary-color)] cursor-pointer !p-3 rounded-md flex items-center justify-center border-2 border-black"><FaTwitter size={20} /></span>
                        <span className="bg-[var(--tertiary-color)] hover:bg-[var(--secondary-color)] cursor-pointer !p-3 rounded-md flex items-center justify-center border-2 border-black"><FaLinkedin size={20} /></span>
                    </nav>
                </div>
                <nav className="w-full border-t-2 border-black flex flex-col items-center gap-4 !mt-2">
                    <p className="text-center text-[#333] text-[1rem] !mt-2">Copyright © [2025] Little Learners Academy. All rights reserved.</p>
                    <p className="text-center text-[#333] text-[1rem]">Coding by : <NavLink className="text-[var(--secondary-color)] bg-black !p-1 rounded-md " to={'https://abdelrahman-psi.vercel.app'}>@bdelrahman</NavLink></p>
                </nav>
            </div>
        </footer >
    )
}

export default Footer
