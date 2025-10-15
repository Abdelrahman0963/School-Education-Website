import React from "react";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

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
        <footer className="md:!p-4 !p-2 w-full md:min-h-[calc(100vh-10rem)] flex  items-center justify-center ">
            <div className="bg-white border-2 flex flex-col items-center justify-center border-black !p-2 rounded-md shadow-[7px_8px_6px_#000]">
                <div className="flex md:flex-row flex-col items-center md:justify-between">
                    <div className="flex flex-col md:items-start items-center gap-4 md:mr-20 !p-4">
                        <nav className="flex items-center gap-2 md:mb-0 mb-4">
                            <img className="w-10" src="/public/logo/shape-14.png" alt="logo" />
                            <img className="w-32" src="/public/logo/Text Button.png" alt="Little Learners" />
                        </nav>
                        <p className="text-[#333] text-[1rem]">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        <div className="flex flex-col items-start gap-6">
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
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <FooterNav />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
