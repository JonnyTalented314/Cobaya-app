import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../../Button";
import ImageBox from "../../Image";
import ColorText from "../../ColorText";

import { CASE_STUDIES_MENU } from '../../../constants'
import SolutionCardImage from '../../../assets/images/solutions/solution-image.svg'

export default function HomeCaseStudiesSection() {
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(CASE_STUDIES_MENU[0])

  return (
    <Container sx={{
      padding: { xs: '20px 20px 34px', sm: '10px 30px 30px' }
    }}>
      <Typography
        variant="semibold"
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontSize: '12px',
          lineHeight: '36px',
          textTransform: 'uppercase',
          color: '#12274C',
          marginBottom: '10px'
        }}
      >
        {languages['Case Studies']}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          width: { lg: '90%' },
          color: '#12274C',
          marginBottom: { xs: '50px', sm: '15px' }
        }}
      >
        <strong>
          <ColorText color={'#D65140'}>{`${languages['Customizable to meet']} `}</ColorText>
          {`${languages['your needs whatever your organization and goals']}`}
        </strong>
      </Typography>
      <Typography
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '25px', sm: '52px' } ,
          color: '#12274C',
          marginBottom: '26px'
        }}
      >
        <strong>{languages['Simplify your processes and increase your collective efficiency.']}</strong>
      </Typography>
      <Box sx={{
        marginBottom: { xs: 0 }
      }}>
        <Grid container columnSpacing={{ xs: 3, md: '70px'}}>
          <Grid item xs={12} sm={4}>
            <Box display='flex'>
              <Box sx={{
                width: '100%',
                pl: { xs: '12px', sm: '28px' }
              }}>
                {CASE_STUDIES_MENU.map(menu => (
                  <Typography
                    key={menu.title}
                    variant='semibold'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '16px',
                      color: selectedMenu.title === menu.title ? '#D65140' : '#12274C',
                      lineHeight: '40px',
                      paddingY: '2px',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#D65140',
                      }
                    }}
                    onClick={() => setSelectedMenu(menu)}
                  >
                    {languages[menu.title]}
                  </Typography>
                ))}
              </Box>
              <Box sx={{
                background: '#93A1BD',
                width: { xs: '0px', sm: '1px' },
                height: '320px',
                mt: '40px'
              }}/>
            </Box>
            <Box sx={{
              width: '100%',
              display:  { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
              mt: '24px'
            }}>
              <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                <CustomButton
                  variant='contained'
                  bgColor='#DD5C70'
                  sx={{
                    width: '150px',
                    mt: '70px',
                    border: '1px solid #DD5C70',
                  }}
                >
                  {languages['Get Started']}
                </CustomButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} display={{ xs: 'none', sm: 'block' }}>
            <Box sx={{
              height: '350px',
              overflowY: 'auto',
              background: 'rgba(217, 217, 217, 0.13)',
              padding: '40px 20px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Grid container columnSpacing={'20px'}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      maxWidth: { sm: '560px' },
                    }}
                  >
                    <Ul>
                    {selectedMenu.description.map(((content, idx) => (
                      <li key={'case-desc' + idx}>
                        <Typography 
                          sx={{
                            color: '#12274C',
                            fontSize: { xs: '13px', sm: '18px' },
                            lineHeight: '22px'
                          }}
                        >
                          {languages[content]}
                        </Typography>
                      </li>
                    )))}
                    </Ul>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} display='flex' justifyContent={'center'}>
                  <ImageBox
                    src={SolutionCardImage} 
                    sx={{ 
                      width: { xs: '400px', md: '100%' },
                      marginTop: { xs: '30px', md: 0 }
                    }} 
                    alt='solution-card-img'
                  />
                </Grid>
              </Grid>
              <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
              }}>
                <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                  <CustomButton
                    variant='outlined'
                    bgColor='#DD5C70'
                    sx={{
                      width: '200px',
                      border: '1px solid #DD5C70',
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
  )
}

const Ul = styled('ul')(({ theme }) => ({
  listStyleType: 'disc',
  margin: 0,

  'li': {
    color: theme.palette.primary.dark
  },
}))