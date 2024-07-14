"use client";
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import OnCrousalContent from './OnCrousalContent';

export default function MainCrousal() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex  h-[70vh] aspect-video- items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='hidden md:absolute top-[50%] left-20'>
                    <CarouselPrevious />
                </div>
                <div className='hidden md:absolute top-[50%] right-20'>
                    <CarouselNext />
                </div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <OnCrousalContent />
                </div>
            </Carousel>
        </div>
    )
}
