import Marquee from 'react-fast-marquee';
import ImageLoader from '@/components/ui/ImageLoader';

interface GalleryMarqueeProps {
    pics: string[];
    delay: number;
}

export default function GalleryMarquee({ pics, delay }: GalleryMarqueeProps) {
    return (
        <Marquee
            pauseOnHover
            delay={delay}
            gradient
            gradientColor="#f8ffeb"
            className='flex justify-evenly items-center'
        >
            {
                pics.map((company, index) => (
                    <div key={index} className=' border-4 border-white relative'>
                        <ImageLoader
                            imgUrl={company}
                            className='h-40 w-48 object-fill'
                        />
                    </div>
                ))
            }
        </Marquee>
    )
}