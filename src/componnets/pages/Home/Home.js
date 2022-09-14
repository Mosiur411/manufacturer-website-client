import React from 'react';
import ReactHelmet from '../../hook/ReactHelmet';
import { Bolg } from './Bolg';
import Contact from './Contact';
import HomeCard from './HomeCard';
import HomeCarousel from './HomeCarousel ';
import { News } from './News';
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
            <div className='bg-[#ECECED] p-5'>
                <Contact></Contact>
            </div>
            <Bolg />
            <News />
        </div>
    );
};

export default Home;