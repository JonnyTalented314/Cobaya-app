import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ImageBox from "../../Image";
import CustomButton from "../../Button";

import ImageTeamSmile from '../../../assets/images/home/image-team-smile.png'
import ImagePhone from '../../../assets/images/home/image-phone.png'

export default function TeamsGoalsSection({ languages, team }) {
  const locale = useSelector(state => state.locale)
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', xxl: '1920px' },
        margin: '0 auto',
        minHeight: { md: '900px' },
      }}
    >
      <ImageBox
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          top: '240px',
          right: { xs: '30px',  xl: '140px' },
          maxWidth: '747px',
          width: '39%',
          objectFit: 'contain',
          zIndex: 0
        }}
        src={ImageTeamSmile} alt='toolkit-img' 
      />
      <Container sx={{
        position: 'relative',
        zIndex: 10,
        margin: '0 auto',
        padding: { xs: '20px 20px 34px', sm: '68px 0px 53px' }
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box textAlign={'center'}>
            <Typography
              variant="h5"
            >
              {`${languages['Meet you']} `}
              <Typography
                color={team?.color}
                variant="title"
              >
                {languages[team?.title]}
              </Typography>
              {` ${languages['goals']} `}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: '20px', sm: '77px' },
            }}
          >
            <Grid
              container
              columnSpacing={'80px'}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    paddingX: { sm: '100px' }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 20 },
                      lineHeight: '25px'
                    }}
                  >
                    <strong>{languages['Some additional features that make your daily work easy and keep all your partners posted and in the same place.']}</strong>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 18 },
                      lineHeight: '25px',
                      mt: { xs: '10px', sm: '40px' }
                    }}
                  >
                    {languages[team?.description]}
                  </Typography>
                </Box>
                <Box sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                    <CustomButton
                      variant={'contained'}
                      bgColor={team?.color}
                      active
                      sx={{
                        width: { xs: '150px', sm: '200px' },
                        mt: { xs: '20px', sm: '100px' },
                        border: `1px solid ${team?.color}`
                      }}
                    >
                      {languages['Get Started']}
                    </CustomButton>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}
                sx={{
                  display: { xs: 'none', md: 'flex' },
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
        </Box>
      </Container>
    </Box>
  );
}