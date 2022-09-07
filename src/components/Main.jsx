import React from "react";

export default function Main() {
    return (
        <main className="main">
            <section className="main-section">
                <h1 className="main-title">Lawrence Caudle</h1>
                <p className="main-subtitle">Frontend Developer</p>
                <a className="main-link" href="https://www.lawrencecaudle.com/" target="_blank">www.lawrencecaudle.com</a>
                <button className="main-button"><a href = "mailto: lawrencecaudle870@gmail.com"><i class="fa-solid fa-envelope"></i></a></button>
            </section>
            <section className="main-about-section">
                <h2 className="main-about-title">About</h2>
                <p className="main-about-text">This is my about</p>
            </section>
            <section className="main-interests-section">
                <h2 className="main-interests-title">Interests</h2>
                <p className="main-interests-text">This is my interest section</p>
            </section>
        </main>
    )
}