import React, { useState } from 'react';
import { createStyles, Pagination } from '@mantine/core';
import { ClassNames } from '@emotion/react';
import { introAtom } from './../../../interfaces';
import { useAtom } from 'jotai';
import './IntroScreen.css';
import { usePagination } from '@mantine/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

type Props = {
  showIntro: boolean;
};

const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    minWidth: 250,
    width: '90%',
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs
      }
    }
  },
  swiper: {
    display: 'flex',
    height: '90vh',
    width: '90vw'
  },
  swiperCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
    // TODO: replace with theme color
    backgroundColor: '#333',
    borderRadius: theme.radius.sm,
    padding: '15px',
    border: '4px solid white',
    boxShadow: '0px 0px 0px 5px #333'
  }
}));

const IntroScreen = (props: Props) => {
  const { classes } = useStyles();
  const [pageNumber, setPageNumber] = useState(1);
  const [showIntro, setShowIntro] = useAtom(introAtom);
  const pagination = usePagination({ total: 5, initialPage: 1 });

  const renderSwitch = () => {
    return (
      <div>
        <button
          className="close-btn"
          onClick={() => {
            setShowIntro(!showIntro);
            console.log(`showIntro set to ${showIntro}`);
          }}
        >
          <div className="close-line l1" />
          <div className="close-line l2" />
        </button>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className={classes.swiper}
        >
          <SwiperSlide className={classes.swiperCard}>
            Slide1
          </SwiperSlide>
          <SwiperSlide className={classes.swiperCard}>
            Slide2
          </SwiperSlide>
          <SwiperSlide className={classes.swiperCard}>
            Slide3
          </SwiperSlide>
          <SwiperSlide className={classes.swiperCard}>
            Slide4
          </SwiperSlide>
          <SwiperSlide className={classes.swiperCard}>
            Slide5
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {showIntro ? renderSwitch() : ''}
    </div>
  );
};

export default IntroScreen;
