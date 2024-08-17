import HowToReach from '@/components/for-recruiters/HowToReach'
import PlacemenrProcedure from '@/components/for-recruiters/PlacemenrProcedure'
import { Button } from '@/components/ui/button'
import { companies, companies1, companies2 } from '@/components/why-recruit-us/data'
import Statistics from '@/components/why-recruit-us/statistic/Statistics'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className='container py-16'>
                <h1 className='text-2xl md:text-4xl text-green-600 text-center font-bold'>Past Recruiters</h1>
                <section className='relative w-full'>
                    <div className='flex flex-wrap mx-auto gap-6 justify-center'>

                        {
                            [...companies, ...companies1, ...companies2].map((company, index) => (
                                <div key={index} className='h-24 w-32 relative'>
                                    <Image
                                        src={company}
                                        alt="company"
                                        fill
                                        className='object-scale-down mix-blend-color-burn- aspect-[3/2]'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>

            <div className="bg-[#f8ffeb] py-16">
                <div className="container">
                    {/* Statistics */}
                    <Statistics />
                </div>
            </div>

            <div className="container py-16 md:pb-32">
                <PlacemenrProcedure />
            </div>

            <div className="bg-[#f8ffeb] py-16">
                <div className="container">
                    <HowToReach />
                </div>
            </div>
        </div>
    )
}
