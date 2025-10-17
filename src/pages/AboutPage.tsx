import React from 'react'
const Introduction = React.lazy(() => import('../components/AboutPage/Introduction'))
const Visions = React.lazy(() => import('../components/AboutPage/Visions'))
const Awards = React.lazy(() => import('../components/AboutPage/Awards'))
const Journey = React.lazy(() => import('../components/AboutPage/Journey'))
const AboutPage: React.FC = () => {
    return (
        <div>
            <Introduction />
            <Visions />
            <Awards />
            <Journey />
        </div>
    )
}

export default AboutPage
