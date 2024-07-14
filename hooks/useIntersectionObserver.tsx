"use client";
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserverInit) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [callback, options]);

    return elementRef;
};

export default useIntersectionObserver;