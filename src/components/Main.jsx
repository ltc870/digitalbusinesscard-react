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
            <section className="about-section">
                <h2>About</h2>
                <p>This is my about</p>
            </section>
            <section className="interest-section">
                <h2>Interest</h2>
                <p>This is my interest section</p>
            </section>
        </main>
    )
}