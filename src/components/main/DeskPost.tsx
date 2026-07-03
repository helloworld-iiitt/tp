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
                        imgUrl='http://store.iiitt.ac.in/images/admin/Director_2026/Prof%20(Dr.).%20Anupam%20Sukla_Sir.jpeg'
                        className='rounded-md object-contain h-[200px]'
                    />
                    {/* </div> */}

                    <div className='my-2 text-center'>
                        <h1 className='text-green-500 font-bold text-base sm:text-lg text-center'>Prof. (Dr.) Anupam Shukla</h1>
                        <p className='text-sm text-gray-600'>
                            Director (i/c), IIIT Tiruchirappalli
                        </p>
                    </div>
                </section>
                <section className=''>
                    <p className='text-base md:text-lg text-justify text-gray-600'>
                        IIIT Tiruchirappalli is committed to academic excellence, innovation, and industry-oriented learning. Through a strong foundation in computer science, research, internships, and real-world problem solving, we prepare students to become technology leaders capable of addressing global challenges and creating meaningful impact ...
                        <Dialog>
                            <DialogTrigger asChild>
                                <span className='border rounded px-2 m-2 cursor-pointer'>Read more</span>
                            </DialogTrigger>
                            <DialogContent className="max-w-[94%] sm:max-w-[500px] md:max-w-[800px] overflow-y-auto h-[80vh] rounded px-2 sm:px-4 py-3">
                                <DialogHeader>
                                    <p className='text-lg text-justify font-semibold text-gray-600'>
                                        Message from the Director
                                    </p>
                                </DialogHeader>
                                <section className='px-2 py-2'>
                                    <p className='text-base text-justify text-gray-600'>
                                        Greetings from the Indian Institute of Information Technology, Tiruchirappalli.
                                    </p>

                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        It is my privilege to serve as the Director (i/c) of IIIT Tiruchirappalli, an institution committed to excellence in education, research, innovation, and industry engagement. Since its inception, IIITT has established itself as a premier institute dedicated to nurturing future technology leaders equipped with strong technical foundations, research aptitude, and professional ethics.
                                    </p>

                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        Our academic ecosystem emphasizes interdisciplinary learning, innovation-driven research, entrepreneurship, and meaningful industry collaboration. Through a carefully designed curriculum, hands-on projects, internships, and exposure to emerging technologies, we strive to prepare our students to address real-world challenges and contribute significantly to society and industry.
                                    </p>

                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        As we continue to align our initiatives with the vision of the National Education Policy (NEP) 2020, our focus remains on delivering comprehensive and integrative education while advancing high-quality research in Engineering, Science, and Technology. We are committed to fostering an environment that encourages creativity, innovation, leadership, and lifelong learning.
                                    </p>

                                    <p className='text-base text-justify text-gray-600 my-4'>
                                        I warmly invite recruiters and industry partners to engage with our talented students. The graduates of IIIT Tiruchirappalli possess strong analytical abilities, technical expertise, and a commitment to excellence. I am confident that they will become valuable contributors and future leaders within your organizations.
                                    </p>

                                    <p className='mt-4 text-justify text-gray-600'>
                                        We look forward to building long-term partnerships with organizations that share our vision of innovation, growth, and societal impact.
                                    </p>

                                    <div className='mt-6'>
                                        <p className='text-base font-semibold text-gray-700'>
                                            Prof. (Dr.) Anupam Shukla
                                        </p>
                                        <p className='text-base text-gray-600'>
                                            Director (i/c)
                                            <br />
                                            IIIT Tiruchirappalli
                                            <br />
                                            director@iiitt.ac.in
                                        </p>
                                    </div>
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
                        imgUrl='teams/anoop.jpg'
                        className='rounded-md object-contain h-[200px]'
                    />
                    {/* </div> */}

                    <div className='my-2'>
                        <h1 className='text-green-500 font-bold text-sm sm:text-lg text-center'>Dr. Anoop Jacob Thomas</h1>
                        <p className='text-sm text-gray-600'>
                            Training and Placement Officer, IIIT Tiruchirappalli
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
                                        Message from the Training & Placement Officer
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
                                        Thanks in advance for your sincere endeavour and co-operation to
                                        give an opportunity to present their abilities.
                                    </p>
                                    <p className='text-base text-justify font-semibold text-gray-600'>
                                        Dr. Anoop Jacob Thomas
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
