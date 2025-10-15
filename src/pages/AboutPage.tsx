import React from 'react'

const Introduction = React.lazy(() => import('../components/AboutPage/Introduction'))
const AboutPage: React.FC = () => {
    return (
        <div>
            <Introduction />
        </div>
    )
}

export default AboutPage
