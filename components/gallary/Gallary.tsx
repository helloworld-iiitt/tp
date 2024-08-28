import { pic1s, pic2s, pics } from '@/lib/constants/home';
import GalleryMarquee from './GalleryMarquee';

export default function Gallary() {
    return (
        <div className=''>
            <h1 className='font-semibold text-center text-2xl mb-2 md:text-3xl'>Events Gallery</h1>
            <p className='md:text-center text-justify md:text-xl md:w-[80%] mb-5 mx-auto'>Our students are always in action! From excelling at ICPC Regionals and Smart India Hackathon (SIH) to celebrating at Atrang, Ahlad, and Prothymos, our campus is alive with energy, creativity, and talent. Discover these moments in our gallery.</p>
            <section className='rounded-md  w-full'>

                <GalleryMarquee
                    pics={pics}
                    delay={0}
                />
                <GalleryMarquee
                    pics={pic1s}
                    delay={1}
                />
                <GalleryMarquee
                    pics={pic2s}
                    delay={0}
                />

            </section>

        </div>
    )
}
