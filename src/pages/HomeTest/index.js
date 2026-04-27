import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  useMediaQuery,
} from '@mui/material'

import HomeTopSection from '../../components/HomeTest/TopSection';
import HomeMeaningSection from '../../components/Meaning';
import HomeToolboxSection from '../../components/HomeTest/Toolkit';
import HomeInteractionSection from '../../components/HomeTest/Interactions';
import HomeConnectorSection from '../../components/Home/Connectors';
import HomeForAllSection from '../../components/HomeTest/ForAll';
import HomeCaseStudiesSection from '../../components/HomeTest/CaseStudy';
import RequestDemoSection from '../../components/RequestDemo';

import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { HOME_SIDEBAR_MENU_2 } from '../../constants';
import { setHeaderTheme } from '../../store'; 

import EllipseYellow2 from '../../assets/images/backgrounds/ellipse-yellow-2.svg';

export default function Home() {
  useDocumentTitle('Coyaba™ | Your Efficiency OS™ for a smarter and safer work environment')

  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const dispatch = useDispatch()
  const location = useLocation()
  
  const topRef = useRef(null)
  const meaningRef = useRef(null)
  const toolboxRef = useRef(null)
  const interactionsRef = useRef(null)
  const connectorsRef = useRef(null)
  const coyabaForAllRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const supportRef = useRef(null)

  const SCROLL_REFS = {
    meaning: meaningRef,
    toolkit: toolboxRef,
    interactions: interactionsRef,
    connectors: connectorsRef,
    coyabaForAll: coyabaForAllRef,
    caseStudies: caseStudiesRef,
    support: supportRef
  }

  // const [currentComponent, setCurrentComponent] = useState(HOME_SIDEBAR_MENU_2[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // if (scrollY >= meaningRef.current.offsetTop && scrollY < toolboxRef.current.offsetTop - 60) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[0])
      // } else if (scrollY >= toolboxRef.current.offsetTop - 60 && scrollY < interactionsRef.current.offsetTop - 100) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[1])
      // } else if (scrollY >= interactionsRef.current.offsetTop - 100 && scrollY < connectorsRef.current.offsetTop - 130) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[2])
      // } else if (scrollY >= connectorsRef.current.offsetTop - 130 && scrollY < coyabaForAllRef.current.offsetTop - 180) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[3])
      // } else if (scrollY >= coyabaForAllRef.current.offsetTop - 180 && scrollY < caseStudiesRef.current.offsetTop - 200) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[4])
      // } else if (scrollY >= caseStudiesRef.current.offsetTop - 200 && scrollY < supportRef.current.offsetTop - 250) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[5])
      // } else if (scrollY >= supportRef.current.offsetTop - 250) {
      //   setCurrentComponent(HOME_SIDEBAR_MENU_2[6])
      // }
      
      let headerBg = 'light';
      if (scrollY >= toolboxRef.current.offsetTop && scrollY < connectorsRef.current.offsetTop) {
        headerBg = 'light'
      } else if (scrollY >= connectorsRef.current.offsetTop && scrollY < interactionsRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= interactionsRef.current.offsetTop && scrollY < coyabaForAllRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= coyabaForAllRef.current.offsetTop && scrollY < caseStudiesRef.current.offsetTop) {
        headerBg = 'light'
      } else if (scrollY >= caseStudiesRef.current.offsetTop && scrollY < supportRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= meaningRef.current.offsetTop && scrollY < toolboxRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= supportRef.current.offsetTop) {
        headerBg = 'light'
      }
      dispatch(
        setHeaderTheme(headerBg)
      )
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, xs]);

  useEffect(() => {
    if (location.hash) {
      if (location.hash === '#toolkit') {
        toolboxRef.current.scrollIntoView()
      } else if (location.hash === '#coyabaForAll') {
        coyabaForAllRef.current.scrollIntoView()
      } else if (location.hash === '#caseStudies') {
        caseStudiesRef.current.scrollIntoView()
      }
    }
  }, [location.hash])

  return (
    <PageWrapper>
      <Box
        ref={topRef}
        sx={{
          position: 'relative'
        }}
      >
        <HomeTopSection />
        <YellowEllipseImage src={EllipseYellow2} alt='yellow-ellipse' />
      </Box>
      {HOME_SIDEBAR_MENU_2.map(menu => (
        <Box
          key={menu.id}
          id={menu.id}
          ref={SCROLL_REFS[menu.id]}
          sx={{
            width: '100%',
            minHeight: { md: menu.id !== 'support' && menu.height },
            background: menu.bgColor,
            scrollMarginTop: '99px',
            position: 'relative'
          }}
        >
          {menu.title === 'Toolkit' && <HomeToolboxSection />}
          {menu.title === 'Connectors' && <HomeConnectorSection activeColor='#284C88' padding='30px' isSectionTitle />}
          {menu.title === 'Interactions' && <HomeInteractionSection />}
          {menu.title === 'Coyaba for all' && <HomeForAllSection />}
          {menu.title === 'Case Studies' && <HomeCaseStudiesSection />}
          {menu.title === 'Meaning' && <HomeMeaningSection />}
          {menu.title === 'Support' && <RequestDemoSection />}
        </Box>
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const YellowEllipseImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: '0%',
  right: 0,
  zIndex: 0,
  width: '780px',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}))
