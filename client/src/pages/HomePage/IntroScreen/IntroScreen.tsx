import React from 'react';
import { createStyles } from '@mantine/core';
import { ClassNames } from '@emotion/react';

type Props = {};

const useStyles = createStyles((theme, _params, getRef) => ({
container: {
  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
  minWidth: 250,
  width: '90%',
  height: 220,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid white',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: theme.radius.sm,
  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    [`& .${getRef('child')}`]: {
      fontSize: theme.fontSizes.xs,
      },
    },
  },
}));

const IntroScreen = (props: Props) => {
  const { classes } = useStyles();

  return <div className={classes.container}>IntroScreen</div>;
};

export default IntroScreen;
