import React from 'react'

const Introduction: React.FC = () => {
    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-18rem)] overflow-hidden'>
            <div className="bg-white w-full h-full relative border-2 border-black shadow-[7px_8px_4px_#000] rounded-lg">
                <picture className='absolute top-0 left-0'>
                    <img className="w-32 " src="/images/Abstract Design.png" alt="abstract" loading="lazy" />
                </picture>
                <div className="flex items-center md:flex-row flex-col justify-center md:justify-between gap-4 md:gap-8 !p-4 md:!mt-0 !mt-12 md:!p-20">
                    <div className='flex flex-col justify-center items-center md:items-start md:text-left text-center md:w-1/2 w-full  gap-4'>
                        <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm'>Enriching Student Life</p></div>

                        <h2 className='md:text-4xl text-[1.5rem] w-[70%] md:w-full font-bold !mt-4' style={{ fontFamily: 'var(--font-raleway)' }}>Embracing Learning with Discovery and Joy</h2>
                    </div>
                    <div className='flex flex-col md:w-1/2 w-full  gap-4'>
                        <p className='md:text-[1rem] text-center md:text-start  text-sm text-[#333333]'>Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction 
