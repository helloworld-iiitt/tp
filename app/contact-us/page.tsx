import HowToReach from '@/components/for-recruiters/HowToReach'
import { Button } from '@/components/ui/button'
import { CircleArrowRight, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='container'>
            <div className='h-[60vh] relative'>
                <Image
                    src='/contact/team-work.png'
                    alt='contact-us'
                    fill
                    className='object-contain'
                />
                <h1 className='text-xl mt-10 md:text-3xl text-green-700 font-semibold'>Looking to Hire from IIIT Tiruchirapalli?</h1>
                <h2 className='text-base md:text-2xl text-green-600 font-semibold'>
                    Fill the Job Notification Form today!!!
                </h2>
            </div>
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
                        {/* <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                    <div className="mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-lg overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8361008171855!2d78.58886247781727!3d10.669826934030871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d475370d8ff%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1720981113714!5m2!1sen!2sin"
                                    width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p className="mt-1 text-gray-600">Indian Institute of Information Technology Tiruchirappalli,
                                            Sethurapatti, Trichy-Madurai Highway,
                                            Tiruchirappalli, Tamil Nadu - 620012
                                        </p>
                                    </div>
                                    {/* <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                                        <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                    </div> */}
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                        <p className="mt-1 text-gray-600 flex items-center gap-2"><Mail /> placement@iiitt.ac.in</p>
                                        <p className="mt-1 text-gray-600 flex items-center gap-2"><Phone /> +91-9042473621</p>
                                        <p className="mt-1 text-gray-600 flex items-center gap-2"><Linkedin /> placement-cell-iiit-trichy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HowToReach />
        </div>
    )
}
