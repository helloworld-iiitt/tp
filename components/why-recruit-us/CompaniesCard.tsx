"use client";
import React from 'react'
import Marquee from 'react-fast-marquee';
import { companies, companies1, companies2 } from './data';
import Image from 'next/image';

export default function CompaniesCard() {
    return (
        <div className=''>
            <h1 className='font-semibold text-center text-3xl'>Our Recruiters</h1>
            <p className='md:text-center text-justify md:text-xl md:w-[80%] mb-5 mx-auto'>Our students have been placed in some of the top companies in the world. Here are some of the companies that have recruited our students.</p>
            <section className='rounded-md  w-full'>

                <Marquee pauseOnHover
                    gradient
                    // gradientColor="#f8ffeb"
                    className='flex justify-evenly gap-2 items-center'
                >
                    {
                        companies.map((company, index) => (
                            <div key={index} className='mx-5 h-24 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-scale-down mix-blend-color-burn aspect-[3/2]'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover
                    direction='right'
                    gradient
                    // gradientColor="#f8ffeb"
                    className='flex justify-evenly gap-2 items-center my-10'
                >
                    {
                        companies1.map((company, index) => (
                            <div key={index} className='mx-4 h-24 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-scale-down mix-blend-color-burn aspect-[3/2]'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover
                    gradient
                    // gradientColor="#f8ffeb"
                    className='flex justify-evenly gap-2 items-center'
                >
                    {
                        companies2.map((company, index) => (
                            <div key={index} className='mx-5 h-24 w-32 relative'>
                                <Image
                                    src={company}
                                    alt="company"
                                    fill
                                    className='object-scale-down mix-blend-color-burn aspect-[3/2]'
                                />
                            </div>
                        ))
                    }
                </Marquee>
            </section>

        </div>
    )
}
