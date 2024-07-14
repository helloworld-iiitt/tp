"use client";
import React from 'react'
import Marquee from 'react-fast-marquee';
import { companies } from './data';
import Image from 'next/image';

export default function CompaniesCard() {
    return (
        <div className='my-20'>
            <h1 className='font-semibold text-center text-3xl my-6'>Our Recruiters</h1>
            <p className='md:text-center text-justify md:text-xl md:w-[80%] mx-auto'>Our students have been placed in some of the top companies in the world. Here are some of the companies that have recruited our students.</p>
            <section className='rounded-md  w-full bg-gray-50'>

                <Marquee pauseOnHover
                    gradient
                    className='flex justify-evenly gap-2 items-center'
                >
                    {
                        companies.map((company, index) => (
                            <div key={index} className='m-10 h-32 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover
                    direction='right'
                    gradient
                    className='flex justify-evenly gap-2 items-center'
                >
                    {
                        companies.map((company, index) => (
                            <div key={index} className='mx-10 h-32 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover
                    gradient
                    className='flex justify-evenly gap-2 items-center'
                >
                    {
                        companies.map((company, index) => (
                            <div key={index} className='m-10 h-32 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        ))
                    }
                </Marquee>
            </section>

        </div>
    )
}
