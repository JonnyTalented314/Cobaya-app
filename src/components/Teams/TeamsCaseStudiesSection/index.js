import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Box, Grid, Stack } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButton from "../../Button";
import ImageBox from "../../Image";
import ColorText from "../../ColorText";

import { HOME_CASE_STUDIES_FOR_ALL } from '../../../constants'
import CaseImage from '../../../assets/images/home/image-case-study.png'
import CaseImageMobile from '../../../assets/images/home/image-case-study-mobile.png'

export default function TeamsCaseStudiesSection({ activeColor }) {
  // const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  // const MENU = xs ? CASE_STUDIES_MENU : HOME_CASE_STUDIES_FOR_ALL
  const [selectedMenu, setSelectedMenu] = useState(HOME_CASE_STUDIES_FOR_ALL[0])

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', xxl: '1920px' },
        minHeight: { lg: '900px' },
        margin: '0 auto'
      }}
    >
      <ImageBox
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'absolute',
          top: '580px',
          right: { xs: '20px', xl: '180px' },
          maxWidth: '451px',
          zIndex: 0
        }}
        src={CaseImage}
        alt='image-case-study' 
      />
      <Container sx={{
        padding: { xs: '20px 20px 34px', sm: '30px' }
      }}>
        <Typography
          variant="semibold"
          sx={{
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}
        >
          {languages['Case Study']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: { xs: '30px' }
          }}
        >
          <strong>
            <ColorText color={activeColor}>{`${languages['Whatever your goals']} `}</ColorText>
            {`${languages['Coyaba will help you to achieve them']}`}
          </strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '25px', sm: '32px' } ,
          }}
        >
          <strong>{languages['Please see examples of use cases below that showcases how Coyaba makes your life better whatever you do']}</strong>
        </Typography>
        <Box sx={{
          margin: { xs: '30px 0 0', lg: '60px 0 0'}
        }}>
          <Grid container columnSpacing={{ xs: 3, md: '0px'}}>
            <Grid item xs={12} lg={5}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Stack
                  direction={{ xs: 'row', lg: 'column' }}
                  spacing={{ xs: '60px', lg: '0px' }}
                  sx={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                  }}
                >
                  {HOME_CASE_STUDIES_FOR_ALL.map((menu => (
                    <Box
                      key={menu.title}
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', lg: 'row' },
                        alignItems: 'center',
                        padding: { xs: '0px 7px', lg: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          background: selectedMenu.title === menu.title ? activeColor : 'transparent',
                          width: { xs: '100%', lg: '7px' },
                          height: { xs: '5px', lg: '40px' },
                          borderRadius: '10px'
                        }}
                      />
                      <Typography
                        key={menu.title}
                        variant={selectedMenu.title === menu.title ? 'bold' : ''}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: selectedMenu.title === menu.title ? { xs: '20px', sm: '24px' } : { xs: '18px', sm: '20px' },
                          color: selectedMenu.title === menu.title ? activeColor : '#97A5C1',
                          lineHeight: '40px',
                          padding: { xs: '7px 0px', lg: '10px 20px 10px 28px' },
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',

                          '&:hover': {
                            color: activeColor,
                          }
                        }}
                        onClick={() => setSelectedMenu(menu)}
                      >
                        {languages[menu.title]}
                      </Typography>
                    </Box>
                  )))}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginTop: { xs: '20px', lg: 0 },
                  padding: { xs: '10px 0 24px', lg: '10px 0 40px'},
                  minHeight: { lg: '420px' },
                  maxWidth: { lg: '615px' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#12274C',
                    borderRadius: '10px',
                    padding: { xs: '12px 0', sm: '0 10px 10px 0' }
                  }}
                >
                  <Typography
                    variant='semibold'
                    sx={{
                      color: activeColor,
                      fontSize: { xs: '18px', sm: '20px' },
                      lineHeight: '25px',
                      marginBottom: '30px'
                    }}
                  >
                    {languages['Consolidate all to-do tasks for your projects and share them with your internal teams or suppliers and clients.']}
                  </Typography>
                  {/* <Ul> */}
                  {selectedMenu.description.map(((content, idx) => (
                    <Typography 
                      key={'case-desc' + idx}
                      sx={{
                        color: '#fff',
                        fontSize: { xs: '16px', sm: '20px' },
                        lineHeight: '25px'
                      }}
                    >
                      {languages[content]}
                    </Typography>
                  )))}
                  {/* </Ul> */}
                </Box>
                <ImageBox
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    marginTop: '20px'
                  }}
                  src={CaseImageMobile}
                  alt='case-img-mobile'
                />
                <Box sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  margin: { xs: '20px 0 0px', lg: '90px 0 0 150px' }
                }}>
                  <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                    <CustomButton
                      variant='outlined'
                      bgColor={activeColor}
                      sx={{
                        background: '#fff',
                        width: { xs: '150px', sm: '200px' },
                        border: `1px solid ${activeColor}`,
                      }}
                    >
                      {languages['Get Started']}
                    </CustomButton>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

// const Ul = styled('ul')(({ theme }) => ({
//   listStyleType: 'disc',
//   margin: 0,

//   [theme.breakpoints.down('sm')]: {
//     paddingLeft: '24px',

//     'li': {
//       color: theme.palette.primary.white
//     },
//   },
//   [theme.breakpoints.up('sm')]: {
//     'li': {
//       color: theme.palette.primary.white
//     },
//   }
// }))