import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { PiCrownFill } from "react-icons/pi";
import { FaMaskFace } from "react-icons/fa6";
import { BsFlagFill } from "react-icons/bs";
import { HiLifebuoy } from "react-icons/hi2";
import { RiParentFill } from "react-icons/ri";


const BenefitsSection: React.FC = () => {
    interface benefit {
        icon: React.ReactNode;
        title: string;
        description: string;
    }
    const benefits: benefit[] = [
        {
            icon: <PiCrownFill />,
            title: "Holistic Learning Approach",
            description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
        }, {
            icon: <FaGraduationCap />,
            title: "Experienced Educators",
            description: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
        }, {
            icon: <FaMaskFace />,
            title: "Nurturing Environment",
            description: "We prioritize safety and provide a warm and caring atmosphere for every child.",
        }, {
            icon: <BsFlagFill />,
            title: "Play-Based Learning",
            description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        }, {
            icon: <HiLifebuoy />,
            title: "Individualized Attention",
            description: "Our small class sizes enable personalized attention, catering to each child's unique needs."
        }, {
            icon: <RiParentFill />,
            title: "Parent Involvement",
            description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
        }
    ]
    return (
        <section className='md:!px-20 !p-4 h-full md:min-h-[calc(100vh-10rem)]  w-full overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <nav className='bg-white border-2 !p-1 rounded-md'><p className='text-[#333333] text-sm'>Children Deserve Bright Future</p></nav>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our Benefits</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 !mt-16">
                {benefits.map((benefit, index) => (
                    <div key={index} className="relative flex flex-col items-start gap-4 border-2 border-black rounded-lg !px-6 !py-12 hover:scale-105 transition-transform duration-300 shadow-[7px_8px_4px_#000] bg-white">
                        <div className="text-2xl bg-[var(--primary-color)] !p-3 rounded-lg border-2 absolute top-[-1.5rem] border-black">
                            {benefit.icon}
                        </div>
                        <h2 className='text-2xl font-bold' style={{ fontFamily: 'var(--font-raleway)' }}>{benefit.title}</h2>
                        <p className='text-[16px] text-[#333333]'>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BenefitsSection
