import React from 'react';
import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';
import AppSwiperSlide from '../../../core/components/app_swiper/components/app_swiper_slide';
import { getAiringToday, getPopularMovies, getPopularTv, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services';
import useSWR from 'swr';
import AppCarrouselSection from '../../../core/components/app.carrousel.section/app_carrousel_section';
import AppCard from '../../../core/components/app_card/app_card';

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

  const {
    data: upComingMovies,
    error: upComingMoviesError,
    isLoading: upComingMoviesIsloading,
  } = useSWR('getUpComingMovies', getUpcomingMovies);
  
  const {
    data: airingTodayTv,
    error: airingTodayTvError,
    isLoading: airingTodayTvIsloading,
  } = useSWR('getAiringToday', getAiringToday);

  const {
    data: popularTv,
    error: popularTvError,
    isLoading: popularTvIsloading,
  } = useSWR('getPopularTv', getPopularTv);
  
  
  return (
    <div>
      <AppCarrouselSection title={"Popular Movies"} data=
      {popularMovies} />

      <AppCarrouselSection title={"Tv Hoy !!!"} data=
        {airingTodayTv} />

      <AppCarrouselSection title={"Tv Pava XD" } data=
        {popularTv} />

      <AppCard 
        height="150px"
        width="300px"
        backgroundImageSrc={"https://picsum.photos/400/200?random=1"}
      >
        <AppCard.Header>HELLO!</AppCard.Header>
        <AppCard.Body>HELLO!</AppCard.Body>
        <AppCard.Footer>HELLO!</AppCard.Footer>
      </AppCard>
    </div>
  );
};
      
export default HomeView;