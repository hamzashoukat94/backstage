import React from 'react';
import CustomCompanyLogo from './logo/apimatic-white.png';


const LogoFull = () => {
  const logoHeight = '23px';
  const logoWidth = 'auto';

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={CustomCompanyLogo} style={{ height: logoHeight, width: logoWidth }} />;
};


export default LogoFull;
