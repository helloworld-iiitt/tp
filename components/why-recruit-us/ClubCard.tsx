"use client";
import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { clubCards } from './data'
import Autoplay from "embla-carousel-autoplay"

export default function ClubCard() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    return (
        <div className='relative'>
            <Carousel
                className="w-full my-10"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        clubCards.map((card, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1-">
                                    <Card>
                                        <CardContent className="flex aspect-square- items-start justify-center py-4 md:px-8 md:py-6 min-h-[440px]">
                                            <div className="w-[300px]- flex flex-col items-center justify-center space-y-4">
                                                {card.icon}
                                                <h1 className='text-xl text-center'>{card.title}</h1>

                                                <p className='text-gray-500 text-justify'>
                                                    {card.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious className='ms-3' />
                <CarouselNext className='me-3' />
            </Carousel>
        </div>
    )
}
