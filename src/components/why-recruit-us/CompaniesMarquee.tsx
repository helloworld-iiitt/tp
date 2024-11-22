import Marquee from 'react-fast-marquee';
import ImageLoader from '../ui/ImageLoader';
import { useEffect, useState } from 'react';

interface CompaniesMarqueeProps {
    pics: string[];
    direction?: "left" | "right" | "up" | "down" | undefined;
}

export default function CompaniesMarquee({ pics, direction }: CompaniesMarqueeProps) {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <Marquee
            pauseOnHover
            direction={direction}
            gradient
            gradientWidth={screenSize.width < 800 ? 10 : 100}
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
