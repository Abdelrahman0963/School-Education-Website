import React from 'react'

const Journey: React.FC = () => {
    type Journey = {
        year: string;
        title: string
        description: string
    }
    const JourneyData: Journey[] = [
        {
            year: "2023",
            title: "Resilience and Future Horizons",
            description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
        }, {
            year: "2017",
            title: "Innovation and Technology",
            description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
        }, {
            year: "2012",
            title: "Expansion and Recognition",
            description: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
        }, {
            year: "2005",
            title: "Inception and Growth",
            description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
        }
    ]
    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-10rem)] overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm' style={{ fontFamily: 'var(--font-raleway)' }}>Our Progressive Journey</p></div>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our History</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment</p>
            </div>
            <div className='!mt-16  w-full'>
                <div className="bg-white !p-10 rounded-md flex justify-center items-center border-2 border-black shadow-[5px_5px_0_#000]">
                    <div className="relative before:absolute md:before:top-14 before:top-10 md:before:left-20 before:-left-5 before:w-1 before:h-[80%] before:bg-black before:border-2 before:border-[var(--tertiary-color)] before:z-[10] flex flex-col items-center gap-6 ">
                        {JourneyData.map((item, index) => (
                            <div key={index} className="flex md:flex-row flex-col items-start md:items-center gap-8 md:!px-30 !px-4 w-full">
                                <div className="relative after:content-[''] after:absolute after:top-[44%] md:after:right-[10rem] after:right-[12rem] after:w-4 after:h-4 after:border-2 after:border-black after:bg-white after:rounded-full after:z-[11] before:content-[''] before:absolute before:top-1/2 before:-left-10 before:w-10 before:h-1 before:border-2 before:border-[var(--tertiary-color)] before:bg-black before:z-[10] flex items-center w-[13rem] gap-4 border-2 border-black rounded-md !p-4 shadow-[5px_5px_0_#000]">
                                    <span className='absolute  -left-[2.9rem] top-[44%] w-4 h-4 rounded-full bg-white border-2 border-black z-[11]'></span>
                                    <picture className='w-full'>
                                        <img className='w-[3rem]' src="/public/icons/Abstract Design (1).png" alt="Abstract" loading='lazy' />
                                    </picture>
                                    <p className='text-4xl font-bold' style={{ fontFamily: 'var(--font-raleway)' }}>{item.year}</p>
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <p className='text-2xl font-bold' style={{ fontFamily: 'var(--font-raleway)' }}>{item.title}</p>
                                    <p className='text-sm'>{item.description}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Journey




