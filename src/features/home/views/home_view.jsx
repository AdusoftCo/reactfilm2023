import React from 'react';
import { getAiringToday, getPopularMovies, getPopularTv, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services';
import useSWR from 'swr';
import AppCarrouselSection from '../../../core/components/app.carrousel.section/app_carrousel_section';


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
      <div> 
        <AppCarrouselSection title={"Pelis Clasicas"} data=
        {popularMovies} />
      </div>

      <div>
        <AppCarrouselSection title={"La Tv Ahora !!!"} data=
          {airingTodayTv} />
      </div>

      <div>
        <AppCarrouselSection title={"Tv Pava XD" } data=
          {popularTv} />
      </div>
    </div>
  );
};
      
export default HomeView;



/*<AppCard 
        height="150px"
        width="300px"
        backgroundImageSrc={"https://picsum.photos/400/200?random=1"}
      >
        <AppCard.Header>HELLO!</AppCard.Header>
        <AppCard.Body>HELLO!</AppCard.Body>
        <AppCard.Footer>HELLO!</AppCard.Footer>
      </AppCard> */