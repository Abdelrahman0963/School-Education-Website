import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
import React from "react";


const carouselItems = [
    { username: "Don Vito Corleone", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Michael Corleone", images: <FaUserTie size={25} />, rate: 4.0, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Sonny Corleone", images: <FaUserTie size={25} />, rate: 5.0, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Tom Hagen", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Fredo Corleone", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Luca Brasi", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Clemenza", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Barzini", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Jack Woltz", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Sollozzo", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Johnny Fontane", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Cuneo", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Tessio", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { username: "Capt. McCluskey", images: <FaUserTie size={25} />, rate: 4.5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
];


const Carousel: React.FC = () => {
    const [isMobile, setIsMobile] = React.useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", skipSnaps: false },
        [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]
    );
    const handleResize = () => setIsMobile(window.innerWidth < 768 ? 1 : 0);
    React.useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const renderStars = (rate: number) => {
        const full = Math.floor(rate);
        const hasHalf = rate - full >= 0.5;
        return (
            <>
                {[...Array(full)].map((_, i) => <FaStar key={`f-${i}`} />)}
                {hasHalf && <FaStarHalfAlt key="half" />}
            </>
        );
    };

    return (
        <div className="!mt-8 flex flex-col items-center relative w-full">
            <div className="w-full max-w-6xl relative flex items-center">
                <button
                    onClick={scrollPrev}
                    className={"absolute md:top-1/2 left-0 z-40 cursor-pointer -translate-x-1/2 bg-white border border-black rounded-md !p-2 shadow-md hover:bg-gray-100" + (isMobile ? " bottom-0 left-[45%]" : "")}
                    aria-label="Previous"
                >
                    <IoIosArrowRoundBack size={28} />
                </button>
                <button
                    onClick={scrollNext}
                    className={"absolute md:top-1/2 right-0 z-40 cursor-pointer translate-x-1/2 bg-white border border-black rounded-md !p-2 shadow-md hover:bg-gray-100" + (isMobile ? " bottom-0 right-[45%]" : "")}
                    aria-label="Next"
                >
                    <IoIosArrowRoundForward size={28} />
                </button>
                <div className="w-full overflow-hidden !px-4 md:!p-16" ref={emblaRef}>
                    <div className="flex gap-6 !px-4">
                        {carouselItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] bg-white rounded-lg shadow-[5px_5px_0_#000] !p-6 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-[var(--primary-color)] border border-black rounded-full flex justify-center items-center !mb-3">
                                    {item.images || <FaUserTie size={30} />}
                                </div>
                                <h3 className="font-semibold text-lg !mb-2">{item.username}</h3>
                                <div className="flex justify-center gap-1 !my-2 text-orange-400">
                                    {renderStars(item.rate)}
                                </div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
