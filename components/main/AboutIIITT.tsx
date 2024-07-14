import React from 'react'
import UpdateSection from './UpdateSection'

export default function AboutIIITT() {
    return (
        <div className='grid lg:grid-cols-3 gap-2 my-4'>
            <section className='lg:col-span-2 z-10'>
                <h1 className='text-green-500 font-bold text-2xl text-center mb-2'>About IIIT Trichy</h1>
                <p className='text-xl text-gray-600 text-justify'>
                    Indian Institute of Information Technology Tiruchirappalli (IIITT), also known as IIIT Trichy, is an Institute of National Importance and one among the 25 IIITs proposed under the non-profit Public-Private Partnership (PPP) Model by MHRD. IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15. Industry partners include Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).
                </p>
            </section>
            {/* <UpdateSection /> */}
        </div>
    )
}
