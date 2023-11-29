import React from 'react';
import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';
import AppSwiperSlide from '../../../core/components/app_swiper/components/app_swiper_slide';
import { getPopularMovies, getTopRatedMovies } from '../services/movies.services';
import useSWR from 'swr';

const HomeView = () => {
  const { 
    data: popularMovies, 
    error: popularMoviesError, 
    isLoading: popularMoviesIsloading,
  } = useSWR( 'getPopularMovies', getPopularMovies );
  
  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsloading,
  } = useSWR('getTopRatedMovies', getTopRatedMovies);
  

  return (
    <div>
      <AppCarrouselSection title={"Popular Movies"} data=
      {popularMovies} />
    </div>
  );
};
      
export default HomeView;