import React from 'react';
import { createPortal } from 'react-dom';
import useSWR from 'swr';
import AppCarrouselSection from '../../../core/components/app.carrousel.section/app_carrousel_section';
import AppModal from '../../../core/components/app_modal/app_modal';
import { useModal } from '../../../core/components/app_modal/hook/use_modal';
import { getPopularMovies } from '../services/movies.services';
import { getAiringTodayTv, getPopularTv } from '../services/tv.services';


const HomeView = () => {

  const {isOpen, closeModal, openModal} = useModal();

  const { 
    data: popularMovies, 
    error: popularMoviesError, 
    isLoading: popularMoviesIsloading,
  } = useSWR( 'getPopularMovies', getPopularMovies );
  
  const {
    data: airingTodayTv,
    error: airingTodayTvError,
    isLoading: airingTodayTvIsloading,
  } = useSWR('getAiringToday', getAiringTodayTv);

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

      <div>
        <AppCarrouselSection title={"Favorites"}  />
      </div>

      <button onClick={openModal}>ABRIR</button>

      <AppModal open={isOpen} onClickedOut={closeModal}>
        <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "white",
          color: "red",
        }}
        >
          Hi this is a Modal
          <button onClick={closeModal}>CERRAR</button>
        </div>
      </AppModal>
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