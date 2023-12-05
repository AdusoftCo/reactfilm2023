import React from 'react'
import AppCard from '../app_card/app_card';
import AppSwiper from '../app_swiper/app_swiper';
import AppSwiperSlide from '../app_swiper/components/app_swiper_slide';
import AppTitle from '../app_title/app_title';

/*
    https://www.npmjs.com/package/react-loading-skeleton
*/
const AppCarrouselSection = ({ title, data }) => {
    const firstItem = data && data.length > 0 ? data[0] : null;

    return (
        <div>
            {firstItem && (
                <div
                    style={{
                        backgroundImage: `url(${firstItem.poster})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "450px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                    }}
                > 
                    <AppTitle style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{title}</AppTitle>
                    <AppSwiper>
                        {data.map((e) => (
                            <AppSwiperSlide key={e.id}>
                                <AppCard
                                    height="150px"
                                    width="250px"
                                    backgroundImageSrc={e.backdrop}
                                // You can customize other styles or properties as needed
                                >
                                    <AppCard.Header>
                                        <AppTitle>{e.title}</AppTitle>
                                    </AppCard.Header>
                                </AppCard>
                            </AppSwiperSlide>
                        ))}
                    </AppSwiper>
                </div>
            )}
        </div>
    );
};

export default AppCarrouselSection;


/*const AppCarrouselSection = ({ title, data }) => {
    
  return (
    <>
        <AppTitle>{title}</AppTitle>
        <AppSwiper>
            {data?.map((e) => (
                <AppSwiperSlide key={e.id}>
                    <AppCard
                        height="150px"
                        width="250px"
                        backgroundImageSrc={e.backdrop}
                    >
                        <AppCard.Header>
                            <AppTitle>{e.title}</AppTitle>
                        </AppCard.Header>

                    </AppCard>                    
                </AppSwiperSlide>
            ))}
        </AppSwiper>
    </>
  )
}

export default AppCarrouselSection;*/


/*<div
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
</div> */