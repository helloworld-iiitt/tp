"use client";
import { produreSteps } from '@/lib/constants/forRecruites';
import React from 'react';
import { motion } from 'framer-motion';

export default function PlacemenrProcedure() {
    return (
        <div>
            <h1 className='md:text-3xl text-xl text-green-500 font-semibold text-center pb-4'>PLACEMENT PROCEDURE</h1>

            <div className="hex-main">
                <div className="hex-container grid gap-1 md:block">
                    {
                        produreSteps.map((step, idx) =>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'easeInOut', duration: 0.8 + idx * 0.1 }}
                                key={idx} className="shadow-lg relative hover:scale-105 duration-200 cursor-pointer">
                                <section className='flex justify-center font-bold text-3xl text-black'>
                                    <p className='bg-white flex justify-center items-center shadow rounded-full w-14 h-14 translate-y-0'>{step.step}</p>
                                </section>
                                <h2 className='text-center text-xl capitalize font-bold'>{step.title}</h2>
                                <section className='text-base overflow-hidden text-center md:text-justify absolute w-full px-4 pb-2'>
                                    {step.description}
                                </section>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
