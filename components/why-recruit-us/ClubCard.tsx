"use client";
import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import { clubCards } from './data';

export default function ClubCard() {
    return (
        <div className='relative grid md:grid-cols-2 gap-2 gap-y-4 max-w-[80%] mx-auto'>
            {
                clubCards.map((card, index) => (
                    <Card key={index} className='group/club-card duration-300'>
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
                    </Card>
                ))}
        </div>
    )
}
