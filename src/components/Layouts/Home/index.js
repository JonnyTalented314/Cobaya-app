import React from "react";
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import BottomLineBox from "../../BottomLineBox";
import Modal from "../../Modals";
import MobileNav from "../../MobileNav";

// import HelperIcon from '../../../assets/images/icons/icon-helper.png';

const HomeLayout = ({ children }) => {
  const location = useLocation()
  const currentLang = useSelector(state => state.languages)
  const openModal = useSelector(state => state.openModal)
  const theme = useSelector(state => state.theme)
  
  return (
    <RootWrapper
      overflowY={openModal ? 'hidden' : 'visible'}
      pathname={location.pathname}
    >
      <Header languages={currentLang} layout='home' theme={theme} pathname={location.pathname} />
      <MobileEllipse />
      <Container>{children}</Container>
      {/* <HelperIconImage src={HelperIcon} alt='helper-icon' /> */}
      <Footer languages={currentLang} />
      <BottomLineBox languages={currentLang} layout='home' />
      <Modal />
      <MobileNav languages={currentLang} />
    </RootWrapper>
  );
};

export default HomeLayout;

const RootWrapper = styled('div')(({ theme, overflowY, pathname }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: pathname.includes('/home') && !pathname.includes('/home-test') ? '#12274C' : '#fff',
  overflowY: overflowY ,
  backgroundSize: 'cover'
}))

const MobileEllipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '1442px',
  top: '34px',
  right: 0,
  zIndex: 1,
  background: 'radial-gradient(50% 50% at 50% 50%, #D65140 0%, rgba(214, 81, 64, 0) 99.99%, rgba(52, 168, 83, 0) 100%)',
  opacity: "0.08",
  
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
    width: '1442px'
  }
}))

// const HelperIconImage = styled('img')`
//   width: 80px;
//   height: 80px;
//   bottom: 43px;
//   right: 52px;
//   position: fixed;
//   cursor: pointer;
//   z-Index: 100;
// `

const Container = styled('div')`
  position: relative;
  color: #fff;
  z-index: 10;

  ${'' /* &::-webkit-scrollbar {
    width: 0;
  } */}
`;