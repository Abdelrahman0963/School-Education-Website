
const HomePage = () => {
    interface stats {
        label: string;
        value: number;
    }
    const statistics: stats[] = [
        { label: "Students Passed Out", value: 7000 },
        { label: "Awards & Recognitions", value: 37 },
        { label: "Experience Educators", value: 15 },
    ];

    return (
        <section className="!p-4 w-full overflow-hidden">
            <div className="md:!px-20 !px-0 flex flex-col md:flex-row items-center  md:justify-between gap-8">
                <picture className="md:w-1/2">
                    <img className="md:w-full rounded-md border-2 border-black" src="/public/images/Image Container.png" alt="home" loading="eager" />
                </picture>
                <div className="flex flex-col gap-2 md:w-full !px-10">
                    <p className="text-[.9rem]  md:text-[1rem] font-semibold relative  before:absolute before:bottom-[-.2rem] before:left-0 before:h-0.5 before:w-[17.2rem] before:bg-black">Welcome to Little Learners Academy</p>
                    <h2 className="md:text-[2.9rem] text-[1.8rem] font-bold font[var(--font-raleway)]">Where Young Minds Blossom and <span className="text-[var(--secondary-color)]">Dreams Take Flight.</span></h2>
                    <p className="text-[1.2rem] font-medium">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                    <div className="flex items-start gap-4 md:gap-8 w-full rounded-lg bg-[var(--quaternary-color)]  shadow-2xl !px-6 !py-2 border-2 border-black">
                        {statistics.map((stat, index) => (
                            <div key={index} className="flex flex-col items-start justify-center gap-1 !px-6">
                                <h3 className="text-[2.5rem] font-bold ">{stat.value}+</h3>
                                <p className="text-[1rem] font-medium">{stat.label}</p>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage
