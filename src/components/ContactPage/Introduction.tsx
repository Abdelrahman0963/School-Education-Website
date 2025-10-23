import React from 'react'
import { HiMail } from "react-icons/hi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from 'react-icons/io5';

const Introduction: React.FC = () => {
    type Props = {
        icon: React.ReactNode,
        text: string
    }
    const contact = [
        {
            icon: <HiMail />,
            text: "hello@littlelearners.com"
        }, {
            icon: <FaPhone />,
            text: "+91 91813 23 2309"
        }, {
            icon: <FaLocationDot />,
            text: "Somewhere in the World"
        }, {
            icon: <IoTimeSharp />,
            text: "Office Hours - 9am - 6 pm"
        }
    ]
    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-18rem)] overflow-hidden'>
            <div className="bg-white w-full h-full relative border-2 border-black shadow-[7px_8px_4px_#000] rounded-lg">
                <picture className='absolute top-0 left-0'>
                    <img className="w-32 " src="/images/Abstract Design.png" alt="abstract" loading="lazy" />
                </picture>
                <div className="flex items-center md:flex-row flex-col justify-center md:justify-between gap-4 md:gap-8 !p-4 md:!mt-0 !mt-12 md:!p-20">
                    <div className='flex flex-col justify-center items-center md:items-start md:text-left text-center md:w-1/2 w-full  gap-4'>
                        <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm'>Contact Us</p></div>

                        <h2 className='md:text-4xl text-[1.5rem] w-[70%] md:w-full font-bold !mt-4' style={{ fontFamily: 'var(--font-raleway)' }}>Feel Free To Connect With Us</h2>
                    </div>
                    <div className='flex flex-col md:w-1/2 w-full  gap-4'>
                        <p className='md:text-[1rem] text-center md:text-start  text-sm text-[#333333]'>We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods</p>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {contact.map((contact: Props, index: number) => (
                                <div key={index} className="flex items-center gap-2 border-2 border-black rounded-md !p-2">
                                    <span className='border-2 border-black rounded-md !p-2 bg-[var(--primary-color)]'>
                                        {contact.icon}
                                    </span>
                                    <p className="text-[#333333] text-[1rem]">{contact.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction 
