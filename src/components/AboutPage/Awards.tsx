import React from 'react'
import Carousel from './Carousel'
const Awards: React.FC = () => {

    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-10rem)] overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm' style={{ fontFamily: 'var(--font-raleway)' }}>Our Achievements</p></div>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our Awards and Recognitions</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.</p>
            </div>
            <Carousel />
        </section>
    )
}

export default Awards
