import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div id="home">
        <Header></Header>
        <About/>
        <Portfolio/>
        <Contact/>
        
        </div>
    );
};

export default Home;