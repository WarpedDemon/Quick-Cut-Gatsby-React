import React from 'react'
import ContentBox from '../components/ContentBox'
import Navbar from '../components/Navbar'

export default function NotFound() {
    return (
        <div className="Fullpage">
            <div className="PeelParrallax img1">
                <Navbar/>
                <ContentBox title="Woops!" content="We couldn't find that page!"/>
            </div>
        </div>
    )
}
