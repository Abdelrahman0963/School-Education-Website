import React from 'react'

const Visions: React.FC = () => {
    return (
        <section className='md:!px-20 !p-4 h-full md:min-h-[calc(100vh-10rem)] w-full overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <nav className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm' style={{ fontFamily: 'var(--font-raleway)' }}>Mission & Visions</p></nav>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our Mission & Visions</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
            </div>
        </section>
    )
}

export default Visions
