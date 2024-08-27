import React from 'react';
import ClubCard from './ClubCard';

export default function index() {
    return (
        <div id='why-recruit@IIITT'>
            <h2 className='h-24'></h2>
            <h1 className='text-center text-3xl'>Why Recruit at IIITT ?</h1>
            <p className='md:w-[80%] mx-auto text-justify md:text-center md:text-xl my-4'>
                Our Vision is to achive &quot;World Class Excellence in Information and Communication Technology&quot;. We&apos;ve embarked on a mission to impart Information Technology education to students and future leaders and engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.
            </p>
            <div className='py-10'>
                <ClubCard />
            </div>
        </div>
    )
}
