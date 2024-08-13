import React from 'react'
import UpdateSection from './UpdateSection'
import Image from 'next/image'

export default function AboutIIITT() {
    return (
        <div id='about-us' >
            <h2 className='h-20'></h2>
            <div>
                <h1 className='text-green-500 font-bold text-2xl text-center mb-2'>About IIIT Trichy</h1>

                <section className='grid md:grid-cols-2 gap-4 shadow rounded md:p-10 p-4'>

                    <p className='text-base text-gray-600 text-justify order-2 md:order-1'>
                        Indian Institute of Information Technology Tiruchirappalli (IIITT), also known as IIIT Trichy, is an Institute of National Importance and one among the 25 IIITs proposed under the non-profit Public-Private Partnership (PPP) Model by MHRD. IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15. Industry partners include Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).
                    </p>

                    <div className='h-[500px] w-full relative order-1 md:order-2'>
                        <Image
                            src='/iiitt-img1.jpg'
                            alt='iiitt'
                            className='rounded-md object-fill'
                            fill
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
