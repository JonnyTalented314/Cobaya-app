import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";

import ContactSalesForm from "../../components/ContactSalesForm";
import MeaningSection from "../../components/Meaning";

import ImageRequestDemo from '../../assets/images/home/image-request-demo-page.png'
import ImageBox from "../../components/Image";

export default function RequestDemoPage () {
  const languages = useSelector(state => state.languages)

  return (
    <PageWrapper>
      <Box sx={{
        position: 'relative',
        width: { xs: '100%', xxl: '1920px' },
        margin: '0 auto'
      }}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: '20px',
            }}>
            <Typography
              color='primary.dark'
              variant='h5'
              sx={{
                marginLeft: { md: '100px' }
              }}
            >
              <strong>{`${languages['See Coyaba in action']}`}</strong>
            </Typography>
            <Typography
              color='primary.dark'
              variant='h6'
              sx={{
                marginLeft: { md: '100px' }
              }}
            >
              <strong>{`${languages['Our team of Peacekeepers remains available to help you to make most of your Coyaba and all its functions.']}`}</strong>
            </Typography>
            <Box
              sx={{
                background: '#12274C',
                borderRadius: '20px',
                padding: { xs: '20px', md: '35px 41px 15px 30px' },
                marginTop: { xs: '20px', md: '49px' },
              }}
            >
              <Typography
                variant='h6'
              >
                {languages['Talk with our Sales Peacekeepers']}
              </Typography>
              <Grid container columnSpacing={'20px'}>
                <Grid item xs={12} md={7}> 
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 10,
                      padding: { md: '0 0px 20px 12px' },
                      background: '#12274C',
                      marginTop: { xs: '20px', sm: '42px' },
                    }}
                  >
                    <ContactSalesForm languages={languages} color='white' />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                </Grid>
              </Grid>
              <Box
                sx={{
                  paddingTop: '17px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {languages['Form powered by Coyaba Features']}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '20px', md: 0 }
        }}
      >
        <ImageBox 
          src={ImageRequestDemo}
          sx={{
            position: { xs: 'static', md: 'absolute' },
            top: { sm: '290px'},
            right: { xs: '20px', xl: '80px', xxl: '100px' },
            maxWidth: { md: '750px' },
            width: { xs: '100%', md: '40%' },
            zIndex: 0,
          }}
          alt='image-request-demo-page'
        />
      </Box>
      <Box
        sx={{
          width: '100%'
        }}
      >
        <MeaningSection />
      </Box>
    </PageWrapper>
  )
}

const PageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;