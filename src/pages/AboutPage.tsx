import React from 'react'
const Introduction = React.lazy(() => import('../components/AboutPage/Introduction'))
const Visions = React.lazy(() => import('../components/AboutPage/Visions'))
const Awards = React.lazy(() => import('../components/AboutPage/Awards'))
const AboutPage: React.FC = () => {
    return (
        <div>
            <Introduction />
            <Visions />
            <Awards />
        </div>
    )
}

export default AboutPage
