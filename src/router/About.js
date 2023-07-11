import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroOther from '../components/HeroOther'
import AboutContent from '../components/AboutContent'
import Hobby from '../components/Hobby'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroOther heading="Me" text="I am a friendly-known person" />
            <AboutContent />
            <Hobby />
            <Footer />
        </div>
    )
}

export default About