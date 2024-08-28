"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutIIITT() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
        >
            <h1 className='font-bold text-2xl md:text-3xl text-center mb-6'>About IIIT Trichy</h1>

            <section className='grid md:grid-cols-2  items-center justify-items-center gap-4 shadow rounded md:p-10 p-4'>

                <p className='text-base md:text-lg text-gray-600 text-justify order-2 md:order-1'>
                    <strong>Indian Institute of Information Technology Tiruchirappalli (IIITT)</strong> , also known as IIIT Trichy, is an <strong className='font-semibold'>Institute of National Importance</strong> and one among the 25 IIITs proposed under the non-profit <strong className='font-semibold'>Public-Private Partnership (PPP)</strong> Model by MHRD. IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15. Industry partners include <strong className='font-semibold'>Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).</strong>
                </p>

                <div className='h-[250px] w-full md:w-[350px] rounded-lg relative order-1 md:order-2 overflow-hidden'>
                    <Image
                        src='/iiitt-img.jpg'
                        alt='iiitt'
                        className='rounded-md object-cover'
                        fill
                    />
                </div>
            </section>

        </motion.div>
    )
}
