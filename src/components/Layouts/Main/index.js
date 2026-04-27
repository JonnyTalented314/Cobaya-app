import React from "react";
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import BottomLineBox from "../../BottomLineBox";
import Modal from "../../Modals";
import SupportSection from "../../Support";
import MobileNav from "../../MobileNav";

// import HelperIcon from '../../../assets/images/icons/icon-helper.png';

const MainLayout = ({ children }) => {
  const location = useLocation()
  const currentLang = useSelector(state => state.languages)
  const openModal = useSelector(state => state.openModal)
  const theme = useSelector(state => state.theme)
  
  return (
    <RootWrapper
      overflowY={openModal ? 'hidden' : 'visible'}
    >
      <Header languages={currentLang} layout='main' theme={theme} pathname={location.pathname} />
      <Container>{children}</Container>
      {(!location.pathname.includes('/solutions') && !location.pathname.includes('/teams')) && (
        <SupportSection />
      )}
      {/* <HelperIconImage src={HelperIcon} alt='helper-icon' /> */}
      <Footer languages={currentLang} />
      <BottomLineBox languages={currentLang} layout='main' />
      <Modal />
      <MobileNav languages={currentLang} />
    </RootWrapper>
  );
};

export default MainLayout;

const RootWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #12274C;
  overflow-y: ${({ overflowY }) => overflowY };
  background-size: cover;
`;

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