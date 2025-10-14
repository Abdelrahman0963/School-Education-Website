import Carousel from "./Carousel"


const TestimonialsSection = () => {

    return (
        <section className='md:!px-20 !p-4 md:!py-16 h-full md:min-h-[calc(100vh-10rem)]  w-full overflow-hidden'>
            <div className="flex flex-col items-center gap-4">
                <nav className='bg-white border-2 !p-2 rounded-md'><p className='text-[#333333] text-sm'>Their Happy Words 🤗</p></nav>
                <h1 className='md:text-5xl text-2xl font-bold font[var(--font-raleway)]' style={{ fontFamily: 'var(--font-raleway)' }}>Our Testimonials</h1>
                <p className='text-[16px] md:w-[70%] text-center text-[#333333] '>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
            </div>
            <Carousel />
        </section>
    )
}

export default TestimonialsSection
