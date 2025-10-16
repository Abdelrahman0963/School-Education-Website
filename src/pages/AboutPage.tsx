import React from 'react'
const Introduction = React.lazy(() => import('../components/AboutPage/Introduction'))
const Visions = React.lazy(() => import('../components/AboutPage/Visions'))
const AboutPage: React.FC = () => {
    return (
        <div>
            <Introduction />
            <Visions />
        </div>
    )
}

export default AboutPage
