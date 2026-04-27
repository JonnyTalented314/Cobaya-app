import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from "../Button";

import { HEADER_MENU } from "../../constants";
import LogoDark from '../../assets/images/logo/logo-dark.svg';
import { useDispatch, useSelector } from "react-redux";
import { openModal, openMobileNav } from "../../store";
import ImageBox from "../Image";

export default function MobileNav({ languages }) {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openNav = useSelector(state => state.openMobileNav)
  const locale = useSelector(state => state.locale)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(openNav)
  }, [openNav])

  const handleClickMenu = (menu) => {
    if (location.pathname !== '/') {
      closeNav()
      if (menu.title === 'Contact Sales') {
        dispatch(
          openModal({
            currentModal: 'CONTACT_SALES',
            modalProps: {}
        }))
      }
    }
  }

  const closeNav = () => {
    setIsOpen(false)
    dispatch(
      openMobileNav(false)
    )
  }

  return (
    <Box
      sx={{
        width: isOpen ? '100%' : 0,
        maxWidth: '100%',
        height: 'auto',
        position: 'fixed',
        top: 0,
        right: 0,
        flexDirection: 'column',
        transition: 'width 0.5s',
        boxShadow: '-5px -1px 10px -2px rgba(0,0,0,.3)',
        maxHeight: '590px',
        zIndex: '99999',
        overflow: 'auto',
        background: '#fff'
      }}
    >
      <Box
        sx={{
          padding: '35px 25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center',
            mb: '40px'
          }}
        >
          <ImageBox 
            src={LogoDark} 
            sx={{
              width: { sm: '145px' },
              height: { xs: '40px', sm: '42px' },
            }}
            alt='logo-dark' 
          />
          <CloseIcon
            onClick={() => closeNav()}
            sx={{
              width: '30px',
              height: '30px',
              color: '#12274',
              cursor: 'pointer'
            }}
          />
        </Box>
        <Stack
          direction={'column'}
          spacing={'36px'}
          sx={{
            'a': {
              textDecoration: 'none'
            }
          }}
        >
          {HEADER_MENU.map(menu => (
            <Link
              to={`${locale && `/${locale}`}/${menu.href}`}
              key={menu.title}
              onClick={() => handleClickMenu(menu)}
            >
              <Typography
                sx={{
                  size: '18px',
                  fontWeight: 700,
                  color: '#12274C'
                }}
              >
                <strong>{languages[menu.title]}</strong>
              </Typography>
            </Link>
          ))}
        </Stack>
        <Stack direction={{ xs: "column", sm: 'row' }} spacing={'23px'} alignItems='center' mt='40px'>
          <CustomButton
            variant="contained"
            bgColor='#12274C'
            sx={{
              width: '100%',
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
          <CustomButton
            variant="contained"
            bgColor='#8254A9'
            sx={{
              width: '100%'
            }}
            onClick={() => navigate(`${locale && `/${locale}`}/getstarted`)}
          >
            {languages['Get Started']}
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  )
}