import  React, { useRef, useEffect } from "react";
import { useState } from "react";
import 'swiper/swiper-bundle.css';

export const AppSwiper = ({ children }) => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const resizeHandler = () => {
            if(window.innerWidth < 768) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 992) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);
    

    const swiperElRef = useRef(null);
    
    return (
        <swiper-container
            ref={swiperElRef}
            loop
            spaceBetween="30"
            slides-per-view={slidesPerView}
            navigation="true"
        >
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <swiper-slide key={index}>{child}</swiper-slide>
                ))
            ) : (
                <swiper-slide>{children}</swiper-slide>
            )}
        </swiper-container>
    );
};

export default AppSwiper;
