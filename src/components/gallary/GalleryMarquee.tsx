import Marquee from 'react-fast-marquee';
import ImageLoader from '@/components/ui/ImageLoader';
import { useEffect, useState } from 'react';

interface GalleryMarqueeProps {
    pics: string[];
    delay: number;
}

export default function GalleryMarquee({ pics, delay }: GalleryMarqueeProps) {
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
            delay={delay}
            gradient
            gradientWidth={screenSize.width < 800 ? 10 : 100}
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