import Marquee from 'react-fast-marquee';


export default function GalleryMarquee({ pics, delay }: { pics: string[], delay: number }) {
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
                        <img
                            loading="lazy"
                            src={company}
                            alt={company}
                            className='h-40 w-48 object-fill'
                        />
                    </div>
                ))
            }
        </Marquee>
    )
}
