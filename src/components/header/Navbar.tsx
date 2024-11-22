import Mobile from './Mobile';
import { navigation } from '@/lib/constants/home';



const Navbar = () => {

    return (
        <nav className="w-full duration-300 py-4 fixed backdrop-blur-lg px-6 items-center bg-white bg-opacity-50 lg:px-8 flex justify-between shadow z-10 top-0">
            {/* LOGO */}
            <a href='/'>
                <div className="flex gap-2 items-center">
                    <img
                        loading="lazy"
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
            </a>
            {/* aS */}
            <div className="hidden relative md:flex items-center justify-center">
                <div className="sm:ml-14">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`lg:px-3 text-sm lg:text-base font-medium hover:text-green-600 ${window.location.pathname == item.href && "text-green-500"}`}
                                aria-current={item.href ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
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
