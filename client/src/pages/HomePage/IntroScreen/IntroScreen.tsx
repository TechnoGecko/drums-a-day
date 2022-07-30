import React, { useState } from 'react';
import { createStyles, Pagination } from '@mantine/core';
import { ClassNames } from '@emotion/react';

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
    border: '1px solid white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs
      }
    }
  }
}));

const IntroScreen = (props: Props) => {
  const { classes } = useStyles();
  const [pageNumber, setPageNumber] = useState(1);

  const renderSwitch = () => {
    switch (pageNumber) {
      case 1:
        return <div>Page 1</div>;
      case 2:
        return <div>Page 2</div>;
      case 3:
        return <div>Page 3</div>;
      case 4:
        return <div>Page 4</div>;
      case 5:
        return <div>Page 5</div>;
      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      {/* Conditional Page Rendering */}
      {renderSwitch()}
      <Pagination
        page={pageNumber}
        onChange={setPageNumber}
        total={5}
        sx={{ justifySelf: 'flex-end', marginBottom: '15px' }}
      />
    </div>
  );
};

export default IntroScreen;
