import Link from "next/link";
import { navigation } from "../header/Navbar";
import { ArrowDownToLine, FileText, Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";

export const quickLink1s = [
    {
        icon: <Mail className='h-4' />,
        href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placement@iiitt.ac.in",
        title: "Email Us"
    },
    {
        icon: <Phone className='h-4' />,
        href: "https://api.whatsapp.com/send?phone=9042473621",
        title: "Phone"
    },
    {
        icon: <Linkedin className='h-4' />,
        href: "https://www.linkedin.com/in/placement-cell-iiit-trichy",
        title: "Linkedin"
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
        <div className="bg-gray-50 pt-10">
            <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid justify-items-center md:justify-items-start grid-cols-1 gap-y-5 gap-x-16 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='md:col-span-2'>
                        {/* <h3 className=''> Learn, Grow,  Evolve. </h3> */}
                        <div className="rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8361008171855!2d78.58886247781727!3d10.669826934030871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d475370d8ff%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1720981113714!5m2!1sen!2sin"
                                width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="mt-2 md:text-start text-center">
                            <h1>
                                Mailing Address
                            </h1>
                            <p className="text-sm">
                                Indian Institute of Information Technology Tiruchirappalli,
                                Sethurapatti, Trichy-Madurai Highway,
                                Tiruchirappalli, Tamil Nadu - 620012
                            </p>
                        </div>
                    </div>

                    {/* CLOUMN-3/5 */}

                    <ul className="group relative col-span-1 text-center md:text-start">
                        <li className="mb-2 ">Socials</li>

                        {
                            quickLink1s.map((nav, index) => (
                                <li key={index} className='md:mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal mb-4 md:mb-6 space-links flex gap-2 items-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>

                    {/* CLOUMN-4/5 */}

                    <ul className="group relative col-span-1 text-center md:text-start">
                        <li className="mb-2 ">Navigations</li>
                        {
                            navigation.map((nav, index) => (
                                <li key={index} className='mb-2 md:mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal  mb-4 md:mb-6  space-links">{nav.name}</Link>
                                </li>
                            ))
                        }
                    </ul>



                    {/* CLOUMN-5 */}

                    <ul className="group relative col-span-1 text-center md:text-start">
                        <li className="mb-2 ">Quick Links</li>

                        {
                            quickLink2s.map((nav, index) => (
                                <li key={index} className='md:mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal mb-4 md:mb-6 space-links flex gap-2 items-center justify-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='px-4 bg-slate-400 py-4'>
                <h3 className='text-center text-offwhite'>@2024 - All Rights Reserved</h3>
                <h3 className='text-center text-offwhite'>Made with love by Training & Placement Cell IIITT</h3>
            </div>

        </div>
    )
}

export default Footer;
