import React from "react";
const HeroSection = React.lazy(() => import("../components/homePage/HeroSection"))
const BenefitsSection = React.lazy(() => import("../components/homePage/BenefitsSection"))
const Testimonials = React.lazy(() => import("../components/homePage/TestimonialsSection"))
const Frequently = React.lazy(() => import("../components/homePage/FrequentlySection"))
const Navigate = React.lazy(() => import("../components/homePage/NavigateSection"))
const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <Testimonials />
            <Frequently />
            <Navigate />
        </>
    )
}

export default HomePage
