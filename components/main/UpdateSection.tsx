import React from 'react'
import Marquee from 'react-fast-marquee'
import { updates } from './updatedata'

export default function UpdateSection() {
    return (
        <section className='relative'>
            <h1 className='text-green-500 font-bold text-2xl text-center pb-2 border-b relative'>Updates</h1>
            <div className='my-32'>
                <Marquee direction='up' className='flex flex-col h-[500px] '>
                    {
                        updates.map((update, index) => (
                            <div key={index} className='bg-red-500 w-[700px] p-2 rounded-lg shadow'>
                                <h1 className='text-lg font-bold text-green-500'>{update.title}</h1>
                                <p className='text-gray-600 text-sm'>{update.description}</p>
                                <p className='text-gray-400 text-xs'>{update.date}</p>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    )
}
