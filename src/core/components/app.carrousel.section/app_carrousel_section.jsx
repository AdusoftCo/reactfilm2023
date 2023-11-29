import React from 'react'

const AppCarrouselSection = ({ title, data }) => {
  return (
    <>
        <h2>{title}</h2>
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