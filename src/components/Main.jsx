import React from "react";

export default function Main() {
    return (
        <main className="main">
            <section className="main-section">
                <h1 className="main-title">Lawrence Caudle</h1>
                <p className="main-subtitle">Frontend Web Developer</p>
                <a className="main-link" href="https://www.lawrencecaudle.com/" target="_blank">www.lawrencecaudle.com</a>
                <button className="main-button"><a className="main-button-text" href = "mailto: lawrencecaudle870@gmail.com"><i className="fa-solid fa-envelope"></i>Email</a></button>
            </section>
            <section className="main-text-section">
                <section className="main-about-section">
                    <h2 className="main-about-title">About</h2>
                    <p className="main-about-text">My name is Lawrence Caudle. I'm a self-taught Frontend Web Developer who's ready to show what I'm made of in the professional world. Please, check out my website. If you're interested in my work, shoot me an email. I look forward to working with you!</p>
                </section>
                <section className="main-interests-section">
                    <h2 className="main-interests-title">Interests</h2>
                    <p className="main-interests-text">As a self-taught developer who's been teaching himself for a little over a year and a half, I love learning new things. I love performing stand-up comedy; I'm a huge WWE fan; I love hanging with my wife and family. To learn more about me, check out my website, or shoot me an email.</p>
                </section>
            </section>
        </main>
    )
}