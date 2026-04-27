import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButton from "../../Button";
import ImageBox from "../../Image";
import ColorText from "../../ColorText";

import { CASE_STUDIES_MENU } from '../../../constants'
import CaseImage from '../../../assets/images/home/image-case-study.png'
import CaseImageMobile from '../../../assets/images/home/image-case-study-mobile.png'

export default function HomeCaseStudiesSection() {
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(CASE_STUDIES_MENU[0])

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', xxl: '1920px' },
        margin: '0 auto'
      }}
    >
      <ImageBox
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'absolute',
          top: {sm: '640px', xl: '580px' },
          right: { xs: '20px', sm: '40px', xl: '140px', xxl: '180px' },
          maxWidth: '400px',
          width: '21%',
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
            color: '#12274C',
            marginBottom: '10px'
          }}
        >
          {languages['Case Study']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#12274C',
            marginBottom: { xs: '30px' }
          }}
        >
          <strong>
            <ColorText color='#284C88'>{`${languages['Whatever your goals']} `}</ColorText>
            {`${languages['Coyaba will help you to achieve them']}`}
          </strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '25px', sm: '32px' } ,
            color: '#12274C',
            marginBottom: '30px'
          }}
        >
          <strong>{languages['Please see examples of use cases below that showcases how Coyaba makes your life better whatever you do']}</strong>
        </Typography>
        <Box sx={{
          marginBottom: { xs: 0 }
        }}>
          <Grid container columnSpacing={{ xs: 3, md: '20px'}}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Stack
                  direction={{ xs: 'row', sm: 'column' }}
                  spacing={{ xs: '60px', sm: '0px' }}
                  sx={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    paddingY: '10px'
                  }}
                >
                  {CASE_STUDIES_MENU.map((menu => (
                    <Box
                      key={menu.title}
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {selectedMenu.title === menu.title && (
                        <ArrowForwardIcon
                          sx={{
                            display: 'inherit',
                            marginRight: '8px',
                            transition: 'margin 0.1s 0.1s',
                            color: '#284C88',
                            fontSize: '20px'
                          }}
                        />
                      )}
                      <Typography
                        key={menu.title}
                        variant={selectedMenu.title === menu.title ? 'bold' : ''}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: selectedMenu.title === menu.title ? { xs: '20px', sm: '24px' } : { xs: '18px', sm: '20px' },
                          color: selectedMenu.title === menu.title ? '#284C88' : '#12274C',
                          lineHeight: '40px',
                          paddingY: '2px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',

                          '&:hover': {
                            color: '#284C88',
                          }
                        }}
                        onClick={() => setSelectedMenu(menu)}
                      >
                        {languages[menu.title]}
                      </Typography>
                    </Box>
                  )))}
                </Stack>
                <Box sx={{
                  display: { xs: 'none', md: 'block' },
                  background: '#3D5A8C',
                  width: { xs: '0px', sm: '1px' },
                  height: '450px',
                }}/>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#284C88',
                  borderRadius: '20px',
                  marginTop: { xs: '20px', sm: 0 },
                  padding: { xs: '24px 0px', md: '40px 0px'},
                  minHeight: { sm: '420px' },
                  maxWidth: { lg: '615px' }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: { lg: '560px' },
                    paddingX: { xs: '12px', sm: '18px' }
                  }}
                >
                  <Ul>
                  {selectedMenu.description.map(((content, idx) => (
                    <li key={'case-desc' + idx}>
                      <Typography 
                        sx={{
                          color: '#fff',
                          fontSize: { xs: '18px', sm: '20px' },
                          lineHeight: '30px'
                        }}
                      >
                        {languages[content]}
                      </Typography>
                    </li>
                  )))}
                  </Ul>
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
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  margin: { xs: '20px 0 0px', sm: '90px 0 0 150px' }
                }}>
                  <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                    <CustomButton
                      variant='contain'
                      color='#284C88'
                      bgColor='#fff'
                      sx={{
                        width: { xs: '150px', sm: '200px' },
                        border: '1px solid #fff',
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

const Ul = styled('ul')(({ theme }) => ({
  listStyleType: 'disc',
  margin: 0,

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '24px',

    'li': {
      color: theme.palette.primary.white
    },
  },
  [theme.breakpoints.up('sm')]: {
    'li': {
      color: theme.palette.primary.white
    },
  }
}))