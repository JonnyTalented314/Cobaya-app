import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FOOTER_LIST } from "../../constants";

import AppStoreImage from '../../assets/images/footer/app-store-badge-white.svg';
import GooglePlayImage from '../../assets/images/footer/google-play-badge-white.svg';
import ImageBox from "../Image";

export default function Footer({ languages }) {
  const navigate = useNavigate()
  const locale = useSelector(state => state.locale)
  return (
    <Box sx={{
      background: '#12274C',
    }}>
      <Box sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: { xs: '50px', md: '76px' },
        paddingX: '24px'
      }}>
        <Box sx={{
          display: { xs: 'grid', md: 'flex' },
          gridTemplateAreas: { xs: "'auto'", sm: "'auto auto'" },
          gap: { xs: '20px', md: '0' },
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'space-between' }
        }}>
          {FOOTER_LIST[0].map((item => (
            <Box 
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ImageBox 
                width='30px'
                height='30px'
                src={item.icon}
                alt={item.title}
              />
              <Typography 
                variant='semibold'
                sx={{
                  marginLeft: '15px',
                  color: '#fff',
                  fontSize: { xs: '14px', sm: '16px'}
                }}
              >
                {languages[item.title]}
              </Typography>
            </Box>
          )))}
        </Box>
        <Box 
          sx={{
            display: { xs: 'grid', md: 'flex' },
            gridTemplateAreas: { xs: "'auto auto'", sm: "'auto auto auto'" },
            gap: { xs: '20px', md: '0' },
            justifyContent: 'space-between',
            paddingTop: { xs: '50px', sm: '80px' }
          }}
        >
          {FOOTER_LIST[1].map(((item, index) => (
            <Box 
              key={item.title}
              sx={{
                minWidth: { xs: 'auto', sm: '210px', md: 'auto' },
                'a': {
                  textDecoration: 'none'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '10px', sm: '14px'},
                  color: '#D9D9D9',
                  marginBottom: '10px'
                }}
              >
                <strong>{languages[item.title]}</strong>
              </Typography>
              {item.list.map(menu => (
                <Typography
                  key={menu.title}
                  sx={{
                    fontSize: { xs: '10px', sm: '14px'},
                    lineHeight: '30px',
                    color: '#D9D9D9',
                    marginBottom: '2px',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate(item.title === 'Coyaba' ?  `${locale && `/${locale}`}${menu.href}` : `${locale && `/${locale}`}/home-test${item.hash}`)}
                >
                  {languages[menu.title]}
                </Typography>
              ))}
              {index === 0 && (
                <Box sx={{
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  marginTop: '50px',
                }}>
                  <Link href='https://www.apple.com/' target='_blank'>
                    <ImageBox
                      sx={{
                        width: '150px',
                        marginBottom: '20px'
                      }}
                      src={AppStoreImage}
                      alt='app-store'
                    />
                  </Link>
                  <Link href='https://play.google.com/' target='_blank'>
                    <ImageBox
                      sx={{
                        width: '150px',
                        marginBottom: '20px'
                      }}
                      src={GooglePlayImage}
                      alt='google-play'
                    />
                  </Link>
                </Box>
              )}
              {/* {index === (FOOTER_LIST[1].length - 1) && (
                <Box sx={{
                  marginTop: '40px'
                }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', sm: '14px'},
                      color: '#D9D9D9',
                      marginBottom: '10px'
                    }}
                  >
                    <strong>{languages[FOOTER_LIST[2][0].title]}</strong>
                  </Typography>
                  {FOOTER_LIST[2][0].list.map(menu => (
                    <Typography
                      key={menu.title}
                      sx={{
                        fontSize: { xs: '10px', sm: '14px'},
                        lineHeight: '30px',
                        color: '#D9D9D9',
                        marginBottom: '2px',
                        cursor: 'pointer'
                      }}
                      onClick={() => navigate(`${locale && `/${locale}`}${menu.href}`)}
                    >
                      {languages[menu.title]}
                    </Typography>
                  ))}
                </Box>
              )} */}
            </Box>
          )))}
          <Box sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            marginTop: '50px',
          }}>
            <Link href='https://www.apple.com/' target='_blank'>
              <ImageBox
                src={AppStoreImage}
                alt='app-store' 
                sx={{
                  width: '100px',
                  mb: '20px'
                }}
              />
            </Link>
            <Link href='https://play.google.com/' target='_blank'>
              <ImageBox
                src={GooglePlayImage}
                sx={{
                  width: '100px',
                  mb: '20px'
                }}
                alt='google-play' 
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}