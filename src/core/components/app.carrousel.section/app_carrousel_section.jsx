import React from 'react'
import AppSwiper from '../app_swiper/app_swiper';
import AppSwiperSlide from '../app_swiper/components/app_swiper_slide';
import AppTitle from '../app_title/app_title';

/*
    https://www.npmjs.com/package/react-loading-skeleton
*/

const AppCarrouselSection = ({ title, data }) => {
  return (
    <>
        <AppTitle>{title}</AppTitle>
        <AppSwiper>
            {data?.map((e) => (
                <AppSwiperSlide key={e.id}>
                    <div
                        style={{
                            height: "150px",
                            width: "250px",
                            backgroundImage: `url(${e.backdrop})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        <h3>{e.title}</h3>
                    </div>
                </AppSwiperSlide>
            ))}
        </AppSwiper>
    </>
  )
}

export default AppCarrouselSection;