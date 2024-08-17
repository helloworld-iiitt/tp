import { MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function DeskPost() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <div className="flip-card h-[180vh] sm:h-[80vh] md:h-[70vh]">
                <div className="flip-card-inner">
                    <div className="flip-card-front px-4 md:px-6 py-4">
                        <h1 className='text-green-500 font-bold text-base sm:text-2xl text-center mb-2'>FROM THE DIRECTOR&apos;S DESK</h1>
                        <section className='relative flex items-center flex-col'>
                            <div className='rounded-md w-[150px] h-[100px] sm:h-[150px] lg:w-[200px] lg:h-[200px] relative'>
                                <Image
                                    src='/teams/director.png'
                                    alt='director'
                                    fill
                                    className='rounded-md object-contain'
                                />
                            </div>

                            <div className='my-2'>
                                <h1 className='text-green-500 font-bold text-sm sm:text-lg text-center'>DR. NARASIMHA SARMA NVS</h1>
                                <p className='text-sm text-gray-600'>
                                    Director, IIIT, Tiruchirappalli
                                </p>
                            </div>
                        </section>
                        <section className=''>
                            <p className='text-base text-justify text-gray-600'>
                                Indian Institute of Information Technology Tiruchirappalli (IIITT) is an
                                initiative under the Public Private Partnership (PPP) model with a
                                primary focus on addressing the challenges faced by the Indian IT
                                industry and the growth of the domestic IT sector. IIITT attracts students
                                from all over the country and abroad. The purpose of an institution of
                                higher learning is... [hover for more]
                            </p>
                            <div className='flex justify-end'>
                                <MousePointerClick />
                            </div>
                        </section>
                    </div>
                    <div className="flip-card-back">
                        <section className='px-4 md:px-6 py-4 overflow-auto'>
                            <p className='text-base text-justify text-gray-600'>
                                to impart/inculcate the best  of the academic
                                experience in a chosen discipline with specialized knowledge. The purpose of an institution of
                                higher learning is to impart/inculcate the best of the academic
                                experience in a chosen discipline with specialized knowledge in the
                                core curriculum for the initial 2 years and industry expertise within the
                                last 2 years. IIITT evolves into a milieu that dedicates itself to shaping
                                the students into better human beings and employable professionals
                                with local skills for global needs. The academic and internship
                                opportunities encourage student initiatives by engaging them in
                                cutting-edge technology research to meet the current needs and future
                                challenges of India and the world at large. The institute imparts
                                Information Technology education with practical experience to
                                students who will be future leaders with the ability to work in
                                challenging situations. A major objective in establishing IIITT is to set up
                                a model of education which can produce best-in-class human
                                resources in IT and harness the multidimensional facets of IT. While the
                                number of students produced would be small, the impact they create
                                would be great.
                            </p>
                            <p className='mt-2 text-justify text-gray-600'>
                                Dear Recruiters, I am glad to invite you to recruit for the batch of 2025.
                                I believe that graduates of IIITT are talented enough to be your
                                professional partners in the future.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="flip-card h-[180vh] sm:h-[80vh] md:h-[70vh]">
                <div className="flip-card-inner">
                    <div className="flip-card-front px-6 py-4">
                        <h1 className='text-green-500 font-bold text-base sm:text-2xl text-center'>FROM THE TPO</h1>
                        <section className='relative flex items-center flex-col'>
                            <div className='rounded-md  w-[150px] h-[100px] sm:h-[150px] lg:w-[200px] lg:h-[200px] relative'>
                                <Image
                                    src='/teams/devasena1.jpg'
                                    alt='director'
                                    fill
                                    className='rounded-md object-contain'
                                />
                            </div>

                            <div className='my-2'>
                                <h1 className='text-green-500 font-bold text-sm sm:text-lg text-center'>DR. G. DEVASENA</h1>
                                <p className='text-sm text-gray-600'>
                                    Placement Coordinator, Tiruchirappalli
                                </p>
                            </div>
                        </section>
                        <section className=''>
                            <p className='text-base text-justify text-gray-600'>
                                The Training and Placement Cell of IIITT provides intensive opportunity
                                through encouraging students to participate in trainings and workshops
                                to develop their professional and soft skills. The rigorous training as
                                part of the curriculum enables each one of the students to gain first-hand IT sector. The T&P primarily engages itself in accomplishing a
                                suitable place in the corporate sector... [hover for more]
                            </p>
                            <div className='flex justify-end'>
                                <MousePointerClick />
                            </div>
                        </section>
                    </div>
                    <div className="flip-card-back">
                        <section className='px-6 py-4 flex justify-start'>
                            <p className='text-base text-justify text-gray-600'>
                                It also constantly explores
                                remarkable opportunities to afford students with better background to improve their technical knowledge. In addition, it conducts internship
                                activities, motivates participation in hackathon competitions,
                                encourages club activities and provides hands-on experience in
                                organizing events such as sports events to improve students&apos;
                                confidence, communication ability, professional skills, and be job-ready. I am grateful to the organizations which co-operated, extended
                                and contributed for giving an extraordinary opportunity to T&P Cell to
                                fulfil its responsibilities. This year, I present you the exceptional
                                candidates/graduates for recruitment at your reputed organizations.
                                Thanks in advance for your sincere endeavour and coxoperation to
                                give an opportunity to present their abilities.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
