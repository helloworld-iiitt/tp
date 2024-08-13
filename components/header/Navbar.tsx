import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { quickLink1s } from '../footer/Footer';
import Mobile from './Mobile';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

export const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/#about-us', current: false },
    { name: 'Why Recruit@IIITT', href: '/#why-recruit@IIITT', current: false },
    { name: 'For Recruites', href: '/for-recruites', current: false },
    { name: 'Teams', href: '/#teams', current: false },
    { name: 'Contact Us', href: '/#contact-us', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = ({ showImg }: { showImg: boolean }) => {
    React.useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (!htmlElement) return;
        const dataScrollValue = htmlElement.getAttribute('data-scroll');
        //    eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='flex justify-between md:justify-center items-center px-2'>
                <Link href="/" className='flex justify-center items-center md:px-4'>

                    <div className='flex items-center flex-col pt-2'>
                        <div className='flex gap-1'>
                            <section className='relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
                                <Image
                                    src='/logo.png'
                                    alt='logo'
                                    fill
                                />
                            </section>
                            <section>
                                <h1 className='text-base sm:text-xl md:text-[1.8rem] font-semibold text-green-700 text-center'>Training & Placement Cell</h1>
                                <h1 className='text-[0.4rem] sm:text-[0.5rem] md:text-[0.75rem] font-semibold text-green-700 text-center'>Indian Institute of Information Technology, Tiruchirappalli (IIITT)</h1>
                                <h3 className='text-green-500 text-[0.5rem] md:text-[0.65rem] text-center'>An Institute of National Importance, established by MHRD</h3>
                            </section>
                        </div>
                    </div>
                </Link >

                <div className="md:hidden block">
                    <Mobile />
                </div>
            </div>
            <hr className='w-full border mt-1 hidden md:block' />

            <nav className={`mx-auto px-6 duration-300 items-center lg:px-8 flex ${showImg ? "justify-between backdrop-blur-md shadow py-4" : "justify-center py-2"} sticky z-10 top-0`}>
                {/* LOGO */}
                <Link href='/'>
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
                </Link>
                {/* LINKS */}
                <div className="hidden relative md:flex items-center justify-center">
                    <div className="sm:ml-14">
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
                        </div>
                    </div>
                </div>

                <div className={` ${showImg ? "flex" : "hidden"} md:hidden block`}>
                    <Mobile />
                </div>

            </nav>
        </>
    )
}

export default Navbar;
