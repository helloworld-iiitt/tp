import React from 'react'
import { topPlacedStudents } from './data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export default function PlacedStudentCard() {
    return (
        <div className='border rounded-md py-4 px-6'>
            <h1 className='-ms-2 text-3xl mb-4 font-semibold text-green-600'>Top Student Placed</h1>

            <Carousel className="w-full">
                <CarouselContent className="gap-3">
                    {
                        topPlacedStudents.map((student, index) => (
                            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                                <div className="p-0">
                                    <Card>
                                        <CardContent className="flex aspect-auto flex-col justify-center items-center md:items-start py-3 px-4 gap-2">
                                            <div className="h-16 w-16 object-cover rounded-full relative  shadow-md">
                                                <Image
                                                    src={'/teams/logo.png'}
                                                    alt={student.name}
                                                    fill
                                                    className="h-16 w-16 object-cover rounded-full"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <h1 className="text-xl font-semibold text-green-600">{student.name}</h1>
                                                <p className="text-gray-600">{student.company}</p>
                                                <div className='text-sm text-gray-600'>
                                                    <p>Per Annum:</p>
                                                    <p className="text-gray-800 font-semibold text-lg">{student.ctcPerAnnum}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className='ms-8' />
                <CarouselNext className='me-8' />
            </Carousel>

        </div>
    )
}
