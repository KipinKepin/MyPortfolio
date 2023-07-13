import "../component_style/HeroImg.css"
import React from 'react'
import IntroImg from "../assets/bg.jpeg"
import { Link } from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Intro" />
            </div>
            <div className="content">
                <p>HI, I'M KEVIN SAMOSIR</p>
                <h1>Web Enthusiast</h1>
                <div className="button">
                    <Link to="/project" className="btn">projects</Link>
                    <Link to="/contact" className="btn btn-light">contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg