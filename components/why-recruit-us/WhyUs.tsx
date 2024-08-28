"use client"
import React from 'react';
import { clubCards } from '@/lib/constants/home';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from "framer-motion";

export default function index() {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-3xl'>Why Recruit at IIITT ?</h1>
            <p className='md:w-[80%] mx-auto text-justify md:text-center md:text-xl my-4'>
                Our Vision is to achive &quot;World Class Excellence in Information and Communication Technology&quot;. We&apos;ve embarked on a mission to impart Information Technology education to students and future leaders and engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.
            </p>

            <div className='py-10'>
                <div className='relative grid md:grid-cols-2 gap-2 gap-y-4 sm:max-w-[80%] mx-auto'>
                    {
                        clubCards.map((card, index) => (
                            <Card key={index} className='group/club-card'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{ ease: 'easeInOut', duration: 1 }}
                                >

                                    <CardContent className="flex aspect-square- items-start justify-center py-4 md:px-8 md:py-6">
                                        <div className="flex flex-col items-center justify-center space-y-4">

                                            <div className='group-hover/club-card:scale-110 duration-300 grid justify-items-center'>
                                                {card.icon}
                                                <h1 className='text-xl text-center capitalize'>{card.title}</h1>
                                            </div>

                                            <p className='text-gray-500 text-justify'>
                                                {card.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </motion.div>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    )
}
