import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Grid } from "@mui/material";
import CustomButton from "../Button";
import ImageBox from "../Image";

import ImageBanner from '../../assets/images/home/image-request-demo-section.png'
import ImageBannerMobile from '../../assets/images/home/image-request-demo-mobile.png'

export default function RequestDemoSection() {
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)
  const navigate = useNavigate()

  return (
    <Box
      id='request-demo'
      sx={{
        width: '100%',
        background: '#172434'
      }}
    >
      <ImageBox
        sx={{
          display: { sm: 'none' },
          position: 'absolute',
          right: 0,
          bottom: 35,
          zIndex: 0,
          maxHeight: '200px'
        }}
        src={ImageBannerMobile}
        alt='request-demo-mobile'
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: { xs: '20px 16px 34px', sm: '30px 30px 20px 39px' }
        }}
      >
        <Typography
          variant="semibold"
          sx={{
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '10px'
          }}
        >
          {languages['Request a demo']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            marginBottom: { xs: '20px', md: '32px' }
          }}
        >
          <strong>{languages['Request a demo and see Coyaba in action']}</strong>
        </Typography>
        <Box sx={{
          marginY: { xs: '24px', md: '32px' },
        }}>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: { xs: '18px', md: '20px' },
                  lineHeight: '25px',
                  color: '#fff',
                }}
              >
                <strong>
                  {`${languages['Our team of Peacekeepers remains available to help you to make most of your Coyaba and all its functions.']}`}<br />
                </strong>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', sm: 'center' }, 
                  marginTop: { xs: '60px', md: '100px' }
                }}
              >
                <CustomButton
                  variant='contained'
                  bgColor='#284C88'
                  color='#fff'
                  sx={{
                    width: { xs: '150px', sm: '200px' },
                  }}
                  onClick={() => navigate(`${locale && `/${locale}`}/request-demo`)}
                >
                  {languages['Request a demo']}
                </CustomButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{
              display: 'flex',
              justifyContent: 'center',
              minHeight: '100px'
            }}>
              <ImageBox
                sx={{
                  maxWidth: '300px',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  marginTop: '40px',
                  display: { xs: 'none', sm: 'block' }
                }}
                src={ImageBanner}
                alt='request-demo-banner'
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}