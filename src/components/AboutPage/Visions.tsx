import React from 'react'

const Visions: React.FC = () => {
    interface VisionsProps {
        icon?: React.ReactNode;
        title?: string;
        description?: string;
    }
    const visionsData: VisionsProps[] = [
        {
            icon: "/icons/Icon.png",
            title: "Mission",
            description: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
        }, {
            icon: "/icons/Icon 1.png",
            title: "Vision",
            description: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
        }
    ]

    return (
        <section className='!p-4 md:!py-6 md:!px-16 w-full h-full md:min-h-[calc(100vh-10rem)] overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <nav className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm' style={{ fontFamily: 'var(--font-raleway)' }}>Mission & Visions</p></nav>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our Mission & Visions</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
            </div>
            <div className="!mt-10 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                {visionsData.map((Visions, index) => (
                    <div key={index} className="md:!px-10 md:!py-8 !px-6 !py-4 shadow-[7px_8px_6px_#000] border-2 border-black bg-white rounded-md w-full md:h-72 h-80 flex flex-col">
                        <div className='flex items-center justify-between'>
                            <h1 className='text-3xl font-bold'>{Visions.title}</h1>
                            {typeof Visions.icon === 'string' && <img src={Visions.icon} alt={Visions.title} className='md:w-16 w-12' loading='lazy' />}
                        </div>
                        <p className='!mt-8 text-[#333333] text-start text-[16px]'>{Visions.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Visions
