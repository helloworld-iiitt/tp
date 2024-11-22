import { MousePointerClick } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import ImageLoader from '../ui/ImageLoader';

export default function DeskPost() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <motion.div
                initial={{ x: -50, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.8 }}
                className="flip-card-front px-6 py-6">
                <h1 className='text-green-500 font-bold text-2xl md:text-2xl text-center'>FROM THE DIRECTOR&apos;S DESK</h1>
                <section className='relative flex items-center flex-col py-2'>
                    {/* <div className=' relative'> */}
                    <ImageLoader
                        imgUrl='/teams/director.png'
                        className='rounded-md object-contain h-[200px]'
                    />
                    {/* </div> */}

                    <div className='my-2 text-center'>
                        <h1 className='text-green-500 font-bold text-base sm:text-lg text-center'>Prof. Usha Natesan</h1>
                        <p className='text-sm text-gray-600'>
                            Director In-charge, Tiruchirappalli
                        </p>
                    </div>
                </section>
                <section className=''>
                    <p className='text-base md:text-lg text-justify text-gray-600'>
                        Indian Institute of Information Technology Tiruchirappalli (IIITT) is an
                        initiative under the Public Private Partnership (PPP) model with a
                        primary focus on addressing the challenges faced by the Indian IT
                        industry and the growth of the domestic IT sector. IIITT attracts students
                        from all over the country and abroad. The purpose of an institution of
                        higher ...
                        <Dialog>
                            <DialogTrigger asChild>
                                <span className='border rounded px-2 m-2 cursor-pointer'>Read more</span>
                            </DialogTrigger>
                            <DialogContent className="max-w-[94%] sm:max-w-[500px] md:max-w-[800px] overflow-y-auto h-[80vh] rounded px-2 sm:px-4 py-3">
                                <DialogHeader>
                                    <p className='text-lg text-justify font-semibold text-gray-600'>
                                        Messsage from THE DIRECTOR&apos;S DESK
                                    </p>
                                </DialogHeader>
                                <section className='px-2 py-2'>
                                    <p className='text-base text-justify text-gray-600'>
                                        Greetings from Indian Institute of Information Technology, Tiruchirappalli
                                    </p>
                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        Indian Institute of Information Technology Tiruchirappalli (IIITT) is an
                                        initiative under the Public Private Partnership (PPP) model with a
                                        primary focus on addressing the challenges faced by the Indian IT
                                        industry and the growth of the domestic IT sector. IIITT attracts students
                                        from all over the country and abroad. The purpose of an institution of
                                        higher learning is  to impart/inculcate the best  of the academic
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
                                    <p className='mt-2 text-justify text-gray-600 mb-4'>
                                        Dear Recruiters, I am glad to invite you to recruit for the batch of 2025.
                                        I believe that graduates of IIITT are talented enough to be your
                                        professional partners in the future.
                                    </p>
                                    <p className='text-base text-justify font-semibold text-gray-600'>
                                        PROF. USHA NATESAN
                                    </p>
                                    <p className='text-base text-justify text-gray-600'>
                                        Director In-charge
                                        <br />
                                        IIIT, Tiruchirappalli
                                    </p>
                                </section>
                            </DialogContent>
                        </Dialog>
                    </p>
                    <div className='flex justify-end'>
                        <MousePointerClick />
                    </div>
                </section>


            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.8 }}
                className="flip-card-front px-6 py-4">
                <h1 className='text-green-500 font-bold text-2xl md:text-2xl text-center'>FROM THE TPO</h1>
                <section className='relative flex items-center py-2 flex-col'>
                    {/* <div className='rounded-md w-[150px]  lg:w-[200px] h-[200px] relative'> */}
                    <ImageLoader
                        imgUrl='/teams/devasena1.jpg'
                        className='rounded-md object-contain h-[200px]'
                    />
                    {/* </div> */}

                    <div className='my-2'>
                        <h1 className='text-green-500 font-bold text-sm sm:text-lg text-center'>DR. G. DEVASENA</h1>
                        <p className='text-sm text-gray-600'>
                            Placement Coordinator, Tiruchirappalli
                        </p>
                    </div>
                </section>
                <section className=''>
                    <p className='text-base md:text-lg text-justify text-gray-600'>
                        The Training and Placement Cell of IIITT provides intensive opportunity
                        through encouraging students to participate in trainings and workshops
                        to develop their professional and soft skills. The rigorous training as
                        part of the curriculum enables each one of the students to gain first-hand IT sector. The T&P primarily engages itself in accomplishing a
                        suitable place ...
                        <Dialog>
                            <DialogTrigger asChild>
                                <span className='border rounded px-2 my-2 cursor-pointer'>Read more</span>
                            </DialogTrigger>
                            <DialogContent className="max-w-[94%] sm:max-w-[500px] md:max-w-[800px] overflow-y-auto max-h-[80vh] rounded-lg px-2 sm:px-4 py-3">
                                <DialogHeader className=''>
                                    <p className='text-lg text-justify font-semibold text-gray-600'>
                                        Messsage from TPO
                                    </p>
                                </DialogHeader>
                                <section className='px-2 py-2'>
                                    <p className='text-base text-justify text-gray-600'>
                                        Greetings from Indian Institute of Information Technology, Tiruchirappalli
                                    </p>
                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        The Training and Placement Cell of IIITT provides intensive opportunity
                                        through encouraging students to participate in trainings and workshops
                                        to develop their professional and soft skills. The rigorous training as
                                        part of the curriculum enables each one of the students to gain first-hand IT sector. The T&P primarily engages itself in accomplishing a
                                        suitable place in the corporate sector.
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
                                    <p className='text-base text-justify font-semibold text-gray-600'>
                                        DR. G. DEVASENA
                                    </p>
                                    <p className='text-base text-justify text-gray-600'>
                                        Placement Coordinator
                                        <br />
                                        IIIT, Tiruchirappalli
                                    </p>
                                </section>
                            </DialogContent>
                        </Dialog>
                    </p>
                    <div className='flex justify-end'>
                        <MousePointerClick />
                    </div>
                </section>


            </motion.div>
        </div >
    )
}
