import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InformationCard from './InformationCard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally center
    alignItems: 'center',      // Vertically center
    height: '100vh',           // Set the container height to full viewport height
  },
  heading: {
    textAlign: 'center',       // Center the text within the heading
    fontSize: '2rem',          // You can adjust the font size as needed
  },
}));

export const HomePage = () => {
  const classes = useStyles(); // Instantiate the styles

  return (
    <div>
      <h1 className={classes.heading}>API Catalog</h1>
      <InformationCard />
    </div>
  );
};
