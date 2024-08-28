"use client";
import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function GalleryMarquee({ pics, delay }: { pics: string[], delay: number }) {
    return (
        <Marquee
            pauseOnHover
            delay={delay}
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
    )
}
