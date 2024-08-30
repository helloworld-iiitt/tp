import Marquee from 'react-fast-marquee';
import { LazyLoadImage, trackWindowScroll, LazyComponentProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface CompaniesMarqueeProps extends LazyComponentProps {
    pics: string[];
    direction?: "left" | "right" | "up" | "down" | undefined;
}

function CompaniesMarquee({ pics, direction }: CompaniesMarqueeProps) {
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
                        <LazyLoadImage
                            // loading="lazy"
                            placeholderSrc='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                            wrapperProps={{
                                // If you need to, you can tweak the effect transition using the wrapper style.
                                style: { transitionDelay: "0.5s" },
                            }}
                            effect="blur"
                            src={company}
                            alt={company}
                            className='object-scale-down mix-blend-color-burn- aspect-[3/2] mx-5 h-24 w-32'
                        />
                    </div>
                ))
            }
        </Marquee>
    )
}

export default trackWindowScroll(CompaniesMarquee);
