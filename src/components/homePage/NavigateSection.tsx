import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';

interface NavigateProps {
    title: string;
    description: string;
    link: string;
}
const NavigateSection: React.FC = () => {
    const navigateData: NavigateProps[] = [
        {
            title: "About Us",
            description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
            link: "/about"
        }, {
            title: "Academics",
            description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
            link: "/academics"
        }, {
            title: "Student Life",
            description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
            link: "/student-life"
        }, {
            title: "Admissions",
            description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
            link: "/admissions"
        }
    ]
    return (
        <section className='md:!px-20 md:!mt-20 !p-4 h-full md:min-h-[calc(100vh-10rem)] w-full overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <nav className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm'>Explore More</p></nav>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Navigate through our Pages</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333]'>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 !mt-8 !p-2 md:!p-4'>
                {navigateData.map((item, index) => (
                    <div key={index} className='bg-white !p-16 rounded-lg border-2 border-black w-full  hover:scale-105 transition-transform duration-300 shadow-[7px_8px_4px_#000] flex flex-col items-center justify-center gap-8'>
                        <h1 className='text-4xl font-bold' style={{ fontFamily: 'var(--font-raleway)' }}>{item.title}</h1>
                        <div className='flex items-center gap-2'>
                            <div className=' relative  border-[var(--tertiary-color)] bg-black !p-[1px]  border-2 w-12 h-0.5 before:absolute before:-left-0.5   before:-bottom-1.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:border-2 before:border-black'></div>
                            <canvas className=' border-[var(--tertiary-color)] !p-[1px] bg-black border-2 w-12 h-0.5'></canvas>
                            <canvas className=' border-[var(--tertiary-color)] !p-[1px] bg-black border-2 w-12 h-0.5'></canvas>
                            <canvas className=' border-[var(--tertiary-color)] !p-[1px] bg-black border-2 w-12 h-0.5'></canvas>
                            <canvas className=' border-[var(--tertiary-color)]  bg-black !p-[1px] border-2 w-12 h-0.5'></canvas>
                            <div className=' relative border-[var(--tertiary-color)] bg-black !p-[1px] border-2 w-12 h-0.5 after:absolute after:-right-0.5 after:-bottom-1.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:border-2 after:border-black'></div>
                        </div>
                        <p className='text-[#333333] text-[14px] text-center'>{item.description}</p>
                        <NavLink to={item.link} className='w-full !mt-4'>
                            <div className='flex bg-[var(--tertiary-color)] shadow-[7px_8px_4px_#000] !p-4 rounded-md border-2 border-black justify-center w-full items-center gap-2 text-black  cursor-pointer hover:gap-4 transition-all duration-300'>
                                <p className='font-medium'>Learn More</p>
                                <GoArrowRight size={25} />
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NavigateSection 
