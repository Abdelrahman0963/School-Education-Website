import React from 'react'

const Journey: React.FC = () => {
    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-10rem)] overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm' style={{ fontFamily: 'var(--font-raleway)' }}>Our Progressive Journey</p></div>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our History</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment</p>
            </div>
            <div className='!mt-16  w-full'>
                <div className="bg-white !p-10 rounded-md flex justify-center items-center border-2 border-black shadow-[5px_5px_0_#000]">
                    <div className="journy relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#333333] r"></div>
                </div>
            </div>
        </section>
    )
}

export default Journey
