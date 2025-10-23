import React from 'react'
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

interface AwardsProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
}

const awardsData: AwardsProps[] = [
    {
        icon: <GrAnalytics size={35} />,
        title: "Outstanding Early Childhood Education Award",
        description: "Presented by the National Association for the Education of Young Children (NAEYC)..."
    },
    {
        icon: <MdOutlineSignalCellularAlt size={35} />,
        title: "Innovative STEAM Education Award",
        description: "Awarded by the Education Excellence Association..."
    },
    {
        icon: <AiFillThunderbolt size={35} />,
        title: "Environmental Stewardship Award",
        description: "Received from the Green Earth Society..."
    },
    {
        icon: <GrAnalytics size={35} />,
        title: "Outstanding Early Childhood Education Award",
        description: "Presented by the National Association for the Education of Young Children (NAEYC)..."
    },
    {
        icon: <MdOutlineSignalCellularAlt size={35} />,
        title: "Innovative STEAM Education Award",
        description: "Awarded by the Education Excellence Association..."
    },
    {
        icon: <AiFillThunderbolt size={35} />,
        title: "Environmental Stewardship Award",
        description: "Received from the Green Earth Society..."
    },
];

const Carousel: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            dragFree: false,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div className="!mt-16 flex flex-col items-center w-full">
            <div className="w-full max-w-6xl relative">
                <div className="scrollbar-hide " ref={emblaRef}>
                    <div className="embla__container  gap-4 md:gap-6 !px-10 w-full h-full">
                        {awardsData.map((award, index) => (
                            <div
                                key={index}
                                className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]  bg-white rounded-lg border-2 border-black shadow-[5px_5px_0_#000] !p-4.5  flex flex-col items-center text-center "
                            >
                                <div className="flex flex-col items-center !p-6">
                                    <div className="text-[#333333] absolute left-4 z-50 -top-5 !p-1 rounded-md border-2 border-black bg-[var(--tertiary-color)]">{award.icon}</div>
                                    <h2
                                        className="text-xl font-bold !mt-4 text-start"
                                        style={{ fontFamily: 'var(--font-raleway)' }}
                                    >
                                        {award.title}
                                    </h2>
                                    <p className="!mt-4 text-[#333333] text-start text-sm md:text-[16px]">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center !mt-4">
                    <div>
                        <p>{awardsData.length} More Awards</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="!p-1 bg-white border border-black rounded-md flex items-center " onClick={scrollPrev} aria-label="Previous">
                            <IoIosArrowRoundBack size={32} />
                        </button>
                        <button className="!p-1 bg-white border border-black rounded-md flex items-center" onClick={scrollNext} aria-label="Next">
                            <IoIosArrowRoundForward size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
