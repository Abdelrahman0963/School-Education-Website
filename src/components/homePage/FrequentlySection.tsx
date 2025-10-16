import React from 'react'
import Questions from './Questions'

const FrequentlySection: React.FC = () => {
    return (
        <section className='md:!px-20 !p-4 h-full md:min-h-[calc(100vh-10rem)] w-full overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <div className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm'>Solutions For The Doubts</p></div>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Frequently Asked Questions</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</p>
            </div>
            <Questions />
        </section>
    )
}

export default FrequentlySection 
