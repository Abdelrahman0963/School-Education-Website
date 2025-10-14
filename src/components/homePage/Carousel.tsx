import React from "react";
import { FaUserAlt, FaStar } from "react-icons/fa";

const Carousel: React.FC = () => {
    const carouselItems = [
        { username: "John Doe", rate: 4.5, description: "Great service and friendly staff!" },
        { username: "Jane Smith", rate: 4.0, description: "Excellent experience! Highly recommended!" },
        { username: "Alice Johnson", rate: 5.0, description: "Absolutely loved it! Will come back again." },
        { username: "Bob Brown", rate: 4.5, description: "Good, but there is room for improvement." },
        { username: "Bob Brown", rate: 4.5, description: "Good, but there is room for improvement." },
        { username: "Bob Brown", rate: 4.5, description: "Good, but there is room for improvement." },
        { username: "Bob Brown", rate: 4.5, description: "Good, but there is room for improvement." },
        { username: "Bob Brown", rate: 4.5, description: "Good, but there is room for improvement." },
    ];


    return (
        <div className="w-full slider-container relative !p-16 !mt-10">
            <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory"></div>
        </div>
    );
};

export default Carousel;
