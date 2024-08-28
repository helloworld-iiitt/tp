"use client";
import React from 'react'
import Marquee from 'react-fast-marquee';
import { companies, companies1, companies2, pic1s, pic2s, pics } from '@/lib/constants/home';
import Image from 'next/image';

export default function Gallary() {
    return (
        <div className=''>
            <h1 className='font-semibold text-center text-3xl'>Events Gallery</h1>
            <p className='md:text-center text-justify md:text-xl md:w-[80%] mb-5 mx-auto'>Our students are always in action! From excelling at ICPC Regionals and Smart India Hackathon (SIH) to celebrating at Atrang, Ahlad, and Prothymos, our campus is alive with energy, creativity, and talent. Discover these moments in our gallery.</p>
            <section className='rounded-md  w-full'>

                <Marquee pauseOnHover
                    gradient
                    gradientColor="#f8ffeb"
                    className='flex justify-evenly items-center'
                >
                    {
                        pics.map((company, index) => (
                            <div key={index} className='h-40 w-48 border-4 border-white relative'>
                                <Image
                                    src={company}
                                    alt={company}
                                    fill
                                    className='object-fill'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee pauseOnHover
                    // direction='right'
                    delay={1}
                    gradient
                    gradientColor="#f8ffeb"
                    className='flex justify-evenly'
                >
                    {
                        pic1s.map((company, index) => (
                            <div key={index} className='h-40 border-white w-48 border-4 relative'>
                                <Image
                                    src={company}
                                    alt={company}
                                    fill
                                    className='object-fill'
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <Marquee
                    pauseOnHover
                    gradient
                    gradientColor="#f8ffeb"
                    className='flex justify-evenly items-center'
                >
                    {
                        pic2s.map((company, index) => (
                            <div key={index} className='h-40 border-white w-48 border-4 relative'>
                                <Image
                                    src={company}
                                    alt={company}
                                    fill
                                    className='object-fill'
                                />
                            </div>
                        ))
                    }
                </Marquee>
            </section>

        </div>
    )
}
