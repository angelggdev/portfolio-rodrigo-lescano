import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import Arrow from '../../assets/arrow-down.png';
import AboutMe from '../about-me/AboutMe';

function Home() {
    return (
        <section id='home'>
            <div className='homeContainer'>
                <h1>HELLO! I'M RODRIGO LESCANO</h1>
                <h2>I'm an IT enthusiast based in Buenos Aires, Argentina.</h2>
                <p>Scroll down and get to know me!</p>
                <a href="#about-me" className='homeContainer--link'>
                    <img src={Arrow} alt='down' />
                </a>
            </div>
        </section>            
    )
}

export default Home
