import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Popover, Typography, Box } from '@mui/material';

import ImageBox from '../Image';
// import IconWeb from '../Icons/IconWeb';

import { setLocale } from '../../store';

import FlagUK from '../../assets/images/flags/001-united-kingdom.svg'
import FlagFrance from '../../assets/images/flags/003-france.svg'
import FlagGerman from '../../assets/images/flags/002-germany.svg'
import FlagItaly from '../../assets/images/flags/004-italy.svg'
import FlagSpain from '../../assets/images/flags/005-spain.svg'
import FlagLithuania from '../../assets/images/flags/006-lithuania.svg'

const LanguagesList = [
  {
    label: 'English',
    code: 'en',
    icon: FlagUK,
  },
  {
    label: 'French',
    code: 'fr',
    icon: FlagFrance,
  },
  {
    label: 'German',
    code: 'de',
    icon: FlagGerman,
  },
  {
    label: 'Italian',
    code: 'it',
    icon: FlagItaly,
  },
  {
    label: 'Spanish',
    code: 'sp',
    icon: FlagSpain,
  },
  {
    label: 'Lithuanian',
    code: 'lt',
    icon: FlagLithuania,
  }
]

const LanguageDropdown = props => {
  const menuRef = useRef()
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { locale: paramLocale } = useParams()

  const { languages } = props;
  const locale = useSelector(state => state.locale)

  const [openMenu, setOpenMenu] = useState(false)
  const [selectedLang, setSelectedLang] = useState(LanguagesList[0])
  const [menuItems, setMenuItems] = useState(LanguagesList)

  useEffect(() => {
    dispatch(
      setLocale({
        locale: paramLocale ? paramLocale : 'en',
    }))
  }, [paramLocale, dispatch])

  useEffect(() => {
    const resLocale = locale ? locale : 'en'
    const tempItems = [...LanguagesList]

    tempItems.forEach(item => {
      if (item.code === resLocale) {
        item.active = true
        setSelectedLang(item)
      } else {
        item.active = false
      }
    })
    setMenuItems(tempItems)
  }, [locale])

  const handleClickMenu = (item) => {
    dispatch(
      setLocale({
        locale: item.code,
    }))
    const newLocale = item.code === 'en' ? '' : item.code

    if (paramLocale) {
      const pathname = location.pathname.split(`/${paramLocale}`)
      
      if (item.code === 'en') {
        navigate(`${pathname[1]}`)
      } else {
        navigate(`/${newLocale}${pathname[1]}`)
      }
    } else {
      if (item.code !== 'en') {
        navigate(`/${newLocale}${location.pathname}`)
      }
    }
  }

  return (
    <Box
      sx={{
        zIndex: 10,
        marginTop: '5px'
      }}
    >
      <Box
        ref={menuRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '50px',
          pt: '10px'
        }}
        onMouseEnter={() => setOpenMenu(true)}
        // onClick={() => {
        //   setOpenMenu(true)
        // }}
        variant="contained"
      >
        <ImageBox 
          src={selectedLang?.icon}
          alt={selectedLang.label}
          width='30px'
          height='30px'
        />
        <Box 
          sx={{
            background: openMenu ? '#445881' : 'transparent',
            width: '35px',
            height: '4px',
            borderRadius: '4px',
            marginTop: '6px'
          }}
        />
      </Box>
      <Popover
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorEl={menuRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right', }}
        sx={{
          borderRadius: '0px 20px 20px 0px',
          '.MuiPaper-root': {
            backgroundColor: '#445881 !important',
            // top: '0 !important',
            borderRadius: '10px',
          }
        }}
      >
        <Box sx={{
          width: '149px',
          backgroundColor: '#445881',
          padding: '10px 12px 12px 20px'
        }}>
          {menuItems.map((item => (
            <Box
              key={item.code}
              sx={{
                padding: '6px 0px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleClickMenu(item)}
            >
              <ImageBox
                src={item.icon}
                sx={{
                  width: '20px',
                  height: '20px'
                }}
              />
              <Typography
                variant={item.active ? 'semibold' : ''}
                sx={{
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#fff',
                  marginLeft: '10px',

                  '&:hover': {
                    color: '#fff'
                  }
                }}
              >
                {languages[item.label]}
              </Typography>
            </Box>
          )))}
        </Box>
      </Popover>
    </Box>
  );
};

export default LanguageDropdown;
