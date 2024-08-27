import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowDownToLine, FileText, Mail } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className='hero-parallax flex justify-center items-center'>
            {/* <div className='text-center'>
                <section className='flex justify-center items-center'>
                <h1 className='text-[3rem] text-white font-semibold drop-shadow-lg'>Training & Placement Cell,</h1>
                </section>
                <h1 className='text-4xl text-white font-bold'>IIIT Tiruchirappalli</h1>
                </div> */}

            <div className='text-center'>
                <div className='flex justify-center'>
                    <Image
                        src={"/logo.png"}
                        width={80}
                        height={80}
                        alt='logo'
                        className='object-contain'
                    />
                </div>
                <h1 className='text-3xl whitespace-nowrap md:text-6xl font-bold mb-3 text-white shadow-blue-500/50'>Training & Placement Cell</h1>
                <h1 className='text-xl md:text-5xl text-white'> IIIT Tiruchirappalli</h1>
                <section className='mt-5 flex flex-col md:flex-row justify-center gap-3' >
                    <Link href='/#contact-us' >
                        <Button variant='outline' className='w-full'><Mail className='h-4' /> CONTACT US</Button>
                    </Link>
                    <Link href='/docs/Placement Brochure IIIT Trichy 2024.pdf' target='_blank'>
                        <Button variant='outline' className='w-full'><FileText className='h-4' /> DOWNLOAD BROCHURE</Button>
                    </Link>
                    {/* <Button variant='outline'><ArrowDownToLine className='h-4' /> PLACEMENT DETAILS</Button> */}
                </section>
            </div>
        </div>
    )
}
