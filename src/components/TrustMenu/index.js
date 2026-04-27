import React, { useState, useRef } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';
// import { FaListUl } from 'react-icons/fa'
// import { FaListUl, FaCircle } from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ITEMS = [
  {
    title: 'Privacy Policy',
    href: '/privacy',
    color: '#fff'
  },
  {
    title: 'Cookie Policy',
    href: '/cookie',
    color: '#fff'
  },
  {
    title: 'Terms of Use',
    href: '/terms',
    color: '#fff'
  }
]

const TrustMenu = props => {
  const menuRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const locale = useSelector(state => state.locale)
  const { languages } = props;

  const [openMenu, setOpenMenu] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [menuItems, setMenuItems] = useState(ITEMS)

  useEffect(() => {
    if (selectedMenu) {
      const tempItems = [...ITEMS]
  
      tempItems.forEach(item => {
        if (item.title === selectedMenu.title) {
          item.color = 'white'
        } else {
          item.color = 'primary.darkLight'
        }
      })
      setMenuItems(tempItems)
    } else {
      const tempItems = [...ITEMS]

      tempItems.forEach(item => {
        if (location.pathname.includes(item.href)) {
          item.color = 'white'
        } else {
          item.color = 'primary.darkLight'
        }
      })
      setMenuItems(tempItems)
    }
    window.scrollTo(0, 0);
  }, [selectedMenu, location])

  return (
    <Box
      sx={{
        position: 'fixed', 
        left: {xs: -50,  sm: -40 }, 
        top: { xs: 300, sm: 400 },
        zIndex: 10
      }}
    >
      <Button
        ref={menuRef}
        sx={{
          transform: "rotate(-90deg)",
          color: '#fff',
          backgroundColor: '#284C88',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: "0px 0px 20px 20px ",
          fontSize: '20px',
          lineHeight: '25px',
          width: '131px',
          height: '52px',
          padding: '0',

          '&:hover': {
            backgroundColor: '#12274C'
          },
          
          '&:active': {
            backgroundColor: '#12274C',
            color: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        }}
        onClick={() => {
          setOpenMenu(true)
        }}
        // endIcon={}
        variant="contained"
        size="large"
      >
        <strong>{languages['GLOSSARY']}</strong>
        {/* <FaListUl size={20}/> */}
      </Button>
      <Popover
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorEl={menuRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'left', top: 200, left: 400 }}
        transformOrigin={{ vertical: 'top', horizontal: 'left', }}
        sx={{
          left: '0 !important',
          borderRadius: '0px 20px 20px 0px',
          '.MuiPaper-root': {
            backgroundColor: '#12274C',
            left: '0 !important',
            borderRadius: '0px 20px 20px 0px',
          }
        }}
      >
        <Box sx={{
          width: '166px',
          minHeight: '159px',
          backgroundColor: 'primary.dark',
          padding: '19px 12px 12px'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <Typography sx={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#fff'
            }}>
              <strong>{languages['GLOSSARY']}</strong>
            </Typography>
            <CloseIcon
              sx={{
                fontSize: '24px',
                cursor: 'pointer',
                marginLeft: '30px',
                color: '#fff'
              }}
              onClick={() => setOpenMenu(false)}
            />
          </Box>
          {menuItems.map((item => (
            <Box
              key={item.title}
              sx={{
                pl: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {/* {location.pathname === item.href && (
                <Box mr={2} display='inherit'>
                  <FaCircle size={20} marginRight={5} /> 
                </Box>
              )} */}
              <Typography
                variant='semibold'
                sx={{
                  fontSize: '16px',
                  lineHeight: locale ? '20px' : '40px',
                  color: item.color,
                  paddingY: locale ? '5px' : '0px',
                  overflowWrap: 'anywhere',

                  '&:hover': {
                    color: item.color === '#fff'
                  }
                }}
                onMouseEnter={() => setSelectedMenu(item)}
                onMouseLeave={() => setSelectedMenu(null)}
                // onMouseDown={() => setSelectedMenu(item.title)}
                // onMouseUp={() => setSelectedMenu(null)}
                onClick={() => navigate(`${locale && `/${locale}`}${item.href}`)}
              >
                {languages[item.title]}
              </Typography>
            </Box>
          )))}
        </Box>
      </Popover>
    </Box>
  );
};

export default TrustMenu;
