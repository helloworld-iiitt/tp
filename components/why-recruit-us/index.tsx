import React from 'react';
import ClubCard from './ClubCard';
import CompaniesCard from './CompaniesCard';
import PlacedStudentCard from './PlacedStudentCard';
import Statistics from './Statistics';

export default function index() {
    return (
        <div id='why-recruit@IIITT' className='mt-10'>
            <h1 className='text-center text-3xl'>Why Recruit at IIITT ?</h1>
            <p className='md:w-[80%] mx-auto text-justify md:text-center md:text-xl my-4'>
                Our Vision is to achive &quot;World Class Excellence in Information and Communication Technology&quot;. We&apos;ve embarked on a mission to impart Information Technology education to students and future leaders and engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.
            </p>

            <ClubCard />

            <Statistics />
            <PlacedStudentCard />
            <CompaniesCard />
        </div>
    )
}
