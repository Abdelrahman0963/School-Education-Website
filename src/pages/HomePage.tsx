import React from "react";
const HeroSection = React.lazy(() => import("../components/homePage/HeroSection"))
const BenefitsSection = React.lazy(() => import("../components/homePage/BenefitsSection"))
const Testimonials = React.lazy(() => import("../components/homePage/TestimonialsSection"))
const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <Testimonials />
        </>
    )
}

export default HomePage
