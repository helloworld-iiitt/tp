import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Mobile from './Mobile';
import { navigation } from '@/lib/constants/home';


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
        <nav className={`w-full py-4 absolute px-6 duration-300 items-center bg-white bg-opacity-50 lg:px-8 flex justify-between shadow z-10 top-0`}>
            {/* LOGO */}
            <Link href='/'>
                <div className={`flex gap-2 items-center`}>
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
                                    'lg:px-3 text-sm lg:text-base font-medium'
                                )}
                                aria-current={item.href ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`md:hidden block`}>
                <Mobile />
            </div>

        </nav>
    )
}

export default Navbar;
