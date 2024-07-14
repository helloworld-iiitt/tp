import Link from "next/link";
import { navigation } from "../header/Navbar";
import { ArrowDownToLine, FileText, Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";

export const quickLink1s = [
    {
        icon: <Mail className='h-4' />,
        href: "",
        title: "Email Us"
    },
    {
        icon: <Phone className='h-4' />,
        href: "",
        title: "Phone"
    },
    {
        icon: <Linkedin className='h-4' />,
        href: "",
        title: "Linkedin"
    },
    {
        icon: <Twitter className='h-4' />,
        href: "",
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
        <div className="bg-gray-50 py-10">
            <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-2'>
                        {/* <h3 className=''> Learn, Grow,  Evolve. </h3> */}
                        <div className='relative w-full h-[200px]'>
                            <Image
                                src={'/footer/google-map.png'}
                                alt="logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-2">
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

                    <ul className="group relative col-span-1">
                        <li className="mb-2 ">Socials</li>

                        {
                            quickLink1s.map((nav, index) => (
                                <li key={index} className='mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal mb-6 space-links flex gap-2 items-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>

                    {/* CLOUMN-4/5 */}

                    <ul className="group relative col-span-1">
                        <li className="mb-2 ">Navigations</li>
                        {
                            navigation.map((nav, index) => (
                                <li key={index} className='mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal mb-6 space-links">{nav.name}</Link>
                                </li>
                            ))
                        }
                    </ul>



                    {/* CLOUMN-5 */}

                    <ul className="group relative col-span-1">
                        <li className="mb-2 ">Quick Links</li>

                        {
                            quickLink2s.map((nav, index) => (
                                <li key={index} className='mb-5'>
                                    <Link href={nav.href} className="text-offwhite text-sm font-normal mb-6 space-links flex gap-2 items-center">{nav.icon} {nav.title}</Link>
                                </li>
                            ))}
                    </ul>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='px-4'>
                <h3 className='text-center text-offwhite'>@2024 - All Rights Reserved</h3>
                <h3 className='text-center text-offwhite'>Made with love by Training & Placement Cell IIITT</h3>
            </div>

        </div>
    )
}

export default Footer;
