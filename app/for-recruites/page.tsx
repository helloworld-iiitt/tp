import HowToReach from '@/components/for-recruiters/HowToReach'
import PlacemenrProcedure from '@/components/for-recruiters/PlacemenrProcedure'
import Statistics from '@/components/why-recruit-us/Statistics'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <h1 className='text-5xl text-green-600 text-center font-bold my-10'>Past Recruiters</h1>
            <section className='relative w-full h-[40vh] lg:h-[80vh]'>
                <Image
                    src='/for-recurites/company-list.png'
                    alt='head'
                    fill
                    className='object-contain'
                />
            </section>

            <section className='container my-32'>
                <Statistics />

                <PlacemenrProcedure />

                <HowToReach />
            </section>
        </div>
    )
}
