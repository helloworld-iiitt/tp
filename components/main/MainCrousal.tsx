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
import { mainCrousalImg } from './data';
import Image from 'next/image';

export default function MainCrousal() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <div className=''>
            <Carousel
                plugins={[plugin.current]}
                className="w-full relative"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        mainCrousalImg.map((imgUrl, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1-">
                                    <Card className='border-0 '>
                                        <CardContent className="flex relative h-[90vh]  items-center justify-center p-6">
                                            <Image
                                                src={imgUrl}
                                                alt="crousal"
                                                fill
                                                className='object-cover bg-blend-lighten- opacity-75- '
                                            />
                                            {/* <div className='bg-gray-200- absolute inset-0' style={{ background: "rgba(0,0,0,0.5)" }}></div> */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className='hidden md:block z-10 absolute top-[50%] left-20'>
                    <CarouselPrevious />
                </div>
                <div className='hidden md:block z-10 absolute top-[50%] right-20'>
                    <CarouselNext />
                </div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <OnCrousalContent />
                </div>
            </Carousel>
        </div>
    )
}
