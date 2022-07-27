import React from 'react';
import './HomePage.css';
import IntroScreen from './IntroScreen/IntroScreen';
import { createStyles } from '@mantine/core';

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

  return (
    <div className={classes.pageWrapper}>
      HomePage
      <IntroScreen />
    </div>
  );
};

export default HomePage;
