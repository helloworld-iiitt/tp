import Link from "next/link";
import { navigation } from "../header/Navbar";
import { ArrowDownToLine, FileText, Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";

export const quickLink1s = [
    {
        icon: <Mail className='h-4' />,
        href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placement@iiitt.ac.in",
        title: "placement@iiitt.ac.in"
    },
    {
        icon: <Phone className='h-4' />,
        href: "https://api.whatsapp.com/send?phone=9042473621",
        title: "+91 9042473621"
    },
    {
        icon: <Linkedin className='h-4' />,
        href: "https://www.linkedin.com/in/tnp-cell-iiit-tiruchirappalli",
        title: "@tnp-cell-iiit-tiruchirappalli"
    },
    {
        icon: <Twitter className='h-4' />,
        href: "https://twitter.com/IIITTrichy",
        title: "Twitter"
    },
];

const quickLink2s = [
    {
        icon: <FileText className='h-4' />,
        href: "CONTACT US",
        title: "BROCHURE"
    },
    {
        icon: <ArrowDownToLine className='h-4' />,
        href: "",
        title: "PLACEMENT DETAILS"
    },
    {
        icon: <Globe className='h-4' />,
        href: "http://iiitt.ac.in/",
        title: "iiitt.ac.in"
    },
]

const Footer = () => {
    return (
        <div id="contact-us" className="bg-gray-50 ">
            {/* <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8"> */}
            <div className="container py-16 grid justify-items-center md:justify-items-start md:grid-cols-2 gap-x-20  gap-y-4 md:gap-y-0">

                <section className="grid md:grid-cols-2 items-center gap-x-20 gap-y-4 md:gap-y-0 w-full">
                    <div className="rounded-lg overflow-hidden w-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8361008171855!2d78.58886247781727!3d10.669826934030871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d475370d8ff%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1720981113714!5m2!1sen!2sin"
                            width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="md:hidden mt-2 text-center">
                        <h1>
                            Mailing Address
                        </h1>
                        <p className="text-sm">
                            Indian Institute of Information Technology Tiruchirappalli,
                            Sethurapatti, Trichy-Madurai Highway,
                            Tiruchirappalli, Tamil Nadu - 620012
                        </p>
                    </div>

                    <ul className="relative  text-center md:text-start">
                        <li className="mb-2 font-semibold">Socials</li>

                        {
                            quickLink1s.map((nav, index) => (
                                <li key={index} className='md:mb-5'>
                                    <Link href={nav.href} target="_blank" className="text-offwhite whitespace-nowrap text-sm font-normal justify-center md:justify-start  mb-4 md:mb-6 space-links flex gap-2 items-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>
                    <div className="hidden md:block mt-2 col-span-2 md:text-start text-center">
                        <h1>
                            Mailing Address
                        </h1>
                        <p className="text-sm">
                            Indian Institute of Information Technology Tiruchirappalli,
                            Sethurapatti, Trichy-Madurai Highway,
                            Tiruchirappalli, Tamil Nadu - 620012
                        </p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 w-full  gap-y-4 md:gap-y-0">

                    <ul className="relative text-center md:text-start">
                        <li className="mb-2 font-semibold">Navigations</li>
                        {
                            navigation.map((nav, index) => (
                                <li key={index} className='mb-2 md:mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal  mb-4 md:mb-6  space-links">{nav.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul className="relative text-center md:text-start">
                        <li className="mb-2 font-semibold">Quick Links</li>

                        {
                            quickLink2s.map((nav, index) => (
                                <li key={index} className='md:mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal whitespace-nowrap mb-4 md:mb-6 space-links flex justify-center md:justify-start gap-2 items-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>
                </section>

            </div>
            {/* </div> */}

            {/* All Rights Reserved */}

            <div className='px-4 bg-[#daf7a6] py-4 text-[0.75rem] font-semibold'>
                <h3 className='text-center text-offwhite'>@2024 - All Rights Reserved</h3>
                <h3 className='text-center text-offwhite'>🌟 Brought to You with Dedication by the Training & Placement Cell, IIIT Trichy 🌟</h3>
            </div>

        </div>
    )
}

export default Footer;
