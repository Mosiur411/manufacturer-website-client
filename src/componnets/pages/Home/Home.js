import React from 'react';
import ReactHelmet from '../../hook/ReactHelmet';
import Contact from './Contact';
import HomeCard from './HomeCard';
import HomeCarousel from './HomeCarousel ';
import Reviews from './Reviews';
import Service from './Service';
import Stat from './Stat';

const Home = () => {
    return (
        <div >
            <ReactHelmet>Home</ReactHelmet>
            <HomeCarousel></HomeCarousel>
            <div className='md:px-20'>
                <Service></Service>
                <HomeCard></HomeCard>
            </div>
            <Stat></Stat>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;