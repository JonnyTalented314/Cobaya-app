import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { FiChevronDown } from "react-icons/fi";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material'
import CustomButton from '../../components/Button';
import StickyMenuSidebar from '../../components/StickyMenuSidebar';
import HomeMeaningSection from '../../components/Home/Meaning';
import HomeToolboxSection from '../../components/Home/Toolbox';
import HomeInteractionSection from '../../components/Home/Interactions';
import HomeConnectorSection from '../../components/Home/Connectors';
import HomeBuildForEveryOneSection from '../../components/Home/BuiltForEveryone';
import HomeCaseStudiesSection from '../../components/Home/CaseStudies';
import SupportSection from '../../components/Support';

import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { HOME_SIDEBAR_MENU } from '../../constants';
import { setHeaderTheme } from '../../store'; 

import BannerImg from '../../assets/images/backgrounds/banner.svg';
import EllipseYellow2 from '../../assets/images/backgrounds/ellipse-yellow-2.svg';

export default function Home() {
  useDocumentTitle('Coyaba™ | Your Efficiency OS™ for a smarter and safer work environment')

  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const dispatch = useDispatch()
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)
  const meaningRef = useRef(null)
  const toolboxRef = useRef(null)
  const interactionsRef = useRef(null)
  const connectorsRef = useRef(null)
  const buildForEveryoneRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const supportRef = useRef(null)

  const SCROLL_REFS = {
    meaning: meaningRef,
    toolbox: toolboxRef,
    interactions: interactionsRef,
    connectors: connectorsRef,
    buildForEveryOne: buildForEveryoneRef,
    caseStudies: caseStudiesRef,
    support: supportRef
  }

  const [currentComponent, setCurrentComponent] = useState(HOME_SIDEBAR_MENU[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= meaningRef.current.offsetTop && scrollY < toolboxRef.current.offsetTop - 60) {
        setCurrentComponent(HOME_SIDEBAR_MENU[0])
      } else if (scrollY >= toolboxRef.current.offsetTop - 60 && scrollY < interactionsRef.current.offsetTop - 100) {
        setCurrentComponent(HOME_SIDEBAR_MENU[1])
      } else if (scrollY >= interactionsRef.current.offsetTop - 100 && scrollY < connectorsRef.current.offsetTop - 130) {
        setCurrentComponent(HOME_SIDEBAR_MENU[2])
      } else if (scrollY >= connectorsRef.current.offsetTop - 130 && scrollY < buildForEveryoneRef.current.offsetTop - 180) {
        setCurrentComponent(HOME_SIDEBAR_MENU[3])
      } else if (scrollY >= buildForEveryoneRef.current.offsetTop - 180 && scrollY < caseStudiesRef.current.offsetTop - 200) {
        setCurrentComponent(HOME_SIDEBAR_MENU[4])
      } else if (scrollY >= caseStudiesRef.current.offsetTop - 200 && scrollY < supportRef.current.offsetTop - 250) {
        setCurrentComponent(HOME_SIDEBAR_MENU[5])
      } else if (scrollY >= supportRef.current.offsetTop - 250) {
        setCurrentComponent(HOME_SIDEBAR_MENU[6])
      }
      
      let headerBg = 'dark';
      if (scrollY >= meaningRef.current.offsetTop && scrollY < toolboxRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= toolboxRef.current.offsetTop && scrollY < interactionsRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= interactionsRef.current.offsetTop && scrollY < connectorsRef.current.offsetTop) {
        headerBg = 'light'
      } else if (scrollY >= connectorsRef.current.offsetTop && scrollY < buildForEveryoneRef.current.offsetTop) {
        headerBg = 'dark'
      } else if (scrollY >= buildForEveryoneRef.current.offsetTop && scrollY < caseStudiesRef.current.offsetTop) {
        headerBg = 'light'
      } else if (scrollY >= caseStudiesRef.current.offsetTop && scrollY < supportRef.current.offsetTop) {
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

  return (
    <PageWrapper>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <BannerImage src={BannerImg} alt="banner-image" />
        <YellowEllipseImage src={EllipseYellow2} alt='yellow-ellipse' />
        <Container sx={{
          height: 'calc(100vh - 50px)',
          minHeight: '700px',
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          position: 'relative',
          zIndex: 10
        }}>
          <Box
            sx={{
              marginTop: '16%',
              maxWidth: { sm: '764px' },
              flexDirection: 'column',
            }}
          >
            <Typography 
              variant="h5"
              sx={{
                fontSize: { xs: '24px',  sm: '40px' },
                textAlign: { xs: 'center', sm: 'left' },
                lineHeight: { xs: '29px', sm: '49px' },
                color: '#FFFFFF'
              }}
            >
              {`${languages['Your']} `}
              <BlueTitleText>
                {languages['Efficiency OS']}
                <SupText>TM</SupText>
              </BlueTitleText>
              {` ${languages['for a']} `}<br />
              <BlueTitleText>{`${languages['smarter']} `} </BlueTitleText>
              {`${languages['and']} `}
              <BlueTitleText>{`${languages['safer']} `}</BlueTitleText>
              {`${languages['work environment.']} `}
            </Typography>
            <Typography
              sx={{
                maxWidth: { sm: '597px' },
                fontSize: { xs: '14px', sm: '18px' },
                textAlign: { xs: 'center', sm: 'left' },
                lineHeight: { xs: '20px', sm: '22px' },
                marginTop: { xs: '28px', sm: '10px' }
              }}
            >
              {languages['Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.']}
            </Typography>
            <Typography
              variant='semibold'
              sx={{
                display: { xs: 'none', sm: 'block'  },
                lineHeight: '55px',
                fontSize: { xs: '20px', sm: '30px' },
                marginTop: { xs: '80px', sm: '110px' }
              }}
            >
              {languages['Tell us what are looking for?']}
            </Typography>
            <Typography
              variant='semibold'
              sx={{
                display: { xs: 'none', sm: 'flex'  },
                alignItems: 'center',
                fontSize: { xs: '20px', sm: '30px' },
              }}
            >
              {`${languages['You need to']} `}
              <PurpleText>
                <span>{languages['manage projects']}</span>
                <span style={{ margin: '8px 0 0 12px' }}>
                  <FiChevronDown size={24} />
                </span>
              </PurpleText>
            </Typography>
            <Box
              sx={{
                width: { xs: '100%', sm: 'auto' },
                display: { xs: 'flex', sm: 'inline-block' },
                justifyContent: 'center',
                mt: { xs: '40px', sm: '60px' },
                ml: { sm: '120px' },
              }}
            >
              <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                <CustomButton
                  variant='contained'
                  bgColor={{ xs:'#4285F4', sm: '#23365F' }}
                  sx={{
                    width: { xs: '150px', sm: '200px' },
                    border: { xs: '2px solid #4285F4', sm: '2px solid #23365F' },

                    '&:hover': {
                      border: '2px solid #4285F4',
                      background: '#4285F4'
                    },
                  }}
                >
                  {languages['Get Started']}
                </CustomButton>

              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box sx={{
          position: 'sticky',
          top: 115,
          left: '49px',
          marginLeft: '49px',
          display: { xs: 'none', xl: 'inline-block' },
          zIndex: 150,
        }}>
          <StickyMenuSidebar
            items={HOME_SIDEBAR_MENU}
            current={currentComponent}
            setCurrent={setCurrentComponent}
          />
        </Box>
        <Box sx={{
          marginTop: { xl: '-295px' }
        }}>
          {HOME_SIDEBAR_MENU.map(menu => (
            <Box
              key={menu.title}
              id={menu.id}
              ref={SCROLL_REFS[menu.id]}
              sx={{
                width: '100%',
                minHeight: { md: menu.id !== 'support' && '700px' },
                background: menu.bgColor,
                scrollMarginTop: '99px',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              {menu.title === 'Meaning' && <HomeMeaningSection />}
              {menu.title === 'Toolbox' && <HomeToolboxSection />}
              {menu.title === 'Interactions' && <HomeInteractionSection />}
              {menu.title === 'Connectors' && <HomeConnectorSection />}
              {menu.title === 'Built for everyone' && <HomeBuildForEveryOneSection />}
              {menu.title === 'Case Studies' && <HomeCaseStudiesSection />}
              {menu.title === 'Support' && <SupportSection />}
            </Box>
          ))}
        </Box>
      </Box>
    </PageWrapper>
  )
}

const PageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const BlueTitleText = styled('span')`
  color: #4285F4;
`;

const PurpleText = styled('span')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  marginLeft: '8px',
  fontSize: '20px',
  borderBottom: '2px dashed secondary',
  borderStyle: 'none none dashed none',
  fontFamily: 'Gilroy Semibold',
  color: '#8254A9',

  [theme.breakpoints.up('sm')]: {
    fontSize: '30px'
  },
}))

const SupText = styled('sup')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '25px'
  },
}))

const BannerImage = styled('img')(({ theme }) => ({
  width: 'auto',
  objectFit: 'cover',
  position: 'absolute',
  right: 0,
  zIndex: 1,

  [theme.breakpoints.down('sm')]: {
    height: '325px',
    bottom: '5%',
  },

  [theme.breakpoints.up('sm')]: {
    height: '600px',
    bottom: '5%',
  },
  [theme.breakpoints.up('md')]: {
    height: '73vh',
    top: '100px',
  }
}))

const YellowEllipseImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 0,
  height: '95vh',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}))