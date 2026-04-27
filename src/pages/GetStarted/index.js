import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";

import ContactSalesForm from "../../components/ContactSalesForm";
import MeaningSection from "../../components/Meaning";

import ImageGetStarted from '../../assets/images/home/image-get-started.png'
import ImageBox from "../../components/Image";

export default function GetStartedPage () {
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
              marginTop: { xs: '20px', sm: '80px' },
            }}>
            <Typography
              color='primary.dark'
              variant="h5"
              sx={{
                marginLeft: { md: '100px' }
              }}
            >
              <strong>{`${languages['The tool that reunites them all, making your everyday worklife much simpler.']}`}</strong>
            </Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={5}>
              </Grid>
              <Grid item xs={12} md={9} lg={7}> 
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 10,
                    marginTop: { xs: '20px', md: '100px' }
                  }}
                >
                  <Box
                    sx={{
                      background: '#12274C',
                      borderRadius: '20px',
                      padding: { xs: '20px', md: '35px 41px 15px 30px' },
                    }}
                  >
                    <Box
                      sx={{
                        paddingLeft: { md: '12px' }
                      }}
                    >
                      <Typography
                        variant="semibold"
                        sx={{
                          fontSize: '30px',
                          lineHeight: '40px',
                        }}
                      >
                        {languages['Talk with our Sales Peacekeepers']}
                      </Typography>
                      <Box
                        sx={{
                          marginTop: { xs: '20px', sm: '42px' }
                        }}
                      >
                        <ContactSalesForm languages={languages} color='white' />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginTop: '37px',
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
                <ImageBox 
                  src={ImageGetStarted}
                  sx={{
                    position: { xs: 'static', md: 'absolute' },
                    top: { xs: '0px', md: '150px'},
                    left: { xs: '40px', xl: '287px' },
                    maxWidth: { xs: '100%', md: '642px'},
                    marginTop: { xs: '20px', md: 0 },
                    zIndex: 0
                  }}
                  alt='image-get-started'
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
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
  background: '#fff';
`;