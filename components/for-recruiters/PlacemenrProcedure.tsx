import React from 'react'
import { produreSteps } from './data'

export default function PlacemenrProcedure() {
    return (
        <div>
            <h1 className='md:text-4xl text-3xl text-green-500 font-semibold text-center pb-10'>PLACEMENT PROCEDURE</h1>
            {/* <div className=''> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {
                    produreSteps.map((step, idx) =>
                        <section key={idx}
                            className="border-r-[1rem] border-[1rem] rounded-md max-w-[400px]">
                            <div className='px-2 pt-2 flex'>
                                <h1 className='text-[0.5rem]'>Step</h1>
                                <div className='flex items-center gap-3 text-gray-500'>
                                    <b className='text-3xl text-black'>{step.step}</b>
                                    {step.icon}
                                </div>
                            </div>
                            <div className='text-sm text-justify px-2 pb-2'>
                                {step.description}
                            </div>
                        </section>
                    )
                }
                {/* </div> */}
            </div>
        </div>
    )
}
