import { LazyLoadImage, trackWindowScroll, LazyComponentProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageLoaderProps extends LazyComponentProps {
    imgUrl: string;
    className?: string;
}

function ImageLoader({ imgUrl, className }: ImageLoaderProps) {
    return (
        <LazyLoadImage
            placeholderSrc='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "0.5s" },
            }}
            effect="blur"
            src={imgUrl}
            alt={imgUrl}
            className={className}
        />
    )
}

export default trackWindowScroll(ImageLoader);
