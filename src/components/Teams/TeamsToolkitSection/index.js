import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import ColorText from "../../ColorText";
import SupText from "../../SupText";
import CustomButton from "../../Button";
import ImageBox from "../../Image";

import { HOME_TOOLBOX_MENU } from '../../../constants'
import ToolkitBanner from '../../../assets/images/home/image-team-discussion.png'
import ToolkitBannerMobile from '../../../assets/images/home/image-team-discussion-mobile.png'
import { useSelector } from "react-redux";

export default function TeamsToolkitSection({ languages, activeColor }) {
  const md = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const locale = useSelector(state => state.locale)

  // const MENU = sm ? HOME_TOOLBOX_MENU : [HOME_TOOLBOX_MENU[0], HOME_TOOLBOX_MENU[1], HOME_TOOLBOX_MENU[2]]
  const MENU = [HOME_TOOLBOX_MENU[0], HOME_TOOLBOX_MENU[1], HOME_TOOLBOX_MENU[2]]

  const [selectedMenu, setSelectedMenu] = useState(MENU[0])

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', xxl: '1920px' },
        margin: '0 auto',
        height: { xs: 'auto', sm: '943px' },
      }}
    >
      <ImageBox
        sx={{
          position: 'absolute',
          top: { xs: '225px', sm: '320px', lg: '230px' },
          bottom: { xs: '170px', sm: 0 }, 
          right: { xs: '0px', lg: '30px', xl: '139px' },
          maxWidth: { xs: '442px', lg: '761px' },
          maxHeight: { xs: '230px', md: '500px' },
          objectFit: 'contain',
          width: { lg: '50%' },
          zIndex: 0
        }}
        src={md ? ToolkitBannerMobile : ToolkitBanner} alt='toolkit-img'
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
          padding: { xs: '20px 16px 34px', sm: '30px' },
          minHeight: { sm: '900px' }
        }}
      >
        <Typography
          variant="semibold"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            color: '#12274C',
            mb: '10px'
          }}
        >
          {languages['Toolkit']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#12274C',
            marginBottom: '20px'
          }}
        >
          <strong>
            {`${languages["Discover your"]} `}
            <ColorText color={activeColor}>
              {languages["Efficiency OS"]}
              <SupText color={activeColor} size='25'>TM</SupText>
            </ColorText>
          </strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '25px', sm: '36px' },
            color: '#12274C',
            marginBottom: '20px'
          }}
        >
          <strong>{languages['Create your workspace and employ the available tools to enhance your and your teams efficiency.']}</strong>
        </Typography>
        <Box sx={{
          marginTop: '20px',
        }}>
          <Grid container columnSpacing={4} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '10px',
                  height: '60px',
                  overflowX: 'auto',
                  overflowY: 'hidden'
                }}
              >
                {MENU.map(menu => (
                  <Typography
                    key={menu.title}
                    variant="semibold"
                    sx={{
                      fontSize: { xs: '12px', sm: '16px' },
                      color: selectedMenu.title === menu.title ? '#F3F7FC' : '#12274C',
                      borderRadius: '8px',
                      background: selectedMenu.title === menu.title ? activeColor : 'transparent',
                      padding: { xs: '4px 7px', sm: '10px 20px' },
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                    onClick={() => setSelectedMenu(menu)}
                  >
                    {languages[menu.title]}
                  </Typography>
                ))}
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginTop: { xs: '20px', md: 'none' }
                }}
              >
                <ImageBox
                  sx={{
                    maxWidth: { md: '542px' },
                    height: { xs: '200px', md: 'auto' },
                    position: { xs: 'static', md: 'absolute' },
                    zIndex: 0,
                    bottom: '26px',
                    right: '100px',
                  }}
                  src={selectedMenu.image}
                  alt='toolkit-img' 
                />
              </Box>
              <Box maxWidth={{ sm: '506px' }} pt={'20px'}>
                <Typography
                  sx={{
                    fontSize: { xs: '16px', sm: '20px' },
                    fontWeight: '700',
                    color: '#12274C',
                    marginY: { xs: '10px', sm: '30px' }
                  }}
                >
                  <strong>{languages['Consolidate all to-do tasks for your projects and share them with your internal teams or suppliers and clients.']}</strong>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    color: '#12274C',
                    marginBottom: { xs: '8px', sm: '30px' }
                  }}
                >
                  {languages[selectedMenu.description]}
                </Typography>
                <Box sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                    <CustomButton
                      variant='contained'
                      bgColor={activeColor}
                      active
                      sx={{
                        width: { xs: '150px', sm: '200px' },
                        mt: { xs: '30px', sm: '80px' },
                        border: `1px solid ${activeColor}`
                      }}
                    >
                      {languages['Get Started']}
                    </CustomButton>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <ImageBox
                maxWidth='530px'
                src={selectedMenu.image} alt='toolkit-img' 
              /> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}