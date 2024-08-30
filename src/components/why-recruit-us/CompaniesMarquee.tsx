import Marquee from 'react-fast-marquee';
import ImageLoader from '../ui/ImageLoader';

interface CompaniesMarqueeProps {
    pics: string[];
    direction?: "left" | "right" | "up" | "down" | undefined;
}

export default function CompaniesMarquee({ pics, direction }: CompaniesMarqueeProps) {
    return (
        <Marquee
            pauseOnHover
            direction={direction}
            gradient
            // gradientColor="#f8ffeb"
            className='flex justify-evenly gap-2 items-center'
        >
            {
                pics.map((company, index) => (
                    <div key={index} className='relative'>
                        <ImageLoader
                            imgUrl={company}
                            className='object-scale-down mix-blend-color-burn- aspect-[3/2] mx-5 h-24 w-32'
                        />
                    </div>
                ))
            }
        </Marquee>
    )
}
