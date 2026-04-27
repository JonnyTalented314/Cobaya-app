import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack, Container, Typography, Box, useMediaQuery, Grid } from "@mui/material";
import CustomButton from "../../Button";
import ImageBox from "../../Image";
import ColorText from "../../ColorText";
import SupText from "../../SupText";

import { HOME_TOOLBOX_MENU } from '../../../constants'

import ToolkitBanner from '../../../assets/images/home/image-team-discussion.png'
import ToolkitBannerMobile from '../../../assets/images/home/image-team-discussion-mobile.png'

export default function HomeToolkitSection() {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(HOME_TOOLBOX_MENU[0])

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
          display: { sm: 'none', lg: 'block' },
          position: 'absolute',
          top: { md: '210px' },
          bottom: { xs: '170px', sm: 0 }, 
          right: { xs: '0px', md: '20px', xl: '100px' },
          maxHeight: { xs: '250px', sm: '500px' },
          objectFit: 'contain',
          zIndex: 0
        }}
        src={xs ? ToolkitBannerMobile : ToolkitBanner} alt='toolkit-img' 
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
          padding: { xs: '20px 20px 34px', sm: '30px' },
        }}
      >
        <Typography
          variant='semibold'
          sx={{
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            mb: '10px'
          }}
        >
          {languages['Toolkit']}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            lineHeight: { sm: '52px' },
            marginBottom: '20px'
          }}
        >
          <strong>
            {`${languages['What’s Coyaba, your']} `}
            <ColorText color='#4285F4'>
              {languages['Efficiency']}
            </ColorText>
            {` OS`}
            <SupText size={24}>{`TM`}</SupText>
          </strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '25px', sm: '36px' },
            marginBottom: '20px'
          }}
        >
          <strong>{languages['Create your workspace and employ the available tools to enhance your and your teams efficiency.']}</strong>
        </Typography>
        <Grid container spacing={2} position='relative'>
          <Grid item xs={12} sm={4}>
            <Stack
              direction={{ xs: 'row', sm: 'column' }}
              spacing={1}
              sx={{
                marginTop: { xs: '0px', md: '120px' },
                overflowX: { xs: 'auto', sm: 'hidden' },
                overflowY: 'hidden'
              }}
            >
              {HOME_TOOLBOX_MENU.map(menu => (
                <Box
                  key={menu.title}
                  sx={{
                    width: { xs: 'auto', md: '250px' },
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    alignItems: 'center',
                    padding: { xs: '0px 7px', sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      background: selectedMenu.title === menu.title ? '#fff' : 'transparent',
                      width: { xs: '100%', sm: '7px' },
                      height: { xs: '5px', sm: '40px' },
                      borderRadius: '10px'
                    }}
                  />
                  <Typography
                    variant={selectedMenu.title === menu.title ? 'bold' : ''}
                    sx={{
                      fontSize: { xs: selectedMenu.title === menu.title ? '20px' : '18px', sm: selectedMenu.title === menu.title ? '24px' : '20px' },
                      color: selectedMenu.title === menu.title ? '#F3F7FC' : '#97A5C1',
                      padding: { xs: '7px 0px', sm: '10px 20px 10px 28px' },
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                    onClick={() => setSelectedMenu(menu)}
                  >
                    {languages[menu.title]}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{
              position: 'relative',
              marginTop: '10px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <ImageBox
                sx={{
                  maxWidth: '542px',
                  height: { xs: '200px', sm: 'auto' },
                  position: { sm: 'absolute' },
                  zIndex: 0,
                  top: '0px',
                }}
                src={selectedMenu.image}
                alt='toolkit-img' 
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%'
                }}
              >
                <Box
                  sx={{
                    minHeight: { xs: '300px', sm: '350px', md: '450px' },
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: 'center',
                    alignItems: selectedMenu.smallImg.align,
                  }}
                >
                  <ImageBox
                    sx={{
                      width: selectedMenu.smallImg.width,
                      height: selectedMenu.smallImg.height
                    }}
                    src={selectedMenu.smallImg.src}
                    alt='toolkit-img' 
                  />
                </Box>
                <Box 
                  sx={{
                    maxWidth: { sm: '650px' },
                    margin: { xs: '40px 0 0', sm: '50px 0 0 0px' },
                    textAlign: 'left'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '20px', sm: '20px' },
                      fontWeight: '700',
                      marginBottom: { xs: '8px', sm: '15px' }
                    }}
                  >
                    <strong>{languages[selectedMenu.title]}</strong>
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: { sm: '550px' },
                      fontSize: { xs: '16px', sm: '16px' },
                      marginBottom: '20px'
                    }}
                  >
                    {languages[selectedMenu.description]}
                  </Typography>
                  <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-end' }
                  }}>
                    <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                      <CustomButton
                        variant={'contained'}
                        bgColor={'#23365F'}
                        active
                        sx={{
                          width: { xs: '150px', sm: '200px' },
                          border: '1px solid #23365F',

                          '&:hover': {
                            background: '#4285F4',
                            border: '1px solid #4285F4'
                          }
                        }}
                      >
                        {languages['Get Started']}
                      </CustomButton>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}