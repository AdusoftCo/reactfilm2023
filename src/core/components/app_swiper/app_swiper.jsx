import  React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export const AppSwiper = ({ children }) => {
    const swiperElRef = useRef(null);
    
    return (
        <swiper-container
            ref={swiperElRef}
            loop
            spaceBetween="30"
            slides-per-view="3"
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