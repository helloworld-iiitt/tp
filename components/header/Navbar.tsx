import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { quickLink1s } from '../footer/Footer';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

export const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '#about-us', current: false },
    { name: 'Why Recruit@IIITT', href: '#why-recruit@IIITT', current: false },
    { name: 'For Recruites', href: '/for-recruites', current: false },
    { name: 'Teams', href: '/teams', current: false },
    { name: 'Contact Us', href: '#contactus', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = ({ showImg }: { showImg: boolean }) => {
    const [scrollValue, setScrollValue] = React.useState(null);

    React.useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (!htmlElement) return;
        const dataScrollValue = htmlElement.getAttribute('data-scroll');
        if (dataScrollValue) {
            console.log(dataScrollValue);

        }
    }, []);

    return (
        <>
            <div className='flex justify-between items-center px-4'>

                <div className='flex gap-2 items-center  pt-2'>
                    <section>
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={80}
                            height={80}
                        />
                    </section>
                    <section>
                        <h1 className='text-xl font-semibold text-green-700'>Indian Institute of Information Technology, Tiruchirappalli (IIITT)</h1>
                        <h3 className='text-green-500 text-sm'>An Institute of National Importance, established by MHRD</h3>
                    </section>
                </div>
                <div className='md:pe-10 flex gap-3'>
                    <Link href={"http://iiitt.ac.in"} className='flex items-center '>
                        <Globe className='h-4' />
                        iiitt.ac.in
                    </Link>
                    {
                        quickLink1s.map((item, index) => (
                            <Link key={index} href={item.href} className='flex items-center '>
                                {item.icon}
                                {item.title}
                            </Link>
                        )
                        )
                    }
                </div>
            </div>

            <nav className={`mx-auto px-6 lg:px-8 flex ${showImg ? "justify-between backdrop-blur-md shadow py-4" : "justify-end"} sticky z-10 top-0`}>
                {/* LOGO */}

                <div className={` ${showImg ? "flex" : "hidden"} gap-2 items-center`}>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={40}
                        height={40}
                        className='fade-in-5 ease-in-out delay-200'
                    />
                    <div>
                        <h1 className='text-base font-semibold -mb-1 text-[#44563e]'>IIITT</h1>
                        <h3 className='text-[#44563e] text-sm'>Training & Placement Cell</h3>
                    </div>
                </div>
                {/* LINKS */}
                <div className="relative flex items-center justify-end">
                    <div className="hidden sm:ml-14 md:block">
                        <div className="flex space-x-4 hover:text-green-800">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? ' text-purple' : 'hover:text-purple',
                                        'px-3 text-15px font-medium space-links'
                                    )}
                                    aria-current={item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* <Contactus /> */}
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;
