import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";

import CustomButton from '../Button';
import HeaderDropdown from '../HeaderDropdown';
import LanguageDropdown from '../LanguageDropdown';
// import IconMobileMenu from '../Icons/IconMobileMenu';

// import { openModal, openMobileNav, setMetaData } from '../../store';
import { openModal, setMetaData } from '../../store';

import { HEADER_MENU } from '../../constants';
import LogoLight from '../../assets/images/logo/logo-light.svg';
import LogoDark from '../../assets/images/logo/logo-dark.svg';
import ImageBox from '../Image';

export default function Header({ theme, languages = {}, layout }) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const headerTheme = useSelector(state => state.headerTheme)
  const locale = useSelector(state => state.locale)
  
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [themeState, setThemeState] = useState(null)
  const [hoveredThemeState, setHoveredThemeState] = useState(null)
  const [isHover, setIsHover] = useState(false)
  const [isScrollHeader, setIsScrollHeader] = useState(false)

  useEffect(() => {
    dispatch(
      setMetaData({
        themeColor: hoveredThemeState === 'light' ? '#fff' : '#12274C',
    }))
  }, [dispatch, hoveredThemeState])

  useEffect(() => {
    if (pathname.includes('/terms') || 
      pathname.includes('/privacy') || 
      pathname.includes('/cookie') || 
      pathname.includes('/request-demo') ||
      pathname.includes('/getstarted') ||
      pathname.includes('/home-test')
    ) {
      setThemeState('light')
      setHoveredThemeState('light')
    } else {
      setThemeState('dark')
      setHoveredThemeState(isHover ? 'light' : 'dark')
    }
  }, [pathname, isHover])

  useEffect(() => {
    if (headerTheme) setHoveredThemeState(headerTheme)
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrollHeader(scrollY > 0)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu.title)
    if ((menu.title === 'Functions' || menu.title === 'Solutions') && pathname !== '/') {
      setHoveredThemeState('light')
      setIsHover(true)
    } else {
      setIsHover(false)
      setHoveredThemeState(themeState)
    }
  }

  const handleMouseLeave = () => {
    setHoveredMenu(null)
    setHoveredThemeState(themeState)
    setIsHover(false)
  }

  const handleClickMenu = (menu) => {
    if (isHover) {
      handleMouseLeave()
    } else {
      handleMouseEnter(menu)
    }

    if (pathname !== '/') {
      if (menu.title === 'Contact Sales') {
        dispatch(
          openModal({
            currentModal: 'CONTACT_SALES',
            modalProps: {}
        }))
      }
    }
  }

  // const handleClickMobileMenu = () => {
  //   dispatch(
  //     openMobileNav(true)
  //   )
  // }

  return (
    <HeaderWrapper
      open={isHover}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        position: 'sticky',
        top: '0',
        height: { xs: '71px', sm: '100px' },
        background: hoveredThemeState === 'light' ? '#fff' : '#12274C',
        boxShadow: isScrollHeader ? '1px 0px 45px rgba(0,0,0,.15)' : '',
        transition: 'background 0.3s 0.2s',
      }}
      // onMouseLeave={handleMouseLeave}
    >
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ImageBox 
          sx={{
            width: { sm: '170px' },
            height: { xs: '40px', sm: '60px' },
          }}
          src={hoveredThemeState === 'light' ? LogoDark : LogoLight}
          alt={hoveredThemeState === 'light' ? 'logo-dark' : 'logo-light'}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MenuWrapper
            direction="row"
            spacing={'50px'}
            layout={layout}
            pathname={pathname}
            sx={{
              marginRight: '50px'
            }}
          >
            {HEADER_MENU.map((menu, idx) => (
              <Stack
                direction={'row'}
                spacing={'7px'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none !important',
                  whiteSpace: 'nowrap',
                  // paddingY: '40px 0 !important',
                  // borderBottom: hoveredMenu === menu.title && '8px solid #12274C'
                }}
                component={Link}
                to={pathname !== '/' ? menu?.href : '#'}
                key={`${menu.name}-${idx}`}
                // onMouseEnter={() => handleMouseEnter(menu)}
                onClick={() => handleClickMenu(menu)}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: 'flex',
                    fontSize: '18px',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: hoveredThemeState === 'light' ? '#12274C' : '#fff',
                    transition: 'color 0.2s 0.1s',
                  }}
                >
                  <strong>{languages[menu.title]}</strong>
                  {menu.isDropdown && (
                    <Box
                      sx={{
                        display: 'inherit',
                        transform: menu.title === hoveredMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s 0.2s',
                      }}
                    >
                      <FiChevronDown size={16} />
                    </Box>
                  )}
                </Typography>
              </Stack>
            ))}
          </MenuWrapper>
          <Stack direction="row" spacing={{ sm: '23px' }} alignItems='center'>
            <CustomButton
              variant="contained"
              bgColor='#12274C'
              sx={{
                minWidth: 'auto',
                width: { xs: '100px', sm: '137px' }, 
                display: { xs: layout !== 'landing' && 'none', sm: 'flex' },
                border: '1px solid #3F557B',

                '&:hover': {
                  border: '1px solid #4285F4',
                  background: '#4285F4'
                },
              }}
              onClick={() => window.open('https://my.coyaba.app/welcomeback', '_blank')}
            >
              {languages['Log in']}
            </CustomButton>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant="contained"
                bgColor='#8254A9'
                sx={{
                  minWidth: 'auto',
                  width: { xs: '120px', sm: '137px' }, 
                  display: { xs: layout === 'landing' && 'none', sm: 'flex' },
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
            <Box
              sx={{
                display: { xs: 'none', sm: 'inherit' },
                paddingTop: '5px',
                marginLeft: '23px'
              }}
            >
              <LanguageDropdown languages={languages} />
            </Box>
            {/* {pathname !== '/' && (
              <Box
                color={hoveredThemeState === 'light' ? '#12274C' : 'white'}
                display={{ md: 'none' }}
                ml={'32px'}
                onClick={handleClickMobileMenu}
              >
                <IconMobileMenu size='25' fill={hoveredThemeState === 'light' ? '#12274C' : 'white'} />
              </Box>
            )} */}
          </Stack>
        </Box>
      </Container>
      <HeaderDropdown
        menu={hoveredMenu}
        languages={languages}
        open={hoveredMenu && isHover}
        onClose={handleMouseLeave}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled(Box)(({ theme, open }) => ({

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    inlineSize: '100%',
    blockSize: '1px',
    zIndex: '-1',
    opacity: open ? 1 : 0,
    transformOrigin: 'center top',
    transform: open ? 'scaleY(calc(660))' : 'scaleY(0)',
    transition: 'transform 0.3s 0.2s, opacity 0.4s 0.1s',
  }
}));

const MenuWrapper = styled(Stack)(({ theme, layout, pathname }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: pathname === '/' ? 'blur(2px)' : '',
  },
}))