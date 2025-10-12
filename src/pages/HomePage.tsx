import React from "react";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
const HeroSection = React.lazy(() => import("../components/homePage/HeroSection"))
const BenefitsSection = React.lazy(() => import("../components/homePage/BenefitsSection"))
const Testimonials = React.lazy(() => import("../components/homePage/TestimonialsSection"))
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <Testimonials />
        </>
    )
}

export default HomePage
