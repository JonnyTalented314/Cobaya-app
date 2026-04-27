import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Container, Typography, Box, Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButton from "../../Button";
import ColorText from "../../ColorText";
import ImageBox from "../../Image";

import { HOME_TEAMS_MENU_FOR_ALL, HOME_CASE_STUDIES_FOR_ALL } from '../../../constants'
import ImageTeamSmile from '../../../assets/images/home/image-team-smile.png'
import ImagePhone from '../../../assets/images/home/image-phone.png'
import { setHeaderTheme } from "../../../store";

export default function HomeForEveryOneSection() {
  const dispatch = useDispatch()
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedSubMenu, setSelectedSubMenu] = useState(HOME_TEAMS_MENU_FOR_ALL[0])

  const handleClickGetStarted = () => {
    dispatch(setHeaderTheme('dark'))
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', xl: '1600px' },
        margin: '0 auto'
      }}
    >
      <ImageBox
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          top: '270px',
          right: { xs: '20px',  xl: '145px' },
          maxWidth: '380px',
          width: '28%',
          zIndex: 0
        }}
        src={ImageTeamSmile} alt='toolkit-img' 
      />
      <Container sx={{
        position: 'relative',
        zIndex: 10,
        padding: { xs: '20px 20px 34px', sm: '30px 30px' }
      }}>
        <Typography
          variant="semibold"
          sx={{
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            color: '#fff',
            mb: '10px'
          }}
        >
          {languages['Coyaba for all']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            marginBottom: '20px'
          }}
        >
          <strong>{`${languages['Tell us who you’re, and uncover your workspace']}`}</strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '25px', sm: '35px' } ,
            color: '#fff',
            marginBottom: '20px'
          }}
        >
          <strong>{languages['Efficiency OS is built to meet the needs of all companies independently of industry and size, and all teams across a company.']}</strong>
        </Typography>
        <Box sx={{
          marginTop: { xs: '20px', sm: '50px' },
        }}>
          <Grid container columnSpacing={{ xs: 3, md: '47px' }}>
            <Grid item xs={12} sm={4}>
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
                  {HOME_TEAMS_MENU_FOR_ALL.map(subMenu => (
                    <Box
                      key={subMenu.title}
                      sx={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {selectedSubMenu.title === subMenu.title && (
                        <ArrowForwardIcon
                          sx={{
                            display: 'inherit',
                            marginRight: '8px',
                            transition: 'margin 0.1s 0.1s',
                            color: subMenu.color,
                            fontSize: '20px'
                          }}
                        />
                      )}
                      <Typography
                        variant={selectedSubMenu.title === subMenu.title ? 'bold' : ''}
                        key={subMenu.title}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: selectedSubMenu.title === subMenu.title ? { xs: '20px', sm: '24px' } : { xs: '18px', sm: '20px' },
                          color: selectedSubMenu.title === subMenu.title ? subMenu.color : '#fff',
                          paddingY: '8px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',

                          '&:hover': {
                            color: subMenu.color,
                          }
                        }}
                        onClick={() => setSelectedSubMenu(subMenu)}
                      >
                        {languages[subMenu.title]}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Box sx={{
                  display: { xs: 'none', sm: 'block' },
                  background: '#3D5A8C',
                  width: '1px',
                  height: '450px',
                }}/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box sx={{
                marginTop: {xs: '50px', sm: 0 },
                padding: { sm: '0px 20px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Grid container columnSpacing={{ xs: 1, md: 3 }} >
                  <Grid item xs={12} md={7}>
                    <Box
                      sx={{
                        pr: '10px',
                        background: '#12274C',
                      }}
                    >
                      <Typography
                        variant='bold'
                        sx={{
                          fontSize: { xs: '20px', sm: '24px' },
                          color: '#fff',
                          lineHeight: '30px'
                        }}
                      >
                        {`${languages['Meet your']}`}
                        <ColorText color={selectedSubMenu.color}>{` ${languages[selectedSubMenu.title]} `}</ColorText>
                        {languages['goals']}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '18px', sm: '20px' },
                          color: '#fff',
                          lineHeight: '24px',
                          marginTop: '20px'
                        }}
                      >
                        {languages[selectedSubMenu.description]}
                      </Typography>
                      <Box
                        sx={{
                          mt: { xs: '40px', sm: '60px' }
                        }}
                      >
                        <Typography
                          variant='bold'
                          sx={{
                            fontSize: { xs: '20px', sm: '24px' },
                            color: '#fff',
                            lineHeight: '22px',
                          }}
                        >
                          {languages['Case studies']}
                        </Typography>
                        <Box
                          sx={{
                            margin: '20px 0 0 20px'
                          }}
                        >
                          {HOME_CASE_STUDIES_FOR_ALL.map((caseItem => (
                            <Typography
                              key={caseItem.title}
                              variant='semibold'
                              sx={{
                                fontSize: { xs: '16px', sm: '16px' },
                                color: selectedSubMenu.color,
                                lineHeight: '40px',
                              }}
                            >
                              {languages[caseItem.title]}
                            </Typography>
                          )))}
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      mt: '45px',
                    }}>
                      <Link to={`${locale && `/${locale}`}${selectedSubMenu.href}`}>
                        <CustomButton
                          variant='outlined'
                          bgColor={selectedSubMenu.color}
                          sx={{
                            background: '#fff',
                            width: { xs: '150px', sm: '200px' },
                            border: `1px solid ${selectedSubMenu.color}`,
                          }}
                          onClick={handleClickGetStarted}
                        >
                          {languages['Get Started']}
                        </CustomButton>
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      marginTop: '140px'
                    }}
                  >
                    <ImageBox
                      maxWidth='200px'
                      src={ImagePhone}
                      alt='image-phone'
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}