import React from "react";
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

import Header from "../../Header";
import BottomLineBox from '../../BottomLineBox';
import Modal from "../../Modals";
import MobileNav from "../../MobileNav";

import BannerImg from '../../../assets/images/backgrounds/banner.svg';
import BgEllipse from '../../../assets/images/backgrounds/bg-ellipse.png';

const RootWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  backgroundColor: '#12274C',
  backgroundSize: 'cover',
  overflowX: 'hidden',
  overflowY: 'auto'
}))

const BannerImage = styled('img')(({ theme }) => ({
  width: 'auto',
  objectFit: 'cover',
  position: 'absolute',
  right: 0,
  zIndex: 5,

  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    height: '60vh',
    top: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '73vh',
    top: '15%',
  }
}))

const YellowEllipseImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}))

const MobileEllipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100vh',
  
  zIndex: 1,
  background: 'radial-gradient(50% 50% at 50% 50%, #D65140 0%, rgba(214, 81, 64, 0) 99.99%, rgba(52, 168, 83, 0) 100%)',
  opacity: "0.08",
  
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%',
    right: 0,
    top: 0,
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
    width: '1442px',
    left: '119px',
    top: '34px',
  }
}))

const Container = styled('div')`
  position: relative;
  color: #fff;
  z-index: 10;

  ${'' /* &::-webkit-scrollbar {
    width: 0;
  } */}
`;

const LandingLayout = ({ children }) => {
  const location = useLocation()
  const currentLang = useSelector(state => state.languages)

  return (
    <RootWrapper>
      <Header languages={currentLang} layout='landing' pathname={location.pathname} />
      <BannerImage src={BannerImg} alt="banner-image" />
      <YellowEllipseImage src={BgEllipse} alt='yellow-ellipse' />
      <MobileEllipse />
      <Container>{children}</Container>
      <BottomLineBox languages={currentLang} layout='landing' />
      <Modal />
      <MobileNav languages={currentLang} />
    </RootWrapper>
  );
};

export default LandingLayout;
