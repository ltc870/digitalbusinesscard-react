import React from "react";

export default function HeroImage(props) {
    console.log(props)
    return (
        <header className="hero">
            <img id="hero-image" className="hero-image" src={props.src} alt="" />
        </header>
    )
}