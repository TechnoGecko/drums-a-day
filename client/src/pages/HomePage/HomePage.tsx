import React, { useState } from 'react';
import './HomePage.css';
import IntroScreen from './IntroScreen/IntroScreen';
import { Button, createStyles } from '@mantine/core';
import { atom, useAtom } from 'jotai';
import { introAtom } from '../../interfaces';

type Props = {};

const useStyles = createStyles((theme, _params, getRef) => ({
  pageWrapper: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const HomePage = (props: Props) => {
  const { classes } = useStyles();
  const [showIntro, setShowIntro] = useAtom(introAtom);

  return (
    <div className={classes.pageWrapper}>
      HomePage{showIntro ? ' (showIntro: true)' : ' (showIntro: false)'}
      {!showIntro &&
        <Button
          onClick={() => {
            setShowIntro(true);
          }}
        >
          Show Intro
        </Button>}
      {showIntro && <IntroScreen />}
    </div>
  );
};

export default HomePage;
