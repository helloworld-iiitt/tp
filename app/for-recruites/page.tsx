import PlacemenrProcedure from '@/components/for-recruiters/PlacemenrProcedure'
import { Button } from '@/components/ui/button'
import Statistics from '@/components/why-recruit-us/statistic/Statistics'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <h1 className='text-2xl md:text-5xl text-green-600 text-center font-bold my-10'>Past Recruiters</h1>
            <section className='relative w-full h-[20vh] lg:h-[80vh]'>
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


                <div className='w-full h-[400px] relative'>
                    <Image
                        src="/contact/contact-us.png"
                        fill
                        className='object-contain'
                        alt='contact us'
                    />
                </div>

                <div className='text-center'>
                    <Link href='/contact-us'>
                        <Button className='bg-green-600 hover:bg-green-400 w-[60%]'>Contact Us</Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
