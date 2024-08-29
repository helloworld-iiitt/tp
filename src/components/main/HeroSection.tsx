import { Button } from '../ui/button';
import { FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className='hero-parallax flex justify-center items-center'>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}

                className='text-center'>
                <div className='flex justify-center'>
                    <img
                        loading="lazy"
                        src={"/logo.png"}
                        width={80}
                        height={80}
                        alt='logo'
                        className='object-contain'
                    />
                </div>
                <h1 className='text-2xl sm:text-3xl whitespace-nowrap md:text-6xl font-bold mb-3 text-white shadow-blue-500/50'>Training & Placement Cell</h1>
                <h1 className='text-lg sm:text-xl md:text-5xl text-white'> IIIT Tiruchirappalli</h1>
                <section className='mt-5 flex flex-col md:flex-row justify-center gap-3' >
                    <a href='/#contact-us' >
                        <Button variant='outline' className='w-[90%] sm:w-full'><Mail className='h-4' /> CONTACT US</Button>
                    </a>
                    <a href='/docs/Placement Brochure IIIT Trichy 2024.pdf' target='_blank'>
                        <Button variant='outline' className='w-[90%] sm:w-full'><FileText className='h-4' /> DOWNLOAD BROCHURE</Button>
                    </a>
                    {/* <Button variant='outline'><ArrowDownToLine className='h-4' /> PLACEMENT DETAILS</Button> */}
                </section>
            </motion.div>
        </div >
    )
}
