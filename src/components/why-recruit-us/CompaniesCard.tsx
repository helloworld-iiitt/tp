import { companies, companies1, companies2 } from '@/lib/constants/home';
import { lazy } from 'react';

const CompaniesMarquee = lazy(() => import('./CompaniesMarquee'));

export default function CompaniesCard() {
    return (
        <div className=''>
            <h1 className='font-semibold text-center text-3xl'>Our Recruiters</h1>
            <p className='md:text-center text-justify md:text-xl md:w-[80%] mb-5 mx-auto'>Our students have been placed in some of the top companies in the world. Here are some of the companies that have recruited our students.</p>
            <section className='rounded-md  w-full'>
                <CompaniesMarquee
                    pics={companies}
                />
                <CompaniesMarquee
                    pics={companies1}
                    direction='right'
                />
                <CompaniesMarquee
                    pics={companies2}
                />
            </section>

        </div>
    )
}
