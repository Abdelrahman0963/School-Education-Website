import React from 'react'
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
    type HomeProps = {
        text?: string;
        link?: string;
    }
    type AboutProps = {
        text?: string;
        link?: string;
    }
    type AcademicsProps = {
        text?: string;
        link?: string;
    }
    type ContactProps = {
        text?: string;
        link?: string;
    }
    const homeData: HomeProps[] = [
        {
            text: "Features",
            link: "/"
        }, {
            text: "Our Testimonials",
            link: "/"
        }, {
            text: "FAQ",
            link: "/"
        }
    ]
    const aboutData: AboutProps[] = [
        {
            text: "Our Mission",
            link: "/about"
        }, {
            text: "Our Vission",
            link: "/about"
        }, {
            text: "Awards and Recognitions",
            link: "/about"
        }, {
            text: "History",
            link: "/about"
        }, {
            text: "Leadership",
            link: "/Teachers"
        }
    ]
    const academicsData: AcademicsProps[] = [
        {
            text: "Special Features",
            link: "/academics"
        }, {
            text: "Gallery",
            link: "/academics"
        }
    ]
    const contactData: ContactProps[] = [
        {
            text: "Information",
            link: "/contact"
        }, {
            text: "Map & Direction",
            link: "/contact"
        }
    ]
    return (
        <div className="!mt-0 md:!-mt-20 !px-4 md:flex md:flex-row">
            <div className='flex flex-row  items-start gap-8 md:gap-4'>
                <nav className="home">
                    <p className=" font-semibold text-[1rem]">Home</p>
                    {homeData.map((item, index) => (
                        <ul key={index}>
                            <NavLink to={item.link || "/"} >
                                <li className="text-[#333] text-sm hover:underline cursor-pointer">{item.text}</li>
                            </NavLink>
                        </ul>))}
                </nav>
                <nav className="about">
                    <p className=" font-semibold text-[1rem]">About</p>
                    {aboutData.map((item, index) => (
                        <ul key={index}>
                            <NavLink to={item.link || "/"} >
                                <li className="text-[#333] text-sm hover:underline cursor-pointer">{item.text}</li>
                            </NavLink>
                        </ul>))}
                </nav>
            </div>
            <div className='flex flex-row  items-start gap-8  md:gap-4'>
                <nav className="academics">
                    <p className=" font-semibold text-[1rem]">Academics</p>
                    {academicsData.map((item, index) => (
                        <ul key={index}>
                            <NavLink to={item.link || "/"} >
                                <li className="text-[#333] text-sm hover:underline cursor-pointer">{item.text}</li>
                            </NavLink>
                        </ul>))}
                </nav>
                <nav className="contact">
                    <p className=" font-semibold text-[1rem]">Contact</p>
                    {contactData.map((item, index) => (
                        <ul key={index}>
                            <NavLink to={item.link || "/"} >
                                <li className="text-[#333] text-sm hover:underline cursor-pointer">{item.text}</li>
                            </NavLink>
                        </ul>))}
                </nav>
            </div>
        </div>
    )
}

export default FooterNav
